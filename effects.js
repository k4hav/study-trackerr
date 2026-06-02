
/* ══════════════════════════════════════════════════════
   PREMIUM EFFECTS: Cursor · 3D BG · Hero · Tilt · Glow
   ══════════════════════════════════════════════════════ */
(function(){

/* ══ 3D BACKGROUND — slow drifting geometric constellation ══ */
(function(){
  var cv = document.getElementById('bg-3d');
  if(!cv||!THREE) return;

  var rend = new THREE.WebGLRenderer({canvas:cv,antialias:true,alpha:false});
  rend.setPixelRatio(Math.min(devicePixelRatio,1.5));
  rend.setClearColor(0x04030a,1);
  rend.setSize(innerWidth,innerHeight);

  var scene  = new THREE.Scene();
  scene.fog  = new THREE.FogExp2(0x04030a, 0.028);
  var camera = new THREE.PerspectiveCamera(65, innerWidth/innerHeight, .1, 120);
  camera.position.set(0,0,20);

  scene.add(new THREE.AmbientLight(0x100820, 2));
  var gl1=new THREE.PointLight(0xc9a84c,3,50); gl1.position.set(-10,8,10); scene.add(gl1);
  var gl2=new THREE.PointLight(0x7c3aed,2,45); gl2.position.set(12,-6,8);  scene.add(gl2);

  /* Constellation of thin wireframe polyhedra — very subtle */
  var shapes=[];
  var configs=[
    {g:new THREE.IcosahedronGeometry(1.8,0),     x:-9,  y:4,   z:-8,  col:0xc9a84c, op:.22},
    {g:new THREE.OctahedronGeometry(1.4,0),       x:10,  y:-3,  z:-6,  col:0x7c3aed, op:.18},
    {g:new THREE.DodecahedronGeometry(1.6,0),     x:-6,  y:-5,  z:-10, col:0xc9a84c, op:.16},
    {g:new THREE.IcosahedronGeometry(1.0,0),      x:7,   y:6,   z:-5,  col:0x8b5cf6, op:.20},
    {g:new THREE.OctahedronGeometry(0.9,0),       x:-2,  y:7,   z:-4,  col:0xc9a84c, op:.15},
    {g:new THREE.TetrahedronGeometry(1.2,0),      x:4,   y:-7,  z:-7,  col:0x06b6d4, op:.18},
  ];
  configs.forEach(function(c){
    var edges = new THREE.LineSegments(
      new THREE.EdgesGeometry(c.g),
      new THREE.LineBasicMaterial({color:c.col,transparent:true,opacity:c.op})
    );
    edges.position.set(c.x,c.y,c.z);
    edges.rotation.set(Math.random()*6.28,Math.random()*6.28,Math.random()*6.28);
    scene.add(edges);
    shapes.push({m:edges,
      rx:(Math.random()-.5)*.004, ry:(Math.random()-.5)*.006,
      baseY:c.y, floatA:.5+Math.random()*.8, floatS:.25+Math.random()*.3, floatPh:Math.random()*6.28});
  });

  /* Star field */
  var sBuf=new Float32Array(1200*3);
  for(var i=0;i<1200;i++){sBuf[i*3]=(Math.random()-.5)*140;sBuf[i*3+1]=(Math.random()-.5)*90;sBuf[i*3+2]=(Math.random()-.5)*60-20;}
  var sGeo=new THREE.BufferGeometry(); sGeo.setAttribute('position',new THREE.BufferAttribute(sBuf,3));
  scene.add(new THREE.Points(sGeo,new THREE.PointsMaterial({color:0xfff8e8,size:.05,transparent:true,opacity:.55,sizeAttenuation:true})));

  var mmx=0,mmy=0,tmx=0,tmy=0;
  document.addEventListener('mousemove',function(e){mmx=(e.clientX/innerWidth-.5)*2;mmy=(e.clientY/innerHeight-.5)*2;});
  window.addEventListener('resize',function(){
    rend.setSize(innerWidth,innerHeight);
    camera.aspect=innerWidth/innerHeight; camera.updateProjectionMatrix();
  });

  var clock=new THREE.Clock();
  (function loop(){
    requestAnimationFrame(loop);
    var t=clock.getElapsedTime();
    tmx+=(mmx-tmx)*.025; tmy+=(mmy-tmy)*.025;
    camera.position.x=tmx*2.5; camera.position.y=-tmy*1.5;
    camera.lookAt(0,0,0);
    shapes.forEach(function(s){
      s.m.rotation.x+=s.rx; s.m.rotation.y+=s.ry;
      s.m.position.y=s.baseY+Math.sin(t*s.floatS+s.floatPh)*s.floatA;
    });
    gl1.intensity=3+Math.sin(t*.5)*.8;
    gl2.intensity=2+Math.sin(t*.7+1.2)*.6;
    rend.render(scene,camera);
  })();
})();


/* ══ HERO 3D — Liquid Chrome Sphere ══ */
(function(){
  var hc = document.getElementById('hero-canvas');
  if(!hc || !THREE) return;

  var hr = new THREE.WebGLRenderer({canvas:hc, antialias:true, alpha:false});
  hr.setPixelRatio(Math.min(devicePixelRatio, 2));
  hr.setClearColor(0x04030a, 1);
  hr.toneMapping = THREE.ACESFilmicToneMapping;
  hr.toneMappingExposure = 1.4;

  var hs   = new THREE.Scene();
  hs.fog   = new THREE.FogExp2(0x04030a, 0.042);
  var hcam = new THREE.PerspectiveCamera(52, 1, 0.1, 60);
  hcam.position.set(0, 0, 9);

  /* ── ENVIRONMENT — fake IBL via lights ── */
  hs.add(new THREE.AmbientLight(0x050210, 1.5));
  var lights = [
    {col:0xc9a84c, intensity:18, pos:[-5, 4, 6]},
    {col:0x6d28d9, intensity:12, pos:[6, -3, 5]},
    {col:0x06b6d4, intensity:8,  pos:[0, 6, -4]},
    {col:0xf9a8d4, intensity:6,  pos:[4, 4, 3]},
  ];
  var ptLights = lights.map(function(l){
    var pl = new THREE.PointLight(l.col, l.intensity, 30);
    pl.position.set(l.pos[0], l.pos[1], l.pos[2]);
    hs.add(pl);
    return pl;
  });

  /* ══ LIQUID CHROME SPHERE ══
     High-resolution icosphere whose vertices we displace
     each frame using 4 overlapping sine waves = looks molten */
  var SUBDIV   = 5;   // icosphere detail
  var baseGeo  = new THREE.IcosahedronGeometry(2.4, SUBDIV);
  var vCount   = baseGeo.attributes.position.count;

  // Store original positions
  var origPos  = new Float32Array(baseGeo.attributes.position.array);

  var sphereMat = new THREE.MeshStandardMaterial({
    color:     0xc0a84c,
    emissive:  0x1a0e00,
    emissiveIntensity: 0.3,
    metalness: 1.0,
    roughness: 0.05,
    envMapIntensity: 1.0,
  });
  var sphere = new THREE.Mesh(baseGeo, sphereMat);
  hs.add(sphere);

  /* Outer wireframe — very faint */
  var wireGeo = new THREE.IcosahedronGeometry(2.42, 2);
  var wire = new THREE.LineSegments(
    new THREE.EdgesGeometry(wireGeo),
    new THREE.LineBasicMaterial({color:0xf0d080, transparent:true, opacity:0.07})
  );
  hs.add(wire);

  /* ══ ORBITING LIGHT STREAKS ══
     3 thin bright tubes that orbit the sphere on different planes */
  var streaks = [];
  var streakCols = [0xc9a84c, 0x8b5cf6, 0x06b6d4];
  var streakPlanes = [
    {rx:0,    ry:0,    rz:0},
    {rx:1.1,  ry:0.4,  rz:0},
    {rx:0.5,  ry:0.8,  rz:1.2},
  ];
  streakCols.forEach(function(col, i){
    var pts = [];
    for(var j=0; j<120; j++){
      var a = (j/119)*Math.PI*2;
      pts.push(new THREE.Vector3(Math.cos(a)*3.1, 0, Math.sin(a)*3.1));
    }
    var sGeo = new THREE.BufferGeometry().setFromPoints(pts);
    var streak = new THREE.Line(sGeo, new THREE.LineBasicMaterial({
      color:col, transparent:true, opacity:0.4
    }));
    streak.rotation.set(streakPlanes[i].rx, streakPlanes[i].ry, streakPlanes[i].rz);
    hs.add(streak);
    streaks.push({line:streak, speed:0.28+i*0.12, baseRot:streakPlanes[i]});
  });

  /* ══ FLOATING GOLD DUST PARTICLES ══ */
  var dustCount = 500;
  var dustBuf   = new Float32Array(dustCount*3);
  var dustVel   = new Float32Array(dustCount*3);
  for(var i=0; i<dustCount; i++){
    dustBuf[i*3]   = (Math.random()-0.5)*16;
    dustBuf[i*3+1] = (Math.random()-0.5)*10;
    dustBuf[i*3+2] = (Math.random()-0.5)*10 - 1;
    dustVel[i*3]   = (Math.random()-0.5)*0.004;
    dustVel[i*3+1] = (Math.random()-0.5)*0.004;
    dustVel[i*3+2] = (Math.random()-0.5)*0.003;
  }
  var dustGeo = new THREE.BufferGeometry();
  dustGeo.setAttribute('position', new THREE.BufferAttribute(dustBuf, 3));
  hs.add(new THREE.Points(dustGeo, new THREE.PointsMaterial({
    color:0xf0d080, size:0.055, transparent:true, opacity:0.45, sizeAttenuation:true
  })));

  /* ══ NEON GRID FLOOR ══ */
  var grid = new THREE.GridHelper(26, 28, 0xc9a84c, 0x0c0701);
  grid.position.y = -3.6;
  grid.material.transparent = true;
  grid.material.opacity = 0.25;
  hs.add(grid);

  /* Noise helper — smooth pseudo-random via sine harmonics */
  function noise3(x, y, z, t){
    return  Math.sin(x*1.2 + t*0.7)  * Math.cos(y*1.4 + t*0.5) * 0.5
          + Math.sin(y*1.6 + t*0.9)  * Math.cos(z*1.1 + t*0.4) * 0.4
          + Math.sin(z*1.3 + t*0.6)  * Math.cos(x*1.5 + t*0.8) * 0.35
          + Math.sin((x+y)*0.9 + t)  * 0.25;
  }

  /* Mouse */
  var hmx=0, hmy=0, htx=0, hty=0;
  document.addEventListener('mousemove',function(e){
    hmx=(e.clientX/innerWidth -.5)*2;
    hmy=(e.clientY/innerHeight-.5)*2;
  });

  function heroResize(){
    var wrap=hc.parentElement, w=wrap.offsetWidth, h=wrap.offsetHeight;
    hr.setSize(w,h,false); hcam.aspect=w/h; hcam.updateProjectionMatrix();
  }
  window.addEventListener('resize',heroResize); heroResize();

  var hclk = new THREE.Clock();

  (function hloop(){
    requestAnimationFrame(hloop);
    var t = hclk.getElapsedTime();

    /* Camera parallax */
    htx += (hmx-htx)*0.04; hty += (hmy-hty)*0.04;
    hcam.position.x =  htx*2.0;
    hcam.position.y = -hty*1.2;
    hcam.lookAt(0,0,0);

    /* ── DISPLACE SPHERE VERTICES (liquid metal effect) ── */
    var posArr = baseGeo.attributes.position.array;
    for(var i=0; i<vCount; i++){
      var ox = origPos[i*3], oy = origPos[i*3+1], oz = origPos[i*3+2];
      /* Normalized direction from center */
      var len = Math.sqrt(ox*ox+oy*oy+oz*oz);
      var nx=ox/len, ny=oy/len, nz=oz/len;
      /* Displacement amount from noise */
      var disp = noise3(ox, oy, oz, t) * 0.28;
      posArr[i*3]   = ox + nx*disp;
      posArr[i*3+1] = oy + ny*disp;
      posArr[i*3+2] = oz + nz*disp;
    }
    baseGeo.attributes.position.needsUpdate = true;
    baseGeo.computeVertexNormals();

    /* Slow Y-rotation + slight tilt sway */
    sphere.rotation.y  = t*0.15;
    sphere.rotation.x  = Math.sin(t*0.22)*0.12;
    wire.rotation.y    = t*0.08;
    wire.rotation.x    = t*0.05;

    /* Orbit the ring streaks */
    streaks.forEach(function(s, i){
      s.line.rotation.y = t*s.speed + i*1.1;
      s.line.rotation.x = s.baseRot.rx + Math.sin(t*0.3+i)*0.15;
    });

    /* Animate dust particles */
    var dp = dustGeo.attributes.position.array;
    for(var i=0; i<dustCount; i++){
      dp[i*3]   += dustVel[i*3];
      dp[i*3+1] += dustVel[i*3+1];
      dp[i*3+2] += dustVel[i*3+2];
      if(Math.abs(dp[i*3])>9)   dustVel[i*3]   *= -1;
      if(Math.abs(dp[i*3+1])>6) dustVel[i*3+1] *= -1;
      if(Math.abs(dp[i*3+2])>6) dustVel[i*3+2] *= -1;
    }
    dustGeo.attributes.position.needsUpdate = true;

    /* Pulse lights */
    ptLights.forEach(function(l,i){
      l.intensity = lights[i].intensity + Math.sin(t*(0.5+i*0.15)+i)*lights[i].intensity*0.25;
    });

    grid.position.z = (t*0.45)%1;

    hr.render(hs,hcam);
  })();
})();

/* ══ 3D CARD TILT ══ */
(function(){
  function attach(el){
    if(el.dataset.t3d) return; el.dataset.t3d='1';
    if(getComputedStyle(el).position==='static') el.style.position='relative';
    el.addEventListener('mousemove',function(e){
      var r=el.getBoundingClientRect();
      var dx=(e.clientX-r.left-r.width/2)/(r.width/2);
      var dy=(e.clientY-r.top-r.height/2)/(r.height/2);
      el.style.transition='box-shadow .15s ease';
      el.style.transform='perspective(900px) rotateX('+(-dy*9)+'deg) rotateY('+(dx*9)+'deg) scale(1.03) translateZ(6px)';
      el.style.background='radial-gradient(circle at '+(50+dx*20)+'% '+(50+dy*20)+'%, rgba(201,168,76,0.07) 0%, rgba(255,255,255,.01) 60%, transparent 100%)';
    });
    el.addEventListener('mouseleave',function(){
      el.style.transition='transform .55s cubic-bezier(.23,1,.32,1), background .45s, box-shadow .45s';
      el.style.transform='perspective(900px) rotateX(0) rotateY(0) scale(1)';
      el.style.background='';
    });
  }
  function init(){ document.querySelectorAll('.subject-card,.skill-card').forEach(attach); }
  var _sp=window.showPage;
  if(typeof _sp==='function') window.showPage=function(){_sp.apply(this,arguments);setTimeout(init,200);};
  new MutationObserver(init).observe(document.body,{childList:true,subtree:true});
  document.readyState==='loading'?document.addEventListener('DOMContentLoaded',init):init();
})();


/* ══ MOUSE-FOLLOWING BORDER GLOW ══ */
(function(){
  var cards=[],mx=-9999,my=-9999;
  document.addEventListener('pointermove',function(e){mx=e.clientX;my=e.clientY;},{passive:true});

  function initCard(el){
    if(el.dataset.bg) return; el.dataset.bg='1';
    if(getComputedStyle(el).position==='static') el.style.position='relative';
    var cv=document.createElement('canvas');
    cv.style.cssText='position:absolute;top:-2px;left:-2px;width:calc(100% + 4px);height:calc(100% + 4px);pointer-events:none;z-index:100;border-radius:inherit;';
    el.appendChild(cv);
    cards.push({el:el,cv:cv,angle:0,tA:0,on:false});
  }

  function draw(cv,el,ang){
    var dpr=Math.min(devicePixelRatio||1,2);
    var rc=el.getBoundingClientRect();
    var cw=Math.round((rc.width+4)*dpr), ch=Math.round((rc.height+4)*dpr);
    if(cv.width!==cw)cv.width=cw; if(cv.height!==ch)cv.height=ch;
    var ctx=cv.getContext('2d'); ctx.clearRect(0,0,cw,ch);
    var W=cw,H=ch,rad=16*dpr,pts=[],s=2;
    for(var x=rad;x<=W-rad;x+=s)pts.push([x,0]);
    for(var a=1.5*Math.PI;a<=2*Math.PI;a+=.05)pts.push([W-rad+Math.cos(a)*rad,rad+Math.sin(a)*rad]);
    for(var y=rad;y<=H-rad;y+=s)pts.push([W,y]);
    for(var a=0;a<=.5*Math.PI;a+=.05)pts.push([W-rad+Math.cos(a)*rad,H-rad+Math.sin(a)*rad]);
    for(var x=W-rad;x>=rad;x-=s)pts.push([x,H]);
    for(var a=.5*Math.PI;a<=Math.PI;a+=.05)pts.push([rad+Math.cos(a)*rad,H-rad+Math.sin(a)*rad]);
    for(var y=H-rad;y>=rad;y-=s)pts.push([0,y]);
    for(var a=Math.PI;a<=1.5*Math.PI;a+=.05)pts.push([rad+Math.cos(a)*rad,rad+Math.sin(a)*rad]);
    if(!pts.length)return;
    var cx2=W/2,cy2=H/2,rd=(ang-90)*Math.PI/180,ddx=Math.cos(rd),ddy=Math.sin(rd),best=0,bestD=-Infinity;
    for(var i=0;i<pts.length;i++){var nx=pts[i][0]-cx2,ny=pts[i][1]-cy2,l=Math.sqrt(nx*nx+ny*ny)||1;var dd=nx/l*ddx+ny/l*ddy;if(dd>bestD){bestD=dd;best=i;}}
    var arcN=Math.floor(pts.length*.24),half=Math.floor(arcN/2);
    /* Gold color ramp instead of rainbow */
    var C=[[201,168,76,0],[255,220,100,1],[201,168,76,1],[255,240,140,1],[201,168,76,0]];
    ctx.save(); ctx.lineWidth=2*dpr; ctx.lineCap='round';
    for(var i=0;i<arcN-1;i++){
      var i0=((best-half+i)%pts.length+pts.length)%pts.length;
      var i1=((best-half+i+1)%pts.length+pts.length)%pts.length;
      var t=i/(arcN-1),ci=t*(C.length-1),ci0=Math.floor(ci),ci1b=Math.min(ci0+1,C.length-1),ct=ci-ci0;
      var c0=C[ci0],c1=C[ci1b];
      var rr=c0[0]+(c1[0]-c0[0])*ct, gg=c0[1]+(c1[1]-c0[1])*ct, bb=c0[2]+(c1[2]-c0[2])*ct, aa=c0[3]+(c1[3]-c0[3])*ct;
      if(aa<.01) continue;
      ctx.beginPath(); ctx.moveTo(pts[i0][0],pts[i0][1]); ctx.lineTo(pts[i1][0],pts[i1][1]);
      ctx.strokeStyle='rgba('+Math.round(rr)+','+Math.round(gg)+','+Math.round(bb)+','+aa.toFixed(2)+')';
      ctx.shadowColor='rgba(201,168,76,.9)'; ctx.shadowBlur=10*dpr; ctx.stroke();
    }
    ctx.restore();
    var cp=pts[best];
    if(cp){ctx.save();ctx.beginPath();ctx.arc(cp[0],cp[1],3*dpr,0,6.28);ctx.fillStyle='rgba(255,240,160,.98)';ctx.shadowColor='rgba(255,220,100,1)';ctx.shadowBlur=16*dpr;ctx.fill();ctx.restore();}
  }

  (function loop(){
    requestAnimationFrame(loop);
    cards.forEach(function(c){
      var rc=c.el.getBoundingClientRect(); if(rc.width===0)return;
      var cx3=rc.left+rc.width/2,cy3=rc.top+rc.height/2;
      var near=mx>rc.left-80&&mx<rc.right+80&&my>rc.top-80&&my<rc.bottom+80;
      if(near){
        var ta=Math.atan2(my-cy3,mx-cx3)*180/Math.PI+90;
        var diff=((ta-c.tA+180)%360)-180; c.tA+=diff; c.angle+=(c.tA-c.angle)*.12;
        draw(c.cv,c.el,c.angle); c.on=true;
      } else if(c.on){c.cv.getContext('2d').clearRect(0,0,c.cv.width,c.cv.height);c.on=false;}
    });
  })();

  function initAll(){ document.querySelectorAll('.glass,.glass-strong,.subject-card,.skill-card,.tab-button,.back-btn,.reset-btn').forEach(initCard); }
  var _sp2=window.showPage;
  if(typeof _sp2==='function') window.showPage=function(){_sp2.apply(this,arguments);setTimeout(initAll,200);};
  new MutationObserver(initAll).observe(document.body,{childList:true,subtree:true});
  document.readyState==='loading'?document.addEventListener('DOMContentLoaded',initAll):initAll();
})();


/* ══ FLOATING PARTICLES overlay ══ */
(function(){
  var pc=document.getElementById('particle-canvas');
  if(!pc) return;
  var ctx=pc.getContext('2d'), W,H;
  function rsz(){pc.width=W=innerWidth;pc.height=H=innerHeight;}
  window.addEventListener('resize',rsz); rsz();
  var dots=Array.from({length:45},function(){
    return{x:Math.random()*W,y:Math.random()*H,
      r:Math.random()*1.4+.3, vx:(Math.random()-.5)*.18,vy:(Math.random()-.5)*.14,
      a:Math.random()*.4+.08, ph:Math.random()*6.28,
      gold:Math.random()>.4};
  });
  (function loop(){
    requestAnimationFrame(loop);
    ctx.clearRect(0,0,W,H);
    dots.forEach(function(d){
      d.x+=d.vx; d.y+=d.vy; d.ph+=.009;
      if(d.x<-5)d.x=W+5; if(d.x>W+5)d.x=-5;
      if(d.y<-5)d.y=H+5; if(d.y>H+5)d.y=-5;
      var p=d.a*(0.4+Math.sin(d.ph)*0.4);
      ctx.beginPath(); ctx.arc(d.x,d.y,d.r,0,6.28);
      ctx.fillStyle=d.gold?'rgba(201,168,76,'+p.toFixed(3)+')':'rgba(139,92,246,'+p.toFixed(3)+')';
      ctx.shadowColor=d.gold?'rgba(201,168,76,'+p+')':'rgba(139,92,246,'+p+')';
      ctx.shadowBlur=d.r*5; ctx.fill();
    });
    ctx.shadowBlur=0;
  })();
})();

})(); // end main IIFE



