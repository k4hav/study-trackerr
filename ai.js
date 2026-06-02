
    /* ================================================
       K4HAV AI — MULTI PROVIDER CHATBOT
    ================================================ */

    /* ---- Website knowledge base (no API needed) ---- */
    const K4HAV_INFO = {
      keywords: {
        'download|homescreen|install|pwa|add to home|phone pe install|mobile install': `📲 **Phone pe install kaise karein (Homescreen):**\n\n**Android Chrome:**\n1. Website kholo browser mein\n2. Right top corner ka 3-dot menu dabao (⋮)\n3. **"Add to Home screen"** ya **"Install app"** click karo\n4. ✅ Done! App icon aajayega\n\n**iPhone Safari:**\n1. Safari mein website kholo\n2. Bottom mein Share button (□↑) dabao\n3. **"Add to Home Screen"** select karo\n4. ✅ Home screen pe icon ready!\n\n**Koi bhi browser:** Address bar ke right mein install icon (⊕) bhi dikh sakta hai — click karo!`,

        'bookmark|save|save website|website save|laptop bookmark': `🔖 **Bookmark/Save kaise karein:**\n\n**Laptop/Desktop:**\n• **Chrome/Edge:** Ctrl+D dabao → Save\n• **Firefox:** Ctrl+D dabao\n• **Safari:** Cmd+D dabao\n• Ya address bar mein ⭐ star icon click karo!\n\n**Mobile Chrome:**\n• 3-dot menu (⋮) → ⭐ Star icon → Save\n\n**Pro tip:** Bookmark ko Bookmarks Bar mein save karo for quick access!`,

        'shortcut|desktop shortcut|windows shortcut': `💻 **Desktop shortcut banao:**\n\n**Chrome:**\n1. Website kholo\n2. 3-dot menu → More tools → **"Create shortcut"**\n3. ✅ Desktop pe icon ready!\n\n**Edge:**\n1. 3-dot menu → Apps → **"Install this site as an app"**`,

        'offline|without internet|bina internet': `📡 **Offline use:**\nYeh website ek baar load karne ke baad kuch features offline bhi kaam karte hain (progress save hoti hai localStorage mein). AI features ke liye internet chahiye.`,

        'progress|save progress|data save|reset': `💾 **Progress kaise save hoti hai:**\nTumhari saari chapter progress browser ke **localStorage** mein automatically save hoti hai.\n\n⚠️ **Warning:** Browser data/cache clear karne se progress delete ho sakti hai!\n\n🔄 **Reset karne ke liye:** Homepage pe **"Reset All Progress"** button dabao.`,

        'feature|kya hai|about|website kya|help|features|kya kya': `🌟 **ƘҽՏհɑѵ Study Tracker - Complete Guide:**\n\n📚 **Streams:**\n• Science (Biology, Maths)\n• Commerce (Accounts, Business, Economics)\n• Arts (History, Geography, Pol. Sci.)\n• Skills (Coding, Video Editing, Cyber Security)\n\n✅ **Features:**\n• Chapter-wise progress tracking\n• Class 11 & 12 both\n• PYQ (Previous Year Questions) tracker\n• Multiple color themes (auto-cycle!)\n• AI Doubt Solver (main hoon! 😊)\n\n🎨 **Themes:** Bottom-right dots se theme change karo ya auto-cycle hoti hai har 12 seconds!`,

        'theme|color|change theme|theme kaise': `🎨 **Theme change kaise karein:**\n• Screen ke **bottom-right** mein colored dots hain\n• Click karo koi bhi dot to change theme\n• Ya themes **automatically** change hoti hain har 12 seconds!\n• Multiple beautiful themes available hain ✨`,

        'subject|subjects|chapters|syllabus': `📖 **Available Subjects:**\n\n🔬 **Science:** Biology, Mathematics\n💼 **Commerce:** Accountancy, Business Studies, Economics\n🎨 **Arts:** History, Geography, Political Science, Psychology, Sociology, English\n💡 **Skills:** Coding, Video Editing, Cybersecurity\n\nHar subject mein Class 11 aur 12 dono ke chapters hain!`,

        'share|friend ko share|link share': `🔗 **Website share karo:**\nBas yeh HTML file share karo kisi ko bhi WhatsApp, email ya USB se — koi internet ki zaroorat nahi file ke liye!\n\nYa apne phone pe install karo aur apna personal study app use karo 📲`,

        'creator|who made|kisne banaya|k4hav|ƘҽՏհɑѵ': `👨‍💻 **Creator:**\nYeh website **K4hav (Keshav)** ne banai hai — ek passionate student developer!\n\n💳 **Support karna chahte ho?** UPI: **itskeshav@upi**\n\n🐱 GitHub, 🐦 X, 📸 Instagram — "Help & Support" section mein social links mil jayenge!`,

        'upi|support|donate|payment|pay': `❤️ **Support K4hav:**\nAgar yeh website tumhare kaam aayi toh support kar sakte ho:\n\n💳 **UPI ID:** itskeshav@upi\n\n"Support Us" section mein PhonePe, GPay, Paytm buttons bhi hain aur QR code bhi! 🙏`
      }
    };

    function getOfflineReply(text) {
        const t = text.toLowerCase();
        for(const [keys, reply] of Object.entries(K4HAV_INFO.keywords)) {
            const kArr = keys.split('|');
            if(kArr.some(k => t.includes(k))) return reply;
        }
        return null;
    }
    const AI_PROVIDERS = {
        gemini: {
            name:'Gemini Flash',
            label:'⚡ Setup Gemini (Free)',
            hint:'Go to <a onclick="window.open(\'https://aistudio.google.com\',\'_blank\')">aistudio.google.com</a> → Sign in → <b style="color:#67e8f9">Get API Key</b> → Paste below',
            storageKey:'k4hav_key_gemini',
            supportsImage: true
        },
        groq: {
            name:'Groq (Fast & Free)',
            label:'⚡ Setup Groq (Free)',
            hint:'Go to <a onclick="window.open(\'https://console.groq.com\',\'_blank\')">console.groq.com</a> → Sign up free → API Keys → Create → Paste below',
            storageKey:'k4hav_key_groq',
            supportsImage: false
        },
        openai: {
            name:'OpenAI GPT-4o',
            label:'🤖 Setup OpenAI',
            hint:'Go to <a onclick="window.open(\'https://platform.openai.com/api-keys\',\'_blank\')">platform.openai.com</a> → API Keys → Create → Paste below (paid)',
            storageKey:'k4hav_key_openai',
            supportsImage: true
        },
        cohere: {
            name:'Cohere',
            label:'🌊 Setup Cohere (Free Trial)',
            hint:'Go to <a onclick="window.open(\'https://dashboard.cohere.com/api-keys\',\'_blank\')">dashboard.cohere.com</a> → Sign up → API Keys → Copy trial key',
            storageKey:'k4hav_key_cohere',
            supportsImage: false
        },
        openrouter: {
            name:'OpenRouter 🔀',
            label:'🔀 Setup OpenRouter (Free Models!)',
            hint:'Go to <a onclick="window.open(\'https://openrouter.ai/keys\',\'_blank\')">openrouter.ai/keys</a> → Sign up free → Create Key → Paste below<br><span style="color:#a3e635">Free models: Llama 3.3, Gemma, Mistral, DeepSeek & more!</span>',
            storageKey:'k4hav_key_openrouter',
            supportsImage: true
        }
    };

    const SYSTEM_PROMPT = `You are Batman AI, a brilliant and friendly study assistant for Indian Class 11-12 students.
Help with ALL subjects: Physics, Chemistry, Biology, Maths, Accountancy, Business Studies, Economics, History, Geography, Political Science, English, Hindi, Coding, Video Editing, Cybersecurity.
Keep answers clear, step-by-step, and student-friendly. Use Hinglish naturally if student prefers.
Be warm, encouraging, and use emojis occasionally. Made for K4hav Study Tracker.`;

    let aiProvider = localStorage.getItem('k4hav_provider') || 'gemini';
    let chatHistory = [];
    let isBusy = false;
    let pendingImageB64 = null;
    let pendingImageMime = null;

    /* ════════════════════════════════════════════════════════
       DRAGGABLE FAB
       - Hold + drag to move anywhere on screen
       - Drag past left/right edge → hides, shows peek tab
       - Tap peek tab → snaps back
       - Short tap (no drag) → opens chat
    ════════════════════════════════════════════════════════ */
    const fabWrap  = document.getElementById('ai-fab-wrap');
    const ringWrap = document.getElementById('ai-btn-ring-wrap');
    const showTab  = document.getElementById('ai-show-tab');
    const BTN_W = 110, EDGE_ZONE = 40;

    let fabL = 8, fabT = window.innerHeight * 0.55;
    let pointerDownX, pointerDownY, fabDownL, fabDownT;
    let dragging = false, moved = false;

    function clamp(v, lo, hi){ return Math.max(lo, Math.min(v, hi)); }

    function setPos(l, t, animate) {
        const maxL = window.innerWidth  - BTN_W + 36;
        const maxT = window.innerHeight - BTN_W - 8;
        fabL = clamp(l, -36, maxL);
        fabT = clamp(t, 8,   maxT);
        if (animate) {
            fabWrap.classList.add('snap-anim');
        } else {
            fabWrap.classList.remove('snap-anim');
        }
        fabWrap.style.left   = fabL + 'px';
        fabWrap.style.top    = fabT + 'px';
        fabWrap.style.bottom = 'auto';
    }
    setPos(fabL, fabT, false);

    function getPoint(e){ return e.touches ? e.touches[0] : e; }

    /* ── Pointer Down ── */
    function onFabDown(e) {
        if (e.button && e.button !== 0) return; // only left click
        const pt = getPoint(e);
        pointerDownX = pt.clientX;
        pointerDownY = pt.clientY;
        fabDownL = fabL;
        fabDownT = fabT;
        dragging = false;
        moved = false;
        fabWrap.classList.remove('snap-anim');

        document.addEventListener('mousemove', onFabMove, {passive:false});
        document.addEventListener('mouseup',   onFabUp);
        document.addEventListener('touchmove', onFabMove, {passive:false});
        document.addEventListener('touchend',  onFabUp);
        document.addEventListener('touchcancel', onFabUp);
        e.preventDefault();
    }

    /* ── Pointer Move ── */
    function onFabMove(e) {
        const pt = getPoint(e);
        const dx = pt.clientX - pointerDownX;
        const dy = pt.clientY - pointerDownY;

        if (!dragging && (Math.abs(dx) > 5 || Math.abs(dy) > 5)) {
            dragging = true;
            moved    = true;
            ringWrap.classList.add('dragging');
        }
        if (!dragging) return;
        if (e.cancelable) e.preventDefault();
        setPos(fabDownL + dx, fabDownT + dy, false);
    }

    /* ── Pointer Up ── */
    function onFabUp(e) {
        document.removeEventListener('mousemove', onFabMove);
        document.removeEventListener('mouseup',   onFabUp);
        document.removeEventListener('touchmove', onFabMove);
        document.removeEventListener('touchend',  onFabUp);
        document.removeEventListener('touchcancel', onFabUp);
        ringWrap.classList.remove('dragging');

        if (!moved) {
            // Pure tap → toggle chat
            aiToggle();
            return;
        }
        dragging = false;

        // Edge snap detection
        const goLeft  = fabL < EDGE_ZONE - BTN_W / 2;
        const goRight = fabL > window.innerWidth - BTN_W / 2 - EDGE_ZONE;

        if (goLeft) {
            setPos(-BTN_W + 12, fabT, true);
            setTimeout(() => {
                fabWrap.classList.add('offscreen');
                showTab.style.display = 'block';
                showTab.style.top    = clamp(fabT + BTN_W/2 - 28, 10, window.innerHeight-80) + 'px';
                showTab.style.left   = '0'; showTab.style.right = 'auto';
                showTab.classList.remove('r');
                showTab.textContent  = '🦇 AI';
            }, 430);
        } else if (goRight) {
            setPos(window.innerWidth - 12, fabT, true);
            setTimeout(() => {
                fabWrap.classList.add('offscreen');
                showTab.style.display = 'block';
                showTab.style.top   = clamp(fabT + BTN_W/2 - 28, 10, window.innerHeight-80) + 'px';
                showTab.style.right = '0'; showTab.style.left = 'auto';
                showTab.classList.add('r');
                showTab.textContent = '🦇 AI';
            }, 430);
        } else {
            // Stay in place
            setPos(fabL, fabT, true);
        }
    }

    function aiShowBtn() {
        showTab.style.display = 'none';
        fabWrap.classList.remove('offscreen');
        const fromRight = showTab.classList.contains('r');
        setPos(fromRight ? window.innerWidth - BTN_W - 8 : 8, fabT, true);
    }

    ringWrap.addEventListener('mousedown',  onFabDown, {passive:false});
    ringWrap.addEventListener('touchstart', onFabDown, {passive:false});

    function spawnSparkles() {
        const colors = ['var(--gold)','var(--gold-bright)','#7c3aed','#06b6d4','#a78bfa','#fff'];
        const btn = document.getElementById('ai-chat-btn');
        const r = btn ? btn.getBoundingClientRect() : {left:40,top:window.innerHeight*0.45,width:56,height:56};
        const cx = r.left + r.width/2, cy = r.top + r.height/2;
        for(let i=0;i<14;i++){
            const s = document.createElement('div');
            const ang = (i/14)*Math.PI*2;
            const dist = 36 + Math.random()*28;
            const sx = Math.cos(ang)*dist, sy = Math.sin(ang)*dist - 15;
            s.style.cssText=`position:fixed;width:${3+Math.random()*5}px;height:${3+Math.random()*5}px;
                border-radius:50%;background:${colors[i%colors.length]};pointer-events:none;z-index:99999;
                left:${cx}px;top:${cy}px;--sx:${sx}px;--sy:${sy}px;
                animation:sparkleFloat .85s ease-out ${i*.045}s forwards;`;
            document.body.appendChild(s);
            setTimeout(()=>s.remove(),1100);
        }
    }

    function aiToggle() {
        const p = document.getElementById('ai-panel');
        p.classList.toggle('open');
        if(p.classList.contains('open')) {
            spawnSparkles();
            document.getElementById('ai-notif').style.display='none';
            renderProvider();
            checkKeyArea();
            if(chatHistory.length===0) setTimeout(()=>botMsg("Namaste! 👋 Main hoon **🦇 Batman AI** — tumhara personal study buddy!\n\n📚 **Koi bhi doubt** poochho — Math, Science, Commerce, Arts sab!\n📷 **Photo upload** karo question ki\n💬 **Normal baat** bhi kar sakte ho\n⛶ **Expand** karo chat bada karne ke liye\n\n💡 **No API key?** Koi baat nahi! Website ke baare mein poochho — install kaise karein, features, progress — **bina key ke bhi** jawab dunga! 😊\n\nAaj kya poochhna hai? 🚀"), 280);
        }
    }

    function toggleProviderPanel() {
        const pp = document.getElementById('ai-provider-panel');
        pp.classList.toggle('show');
    }

    function selectProvider(p) {
        aiProvider = p;
        localStorage.setItem('k4hav_provider','k4hav_provider');
        localStorage.setItem('k4hav_provider', p);
        document.querySelectorAll('.provider-card').forEach(c=>c.classList.remove('active'));
        document.getElementById('pcard-'+p).classList.add('active');
        document.getElementById('ai-provider-panel').classList.remove('show');
        renderProvider();
        checkKeyArea();
    }

    function renderProvider() {
        const pv = AI_PROVIDERS[aiProvider];
        document.querySelectorAll('.provider-card').forEach(c=>c.classList.remove('active'));
        document.getElementById('pcard-'+aiProvider).classList.add('active');
        document.getElementById('provider-badge-btn').textContent = '⚙️ '+pv.name;
        document.getElementById('key-label-txt').textContent = pv.label;
        document.getElementById('key-hint-txt').innerHTML = pv.hint;
        // image btn
        const imgBtn = document.getElementById('img-upload-btn');
        imgBtn.style.opacity = pv.supportsImage ? '1' : '0.35';
        imgBtn.title = pv.supportsImage ? 'Upload image' : 'Image not supported by this provider';
    }

    function checkKeyArea() {
        const key = localStorage.getItem(AI_PROVIDERS[aiProvider].storageKey);
        document.getElementById('ai-key-area').style.display = key ? 'none' : 'block';
        if(key) document.getElementById('chat-input-txt').focus();
    }

    function saveKey() {
        const v = document.getElementById('ai-api-input').value.trim();
        if(!v){alert('Key daalo pehle! 😅');return;}
        localStorage.setItem(AI_PROVIDERS[aiProvider].storageKey, v);
        document.getElementById('ai-api-input').value='';
        document.getElementById('ai-key-area').style.display='none';
        botMsg("🎉 **Key save ho gayi!** Ab poochho koi bhi doubt — Main bilkul ready hoon! 🚀");
        document.getElementById('chat-input-txt').focus();
    }

    function getTime(){ return new Date().toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit'}); }

    const ANIME_AV_MINI = `<img src="https://imgs.search.brave.com/qbR0ALWfLL_OWqCoE0JqRgqyIHVGpI-ja2pXrDlFId4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLmdl/dHR5d2FsbHBhcGVy/cy5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjMvMTAvQ2Fy/dG9vbi1CYXRtYW4t/UHJvZmlsZS1QaWN0/dXJlLmpwZw" style="width:26px;height:26px;object-fit:cover;border-radius:50%;" alt="AI"/>`;

    function botMsg(text, imgSrc) {
        const c = document.getElementById('chat-msgs');
        const d = document.createElement('div'); d.className='cm bot';
        const fmt = text.replace(/\*\*(.*?)\*\*/g,'<b>$1</b>').replace(/\n/g,'<br>');
        d.innerHTML=`<div class="bot-av">${ANIME_AV_MINI}</div><div><div class="cm-bub">${imgSrc?`<img class="cm-img" src="${imgSrc}"/>`:''}${fmt}</div><div class="cm-time">${getTime()}</div></div>`;
        c.appendChild(d); c.scrollTop=c.scrollHeight;
    }

    function userMsg(text, imgSrc) {
        const c = document.getElementById('chat-msgs');
        const d = document.createElement('div'); d.className='cm user';
        d.innerHTML=`<div><div class="cm-bub">${imgSrc?`<img class="cm-img" src="${imgSrc}"/>`:''}${text?text.replace(/</g,'&lt;'):''}</div><div class="cm-time">${getTime()}</div></div>`;
        c.appendChild(d); c.scrollTop=c.scrollHeight;
    }

    function showTyping() {
        const c=document.getElementById('chat-msgs');
        const d=document.createElement('div'); d.className='cm bot'; d.id='ai-typing';
        d.innerHTML=`<div class="bot-av">${ANIME_AV_MINI}</div><div class="cm-bub typing-bub"><span></span><span></span><span></span></div>`;
        c.appendChild(d); c.scrollTop=c.scrollHeight;
    }
    function hideTyping(){ const t=document.getElementById('ai-typing'); if(t)t.remove(); }

    /* ---- Image handling ---- */
    function handleImageSelect(e) {
        const file = e.target.files[0]; if(!file) return;
        const pv = AI_PROVIDERS[aiProvider];
        if(!pv.supportsImage){alert('Yeh provider image support nahi karta. Gemini ya OpenAI use karo!');return;}
        const reader=new FileReader();
        reader.onload=ev=>{
            pendingImageB64=ev.target.result.split(',')[1];
            pendingImageMime=file.type;
            document.getElementById('img-preview').src=ev.target.result;
            const w=document.getElementById('img-preview-wrap'); w.classList.add('show');
        };
        reader.readAsDataURL(file);
        e.target.value='';
    }
    function removeImage(){
        pendingImageB64=null; pendingImageMime=null;
        document.getElementById('img-preview-wrap').classList.remove('show');
        document.getElementById('img-preview').src='';
    }

    /* ---- Send ---- */
    async function aiSend() {
        const inp=document.getElementById('chat-input-txt');
        const text=inp.value.trim();
        if((!text && !pendingImageB64)||isBusy) return;

        const imgSnapshot = pendingImageB64 ? 'data:'+pendingImageMime+';base64,'+pendingImageB64 : null;
        inp.value=''; aiResize(inp);
        userMsg(text, imgSnapshot);
        document.getElementById('chips-row').style.display='none';
        if(imgSnapshot) removeImage();

        // ---- Try offline knowledge base first (no API needed) ----
        if(!imgSnapshot) {
            const offlineReply = getOfflineReply(text);
            if(offlineReply) {
                showTyping();
                await new Promise(r=>setTimeout(r, 600));
                hideTyping();
                botMsg(offlineReply);
                return;
            }
        }

        const key=localStorage.getItem(AI_PROVIDERS[aiProvider].storageKey);
        if(!key){
            botMsg("🔑 **API key nahi hai!**\n\nAI doubts ke liye key chahiye. ⚙️ Provider button dabao aur free key add karo.\n\n💡 **Lekin** website ke baare mein poochh sakte ho bina key ke — jaise:\n• *'Phone pe install kaise karein?'*\n• *'Bookmark kaise karein?'*\n• *'Website ke features kya hain?'*");
            document.getElementById('ai-key-area').style.display='block';
            return;
        }

        isBusy=true; document.getElementById('chat-send-btn').disabled=true;
        document.getElementById('ai-status-txt').textContent='● Soch rahi hoon...';
        showTyping();

        try {
            let reply;
            if(aiProvider==='gemini') reply=await callGemini(key,text,imgSnapshot);
            else if(aiProvider==='groq') reply=await callGroq(key,text);
            else if(aiProvider==='openai') reply=await callOpenAI(key,text,imgSnapshot);
            else if(aiProvider==='cohere') reply=await callCohere(key,text);
            else if(aiProvider==='openrouter') reply=await callOpenRouter(key,text,imgSnapshot);
            hideTyping();
            chatHistory.push({role:'user',text,img:!!imgSnapshot});
            chatHistory.push({role:'bot',text:reply});
            if(chatHistory.length>30) chatHistory=chatHistory.slice(-30);
            botMsg(reply);
        } catch(err) {
            hideTyping();
            const em=err.message||'Unknown error';
            if(em.includes('quota')||em.includes('429')||em.includes('exceeded')){
                botMsg("⚠️ **Quota exceed ho gayi!** Is API key ki limit khatam ho gayi.\n\n👉 Dusra provider try karo (⚙️ Provider button) — **Groq bilkul free hai!**\n\nYa naya key banao.");
            } else if(em.includes('401')||em.includes('403')||em.includes('invalid')){
                botMsg("❌ **API Key invalid hai!** Sahi key daalo.\n\n⚙️ Provider button dabao ya page refresh karo.");
                localStorage.removeItem(AI_PROVIDERS[aiProvider].storageKey);
                document.getElementById('ai-key-area').style.display='block';
            } else {
                botMsg("🌐 **Error:** "+em+"\n\nInternet check karo ya dobara try karo!");
            }
        }

        isBusy=false; document.getElementById('chat-send-btn').disabled=false;
        document.getElementById('ai-status-txt').textContent='● Online — Ask anything!';
    }

    function aiExpand() {
        const p = document.getElementById('ai-panel');
        const btn = document.getElementById('ai-expand-btn');
        p.classList.toggle('expanded');
        btn.textContent = p.classList.contains('expanded') ? '⊡' : '⛶';
        btn.title = p.classList.contains('expanded') ? 'Collapse chat' : 'Expand chat';
    }

    async function callOpenRouter(key,text,imgB64Full) {
        const content=[];
        if(imgB64Full) content.push({type:'image_url',image_url:{url:imgB64Full}});
        if(text) content.push({type:'text',text});
        const messages=[
            {role:'system',content:SYSTEM_PROMPT},
            ...chatHistory.slice(-10).map(m=>({role:m.role==='user'?'user':'assistant',content:m.text})),
            {role:'user',content: imgB64Full ? content : text}
        ];
        const r=await fetch('https://openrouter.ai/api/v1/chat/completions',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer '+key,
                'HTTP-Referer':'https://k4hav.study',
                'X-Title':'K4hav Study Tracker'
            },
            body:JSON.stringify({
                model:'meta-llama/llama-3.3-70b-instruct:free',
                messages, max_tokens:700
            })
        });
        const d=await r.json();
        if(d.error) throw new Error(d.error.message);
        return d.choices?.[0]?.message?.content||'Dobara try karo!';
    }

    /* ---- API Calls ---- */
    async function callOpenRouter(key,text,imgB64Full) {
        const content=[];
        if(imgB64Full) content.push({type:'image_url',image_url:{url:imgB64Full}});
        if(text) content.push({type:'text',text});
        const messages=[
            {role:'system',content:SYSTEM_PROMPT},
            ...chatHistory.slice(-10).map(m=>({role:m.role==='user'?'user':'assistant',content:m.text})),
            {role:'user',content: imgB64Full ? content : text}
        ];
        const r=await fetch('https://openrouter.ai/api/v1/chat/completions',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer '+key,
                'HTTP-Referer':'https://k4hav.study',
                'X-Title':'K4hav Study Tracker'
            },
            body:JSON.stringify({model:'meta-llama/llama-3.3-70b-instruct:free',messages,max_tokens:700})
        });
        const d=await r.json();
        if(d.error) throw new Error(d.error.message);
        return d.choices?.[0]?.message?.content||'Dobara try karo!';
    }

    async function callGemini(key,text,imgB64Full) {
        const parts=[];
        if(imgB64Full) parts.push({inlineData:{mimeType:imgB64Full.split(';')[0].split(':')[1], data:imgB64Full.split(',')[1]}});
        if(text) parts.push({text});
        const history=[
            {role:'user',parts:[{text:SYSTEM_PROMPT}]},
            {role:'model',parts:[{text:'Understood! I am K4hav AI, ready to help!'}]},
            ...chatHistory.slice(-10).map(m=>({role:m.role==='user'?'user':'model',parts:[{text:m.text}]})),
            {role:'user',parts}
        ];
        const r=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${key}`,{
            method:'POST',headers:{'Content-Type':'application/json'},
            body:JSON.stringify({contents:history,generationConfig:{temperature:0.8,maxOutputTokens:700}})
        });
        const d=await r.json();
        if(d.error) throw new Error(d.error.message+' '+JSON.stringify(d.error));
        return d.candidates?.[0]?.content?.parts?.[0]?.text||'Koi response nahi mila, dobara try karo!';
    }

    async function callGroq(key,text) {
        const messages=[
            {role:'system',content:SYSTEM_PROMPT},
            ...chatHistory.slice(-10).map(m=>({role:m.role==='user'?'user':'assistant',content:m.text})),
            {role:'user',content:text}
        ];
        const r=await fetch('https://api.groq.com/openai/v1/chat/completions',{
            method:'POST',headers:{'Content-Type':'application/json','Authorization':'Bearer '+key},
            body:JSON.stringify({model:'llama-3.3-70b-versatile',messages,max_tokens:700,temperature:0.8})
        });
        const d=await r.json();
        if(d.error) throw new Error(d.error.message);
        return d.choices?.[0]?.message?.content||'Dobara try karo!';
    }

    async function callOpenAI(key,text,imgB64Full) {
        const content=[];
        if(imgB64Full) content.push({type:'image_url',image_url:{url:imgB64Full}});
        if(text) content.push({type:'text',text});
        const messages=[
            {role:'system',content:SYSTEM_PROMPT},
            ...chatHistory.slice(-10).map(m=>({role:m.role==='user'?'user':'assistant',content:m.text})),
            {role:'user',content}
        ];
        const r=await fetch('https://api.openai.com/v1/chat/completions',{
            method:'POST',headers:{'Content-Type':'application/json','Authorization':'Bearer '+key},
            body:JSON.stringify({model:'gpt-4o',messages,max_tokens:700})
        });
        const d=await r.json();
        if(d.error) throw new Error(d.error.message);
        return d.choices?.[0]?.message?.content||'Dobara try karo!';
    }

    async function callCohere(key,text) {
        const chatH=chatHistory.slice(-10).map(m=>({role:m.role==='user'?'USER':'CHATBOT',message:m.text}));
        const r=await fetch('https://api.cohere.ai/v1/chat',{
            method:'POST',headers:{'Content-Type':'application/json','Authorization':'Bearer '+key},
            body:JSON.stringify({model:'command-r-plus',message:text,chat_history:chatH,preamble:SYSTEM_PROMPT,max_tokens:700})
        });
        const d=await r.json();
        if(d.message) throw new Error(d.message);
        return d.text||'Dobara try karo!';
    }

    /* ---- Helpers ---- */
    function quickAsk(el){ 
        const inp = document.getElementById('chat-input-txt');
        inp.value = el.textContent.replace(/^[^\w\s]+\s*/,'').trim();
        aiSend();
    }
    function quickSend(el){ document.getElementById('chat-input-txt').value=el.textContent; aiSend(); }
    function aiChatKey(e){ if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();aiSend();} }
    function aiResize(el){ el.style.height='auto'; el.style.height=Math.min(el.scrollHeight,120)+'px'; }

    // Init
    renderProvider();
    checkKeyArea();
    