/* ══════════════════════════════════════════
   ANIMATED FAVICON — Epic Glowing K
══════════════════════════════════════════ */
(function(){
  var S=64; // canvas size
  var fav=document.createElement('canvas');
  fav.width=fav.height=S;
  var fc=fav.getContext('2d');
  var link=document.querySelector("link[rel*='icon']");
  if(!link){link=document.createElement('link');link.rel='icon';link.type='image/x-icon';document.head.appendChild(link);}

  var t=0;

  // Sparks / particles
  var sparks=[];
  for(var i=0;i<22;i++){
    sparks.push({
      x:32, y:32,
      vx:(Math.random()-0.5)*2.2,
      vy:(Math.random()-0.5)*2.2,
      life:Math.random(),
      maxLife:0.6+Math.random()*0.7,
      size:0.8+Math.random()*1.6,
      hue: 35+Math.random()*25
    });
  }

  function tickSparks(){
    sparks.forEach(function(p){
      p.life+=0.022+Math.random()*0.012;
      if(p.life>p.maxLife){
        // respawn from K stroke area
        var spawnPts=[
          {x:18,y:18},{x:18,y:28},{x:18,y:38},{x:18,y:48},
          {x:24,y:32},{x:30,y:22},{x:36,y:14},{x:30,y:42},{x:36,y:50}
        ];
        var sp=spawnPts[Math.floor(Math.random()*spawnPts.length)];
        p.x=sp.x+(Math.random()-0.5)*4;
        p.y=sp.y+(Math.random()-0.5)*4;
        p.vx=(Math.random()-0.5)*2.8;
        p.vy=(Math.random()-0.5)*2.8-0.4;
        p.life=0; p.maxLife=0.5+Math.random()*0.6;
        p.size=0.7+Math.random()*1.8;
        p.hue=35+Math.random()*30;
      }
      p.x+=p.vx*0.6;
      p.y+=p.vy*0.6;
    });
  }

  function draw(){
    fc.clearRect(0,0,S,S);
    t+=0.045;

    var cx=S/2, cy=S/2;

    // ── Deep background circle ──
    var bg=fc.createRadialGradient(cx,cy,2,cx,cy,29);
    bg.addColorStop(0,'rgba(30,20,4,0.95)');
    bg.addColorStop(0.6,'rgba(18,12,2,0.9)');
    bg.addColorStop(1,'rgba(4,3,10,0)');
    fc.beginPath(); fc.arc(cx,cy,28,0,Math.PI*2);
    fc.fillStyle=bg; fc.fill();

    // ── Outer rotating glow ring ──
    var ringAlpha=0.18+Math.sin(t*1.1)*0.1;
    fc.beginPath(); fc.arc(cx,cy,26,0,Math.PI*2);
    fc.strokeStyle='rgba(201,168,76,'+ringAlpha.toFixed(3)+')';
    fc.lineWidth=1.2; fc.stroke();

    // ── Rotating arc sweep ──
    var arcStart=t*1.6;
    var arcLen=Math.PI*0.55+Math.sin(t*0.7)*0.25;
    fc.beginPath();
    fc.arc(cx,cy,26,arcStart,arcStart+arcLen);
    var arcGrd=fc.createLinearGradient(
      cx+Math.cos(arcStart)*26, cy+Math.sin(arcStart)*26,
      cx+Math.cos(arcStart+arcLen)*26, cy+Math.sin(arcStart+arcLen)*26
    );
    arcGrd.addColorStop(0,'rgba(253,230,138,0)');
    arcGrd.addColorStop(0.5,'rgba(253,230,138,0.9)');
    arcGrd.addColorStop(1,'rgba(253,230,138,0)');
    fc.strokeStyle=arcGrd; fc.lineWidth=2.2; fc.stroke();

    // ── Second shorter arc (opposite) ──
    var arc2Start=arcStart+Math.PI+0.4;
    fc.beginPath();
    fc.arc(cx,cy,26,arc2Start,arc2Start+Math.PI*0.3);
    var a2=fc.createLinearGradient(
      cx+Math.cos(arc2Start)*26, cy+Math.sin(arc2Start)*26,
      cx+Math.cos(arc2Start+Math.PI*0.3)*26, cy+Math.sin(arc2Start+Math.PI*0.3)*26
    );
    a2.addColorStop(0,'rgba(201,168,76,0)');
    a2.addColorStop(0.5,'rgba(201,168,76,0.55)');
    a2.addColorStop(1,'rgba(201,168,76,0)');
    fc.strokeStyle=a2; fc.lineWidth=1.4; fc.stroke();

    // ── Sparks ──
    tickSparks();
    sparks.forEach(function(p){
      var prog=p.life/p.maxLife;
      var alpha=(1-prog)*0.85;
      if(alpha<0.02)return;
      fc.beginPath();
      fc.arc(p.x, p.y, p.size*(1-prog*0.5), 0, Math.PI*2);
      fc.fillStyle='hsla('+p.hue+',90%,70%,'+alpha.toFixed(3)+')';
      if(prog<0.3){fc.shadowColor='rgba(253,230,138,0.8)';fc.shadowBlur=4;}
      fc.fill(); fc.shadowBlur=0;
    });

    // ── Pulsing glow under K ──
    var glow=0.32+Math.sin(t*2.2)*0.18;
    var kg=fc.createRadialGradient(cx,cy,2,cx,cy,18);
    kg.addColorStop(0,'rgba(201,168,76,'+glow.toFixed(3)+')');
    kg.addColorStop(1,'rgba(201,168,76,0)');
    fc.fillStyle=kg; fc.fillRect(cx-18,cy-18,36,36);

    // ── THE "K" — bold, crisp, glowing ──
    // Color cycles: gold → bright white-gold → gold
    var colorPulse=0.5+Math.sin(t*1.8)*0.5; // 0→1
    // interpolate: gold #c9a84c → bright #fff8d6
    var r=Math.round(201+colorPulse*54);
    var g=Math.round(168+colorPulse*80);
    var b=Math.round(76+colorPulse*158);
    var kColor='rgb('+r+','+g+','+b+')';

    // Shadow/glow layers (paint back to front)
    var glowLayers=[
      {blur:14, alpha:0.35+colorPulse*0.2},
      {blur:7,  alpha:0.55+colorPulse*0.15},
      {blur:3,  alpha:0.8},
    ];
    glowLayers.forEach(function(gl){
      fc.save();
      fc.shadowColor='rgba('+r+','+g+','+b+','+gl.alpha.toFixed(2)+')';
      fc.shadowBlur=gl.blur;
      drawK(fc, cx, cy, kColor, 1);
      fc.restore();
    });
    // Final crisp K on top
    drawK(fc, cx, cy, kColor, 1);

    link.href=fav.toDataURL('image/png');
  }

  function drawK(ctx, cx, cy, color, alpha){
    // K drawn as thick strokes for clarity at small sizes
    ctx.save();
    ctx.globalAlpha=alpha;
    ctx.strokeStyle=color;
    ctx.lineCap='round';
    ctx.lineJoin='round';

    var x=cx-8, top=cy-16, bot=cy+16, mid=cy;
    var sw=5.5; // stroke width

    // Vertical bar of K
    ctx.lineWidth=sw;
    ctx.beginPath();
    ctx.moveTo(x, top);
    ctx.lineTo(x, bot);
    ctx.stroke();

    // Upper arm of K (goes from mid-top-right)
    ctx.lineWidth=sw-0.5;
    ctx.beginPath();
    ctx.moveTo(x+2, mid);
    ctx.lineTo(cx+12, top+2);
    ctx.stroke();

    // Lower arm of K (goes from mid-bottom-right)
    ctx.beginPath();
    ctx.moveTo(x+2, mid);
    ctx.lineTo(cx+12, bot-2);
    ctx.stroke();

    ctx.restore();
  }

  // 30fps
  setInterval(draw, 33);
})();


/* ══════════════════════════════════════════
   HERO WIDGETS — Stopwatch · Today Study · Clock · Quote
══════════════════════════════════════════ */
(function(){
  /* ── Quotes ── */
  var quotes=[
    "Success is the sum of small efforts, repeated day in and day out.",
    "The secret of getting ahead is getting started.",
    "Don't watch the clock; do what it does — keep going.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "The beautiful thing about learning is that no one can take it away from you.",
    "An investment in knowledge pays the best interest.",
    "Consistency is more important than perfection.",
    "Work hard in silence; let your results be your noise.",
    "Education is not preparation for life — it is life itself.",
  ];
  var qi=Math.floor(Math.random()*quotes.length);
  var qEl=document.getElementById('hero-quote');
  function setQuote(q){
    if(!qEl)return;
    qEl.classList.add('fade-out');
    setTimeout(function(){
      qEl.textContent='"'+q+'"';
      qEl.classList.remove('fade-out');
      qEl.classList.add('fade-in');
      setTimeout(function(){qEl.classList.remove('fade-in');},500);
    },400);
  }
  if(qEl){qEl.textContent='"'+quotes[qi]+'"';}
  setInterval(function(){
    qi=(qi+1)%quotes.length; setQuote(quotes[qi]);
  },10000);

  /* ── Live Clock ── */
  function updateClock(){
    var now=new Date();
    var h=now.getHours(),m=now.getMinutes();
    var ap=h>=12?'PM':'AM'; h=h%12||12;
    var clk=document.getElementById('hw-clock');
    var dt=document.getElementById('hw-date');
    if(clk) clk.textContent=h+':'+(m<10?'0':'')+m+' '+ap;
    if(dt){
      var days=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
      var mo=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      var d=now; dt.textContent=days[d.getDay()]+', '+d.getDate()+' '+mo[d.getMonth()];
    }
  }
  updateClock(); setInterval(updateClock,10000);

  /* ── Today Study Time ── */
  var TKEY='k4hav-studytime';
  function getTD(){try{return JSON.parse(localStorage.getItem(TKEY)||'{}');}catch(e){return{};}}
  function saveD(d){try{localStorage.setItem(TKEY,JSON.stringify(d));}catch(e){}}
  function fmtHM(s){
    var h=Math.floor(s/3600),m=Math.floor((s%3600)/60);
    return h+'h '+(m<10?'0':'')+m+'m';
  }
  function showToday(){
    var d=getD(); var today=new Date().toDateString();
    var el=document.getElementById('hw-today');
    if(el) el.textContent=fmtHM(d[today]||0);
  }
  function getD(){return getD._d||(getD._d=getTD()); }
  // fresh every call
  function getTodaySecs(){var d=getTD();return d[new Date().toDateString()]||0;}
  function addSecs(s){
    var d=getTD(); var today=new Date().toDateString();
    d[today]=(d[today]||0)+s; saveD(d);
    var el=document.getElementById('hw-today');
    if(el) el.textContent=fmtHM(d[today]);
  }
  // Init display
  (function(){
    var d=getTD(); var today=new Date().toDateString();
    var el=document.getElementById('hw-today');
    if(el) el.textContent=fmtHM(d[today]||0);
  })();

  /* ── Stopwatch ── */
  // swAccum = total ms accumulated before last start
  // swStart = timestamp of last Start click
  // We NEVER reset swAccum except on explicit Reset click
  var swRunning=false, swStart=0, swAccum=0, swRaf=null;
  var swEl=document.getElementById('sw-display');
  var swBtn=document.getElementById('sw-btn');
  var swHw=document.getElementById('hw-stopwatch');

  function fmtSW(ms){
    var tot=Math.floor(ms/1000);
    var h=Math.floor(tot/3600),m=Math.floor((tot%3600)/60),s=tot%60;
    return (h<10?'0':'')+h+':'+(m<10?'0':'')+m+':'+(s<10?'0':'')+s;
  }
  function swTick(){
    if(!swRunning)return;
    // elapsed = all past accumulated + current running duration
    var elapsed=swAccum+(Date.now()-swStart);
    if(swEl) swEl.textContent=fmtSW(elapsed);
    swRaf=requestAnimationFrame(swTick);
  }

  window.swToggle=function(){
    if(!swRunning){
      // START
      swRunning=true;
      swStart=Date.now();
      if(swBtn){swBtn.textContent='⏸ Pause';swBtn.classList.add('running');}
      if(swHw) swHw.classList.add('active');
      swTick();
    } else {
      // PAUSE — add elapsed to accumulator, DO NOT reset swAccum
      swRunning=false;
      var now=Date.now();
      var sessionMs=now-swStart;
      swAccum+=sessionMs; // accumulate, never reset
      cancelAnimationFrame(swRaf);
      if(swBtn){swBtn.textContent='▶ Resume';swBtn.classList.remove('running');}
      if(swHw) swHw.classList.remove('active');
      // Save session seconds to today's study time
      addSecs(Math.floor(sessionMs/1000));
    }
  };

  window.swReset=function(){
    swRunning=false;
    swAccum=0; // ONLY place swAccum is reset
    cancelAnimationFrame(swRaf);
    if(swEl) swEl.textContent='00:00:00';
    if(swBtn){swBtn.textContent='▶ Start';swBtn.classList.remove('running');}
    if(swHw) swHw.classList.remove('active');
  };

  // Auto-save every 60s if running (NO swAccum reset — just snapshot and save delta)
  var swLastSaved=0;
  setInterval(function(){
    if(!swRunning)return;
    var now=Date.now();
    var deltaSecs=Math.floor((now-swStart-swLastSaved)/1000);
    if(deltaSecs>0){
      swLastSaved=now-swStart;
      addSecs(deltaSecs);
    }
  },60000);

  // Reset lastSaved on each new start
  var _origToggle=window.swToggle;
  window.swToggle=function(){
    if(!swRunning) swLastSaved=0;
    _origToggle();
  };

  // Save on page hide
  document.addEventListener('visibilitychange',function(){
    if(document.hidden&&swRunning){
      var sessionMs=Date.now()-swStart;
      swAccum+=sessionMs;
      swStart=Date.now();
      swLastSaved=0;
      addSecs(Math.floor(sessionMs/1000));
    }
  });
})();


/* ══════════════════════════════════════════
   COUNTDOWN TIMER
══════════════════════════════════════════ */
(function(){
  var cdRunning=false, cdInterval=null;
  var cdTotalSecs=0, cdRemaining=0;

  function fmtCD(s){
    var m=Math.floor(s/60), sec=s%60;
    return (m<10?'0':'')+m+':'+(sec<10?'0':'')+sec;
  }

  function cdUpdateDisplay(){
    var el=document.getElementById('cd-display');
    var lbl=document.getElementById('cd-label');
    var hw=document.getElementById('hw-countdown');
    if(!el)return;
    el.textContent=fmtCD(cdRemaining);
    if(cdRemaining===0 && cdTotalSecs>0){
      el.style.color='#f87171';
      el.style.animation='cdDone .5s ease infinite alternate';
      if(lbl)lbl.textContent='Time\'s Up! ⚡';
    } else if(cdRunning){
      // Warn when <60s left
      el.style.color=cdRemaining<=60?'#fbbf24':'var(--gold)';
      el.style.animation='';
    }
  }

  window.cdStart=function(){
    var minEl=document.getElementById('cd-min');
    var mins=parseInt(minEl?minEl.value:25)||25;
    if(mins<1)mins=1; if(mins>99)mins=99;
    cdTotalSecs=mins*60; cdRemaining=cdTotalSecs;
    cdRunning=true;

    // Show pause+reset, hide setup
    var setup=document.getElementById('cd-setup');
    var pb=document.getElementById('cd-pausebtn');
    var rb=document.getElementById('cd-resetbtn');
    if(setup)setup.style.display='none';
    if(pb){pb.style.display='';pb.textContent='⏸ Pause';}
    if(rb)rb.style.display='';

    var lbl=document.getElementById('cd-label');
    if(lbl)lbl.textContent='Countdown';
    var el=document.getElementById('cd-display');
    if(el){el.style.color='var(--gold)';el.style.animation='';}

    clearInterval(cdInterval);
    cdUpdateDisplay();
    cdInterval=setInterval(function(){
      if(!cdRunning)return;
      cdRemaining--;
      cdUpdateDisplay();
      if(cdRemaining<=0){
        cdRunning=false;
        clearInterval(cdInterval);
        // Flash notification
        if(typeof Notification!=='undefined'&&Notification.permission==='granted'){
          new Notification('⏰ Time\'s Up!',{body:'Your study session timer is done!',icon:''});
        }
      }
    },1000);
  };

  window.cdToggle=function(){
    var pb=document.getElementById('cd-pausebtn');
    if(cdRunning){
      cdRunning=false;
      if(pb)pb.textContent='▶ Resume';
    } else {
      if(cdRemaining>0){
        cdRunning=true;
        if(pb)pb.textContent='⏸ Pause';
      }
    }
  };

  window.cdReset=function(){
    cdRunning=false;
    clearInterval(cdInterval);
    cdRemaining=0; cdTotalSecs=0;
    var el=document.getElementById('cd-display');
    var lbl=document.getElementById('cd-label');
    var setup=document.getElementById('cd-setup');
    var pb=document.getElementById('cd-pausebtn');
    var rb=document.getElementById('cd-resetbtn');
    if(el){el.textContent='25:00';el.style.color='var(--gold)';el.style.animation='';}
    if(lbl)lbl.textContent='Countdown';
    if(setup)setup.style.display='flex';
    if(pb)pb.style.display='none';
    if(rb)rb.style.display='none';
    var minEl=document.getElementById('cd-min');
    if(minEl)minEl.value=25;
  };
})();

