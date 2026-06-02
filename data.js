// ═══════════════════════════════════
// Study Tracker — Shared Data
// ═══════════════════════════════════

    /* ===================== DATA ===================== */
    const streams = {
        science: {
            name: '🔬 Science',
            substreams: true,
            cards: [
                { key: 'science_bio',   emoji: '🧬', label: 'Biology',     desc: 'Physics · Chemistry · Biology' },
                { key: 'science_maths', emoji: '📐', label: 'Mathematics', desc: 'Physics · Chemistry · Mathematics' }
            ]
        },
        science_bio: {
            name: '🧬 Science — Biology',
            subjects: ['physics', 'chemistry', 'biology']
        },
        science_maths: {
            name: '📐 Science — Mathematics',
            subjects: ['physics', 'chemistry', 'maths']
        },
        commerce: {
            name: '💼 Commerce',
            subjects: ['accountancy', 'business', 'economics', 'maths_commerce', 'english']
        },
        arts: {
            name: '🎨 Arts / Humanities',
            subjects: ['history', 'geography', 'political_science', 'economics', 'sociology', 'psychology', 'english']
        }
    };

    const subjectMeta = {
        physics:          { label: 'Physics',               emoji: '⚛️',  color: 'bg-blue-500' },
        chemistry:        { label: 'Chemistry',              emoji: '🧪',  color: 'bg-green-500' },
        maths:            { label: 'Mathematics',            emoji: '📐',  color: 'bg-purple-500' },
        biology:          { label: 'Biology',                emoji: '🌱',  color: 'bg-emerald-500' },
        accountancy:      { label: 'Accountancy',            emoji: '📒',  color: 'bg-yellow-500' },
        business:         { label: 'Business Studies',       emoji: '🏢',  color: 'bg-orange-500' },
        economics:        { label: 'Economics',              emoji: '📊',  color: 'bg-teal-500' },
        maths_commerce:   { label: 'Mathematics (Commerce)', emoji: '🔢',  color: 'bg-indigo-500' },
        english:          { label: 'English',                emoji: '📝',  color: 'bg-pink-500' },
        history:          { label: 'History',                emoji: '🏛️',  color: 'bg-amber-500' },
        geography:        { label: 'Geography',              emoji: '🌍',  color: 'bg-cyan-500' },
        political_science:{ label: 'Political Science',      emoji: '⚖️',  color: 'bg-red-500' },
        sociology:        { label: 'Sociology',              emoji: '👥',  color: 'bg-fuchsia-500' },
        psychology:       { label: 'Psychology',             emoji: '🧠',  color: 'bg-violet-500' },
    };

    const chapters = {
        physics: {
            11: ["Physical World","Units and Measurements","Motion in a Straight Line","Motion in a Plane","Laws of Motion","Work, Energy and Power","System of Particles and Rotational Motion","Gravitation","Mechanical Properties of Solids","Mechanical Properties of Fluids","Thermal Properties of Matter","Thermodynamics","Kinetic Theory","Oscillations","Waves"],
            12: ["Electric Charges and Fields","Electrostatic Potential and Capacitance","Current Electricity","Moving Charges and Magnetism","Magnetism and Matter","Electromagnetic Induction","Alternating Current","Electromagnetic Waves","Ray Optics and Optical Instruments","Wave Optics","Dual Nature of Radiation and Matter","Atoms","Nuclei","Semiconductor Electronics"]
        },
        chemistry: {
            11: ["Some Basic Concepts of Chemistry","Structure of Atom","Classification of Elements and Periodicity","Chemical Bonding and Molecular Structure","States of Matter","Thermodynamics","Equilibrium","Redox Reactions","Hydrogen","The s-Block Elements","The p-Block Elements (Group 13 & 14)","Organic Chemistry: Basic Principles","Hydrocarbons","Environmental Chemistry"],
            12: ["The Solid State","Solutions","Electrochemistry","Chemical Kinetics","Surface Chemistry","Isolation of Elements","The p-Block Elements (Group 15–18)","The d- and f-Block Elements","Coordination Compounds","Haloalkanes and Haloarenes","Alcohols, Phenols and Ethers","Aldehydes, Ketones and Carboxylic Acids","Amines","Biomolecules","Polymers","Chemistry in Everyday Life"]
        },
        maths: {
            11: ["Sets","Relations and Functions","Trigonometric Functions","Principle of Mathematical Induction","Complex Numbers and Quadratic Equations","Linear Inequalities","Permutations and Combinations","Binomial Theorem","Sequences and Series","Straight Lines","Conic Sections","Introduction to 3D Geometry","Limits and Derivatives","Mathematical Reasoning","Statistics","Probability"],
            12: ["Relations and Functions","Inverse Trigonometric Functions","Matrices","Determinants","Continuity and Differentiability","Application of Derivatives","Integrals","Application of Integrals","Differential Equations","Vector Algebra","Three Dimensional Geometry","Linear Programming","Probability"]
        },
        biology: {
            11: ["The Living World","Biological Classification","Plant Kingdom","Animal Kingdom","Morphology of Flowering Plants","Anatomy of Flowering Plants","Structural Organisation in Animals","Cell: The Unit of Life","Biomolecules","Cell Cycle and Cell Division","Transport in Plants","Mineral Nutrition","Photosynthesis in Higher Plants","Respiration in Plants","Plant Growth and Development","Digestion and Absorption","Breathing and Exchange of Gases","Body Fluids and Circulation","Excretory Products and their Elimination","Locomotion and Movement","Neural Control and Coordination","Chemical Coordination and Integration"],
            12: ["Reproduction in Organisms","Sexual Reproduction in Flowering Plants","Human Reproduction","Reproductive Health","Principles of Inheritance and Variation","Molecular Basis of Inheritance","Evolution","Human Health and Disease","Strategies for Enhancement in Food Production","Microbes in Human Welfare","Biotechnology – Principles and Processes","Biotechnology and its Applications","Organisms and Populations","Ecosystem","Biodiversity and Conservation","Environmental Issues"]
        },
        accountancy: {
            11: ["Introduction to Accounting","Theory Base of Accounting","Recording of Transactions I","Recording of Transactions II","Bank Reconciliation Statement","Trial Balance and Rectification","Depreciation, Provisions and Reserves","Bills of Exchange","Financial Statements I","Financial Statements II","Accounts from Incomplete Records","Applications of Computers in Accounting"],
            12: ["Accounting for Not-for-Profit Organisations","Accounting for Partnership – Basic Concepts","Reconstitution of Partnership – Admission","Reconstitution of Partnership – Retirement/Death","Dissolution of Partnership Firm","Accounting for Share Capital","Issue and Redemption of Debentures","Financial Statements of a Company","Analysis of Financial Statements","Accounting Ratios","Cash Flow Statement"]
        },
        business: {
            11: ["Business, Trade and Commerce","Forms of Business Organisations","Private, Public and Global Enterprises","Business Services","Emerging Modes of Business","Social Responsibilities of Business","Formation of a Company","Sources of Business Finance","Small Business and Entrepreneurship","Internal Trade","International Business"],
            12: ["Nature and Significance of Management","Principles of Management","Business Environment","Planning","Organising","Staffing","Directing","Controlling","Financial Management","Financial Markets","Marketing Management","Consumer Protection","Entrepreneurship Development"]
        },
        economics: {
            11: ["Introduction to Microeconomics","Central Problems of an Economy","Consumer's Equilibrium – Utility Analysis","Consumer's Equilibrium – Indifference Curve","Demand","Elasticity of Demand","Production Function – Returns to a Factor","Cost","Supply","Revenue","Forms of Market and Price Determination","Introduction to Macroeconomics","National Income Accounting","Money and Banking","Income Determination","Government Budget and the Economy","Balance of Payments"],
            12: ["Introduction to Macroeconomics","National Income and Related Aggregates","Money and Banking","Determination of Income and Employment","Government Budget and Economy","Open Economy Macroeconomics","Introduction to Microeconomics","Consumer Behaviour","Producer Behaviour and Supply","Forms of Market and Price Determination","Indian Economy at a Glance","Poverty","Human Capital Formation","Rural Development","Employment","Infrastructure","Environment and Sustainable Development","Current Challenges","Development Experience of India"]
        },
        maths_commerce: {
            11: ["Sets","Relations and Functions","Trigonometric Functions","Complex Numbers","Linear Inequalities","Permutations and Combinations","Binomial Theorem","Sequences and Series","Straight Lines","Conic Sections","Introduction to 3D Geometry","Limits and Derivatives","Statistics","Probability"],
            12: ["Relations and Functions","Inverse Trigonometric Functions","Matrices and Determinants","Continuity and Differentiability","Application of Derivatives","Integrals","Application of Integrals","Differential Equations","Vector Algebra","Linear Programming","Probability"]
        },
        english: {
            11: ["The Portrait of a Lady","We're Not Afraid to Die","Discovering Tut","Landscape of the Soul","The Ailing Planet","The Browning Version","The Adventure","Silk Road","A Photograph","The Laburnum Top","The Voice of the Rain","Childhood","Father to Son","Hornbill Prose Chapters","Snapshots – Short Stories"],
            12: ["The Last Lesson","Lost Spring","Deep Water","The Rattrap","Indigo","Poets and Pancakes","The Interview","Going Places","My Mother at Sixty Six","An Elementary School Classroom","A Thing of Beauty","A Roadside Stand","Aunt Jennifer's Tigers","The Tiger King","The Enemy","On the Face of It","Memories of Childhood","Vistas Short Stories"]
        },
        history: {
            11: ["From the Beginning of Time","Writing and City Life","An Empire Across Three Continents","The Central Islamic Lands","Nomadic Empires","The Three Orders","Changing Cultural Traditions","Confrontation of Cultures","The Industrial Revolution","Displacing Indigenous Peoples","Paths to Modernisation"],
            12: ["Bricks, Beads and Bones – Harappan Civilisation","Kings, Farmers and Towns","Kinship, Caste and Class","Thinkers, Beliefs and Buildings","Through the Eyes of Travellers","Bhakti Sufi Traditions","An Imperial Capital – Vijayanagara","Peasants, Zamindars and the State","Kings and Chronicles – Mughal Courts","Colonialism and the Countryside","Rebels and the Raj – 1857","Colonial Cities","Mahatma Gandhi and the Nationalist Movement","Understanding Partition","Framing the Constitution"]
        },
        geography: {
            11: ["Geography as a Discipline","The Origin and Evolution of the Earth","Interior of the Earth","Distribution of Oceans and Continents","Minerals and Rocks","Geomorphic Processes","Landforms and their Evolution","Composition and Structure of Atmosphere","Solar Radiation, Heat Balance","Atmospheric Circulation","Water in the Atmosphere","World Climate and Climate Change","Water Oceans","Movements of Ocean Water","Life on the Earth","Biodiversity and Conservation","India Location","Structure and Physiography","Drainage System","Climate of India","Natural Vegetation","Soils of India","Natural Hazards"],
            12: ["Human Geography – Nature and Scope","The World Population","Population Composition","Human Development","Primary Activities","Secondary Activities","Tertiary and Quaternary Activities","Transport and Communication","International Trade","Human Settlements","Population – Distribution, Density","Migration – Types and Causes","Human Development (India)","Human Settlements (India)","Land Resources and Agriculture","Water Resources","Mineral and Energy Resources","Manufacturing Industries","Planning and Sustainable Development","Transport, Communication and Trade","International Trade","Geographical Perspective on Issues"]
        },
        political_science: {
            11: ["Political Theory – Introduction","Freedom","Equality","Social Justice","Rights","Citizenship","Nationalism","Secularism","Peace","Development","Constitution – Why and How","Rights in the Indian Constitution","Election and Representation","Executive","Legislature","Judiciary","Federalism","Local Governments","Constitution as a Living Document","The Philosophy of the Constitution"],
            12: ["Cold War Era","The End of Bipolarity","US Hegemony in World Politics","Alternative Centres of Power","Contemporary South Asia","International Organisations","Security in the Contemporary World","Environment and Natural Resources","Globalisation","Challenges of Nation Building","Era of One-Party Dominance","Politics of Planned Development","India's External Relations","Challenges to the Congress System","Crisis of the Constitutional Order","Rise of Popular Movements","Regional Aspirations","Recent Developments in Indian Politics"]
        },
        sociology: {
            11: ["Sociology and Society","Terms, Concepts and their Use","Understanding Social Institutions","Culture and Socialisation","Doing Sociology – Research Methods","Social Structure, Stratification and Social Processes","Social Change and Social Order","Environment and Society","Introducing Western Sociologists","Indian Sociologists"],
            12: ["Structural Change","Cultural Change","The Story of Indian Democracy","Change and Development in Rural Society","Change and Development in Industrial Society","Globalisation and Social Change","Mass Media and Communications","Social Movements","Indian Society – Introduction","The Demographic Structure","Social Institutions – Continuity and Change","Market as a Social Institution","Pattern of Social Inequality and Exclusion","Challenges of Cultural Diversity","Change and Development in India"]
        },
        psychology: {
            11: ["What is Psychology?","Methods of Enquiry in Psychology","The Bases of Human Behaviour","Human Development","Sensory, Attentional and Perceptual Processes","Learning","Human Memory","Thinking","Motivation and Emotion"],
            12: ["Variations in Psychological Attributes","Self and Personality","Meeting Life Challenges","Psychological Disorders","Therapeutic Approaches","Attitude and Social Cognition","Social Influence and Group Processes","Psychology and Life","Developing Psychological Skills"]
        }
    };

    /* ===================== CLASS 10th DATA ===================== */
    const tenthSubjectMeta = {
        math10:     { label: 'Mathematics',           emoji: '📐' },
        science10:  { label: 'Science',               emoji: '🔬' },
        sst10:      { label: 'Social Science',        emoji: '🌍' },
        english10:  { label: 'English',               emoji: '📝' },
        hindi10:    { label: 'Hindi',                 emoji: '🇮🇳' },
        sanskrit10: { label: 'Sanskrit',              emoji: '📜' },
        it10:       { label: 'Information Technology',emoji: '💻' },
    };

    const tenthChapters = {
        math10: ["Real Numbers","Polynomials","Pair of Linear Equations in Two Variables","Quadratic Equations","Arithmetic Progressions","Triangles","Coordinate Geometry","Introduction to Trigonometry","Some Applications of Trigonometry","Circles","Areas Related to Circles","Surface Areas and Volumes","Statistics","Probability"],
        science10: [
            "Chemical Reactions and Equations","Acids, Bases and Salts","Metals and Non-metals","Carbon and its Compounds",
            "Life Processes","Control and Coordination","How do Organisms Reproduce?","Heredity",
            "Light – Reflection and Refraction","The Human Eye and the Colourful World","Electricity","Magnetic Effects of Electric Current",
            "Our Environment"
        ],
        sst10: [
            "The Rise of Nationalism in Europe","Nationalism in India","The Making of a Global World","The Age of Industrialisation","Print Culture and the Modern World",
            "Resources and Development","Forest and Wildlife Resources","Water Resources","Agriculture","Minerals and Energy Resources","Manufacturing Industries","Lifelines of National Economy",
            "Power Sharing","Federalism","Democracy and Diversity","Gender, Religion and Caste","Popular Struggles and Movements","Political Parties","Outcomes of Democracy","Challenges to Democracy",
            "Development","Sectors of the Indian Economy","Money and Credit","Globalisation and the Indian Economy","Consumer Rights"
        ],
        english10: [
            "A Letter to God","Nelson Mandela: Long Walk to Freedom","Two Stories about Flying","From the Diary of Anne Frank","Glimpses of India","Mijbil the Otter","Madam Rides the Bus","The Sermon at Benares","The Proposal",
            "Dust of Snow","Fire and Ice","A Tiger in the Zoo","How to Tell Wild Animals","The Ball Poem","Amanda!","Animals","The Trees","Fog","The Tale of Custard the Dragon","For Anne Gregory",
            "A Triumph of Surgery","The Thief's Story","The Midnight Visitor","A Question of Trust","Footprints without Feet","The Making of a Scientist","The Necklace","The Hack Driver","Bholi","The Book That Saved the Earth"
        ],
        hindi10: [
            "Surdas – Pad","Tulsidas – Ram Lakshman Parshuram Samvad","Dev – Savaiya and Kavitt","Jaishankar Prasad – Aatmtrav","Suryakant Tripathi Nirala – Utsah / Yah Danturit Muskan","Nagarjun – Yah Danturit Muskan","Mahadevi Verma – Manushyata","Sarveshwar Dayal Saxena – Parvat Pradesh Mein Pavas","Manglesh Dabral – Toppi Shukla",
            "Balgobin Bhagat","Lakhnavi Andaz","Manviya Karuna Ki Divya Chamak","Ek Kahani Yeh Bhi","Strishthi","Ab Kahan Dusre Ke Dukh Se Dukhi Hone Wale","Paatlidhan","Maata Ka Aanchal","Sana Sana Hath Jodi"
        ],
        sanskrit10: [
            "Shuchiparyavaranam","Budhirbalam Tapo Nahi","Vyayamah Sarvada Pathyah","Ajatshatravah Kalikaya","Jananee Tulya Bhumi","Suktimoktam","Sauhrdan Iti Kim","Viswabandhutam","Paryavaranam","Swami Vivekanandasya Shikshitasya Darshan"],
        it10: [
            "Communication Skills","Self Management Skills","ICT Skills","Entrepreneurial Skills","Green Skills",
            "Digital Documentation Advanced","Electronic Spreadsheet Advanced","Database Management System","Web Applications","Employability Skills"]
    };

    /* ===================== GRADUATION DATA ===================== */
    const gradCourses = [
        { key: 'btech',  emoji: '⚙️',  label: 'B.Tech',  desc: 'CSE · ECE · Mechanical · Civil · EEE · IT · Chemical', branches: true },
        { key: 'bca',    emoji: '💻',  label: 'BCA',     desc: 'Computer Applications — 3 Years · 6 Semesters', branches: false },
        { key: 'bsc',    emoji: '🔬',  label: 'BSc',     desc: 'Physics · Chemistry · Maths · CS · Biology', branches: true },
        { key: 'ba',     emoji: '📚',  label: 'BA',      desc: 'History · Geography · Pol. Science · Economics · Sociology', branches: true },
        { key: 'bcom',   emoji: '💼',  label: 'BCom',    desc: 'General · Honours — 3 Years · 6 Semesters', branches: true },
        { key: 'bba',    emoji: '🏢',  label: 'BBA',     desc: 'Business Administration — 3 Years · 6 Semesters', branches: false },
    ];

    const gradBranches = {
        btech: [
            { key: 'btech_cse',   emoji: '🖥️',  label: 'CSE',         desc: 'Computer Science & Engineering' },
            { key: 'btech_ece',   emoji: '📡',  label: 'ECE',         desc: 'Electronics & Communication Engineering' },
            { key: 'btech_mech',  emoji: '⚙️',  label: 'Mechanical',  desc: 'Mechanical Engineering' },
            { key: 'btech_civil', emoji: '🏗️',  label: 'Civil',       desc: 'Civil Engineering' },
            { key: 'btech_eee',   emoji: '⚡',  label: 'EEE',         desc: 'Electrical & Electronics Engineering' },
            { key: 'btech_it',    emoji: '🌐',  label: 'IT',          desc: 'Information Technology' },
            { key: 'btech_chem',  emoji: '🧪',  label: 'Chemical',    desc: 'Chemical Engineering' },
            { key: 'btech_ai',    emoji: '🤖',  label: 'AI & DS',     desc: 'Artificial Intelligence & Data Science' },
        ],
        bsc: [
            { key: 'bsc_cs',      emoji: '💻',  label: 'Computer Science', desc: 'BSc Computer Science' },
            { key: 'bsc_physics', emoji: '⚛️',  label: 'Physics',    desc: 'BSc Physics' },
            { key: 'bsc_chem',    emoji: '🧪',  label: 'Chemistry',  desc: 'BSc Chemistry' },
            { key: 'bsc_maths',   emoji: '📐',  label: 'Mathematics',desc: 'BSc Mathematics' },
            { key: 'bsc_bio',     emoji: '🌱',  label: 'Biology',    desc: 'BSc Biology / Zoology / Botany' },
            { key: 'bsc_stats',   emoji: '📊',  label: 'Statistics', desc: 'BSc Statistics' },
            { key: 'bsc_it',      emoji: '🌐',  label: 'IT',         desc: 'BSc Information Technology' },
        ],
        ba: [
            { key: 'ba_history',  emoji: '🏛️',  label: 'History',          desc: 'BA History' },
            { key: 'ba_geo',      emoji: '🌍',  label: 'Geography',        desc: 'BA Geography' },
            { key: 'ba_polsci',   emoji: '⚖️',  label: 'Political Science',desc: 'BA Political Science' },
            { key: 'ba_eco',      emoji: '📊',  label: 'Economics',        desc: 'BA Economics' },
            { key: 'ba_soc',      emoji: '👥',  label: 'Sociology',        desc: 'BA Sociology' },
            { key: 'ba_psych',    emoji: '🧠',  label: 'Psychology',       desc: 'BA Psychology' },
            { key: 'ba_eng',      emoji: '📝',  label: 'English',          desc: 'BA English Literature' },
        ],
        bcom: [
            { key: 'bcom_gen',    emoji: '💼',  label: 'BCom General', desc: 'Bachelor of Commerce – General' },
            { key: 'bcom_hons',   emoji: '🏅',  label: 'BCom Honours', desc: 'Bachelor of Commerce – Honours' },
        ],
    };

    const gradSemesters = {
        btech_cse: {
            name: 'B.Tech CSE', totalSem: 8,
            sems: {
                1: ["Engineering Mathematics I","Engineering Physics","Engineering Chemistry","Basic Electrical Engineering","Engineering Graphics & Design","C Programming for Problem Solving","Communication Skills","Physics Lab","Chemistry Lab","Programming Lab"],
                2: ["Engineering Mathematics II","Engineering Mechanics","Environmental Science","Basic Electronics","Data Structures using C","Object Oriented Programming (C++)","Workshop Practice","Electronics Lab","Programming Lab"],
                3: ["Discrete Mathematics","Data Structures & Algorithms","Computer Organization & Architecture","Digital Electronics","Operating Systems","Database Management Systems (DBMS)","DSA Lab","OS Lab","DBMS Lab"],
                4: ["Design & Analysis of Algorithms","Computer Networks","Theory of Computation","Microprocessors & Interfacing","Software Engineering","Web Technologies (HTML/CSS/JS)","Networks Lab","Microprocessor Lab"],
                5: ["Compiler Design","Artificial Intelligence","Cloud Computing","Information Security & Cryptography","Open Elective I","Mini Project","AI Lab","Networks Security Lab"],
                6: ["Machine Learning","Big Data Analytics","Mobile Computing","Software Testing & Quality Assurance","Open Elective II","Project Work I","ML Lab","Android/Flutter Lab"],
                7: ["Deep Learning","Internet of Things (IoT)","Distributed Systems","Professional Elective I","Professional Elective II","Minor Project","IoT Lab"],
                8: ["Major Project / Capstone","Professional Elective III","Industrial Training / Internship","Project Presentation & Viva"]
            }
        },
        btech_ece: {
            name: 'B.Tech ECE', totalSem: 8,
            sems: {
                1: ["Engineering Mathematics I","Engineering Physics","Engineering Chemistry","Basic Electrical Engineering","Engineering Graphics","C Programming","Communication Skills","Physics Lab","Chemistry Lab","Programming Lab"],
                2: ["Engineering Mathematics II","Network Analysis","Engineering Mechanics","Environmental Science","Electronic Devices & Circuits","Object Oriented Programming","Electronics Lab","OOP Lab"],
                3: ["Signals & Systems","Digital Electronics","Electromagnetic Theory","Electronic Circuits","Microprocessors & Interfacing","Communications Engineering I","Signals Lab","Digital Electronics Lab"],
                4: ["Analog Communication","Digital Communication","VLSI Design Basics","Microwave Engineering","Control Systems","Antenna Theory","Communication Lab","VLSI Lab"],
                5: ["Digital Signal Processing","Wireless Communication","Embedded Systems","Information Theory & Coding","Open Elective I","Embedded Lab","DSP Lab"],
                6: ["Optical Fiber Communication","RF & Microwave Engineering","Advanced VLSI","Image Processing","Open Elective II","Project Work I","RF Lab"],
                7: ["5G & Advanced Wireless","Radar & Navigation Systems","IoT & Sensor Networks","Professional Elective I","Professional Elective II","Minor Project"],
                8: ["Major Project","Professional Elective III","Industrial Training","Project Presentation & Viva"]
            }
        },
        btech_mech: {
            name: 'B.Tech Mechanical', totalSem: 8,
            sems: {
                1: ["Engineering Mathematics I","Engineering Physics","Engineering Chemistry","Basic Electrical Engineering","Engineering Graphics","C Programming","Communication Skills","Physics Lab","Workshop Lab"],
                2: ["Engineering Mathematics II","Engineering Mechanics","Environmental Science","Basic Electronics","Material Science","Manufacturing Processes I","Mechanics Lab","Manufacturing Lab"],
                3: ["Engineering Thermodynamics","Fluid Mechanics","Kinematics of Machinery","Manufacturing Technology","Strength of Materials","Metrology & Instrumentation","Fluid Lab","Kinematics Lab"],
                4: ["Heat & Mass Transfer","Dynamics of Machinery","Machine Drawing","Applied Thermodynamics","Manufacturing Technology II","Industrial Engineering","Heat Transfer Lab","Dynamics Lab"],
                5: ["Machine Design","Internal Combustion Engines","Refrigeration & Air Conditioning","CAD/CAM","Operations Research","Elective I","CAD Lab","Machine Design Lab"],
                6: ["Finite Element Analysis","Production Planning & Control","Automobile Engineering","Robotics & Automation","Elective II","Project Work I","FEA Lab","Robotics Lab"],
                7: ["Advanced Manufacturing Processes","Mechatronics","Power Plant Engineering","Professional Elective I","Professional Elective II","Minor Project"],
                8: ["Major Project","Professional Elective III","Industrial Training / Internship","Project Presentation & Viva"]
            }
        },
        btech_civil: {
            name: 'B.Tech Civil', totalSem: 8,
            sems: {
                1: ["Engineering Mathematics I","Engineering Physics","Engineering Chemistry","Basic Electrical Engineering","Engineering Graphics","C Programming","Communication Skills","Physics Lab","Chemistry Lab"],
                2: ["Engineering Mathematics II","Engineering Mechanics","Environmental Science","Building Materials","Surveying I","Auto CAD Basics","Mechanics Lab","Surveying Lab"],
                3: ["Strength of Materials","Fluid Mechanics","Soil Mechanics","Surveying II","Building Construction","Structural Analysis I","Materials Lab","Fluid Lab"],
                4: ["Concrete Technology","Structural Analysis II","Hydraulics & Hydraulic Machines","Transportation Engineering I","Geotechnical Engineering","Estimation & Costing","Concrete Lab","Hydraulics Lab"],
                5: ["Design of Steel Structures","Design of RCC Structures","Environmental Engineering I","Transportation Engineering II","Elective I","Structural Design Lab"],
                6: ["Foundation Engineering","Environmental Engineering II","Construction Management","Water Resource Engineering","Elective II","Project Work I"],
                7: ["Advanced Foundation Design","Earthquake Engineering","Remote Sensing & GIS","Professional Elective I","Professional Elective II","Minor Project"],
                8: ["Major Project","Professional Elective III","Industrial Training","Project Presentation & Viva"]
            }
        },
        btech_eee: {
            name: 'B.Tech EEE', totalSem: 8,
            sems: {
                1: ["Engineering Mathematics I","Engineering Physics","Engineering Chemistry","Basic Electrical Engineering","Engineering Graphics","C Programming","Communication Skills","Physics Lab","EEE Lab"],
                2: ["Engineering Mathematics II","Circuit Analysis","Engineering Mechanics","Environmental Science","Basic Electronics","OOP C++","Circuit Lab","Electronics Lab"],
                3: ["Electrical Machines I","Power Systems I","Network Theory","Digital Electronics","Signals & Systems","Control Systems I","Machines Lab","Signals Lab"],
                4: ["Electrical Machines II","Power Systems II","Power Electronics","Microprocessors & Interfacing","Control Systems II","Measurement & Instrumentation","Power Electronics Lab","Microprocessor Lab"],
                5: ["Switchgear & Protection","High Voltage Engineering","Drives & Control","Renewable Energy Systems","Elective I","Power Systems Lab"],
                6: ["Power System Operation & Control","HVDC Transmission","Smart Grid Technology","Elective II","Project Work I","Smart Grid Lab"],
                7: ["Advanced Power Systems","Electric Vehicles","IoT in Power Systems","Professional Elective I","Professional Elective II","Minor Project"],
                8: ["Major Project","Professional Elective III","Industrial Training","Project Presentation & Viva"]
            }
        },
        btech_it: {
            name: 'B.Tech IT', totalSem: 8,
            sems: {
                1: ["Engineering Mathematics I","Engineering Physics","Engineering Chemistry","Basic Electrical Engineering","Engineering Graphics","C Programming","Communication Skills","Physics Lab","Programming Lab"],
                2: ["Engineering Mathematics II","Data Structures","Environmental Science","Basic Electronics","OOP C++","Digital Electronics","DSA Lab","OOP Lab"],
                3: ["Discrete Mathematics","Computer Organization","Operating Systems","DBMS","Web Development (HTML/CSS/JS)","Software Engineering","OS Lab","DBMS Lab"],
                4: ["Design & Analysis of Algorithms","Computer Networks","Theory of Computation","Web Technologies (PHP/React)","Open Elective I","Networks Lab","Web Dev Lab"],
                5: ["Artificial Intelligence","Cloud Computing","Information Security","Mobile App Development","Open Elective II","AI Lab","Mobile App Lab"],
                6: ["Machine Learning","DevOps & Containerization","Internet of Things","Agile & Project Management","Project Work I","ML Lab","DevOps Lab"],
                7: ["Deep Learning & NLP","Blockchain Technology","Cyber Security Advanced","Professional Elective I","Professional Elective II","Minor Project"],
                8: ["Major Project","Professional Elective III","Internship","Project Presentation & Viva"]
            }
        },
        btech_chem: {
            name: 'B.Tech Chemical', totalSem: 8,
            sems: {
                1: ["Engineering Mathematics I","Engineering Physics","Engineering Chemistry","Basics of Chemical Engineering","Engineering Graphics","C Programming","Communication Skills","Physics Lab","Chemistry Lab"],
                2: ["Engineering Mathematics II","Fluid Mechanics","Engineering Mechanics","Environmental Science","Mass Transfer I","Chemical Process Calculations","Fluid Lab","Process Lab"],
                3: ["Heat Transfer","Thermodynamics","Chemical Reaction Engineering I","Mass Transfer II","Numerical Methods","Instrumentation & Control","Heat Transfer Lab"],
                4: ["Chemical Reaction Engineering II","Transport Phenomena","Process Dynamics & Control","Separation Processes","Plant Economics","Process Control Lab"],
                5: ["Process Design","Petroleum Refining","Polymer Technology","Environmental Engineering","Elective I","Process Design Lab"],
                6: ["Process Simulation (ASPEN)","Safety & Hazard Analysis","Pharmaceutical Engineering","Elective II","Project Work I","Simulation Lab"],
                7: ["Nanotechnology","Biochemical Engineering","Professional Elective I","Professional Elective II","Minor Project"],
                8: ["Major Project","Professional Elective III","Industrial Training / Internship","Project Presentation & Viva"]
            }
        },
        btech_ai: {
            name: 'B.Tech AI & Data Science', totalSem: 8,
            sems: {
                1: ["Engineering Mathematics I","Engineering Physics","Python Programming","Probability & Statistics","Engineering Graphics","Communication Skills","Python Lab","Stats Lab"],
                2: ["Engineering Mathematics II","Data Structures","Linear Algebra","Environmental Science","OOP with Python","Database Systems","DSA Lab","DBMS Lab"],
                3: ["Discrete Mathematics","Computer Organization","Machine Learning I","Data Science Fundamentals","Statistics for Data Science","ML Lab","Data Analysis Lab"],
                4: ["Machine Learning II","Deep Learning","Natural Language Processing Basics","Big Data Technologies","Computer Vision Basics","Deep Learning Lab","Big Data Lab"],
                5: ["Reinforcement Learning","Advanced NLP","Cloud Computing for AI","Data Visualization","Open Elective I","RL Lab","Visualization Lab"],
                6: ["AI Ethics & Governance","MLOps & Model Deployment","Generative AI","Time Series Analysis","Open Elective II","Project Work I","MLOps Lab"],
                7: ["Advanced Computer Vision","Graph Neural Networks","AI for Healthcare / Finance","Professional Elective I","Professional Elective II","Minor Project"],
                8: ["Major Project / Capstone","Professional Elective III","Internship","Project Presentation & Viva"]
            }
        },
        bca: {
            name: 'BCA', totalSem: 6,
            sems: {
                1: ["Mathematics I","Computer Fundamentals & OS","Programming in C","Digital Electronics Basics","Environmental Science","Communication Skills","C Programming Lab","Digital Electronics Lab"],
                2: ["Mathematics II","Data Structures using C","OOP with C++","Computer Organization & Architecture","Business Communication","Internet Fundamentals","Data Structures Lab","OOP Lab"],
                3: ["Discrete Mathematics","Database Management Systems","Operating Systems","Java Programming","Web Design (HTML/CSS/JavaScript)","DBMS Lab","Java Lab","Web Design Lab"],
                4: ["Design & Analysis of Algorithms","Computer Networks","Software Engineering","Python Programming","Advanced Java (JDBC, Servlets, JSP)","Networking Lab","Python Lab"],
                5: ["Artificial Intelligence","Mobile App Development (Android/Flutter)","Information Security & Cryptography","Cloud Computing","Project Work I","AI Lab","Mobile Dev Lab"],
                6: ["Machine Learning Basics","Big Data Technologies (Hadoop/Spark)","Entrepreneurship Development","Professional Ethics in IT","Major Project","Elective (IoT / Blockchain / Data Science)"]
            }
        },
        bsc_cs: {
            name: 'BSc Computer Science', totalSem: 6,
            sems: {
                1: ["Mathematics I","Physics / Electronics","Programming in C","Computer Organization","Environmental Science","C Lab","Physics Lab"],
                2: ["Mathematics II","Data Structures","OOP with C++","Operating Systems Basics","Computer Architecture","Data Structures Lab","OOP Lab"],
                3: ["Discrete Mathematics","DBMS","Design & Analysis of Algorithms","Java Programming","Computer Networks I","DBMS Lab","Java Lab"],
                4: ["Software Engineering","Web Technologies","Python Programming","Microprocessors","Computer Networks II","Python Lab","Networking Lab"],
                5: ["Artificial Intelligence","Machine Learning","Information Security","Mobile Computing","Project I","AI Lab","Mobile Lab"],
                6: ["Big Data & Cloud Computing","Deep Learning Basics","Entrepreneurship / E-Commerce","Major Project","Elective (IoT / Blockchain)"]
            }
        },
        bsc_physics: {
            name: 'BSc Physics', totalSem: 6,
            sems: {
                1: ["Mechanics","Electricity & Magnetism","Mathematical Physics I","Inorganic Chemistry (ancillary)","Physics Lab I","Chemistry Lab"],
                2: ["Waves & Oscillations","Optics","Mathematical Physics II","Organic Chemistry (ancillary)","Physics Lab II"],
                3: ["Thermal Physics & Statistical Mechanics","Quantum Mechanics I","Electronics I","Numerical Methods","Physics Lab III","Electronics Lab"],
                4: ["Electromagnetic Theory","Classical Mechanics","Quantum Mechanics II","Electronics II","Physics Lab IV"],
                5: ["Nuclear & Particle Physics","Solid State Physics","Atomic & Molecular Spectroscopy","Astrophysics / Elective I","Advanced Physics Lab"],
                6: ["Special Theory of Relativity","Laser & Fiber Optics","Research Methodology","Major Project / Dissertation","Elective II"]
            }
        },
        bsc_chem: {
            name: 'BSc Chemistry', totalSem: 6,
            sems: {
                1: ["Inorganic Chemistry I","Organic Chemistry I","Physical Chemistry I","Mathematics (ancillary)","Chemistry Lab I"],
                2: ["Inorganic Chemistry II","Organic Chemistry II","Physical Chemistry II","Physics (ancillary)","Chemistry Lab II"],
                3: ["Inorganic Chemistry III","Organic Chemistry III – Reaction Mechanisms","Thermodynamics & Kinetics","Analytical Chemistry I","Chemistry Lab III"],
                4: ["Coordination Chemistry","Spectroscopy","Electrochemistry","Analytical Chemistry II (Chromatography)","Chemistry Lab IV"],
                5: ["Polymer Chemistry","Biochemistry","Industrial Chemistry","Medicinal Chemistry / Elective I","Advanced Chem Lab"],
                6: ["Environmental Chemistry","Green Chemistry","Research Methodology","Major Project","Elective II"]
            }
        },
        bsc_maths: {
            name: 'BSc Mathematics', totalSem: 6,
            sems: {
                1: ["Calculus","Algebra I (Groups)","Real Analysis I","Physics (ancillary)","Maths Lab / Problem Sessions"],
                2: ["Differential Equations","Algebra II (Rings & Fields)","Real Analysis II","Statistics I","Maths Problem Lab"],
                3: ["Abstract Algebra","Complex Analysis","Linear Algebra","Numerical Methods","Statistics II"],
                4: ["Topology","Mathematical Methods","Partial Differential Equations","Operations Research","Discrete Mathematics"],
                5: ["Functional Analysis","Differential Geometry","Graph Theory","Elective I (Coding Theory / Cryptography)","Project I"],
                6: ["Advanced Analysis","Mathematical Logic","Research Methodology","Major Project / Dissertation","Elective II"]
            }
        },
        bsc_bio: {
            name: 'BSc Biology / Botany / Zoology', totalSem: 6,
            sems: {
                1: ["Cell Biology","Plant Diversity (Algae, Fungi, Bryophytes)","Animal Diversity I (Invertebrates)","Biochemistry I","Bio Lab I"],
                2: ["Genetics","Plant Anatomy & Embryology","Animal Diversity II (Vertebrates)","Biochemistry II","Bio Lab II"],
                3: ["Molecular Biology","Plant Physiology","Animal Physiology","Microbiology","Bio Lab III"],
                4: ["Ecology & Environment","Plant Taxonomy","Developmental Biology","Immunology","Bio Lab IV"],
                5: ["Biotechnology","Evolutionary Biology","Endocrinology","Bioinformatics / Elective I","Advanced Bio Lab"],
                6: ["Research Methodology","Environmental Biotechnology","Biodiversity & Conservation","Major Project / Dissertation","Elective II"]
            }
        },
        bsc_stats: {
            name: 'BSc Statistics', totalSem: 6,
            sems: {
                1: ["Descriptive Statistics","Probability Theory I","Mathematics I (Calculus)","Computer Fundamentals","Statistics Lab I"],
                2: ["Probability Theory II","Statistical Distributions","Mathematics II","Data Analysis using Excel/SPSS","Statistics Lab II"],
                3: ["Statistical Inference I","Regression Analysis","Sampling Theory","R Programming","Statistics Lab III"],
                4: ["Statistical Inference II","Design of Experiments","Time Series Analysis","Python for Statistics","Statistics Lab IV"],
                5: ["Multivariate Analysis","Operations Research","Actuarial Statistics","Data Mining / Elective I","Project I"],
                6: ["Bayesian Statistics","Machine Learning Basics","Research Methodology","Major Project","Elective II"]
            }
        },
        bsc_it: {
            name: 'BSc IT', totalSem: 6,
            sems: {
                1: ["Mathematics I","Computer Fundamentals","Programming in C","Digital Electronics","Environmental Science","C Lab","Digital Lab"],
                2: ["Mathematics II","Data Structures","OOP C++","Operating Systems","Web Basics (HTML/CSS)","DSA Lab","Web Lab"],
                3: ["DBMS","Computer Networks","Java Programming","Software Engineering","JavaScript & PHP","DBMS Lab","Java Lab"],
                4: ["Python Programming","Advanced Web (React/Node)","Cloud Computing Basics","Information Security","Networking Lab","Python Lab"],
                5: ["Mobile App Development","Data Analytics","AI & Machine Learning Basics","Project Work I","Mobile Dev Lab","Data Lab"],
                6: ["Cybersecurity","DevOps Basics","Entrepreneurship","Major Project","Elective (Blockchain / IoT)"]
            }
        },
        ba_history: {
            name: 'BA History', totalSem: 6,
            sems: {
                1: ["Ancient History of India","World History: Ancient Civilizations","Historical Method & Research","Political Science (ancillary)","Tutorial / Seminars"],
                2: ["Medieval History of India","World History: Medieval Period","Epigraphy & Numismatics","Sociology (ancillary)","Source Reading Lab"],
                3: ["History of Modern India (1757–1857)","History of Europe (17th–19th Century)","Historical Geography of India","Elective I"],
                4: ["History of Modern India (1857–1947)","History of Asia & Africa","Historiography","Elective II"],
                5: ["Contemporary World History","Post-Independence India","History of Science & Technology","Project Work I","Elective III"],
                6: ["Indian Foreign Policy & Diplomacy","Heritage & Museum Studies","Research Methodology","Major Project / Dissertation","Elective IV"]
            }
        },
        ba_geo: {
            name: 'BA Geography', totalSem: 6,
            sems: {
                1: ["Physical Geography I (Geomorphology)","Cartography & Map Work","Environmental Studies","Sociology (ancillary)","Geo Lab I"],
                2: ["Physical Geography II (Climatology)","Geography of India","Statistics in Geography","Economics (ancillary)","Geo Lab II"],
                3: ["Human Geography","Economic Geography","Remote Sensing Basics","Regional Planning","Geo Lab III"],
                4: ["Urban Geography","Agricultural Geography","GIS & GPS Applications","Population Geography","Geo Lab IV"],
                5: ["Political Geography","Geography of Natural Resources","Environmental Management","Project Work I","Advanced Geo Lab"],
                6: ["Tourism Geography","Research Methodology","Global Issues & Sustainable Development","Major Project / Dissertation","Elective"]
            }
        },
        ba_polsci: {
            name: 'BA Political Science', totalSem: 6,
            sems: {
                1: ["Political Theory","Indian Government & Politics","Classical Political Thought (Plato, Aristotle)","History (ancillary)","Tutorials"],
                2: ["Comparative Government","International Relations","Modern Political Thought","Sociology (ancillary)","Seminars"],
                3: ["Indian Constitution & Politics","Theories of State & Sovereignty","Political Ideologies","Public Administration I"],
                4: ["Federalism & Decentralization","India's Foreign Policy","Public Administration II","International Organizations (UN, WTO)"],
                5: ["Contemporary Issues in World Politics","Electoral Politics in India","Human Rights","Project Work I","Elective I"],
                6: ["South Asian Politics","Gender & Politics","Research Methodology","Major Project / Dissertation","Elective II"]
            }
        },
        ba_eco: {
            name: 'BA Economics', totalSem: 6,
            sems: {
                1: ["Microeconomics I","Mathematical Methods for Economics","Indian Economy I","Statistics I","Environmental Economics"],
                2: ["Microeconomics II","Statistics II","Indian Economy II","Economic History of India","Mathematics II"],
                3: ["Macroeconomics I","Public Finance","Development Economics","Research Methodology","Statistics III"],
                4: ["Macroeconomics II","Money & Banking","International Trade & Finance","Industrial Economics","Econometrics I"],
                5: ["Advanced Microeconomics","Agricultural Economics","Labour Economics","Econometrics II","Project Work I"],
                6: ["Advanced Macroeconomics","Environmental Economics Advanced","Entrepreneurship","Major Project / Dissertation","Elective"]
            }
        },
        ba_soc: {
            name: 'BA Sociology', totalSem: 6,
            sems: {
                1: ["Introduction to Sociology","Social Institutions","History (ancillary)","Political Science (ancillary)","Tutorials"],
                2: ["Sociological Theory I","Culture & Society","Research Methods I","Psychology (ancillary)","Seminars"],
                3: ["Indian Society","Sociological Theory II","Social Stratification","Research Methods II","Statistics for Social Science"],
                4: ["Urban & Rural Sociology","Gender Studies","Economy & Society","Political Sociology","Research Methods III"],
                5: ["Sociology of Development","Globalisation & Society","Social Movements","Project Work I","Elective I"],
                6: ["Environmental Sociology","Sociology of Health & Medicine","Research Methodology","Major Project / Dissertation","Elective II"]
            }
        },
        ba_psych: {
            name: 'BA Psychology', totalSem: 6,
            sems: {
                1: ["Introduction to Psychology","Biological Basis of Behaviour","Statistics I","Philosophy (ancillary)","Psych Lab I"],
                2: ["Cognitive Psychology","Developmental Psychology","Statistics II","Sociology (ancillary)","Psych Lab II"],
                3: ["Social Psychology","Personality Theories","Research Methods I","Abnormal Psychology Basics","Psych Lab III"],
                4: ["Clinical Psychology","Industrial & Organizational Psychology","Psychological Testing","Research Methods II","Psych Lab IV"],
                5: ["Counselling Psychology","Neuropsychology","Health Psychology","Project Work I","Advanced Psych Lab"],
                6: ["Positive Psychology","Psychopathology & DSM","Research Methodology","Major Project / Dissertation","Elective"]
            }
        },
        ba_eng: {
            name: 'BA English', totalSem: 6,
            sems: {
                1: ["British Literature I (Medieval & Renaissance)","Introduction to Literary Theory","History (ancillary)","Linguistics Basics","Tutorials"],
                2: ["British Literature II (Restoration & 18th C)","Drama Studies","History of English Language","Sociology (ancillary)","Close Reading Seminars"],
                3: ["Romantic & Victorian Literature","Novel Studies","Postcolonial Literature","Research Methods I","Creative Writing I"],
                4: ["Modern British & American Literature","Indian Writing in English","Film Studies / Media Studies","Research Methods II","Creative Writing II"],
                5: ["Contemporary World Literature","Gender Studies in Literature","Translation Studies","Project Work I","Elective I"],
                6: ["Critical Theory Advanced","Research Methodology","Dissertation / Major Project","Elective II","Viva"]
            }
        },
        bcom_gen: {
            name: 'BCom General', totalSem: 6,
            sems: {
                1: ["Financial Accounting","Business Organization & Management","Business Mathematics","Micro Economics","Communication Skills","Accounts Lab"],
                2: ["Advanced Accounting","Company Law","Business Statistics","Macro Economics","Organizational Behaviour","Stats Lab"],
                3: ["Corporate Accounting","Income Tax – Direct Tax","Business Law (Contract, Sale of Goods)","Cost Accounting","E-Commerce Basics","Accounts Lab II"],
                4: ["Advanced Corporate Accounting","GST & Indirect Tax","Banking & Insurance","Management Accounting","Financial Markets & Services","Tax Lab"],
                5: ["Financial Management","Auditing & Assurance","Entrepreneurship Development","International Business","Project Work I","Finance Lab"],
                6: ["Strategic Management","Business Ethics","Research Methodology","Major Project","Elective (Investment Analysis / HR Management)"]
            }
        },
        bcom_hons: {
            name: 'BCom Honours', totalSem: 6,
            sems: {
                1: ["Financial Accounting","Business Mathematics & Statistics","Microeconomics","Business Communication","C Programming Basics","Accounts Lab"],
                2: ["Business Laws","Corporate Accounting","Macroeconomics","Computer Applications in Business","Business Statistics II","Computer Lab"],
                3: ["Income Tax – Direct Tax","Cost & Management Accounting","Company Law","Financial Markets","Banking Theory","Accounts Lab II"],
                4: ["GST & Indirect Taxation","Advanced Financial Accounting","Indian Economy","Business Regulatory Framework","Elective I","Tax Lab"],
                5: ["Financial Management","Auditing & Corporate Governance","International Finance","Entrepreneurship","Project Work I","Finance Lab"],
                6: ["Security Analysis & Portfolio Management","Advanced Corporate Finance","Research Methodology","Major Project / Thesis","Elective II"]
            }
        },
        bba: {
            name: 'BBA', totalSem: 6,
            sems: {
                1: ["Principles of Management","Business Communication","Financial Accounting","Micro Economics","Business Mathematics","IT Fundamentals","Accounts Lab"],
                2: ["Organizational Behaviour","Business Laws","Cost Accounting","Macro Economics","Statistics for Business","Business Communication Lab"],
                3: ["Marketing Management","Human Resource Management","Financial Management","Management Accounting","Business Research Methods","Marketing Lab"],
                4: ["Operations Management","Entrepreneurship Development","Strategic Management","Consumer Behaviour","GST & Taxation","Project Planning"],
                5: ["International Business","Project Management","E-Commerce & Digital Marketing","Supply Chain Management","Project Work I","Elective I"],
                6: ["Business Ethics & Corporate Governance","Strategic Financial Management","Research Methodology","Major Project","Elective II (Finance / HR / Marketing)"]
            }
        },
    };

    /* ===================== GRADUATION SUBJECT CHAPTERS ===================== */
    const gradSubjectChapters = {
      // ── COMMON ENGINEERING (shared across branches) ──
      "Engineering Mathematics I":["Unit 1: Matrices & Determinants (Types, Rank, Eigenvalues, Cayley-Hamilton)","Unit 2: Differential Calculus (Limits, Derivatives, Taylor Series, Maclaurin)","Unit 3: Integral Calculus (Definite & Indefinite, Beta/Gamma, Applications)","Unit 4: Vector Calculus (Gradient, Divergence, Curl, Green/Gauss/Stokes)","Unit 5: Differential Equations (ODE 1st & 2nd order, Homogeneous, Linear)"],
      "Engineering Mathematics II":["Unit 1: Complex Numbers & Functions (Analytic, Cauchy-Riemann)","Unit 2: Complex Integration (Cauchy's Theorem, Residues, Poles)","Unit 3: Laplace Transforms (Properties, Inverse, Applications)","Unit 4: Fourier Series (Half-range, Parseval's Theorem)","Unit 5: Fourier Transforms & Z-Transforms"],
      "Engineering Physics":["Unit 1: Wave Optics (Interference, Diffraction, Polarization)","Unit 2: Quantum Mechanics (Photoelectric, deBroglie, Schrödinger)","Unit 3: Crystal Structure & X-ray Diffraction","Unit 4: Semiconductor Physics & Devices","Unit 5: Lasers & Fiber Optics","Unit 6: Superconductivity & Nanomaterials"],
      "Engineering Chemistry":["Unit 1: Water Treatment (Hardness, Softening, Boiler Problems)","Unit 2: Fuels & Combustion (Calorific Value, Solid/Liquid/Gaseous fuels)","Unit 3: Polymers & Plastics (Types, Synthesis, Properties)","Unit 4: Electrochemistry (Cells, Corrosion, Batteries)","Unit 5: Lubricants & Surface Coatings","Unit 6: Green Chemistry & Environmental Issues"],
      "Basic Electrical Engineering":["Unit 1: DC Circuits (Ohm's Law, KVL, KCL, Thevenin/Norton)","Unit 2: AC Circuits (Phasors, RLC, Power Factor)","Unit 3: Transformers (Principle, Efficiency, Losses)","Unit 4: DC Machines (Generator, Motor, Speed Control)","Unit 5: AC Machines (Induction Motor, Synchronous)","Unit 6: Measuring Instruments & Earthing"],
      "Engineering Graphics & Design":["Unit 1: Scales, Projections & Lettering","Unit 2: Orthographic Projections (1st & 3rd angle)","Unit 3: Isometric Views & Perspective Drawing","Unit 4: Section Views & Auxiliary Projections","Unit 5: AutoCAD Basics (2D Drafting, Commands)"],
      "C Programming for Problem Solving":["Unit 1: Basics (Data Types, Operators, I/O, Control Structures)","Unit 2: Functions (Recursion, Scope, Storage Classes)","Unit 3: Arrays & Strings (1D/2D Arrays, String Functions)","Unit 4: Pointers (Pointer Arithmetic, Pointer to Array/Function)","Unit 5: Structures, Unions & Enumerations","Unit 6: File Handling (fopen, fclose, fread, fwrite)"],
      "Communication Skills":["Unit 1: Communication Basics (Types, Barriers, Channels)","Unit 2: Technical Writing (Reports, Emails, Proposals)","Unit 3: Presentations & Public Speaking","Unit 4: Group Discussion & Interview Skills","Unit 5: Professional English & Grammar"],
      "Engineering Mechanics":["Unit 1: Statics — Forces, Moments, Free Body Diagrams","Unit 2: Centroid, Centre of Gravity, Moment of Inertia","Unit 3: Friction (Laws, Angle of Friction, Belt Friction)","Unit 4: Dynamics — Kinematics (Rectilinear, Curvilinear)","Unit 5: Kinetics (Newton's Laws, Work-Energy, Impulse-Momentum)"],
      "Environmental Science":["Unit 1: Ecosystem (Structure, Types, Food Chain/Web)","Unit 2: Biodiversity (Types, Threats, Conservation)","Unit 3: Environmental Pollution (Air, Water, Soil, Noise)","Unit 4: Natural Resources & Sustainable Development","Unit 5: Environmental Legislation & Disaster Management"],
      "Workshop Practice":["Unit 1: Carpentry (Joints, Tools, Processes)","Unit 2: Fitting (Files, Chisels, Hacksaw, Marking)","Unit 3: Welding (Gas, Arc, TIG/MIG)","Unit 4: Smithy & Foundry (Forging, Casting Basics)","Unit 5: Electrical Wiring & PCB Basics"],
      "Physics Lab":["Exp 1: Newton's Rings (Wavelength of Light)","Exp 2: Diffraction Grating (Spectrometer)","Exp 3: Dielectric Constant Measurement","Exp 4: Energy Gap of Semiconductor","Exp 5: Torsional Pendulum (Rigidity Modulus)","Exp 6: Laser Diffraction"],
      "Chemistry Lab":["Exp 1: Determination of Hardness of Water","Exp 2: Acid-Base Titration & pH Measurement","Exp 3: Preparation of Soap/Polymer","Exp 4: Calorific Value of Fuel","Exp 5: Corrosion Rate Measurement","Exp 6: Estimation of Iron by KMnO4"],
      "Programming Lab":["Lab 1: Basic Programs (Hello World, I/O, Operators)","Lab 2: Control Structures (if-else, loops, switch)","Lab 3: Functions & Recursion","Lab 4: Arrays & Strings Manipulation","Lab 5: Pointers & Dynamic Memory","Lab 6: File Handling Programs"],
      "Electronics Lab":["Lab 1: Diode Characteristics (V-I Curves)","Lab 2: Zener Diode Voltage Regulator","Lab 3: Transistor CE/CB/CC Characteristics","Lab 4: BJT as a Switch / Amplifier","Lab 5: Op-Amp circuits (Adder, Comparator, Integrator)","Lab 6: Rectifier Circuits (Half/Full Wave, Filters)"],
      "OOP Lab":["Lab 1: Classes, Objects, Constructors/Destructors","Lab 2: Inheritance & Method Overriding","Lab 3: Polymorphism (Compile-time & Runtime)","Lab 4: Templates & STL Basics","Lab 5: Exception Handling","Lab 6: File I/O using Streams"],

      // ── DATA STRUCTURES & ALGORITHMS ──
      "Data Structures using C":["Unit 1: Arrays & Strings (Operations, 2D Arrays)","Unit 2: Linked Lists (Singly, Doubly, Circular)","Unit 3: Stacks & Queues (Array/LL based, Applications)","Unit 4: Trees (Binary Tree, BST, Traversals, AVL)","Unit 5: Graphs (Representation, BFS, DFS)","Unit 6: Sorting & Searching (Bubble, Merge, Quick, Heap, Binary Search)","Unit 7: Hashing (Hash Functions, Collision Resolution)"],
      "Data Structures & Algorithms":["Unit 1: Algorithm Analysis (Time/Space Complexity, Big O)","Unit 2: Linear Structures (Arrays, Linked Lists, Stacks, Queues)","Unit 3: Trees (BST, AVL, Red-Black, B-Trees)","Unit 4: Heaps & Priority Queues","Unit 5: Graphs (BFS, DFS, Dijkstra, Bellman-Ford, Floyd-Warshall)","Unit 6: Advanced Sorting (Merge, Quick, Heap, Radix, Counting)","Unit 7: Dynamic Programming & Greedy Algorithms","Unit 8: String Algorithms (KMP, Rabin-Karp, Tries)"],
      "DSA Lab":["Lab 1: Array Operations & Searching","Lab 2: Linked List Insertions & Deletions","Lab 3: Stack & Queue Implementations","Lab 4: BST (Insert, Delete, Traversal)","Lab 5: Graph BFS & DFS","Lab 6: Sorting Algorithms Comparison","Lab 7: Hashing Implementations"],
      "Data Structures Lab":["Lab 1: Array & String Operations","Lab 2: Singly & Doubly Linked Lists","Lab 3: Stack using Array and Linked List","Lab 4: Queue & Circular Queue","Lab 5: Binary Tree Traversals","Lab 6: BST Operations","Lab 7: Sorting Algorithms"],

      // ── OOP / JAVA / C++ ──
      "OOP with C++":["Unit 1: Classes & Objects (Access specifiers, Static members)","Unit 2: Constructors, Destructors & Copy Semantics","Unit 3: Inheritance (Single, Multiple, Multilevel, Virtual)","Unit 4: Polymorphism (Function Overloading, Virtual Functions, Abstract Classes)","Unit 5: Templates & Generic Programming","Unit 6: Exception Handling & RTTI","Unit 7: STL (Vectors, Maps, Sets, Algorithms)","Unit 8: File Streams & I/O"],
      "Object Oriented Programming (C++)":["Unit 1: Basics of OOP (Encapsulation, Inheritance, Polymorphism)","Unit 2: Classes, Objects & Constructors","Unit 3: Operator Overloading & Type Conversion","Unit 4: Inheritance & Virtual Functions","Unit 5: Templates & Exception Handling","Unit 6: STL & File Handling"],
      "Java Programming":["Unit 1: Java Basics (JVM, Data Types, Operators, Control Flow)","Unit 2: Classes & Objects (Constructors, Methods, this keyword)","Unit 3: Inheritance & Interfaces","Unit 4: Packages, Access Modifiers & Exception Handling","Unit 5: Multithreading & Concurrency","Unit 6: Collections Framework (ArrayList, HashMap, Iterator)","Unit 7: File I/O & Serialization","Unit 8: JDBC Basics"],
      "Java Lab":["Lab 1: Basic OOP — Class, Object, Constructors","Lab 2: Inheritance & Polymorphism","Lab 3: Interfaces & Abstract Classes","Lab 4: Exception Handling","Lab 5: Collections — ArrayList, HashMap","Lab 6: Multithreading","Lab 7: File I/O & JDBC"],

      // ── COMPUTER SCIENCE CORE ──
      "Discrete Mathematics":["Unit 1: Mathematical Logic (Propositions, Quantifiers, Proof Techniques)","Unit 2: Set Theory & Relations (Closure, Equivalence, Partial Order)","Unit 3: Functions (Bijection, Composition, Inverse)","Unit 4: Combinatorics (Permutations, Combinations, Pigeonhole, Inclusion-Exclusion)","Unit 5: Graph Theory (Connectivity, Trees, Spanning Trees, Eulerian/Hamiltonian)","Unit 6: Lattices & Boolean Algebra"],
      "Computer Organization & Architecture":["Unit 1: Number Systems & Boolean Algebra","Unit 2: ALU Design & Combinational Circuits","Unit 3: Sequential Circuits (Flip-Flops, Registers, Counters)","Unit 4: Memory Organisation (Cache, Virtual Memory, RAM types)","Unit 5: CPU Design (Instruction Set, Pipelining, Hazards)","Unit 6: I/O Organisation & Interrupts","Unit 7: Parallel Processing Basics"],
      "Computer Organization":["Unit 1: Number Systems & Data Representation","Unit 2: Basic Computer Organisation & Design","Unit 3: Central Processing Unit & Instruction Set","Unit 4: Memory Hierarchy (Cache, RAM, ROM)","Unit 5: Input/Output Organisation","Unit 6: Pipelining & Parallel Processing"],
      "Digital Electronics":["Unit 1: Number Systems & Boolean Algebra","Unit 2: Combinational Circuits (Adders, Subtractors, Encoders, Decoders, MUX)","Unit 3: Sequential Circuits (Flip-Flops — SR, JK, D, T)","Unit 4: Registers, Counters & Shift Registers","Unit 5: Memory (ROM, RAM, PLA)","Unit 6: A/D and D/A Converters","Unit 7: VHDL/Verilog Basics"],
      "Digital Electronics Basics":["Unit 1: Number Systems (Binary, Octal, Hex) & Conversions","Unit 2: Boolean Algebra & Logic Gates (AND/OR/NOT/NAND/NOR/XOR)","Unit 3: Combinational Logic (Half/Full Adder, Encoder, Decoder)","Unit 4: Sequential Logic (Latches, Flip-Flops)","Unit 5: Registers & Counters"],
      "Digital Electronics Lab":["Lab 1: Logic Gates Verification","Lab 2: Combinational Circuits (Adder, Subtractor)","Lab 3: Encoders, Decoders & MUX","Lab 4: Flip-Flop Implementations","Lab 5: Registers & Counters","Lab 6: VHDL/Verilog Simple Programs"],
      "Operating Systems":["Unit 1: OS Concepts (Process, Thread, Scheduling — FCFS, SJF, Round Robin)","Unit 2: Process Synchronisation (Semaphores, Mutex, Classic Problems)","Unit 3: Deadlock (Detection, Prevention, Avoidance — Banker's Algorithm)","Unit 4: Memory Management (Paging, Segmentation, Virtual Memory, Page Replacement)","Unit 5: File System (Structure, Allocation Methods, Directory)","Unit 6: I/O Management & Disk Scheduling"],
      "Operating Systems Basics":["Unit 1: Introduction to OS (Types, Structure, System Calls)","Unit 2: Process Management (States, PCB, Scheduling Algorithms)","Unit 3: Memory Management (Paging, Segmentation)","Unit 4: File Systems & I/O","Unit 5: Deadlock Concepts"],
      "OS Lab":["Lab 1: Shell Scripting Basics","Lab 2: Process Creation (fork, exec)","Lab 3: Scheduling Algorithm Simulation","Lab 4: Page Replacement Algorithms","Lab 5: Disk Scheduling Algorithms","Lab 6: IPC (Pipes, Shared Memory)"],
      "Database Management Systems (DBMS)":["Unit 1: ER Model & Database Design (Entities, Relationships, Normalization)","Unit 2: Relational Model (Keys, Relational Algebra, SQL DDL/DML)","Unit 3: Advanced SQL (Joins, Subqueries, Views, Triggers, Stored Procedures)","Unit 4: Normalization (1NF, 2NF, 3NF, BCNF)","Unit 5: Transaction Management (ACID, Concurrency Control, Locking)","Unit 6: Indexing & Query Optimization","Unit 7: NoSQL Basics"],
      "Database Management System":["Unit 1: Introduction to DBMS & ER Model","Unit 2: Relational Model & Relational Algebra","Unit 3: SQL (DDL, DML, DCL)","Unit 4: Normalization (1NF–BCNF)","Unit 5: Transaction Processing & Concurrency","Unit 6: Indexing & File Organization"],
      "DBMS":["Unit 1: ER Diagrams & Database Design","Unit 2: Relational Algebra & SQL Basics","Unit 3: Advanced SQL (Joins, Views, Triggers)","Unit 4: Normalization & Decomposition","Unit 5: Transaction Management & ACID","Unit 6: Indexing & Hashing"],
      "DBMS Lab":["Lab 1: SQL DDL — Create, Alter, Drop","Lab 2: SQL DML — Insert, Update, Delete, Select","Lab 3: Joins & Subqueries","Lab 4: Views, Functions & Stored Procedures","Lab 5: Triggers","Lab 6: PL/SQL / Transactions"],
      "Computer Fundamentals & OS":["Unit 1: History & Types of Computers","Unit 2: Computer Architecture (CPU, Memory, I/O)","Unit 3: Number Systems & Data Representation","Unit 4: Operating System Concepts (Process, Memory, File)","Unit 5: Windows & Linux Basics","Unit 6: Networking Fundamentals"],
      "Software Engineering":["Unit 1: SDLC Models (Waterfall, Spiral, Agile, Scrum)","Unit 2: Requirements Engineering (SRS, Use Cases, User Stories)","Unit 3: System Design (Architecture, HLD, LLD, UML Diagrams)","Unit 4: Coding Standards, Code Reviews & Refactoring","Unit 5: Software Testing (Unit, Integration, System, Acceptance, TDD)","Unit 6: Project Management (Estimation, Scheduling, Risk, COCOMO)","Unit 7: Software Maintenance & Configuration Management"],
      "Computer Networks":["Unit 1: OSI & TCP/IP Model (All 7 layers explained)","Unit 2: Physical & Data Link Layer (Encoding, MAC, Ethernet, Wi-Fi)","Unit 3: Network Layer (IP, Routing — RIP, OSPF, BGP, Subnetting)","Unit 4: Transport Layer (TCP vs UDP, Flow Control, Congestion)","Unit 5: Application Layer (DNS, HTTP, FTP, SMTP, DHCP)","Unit 6: Network Security (SSL/TLS, Firewalls, VPN, Cryptography)","Unit 7: Wireless Networks & IoT Connectivity"],
      "Computer Networks I":["Unit 1: Network Basics & OSI Model","Unit 2: Data Link Layer (MAC, Ethernet, CSMA/CD)","Unit 3: Network Layer (IP Addressing, Subnetting, Routing)","Unit 4: Transport Layer (TCP, UDP)"],
      "Computer Networks II":["Unit 1: Application Layer Protocols (HTTP, DNS, FTP, SMTP)","Unit 2: Network Security Basics","Unit 3: Wireless LAN & Mobile Networks","Unit 4: Network Management & SNMP"],
      "Networks Lab":["Lab 1: Network Commands (ping, tracert, ipconfig/ifconfig)","Lab 2: Wireshark Packet Analysis","Lab 3: Socket Programming (TCP/UDP)","Lab 4: RIP/OSPF Configuration (Cisco Packet Tracer)","Lab 5: Firewall Rules & NAT Configuration"],
      "Networking Lab":["Lab 1: Network Topology Setup","Lab 2: IP Addressing & Subnetting","Lab 3: Routing Protocols Simulation","Lab 4: TCP/UDP Socket Programming","Lab 5: DNS & DHCP Configuration"],
      "Theory of Computation":["Unit 1: Finite Automata (DFA, NFA, Equivalence)","Unit 2: Regular Expressions & Regular Languages","Unit 3: Context-Free Grammars & Push Down Automata","Unit 4: Turing Machines (Variants, Church-Turing Thesis)","Unit 5: Decidability & Undecidability","Unit 6: Complexity Theory (P, NP, NP-Hard, NP-Complete)"],
      "Design & Analysis of Algorithms":["Unit 1: Algorithm Analysis (Asymptotic Notations, Recurrences, Master Theorem)","Unit 2: Divide & Conquer (Merge Sort, Quick Sort, Strassen's Matrix)","Unit 3: Greedy Algorithms (Activity Selection, Huffman, Kruskal, Prim)","Unit 4: Dynamic Programming (LCS, LIS, Matrix Chain, Knapsack, Edit Distance)","Unit 5: Backtracking & Branch-Bound (N-Queens, Subset Sum, TSP)","Unit 6: Graph Algorithms (Shortest Paths, Flow Networks, SCC)","Unit 7: NP-Completeness Reductions"],

      // ── WEB & MODERN TECH ──
      "Web Development (HTML/CSS/JS)":["Unit 1: HTML5 (Semantic Tags, Forms, Tables, Multimedia)","Unit 2: CSS3 (Box Model, Flexbox, Grid, Animations, Media Queries)","Unit 3: JavaScript (DOM, Events, Functions, ES6+)","Unit 4: jQuery & AJAX Basics","Unit 5: Responsive Web Design & Bootstrap","Unit 6: Introduction to React/Angular"],
      "Web Technologies (HTML/CSS/JS)":["Unit 1: HTML5 Fundamentals & Semantic Markup","Unit 2: CSS3 Styling, Layouts & Animations","Unit 3: JavaScript — DOM Manipulation & Events","Unit 4: PHP & Server-Side Scripting","Unit 5: MySQL Integration with PHP","Unit 6: Introduction to React.js"],
      "Web Technologies (PHP/React)":["Unit 1: PHP Basics (Syntax, Functions, Arrays, String Handling)","Unit 2: PHP OOP (Classes, Interfaces, Traits)","Unit 3: PHP & MySQL (PDO, Prepared Statements)","Unit 4: React.js (Components, Props, State, Hooks)","Unit 5: React Router & State Management (Redux)","Unit 6: RESTful API Integration"],
      "Web Technologies":["Unit 1: HTML5 & CSS3 Fundamentals","Unit 2: JavaScript & DOM","Unit 3: Server-Side Scripting (PHP/Node.js)","Unit 4: Database Integration","Unit 5: Web Frameworks Introduction","Unit 6: Web Security & HTTPS"],
      "Web Design (HTML/CSS/JavaScript)":["Unit 1: HTML5 — Structure, Forms, Media","Unit 2: CSS3 — Selectors, Flexbox, Grid","Unit 3: Responsive Design & Bootstrap","Unit 4: JavaScript Fundamentals & DOM","Unit 5: AJAX & Fetch API","Unit 6: Introduction to PHP"],
      "Internet Fundamentals":["Unit 1: Internet Architecture & Protocols (TCP/IP, DNS, HTTP)","Unit 2: Web Browsers & Servers","Unit 3: Email & FTP Protocols","Unit 4: Cybersecurity Basics","Unit 5: Cloud & IoT Introduction"],

      // ── AI / ML ──
      "Artificial Intelligence":["Unit 1: AI Basics (History, Agents, PEAS, Rationality)","Unit 2: Search Strategies (BFS, DFS, A*, Hill Climbing, Simulated Annealing)","Unit 3: Knowledge Representation (Propositional & First-Order Logic, Inference)","Unit 4: Machine Learning Overview (Supervised, Unsupervised, Reinforcement)","Unit 5: Natural Language Processing Basics (Tokenization, POS, Parsing)","Unit 6: Expert Systems & Probabilistic Reasoning (Bayes)","Unit 7: Neural Networks Fundamentals"],
      "AI Lab":["Lab 1: BFS & DFS Pathfinding","Lab 2: A* Algorithm Implementation","Lab 3: Decision Tree Classifier","Lab 4: Linear & Logistic Regression","Lab 5: Neural Network (Perceptron)","Lab 6: NLP — Sentiment Analysis Basics"],
      "Machine Learning":["Unit 1: Introduction (Types, Bias-Variance, Model Evaluation, Cross-Validation)","Unit 2: Supervised Learning (Linear Regression, Logistic Regression, Decision Trees, SVM, KNN, Naive Bayes)","Unit 3: Ensemble Methods (Random Forest, Bagging, Boosting, AdaBoost, XGBoost)","Unit 4: Unsupervised Learning (K-Means, Hierarchical, DBSCAN, PCA, Autoencoders)","Unit 5: Neural Networks (MLP, Backpropagation, Activation Functions, Optimizers)","Unit 6: Feature Engineering & Selection","Unit 7: Model Deployment Basics (Scikit-learn Pipelines, Pickle)"],
      "Machine Learning I":["Unit 1: Introduction to ML & Types","Unit 2: Linear & Polynomial Regression","Unit 3: Classification (Logistic Regression, Decision Trees, KNN)","Unit 4: Model Evaluation (Accuracy, Precision, Recall, F1, ROC)","Unit 5: Regularization (L1, L2, ElasticNet)"],
      "Machine Learning II":["Unit 1: SVM & Kernel Methods","Unit 2: Ensemble Learning (Random Forest, Boosting)","Unit 3: Unsupervised Learning (K-Means, PCA)","Unit 4: Artificial Neural Networks & Backpropagation","Unit 5: Introduction to Deep Learning"],
      "ML Lab":["Lab 1: Data Preprocessing (Pandas, NumPy)","Lab 2: Linear Regression & Polynomial","Lab 3: Classification Models","Lab 4: Clustering (K-Means, Hierarchical)","Lab 5: PCA & Dimensionality Reduction","Lab 6: Random Forest & XGBoost","Lab 7: Neural Network using Keras"],
      "Deep Learning":["Unit 1: Neural Network Review & Deep Architecture","Unit 2: CNNs (Convolution, Pooling, LeNet, VGG, ResNet)","Unit 3: RNNs, LSTMs & GRUs (Sequence Modeling)","Unit 4: Transformers & Attention Mechanism","Unit 5: Generative Models (VAE, GAN Basics)","Unit 6: Transfer Learning & Fine-tuning","Unit 7: Deployment (TensorFlow Serving, ONNX)"],
      "Deep Learning Lab":["Lab 1: TensorFlow/Keras Setup & Basics","Lab 2: CNN for Image Classification (MNIST, CIFAR)","Lab 3: Transfer Learning (VGG/ResNet)","Lab 4: LSTM Text Generation","Lab 5: GAN Implementation","Lab 6: Model Deployment with Flask"],
      "Natural Language Processing Basics":["Unit 1: NLP Pipeline (Tokenization, Stemming, Lemmatization, POS Tagging)","Unit 2: Text Representation (Bag of Words, TF-IDF, Word2Vec)","Unit 3: Text Classification & Sentiment Analysis","Unit 4: Named Entity Recognition & Information Extraction","Unit 5: Sequence Models for NLP (LSTM, Transformer Encoder)"],
      "Advanced NLP":["Unit 1: Transformer Architecture & BERT","Unit 2: GPT Models & Prompt Engineering","Unit 3: Machine Translation & Summarization","Unit 4: Question Answering Systems","Unit 5: Multimodal NLP (Text + Image)"],
      "Reinforcement Learning":["Unit 1: MDP (States, Actions, Rewards, Policy)","Unit 2: Dynamic Programming (Value Iteration, Policy Iteration)","Unit 3: Monte Carlo Methods","Unit 4: Temporal Difference (Q-Learning, SARSA)","Unit 5: Deep RL (DQN, Policy Gradient, Actor-Critic, PPO)","Unit 6: Multi-Agent RL Basics"],
      "RL Lab":["Lab 1: Gym Environment Setup","Lab 2: Q-Learning on FrozenLake/CartPole","Lab 3: Deep Q-Network (DQN)","Lab 4: Policy Gradient (REINFORCE)","Lab 5: PPO Implementation"],

      // ── CLOUD / SECURITY ──
      "Cloud Computing":["Unit 1: Cloud Concepts (IaaS, PaaS, SaaS, Public/Private/Hybrid)","Unit 2: Virtualisation & Hypervisors","Unit 3: AWS Core Services (EC2, S3, RDS, Lambda, IAM)","Unit 4: Azure & GCP Overview","Unit 5: Docker & Kubernetes (Containerization, Orchestration)","Unit 6: Cloud Security & Compliance","Unit 7: Serverless Architecture & Microservices"],
      "Cloud Computing for AI":["Unit 1: Cloud Platforms for ML (AWS SageMaker, GCP Vertex AI, Azure ML)","Unit 2: Data Storage & Processing at Scale (S3, BigQuery)","Unit 3: GPU Instances & Model Training on Cloud","Unit 4: MLOps on Cloud (Pipelines, CI/CD)","Unit 5: Serverless AI (Lambda, Cloud Functions)"],
      "Information Security & Cryptography":["Unit 1: Security Concepts (CIA Triad, Threats, Vulnerabilities)","Unit 2: Classical Ciphers (Caesar, Vigenère, Playfair)","Unit 3: Modern Symmetric Cryptography (DES, AES, Block Cipher Modes)","Unit 4: Asymmetric Cryptography (RSA, ECC, Diffie-Hellman)","Unit 5: Hash Functions (MD5, SHA, HMAC, Digital Signatures)","Unit 6: PKI, SSL/TLS & Certificate Management","Unit 7: Network Security & Firewall Basics"],
      "Information Security":["Unit 1: Introduction to Security (Threats, Attacks, Defenses)","Unit 2: Cryptography Basics (Symmetric, Asymmetric, Hashing)","Unit 3: Network Security (Firewalls, IDS/IPS, VPN)","Unit 4: Web Application Security (OWASP Top 10)","Unit 5: Cyber Laws & Forensics Basics"],
      "Networks Security Lab":["Lab 1: Nmap Scanning & Enumeration","Lab 2: Wireshark Packet Capture & Analysis","Lab 3: SSL/TLS Certificate Setup","Lab 4: Firewall Configuration (iptables)","Lab 5: Basic Penetration Testing (Metasploit)"],

      // ── MOBILE / IOT ──
      "Mobile App Development (Android/Flutter)":["Unit 1: Android Basics (Activity, Intent, Layouts, Views)","Unit 2: Android UI (RecyclerView, Fragments, Navigation)","Unit 3: Data Storage (SharedPreferences, SQLite, Room)","Unit 4: Networking in Android (Retrofit, JSON)","Unit 5: Flutter Basics (Widgets, State Management, Navigation)","Unit 6: Flutter Networking & Firebase Integration","Unit 7: Publishing Apps (Play Store)"],
      "Mobile App Development":["Unit 1: Mobile Dev Platforms (iOS vs Android vs Cross-Platform)","Unit 2: Android Studio Setup & Kotlin Basics","Unit 3: UI Components (Layouts, Views, Adapters)","Unit 4: Data Persistence & Networking","Unit 5: Flutter/React Native Alternative"],
      "Mobile Computing":["Unit 1: Mobile Communication (GSM, GPRS, 3G/4G/5G)","Unit 2: Mobile IP & WAP","Unit 3: Android Programming Basics","Unit 4: Location Services & GPS","Unit 5: Mobile Security"],
      "Mobile Dev Lab":["Lab 1: Hello World Android App","Lab 2: Login Screen with Validation","Lab 3: RecyclerView & Adapters","Lab 4: SQLite / Room Database","Lab 5: REST API Integration with Retrofit","Lab 6: Flutter Basic App"],
      "Internet of Things (IoT)":["Unit 1: IoT Architecture & Protocols (MQTT, CoAP, HTTP)","Unit 2: Embedded Systems (Arduino, Raspberry Pi)","Unit 3: Sensors & Actuators","Unit 4: IoT Data Processing & Cloud Integration","Unit 5: IoT Security & Privacy","Unit 6: Smart Home, Industry 4.0, Smart City Applications"],
      "IoT & Sensor Networks":["Unit 1: Wireless Sensor Networks (WSN) Architecture","Unit 2: Communication Protocols (Zigbee, Z-Wave, LoRa)","Unit 3: Arduino & Raspberry Pi Programming","Unit 4: Cloud IoT (AWS IoT, Azure IoT Hub)","Unit 5: IoT Applications & Case Studies"],
      "IoT Lab":["Lab 1: LED Blink with Arduino","Lab 2: Temperature Sensor (DHT11) Readings","Lab 3: PIR Motion Sensor","Lab 4: MQTT Publisher/Subscriber","Lab 5: Raspberry Pi GPIO & Python","Lab 6: Cloud Dashboard (ThingSpeak/Blynk)"],

      // ── BIG DATA ──
      "Big Data Analytics":["Unit 1: Big Data Concepts (5Vs, Hadoop Ecosystem)","Unit 2: HDFS & MapReduce Programming","Unit 3: Apache Spark (RDDs, DataFrames, SQL)","Unit 4: Spark MLlib (Classification, Clustering)","Unit 5: NoSQL Databases (MongoDB, Cassandra, HBase)","Unit 6: Data Visualization (Tableau/Power BI basics)","Unit 7: Real-time Processing (Kafka, Spark Streaming)"],
      "Big Data Technologies (Hadoop/Spark)":["Unit 1: Hadoop Architecture (HDFS, YARN, MapReduce)","Unit 2: Hive & HBase","Unit 3: Apache Spark Architecture","Unit 4: Spark DataFrames & SparkSQL","Unit 5: Stream Processing with Kafka"],
      "Big Data & Cloud Computing":["Unit 1: Big Data Fundamentals & Hadoop","Unit 2: MapReduce & Hive","Unit 3: Apache Spark Basics","Unit 4: Cloud Computing for Big Data","Unit 5: NoSQL Databases"],
      "Big Data Lab":["Lab 1: Hadoop Installation & HDFS Operations","Lab 2: MapReduce Word Count","Lab 3: Hive Queries","Lab 4: Spark RDD & DataFrame","Lab 5: Kafka Producer/Consumer","Lab 6: MongoDB CRUD Operations"],
      "Data Lab":["Lab 1: Pandas Data Cleaning & EDA","Lab 2: Matplotlib & Seaborn Visualisations","Lab 3: SQL Analytics Queries","Lab 4: Power BI / Tableau Dashboard","Lab 5: Statistical Analysis in Python"],

      // ── PYTHON ──
      "Python Programming":["Unit 1: Python Basics (Data Types, Operators, Control Flow)","Unit 2: Functions, Modules & Packages","Unit 3: OOP in Python (Classes, Inheritance, Dunder Methods)","Unit 4: File Handling & Exception Handling","Unit 5: NumPy & Pandas (Arrays, Series, DataFrames)","Unit 6: Data Visualization (Matplotlib, Seaborn)","Unit 7: Web Scraping & APIs (requests, BeautifulSoup)"],
      "Python Lab":["Lab 1: Basic Python Programs & Data Types","Lab 2: Functions & Modules","Lab 3: OOP Programs","Lab 4: File I/O & Exception Handling","Lab 5: NumPy & Pandas Operations","Lab 6: Matplotlib Visualizations"],

      // ── COMPILER / SYSTEMS ──
      "Compiler Design":["Unit 1: Compiler Phases (Lexical, Syntax, Semantic Analysis, Optimization, Code Gen)","Unit 2: Lexical Analysis (Regular Expressions, NFA/DFA, Lex Tool)","Unit 3: Syntax Analysis (CFG, Parsing — LL, LR, LALR, YACC)","Unit 4: Semantic Analysis (Symbol Tables, Type Checking)","Unit 5: Intermediate Code Generation (3-Address Code, TAC)","Unit 6: Code Optimization (Peephole, Loop, DAG)","Unit 7: Code Generation & Register Allocation"],
      "Distributed Systems":["Unit 1: Introduction (Goals, Challenges, CAP Theorem)","Unit 2: Communication (RPC, Message Passing, REST)","Unit 3: Naming & Time (DNS, Clocks, Logical/Vector Clocks)","Unit 4: Replication & Consistency (Consistency Models, Paxos, Raft)","Unit 5: Fault Tolerance & Recovery","Unit 6: Distributed Databases & NoSQL","Unit 7: Microservices & Cloud-Native Patterns"],
      "Microprocessors & Interfacing":["Unit 1: 8085 Microprocessor Architecture & Instruction Set","Unit 2: 8085 Assembly Language Programming","Unit 3: 8086 Architecture & Addressing Modes","Unit 4: Interfacing Devices (8255 PPI, 8253 Timer, 8259 PIC)","Unit 5: Memory Interfacing","Unit 6: ARM Processor Basics"],
      "Microprocessor Lab":["Lab 1: 8085 Basic Programs (Addition, Subtraction)","Lab 2: 8085 Data Transfer & Logical Operations","Lab 3: 8086 String Operations","Lab 4: 8255 PPI Interface","Lab 5: DAC/ADC Interfacing","Lab 6: ARM Cortex Programs"],

      // ── ADVANCED TOPICS ──
      "Blockchain Technology":["Unit 1: Blockchain Fundamentals (Distributed Ledger, Consensus, Hash)","Unit 2: Bitcoin & Cryptocurrency Mechanics","Unit 3: Ethereum & Smart Contracts (Solidity)","Unit 4: DApps & Web3","Unit 5: Hyperledger Fabric (Enterprise Blockchain)","Unit 6: NFTs, DeFi & Real-world Use Cases"],
      "MLOps & Model Deployment":["Unit 1: MLOps Concepts (CI/CD for ML, Versioning, Monitoring)","Unit 2: Docker for ML (Containerizing Models)","Unit 3: MLflow (Experiment Tracking, Registry)","Unit 4: Model Serving (FastAPI, Flask, TF Serving)","Unit 5: Kubernetes for ML Workloads","Unit 6: Feature Stores & Data Versioning (DVC)"],
      "MLOps Lab":["Lab 1: Docker — Containerise a ML Model","Lab 2: MLflow Experiment Tracking","Lab 3: FastAPI REST Endpoint for a Model","Lab 4: GitHub Actions CI/CD Pipeline","Lab 5: Kubernetes Deployment","Lab 6: Monitoring with Prometheus/Grafana"],
      "Generative AI":["Unit 1: Generative Model Fundamentals (VAE, GAN Architecture)","Unit 2: Diffusion Models (DDPM, Stable Diffusion)","Unit 3: Large Language Models (GPT, Llama, Mistral)","Unit 4: Prompt Engineering (Zero-shot, Few-shot, CoT, RAG)","Unit 5: Fine-tuning & RLHF","Unit 6: Applications (Image Gen, Code Gen, Chat)"],
      "AI Ethics & Governance":["Unit 1: Bias & Fairness in ML","Unit 2: Explainability & Interpretability (LIME, SHAP)","Unit 3: Privacy in ML (Differential Privacy, Federated Learning)","Unit 4: Regulatory Frameworks (EU AI Act, GDPR)","Unit 5: Responsible AI Development Practices"],
      "Data Visualization":["Unit 1: Visualization Principles & Perception","Unit 2: Matplotlib & Seaborn (Charts, Heatmaps, Pair Plots)","Unit 3: Plotly & Dash (Interactive Visualizations)","Unit 4: Power BI / Tableau (Dashboard Building)","Unit 5: D3.js Basics","Unit 6: Storytelling with Data"],
      "Visualization Lab":["Lab 1: Matplotlib — Line, Bar, Scatter, Histogram","Lab 2: Seaborn — Distribution, Heatmap","Lab 3: Plotly Interactive Dashboard","Lab 4: Power BI Report","Lab 5: D3.js Bar Chart & Map"],
      "Data Science Fundamentals":["Unit 1: Data Science Lifecycle & Tools","Unit 2: Data Wrangling (Pandas, Missing Values, Outliers)","Unit 3: Exploratory Data Analysis (EDA)","Unit 4: Statistical Inference (Hypothesis Testing, p-value, Confidence Intervals)","Unit 5: Feature Engineering","Unit 6: Introduction to ML in Data Science"],
      "Statistics for Data Science":["Unit 1: Descriptive Statistics (Mean, Median, Variance, Skewness)","Unit 2: Probability Distributions (Normal, Binomial, Poisson)","Unit 3: Hypothesis Testing (t-test, Chi-Square, ANOVA)","Unit 4: Regression Analysis","Unit 5: Bayesian Statistics Basics"],
      "Time Series Analysis":["Unit 1: Time Series Components (Trend, Seasonality, Noise)","Unit 2: ARIMA & SARIMA Models","Unit 3: Exponential Smoothing (Holt-Winters)","Unit 4: Prophet & Neural Forecasting (LSTM for TS)","Unit 5: Evaluation Metrics (MAE, RMSE, MAPE)"],
      "Graph Neural Networks":["Unit 1: Graph Theory Review & Graph Representation","Unit 2: GCN — Graph Convolutional Networks","Unit 3: GraphSAGE & GAT","Unit 4: Knowledge Graphs & Link Prediction","Unit 5: Applications (Drug Discovery, Social Networks, Recommender)"],
      "Advanced Computer Vision":["Unit 1: Image Processing Review (Filters, Morphology)","Unit 2: Object Detection (YOLO, Faster R-CNN, SSD)","Unit 3: Semantic & Instance Segmentation","Unit 4: Video Understanding","Unit 5: 3D Vision & Point Clouds","Unit 6: Vision Transformers (ViT)"],
      "Computer Vision Basics":["Unit 1: Image Formation & Color Models","Unit 2: Image Filtering & Edge Detection","Unit 3: Feature Extraction (SIFT, HOG, ORB)","Unit 4: CNN for Image Classification","Unit 5: Object Detection Basics"],
      "DevOps & Containerization":["Unit 1: DevOps Culture & Practices","Unit 2: Version Control (Git, GitHub, Branching Strategies)","Unit 3: Docker (Images, Containers, Compose)","Unit 4: Kubernetes (Pods, Deployments, Services)","Unit 5: CI/CD with Jenkins / GitHub Actions","Unit 6: Monitoring (Prometheus, Grafana, ELK)"],
      "DevOps Basics":["Unit 1: DevOps Principles & Lifecycle","Unit 2: Git & GitHub Workflows","Unit 3: Docker Basics","Unit 4: Jenkins CI/CD Pipeline","Unit 5: Linux & Shell Scripting"],
      "DevOps Lab":["Lab 1: Git Branching & Merging","Lab 2: Dockerfile & Image Build","Lab 3: Docker Compose Multi-Service","Lab 4: Kubernetes Pod Deployment","Lab 5: Jenkins Pipeline Setup","Lab 6: Prometheus + Grafana Monitoring"],
      "Agile & Project Management":["Unit 1: Agile Manifesto & Principles","Unit 2: Scrum Framework (Sprints, Backlog, Ceremonies)","Unit 3: Kanban & Lean","Unit 4: Project Estimation & Planning","Unit 5: Risk Management","Unit 6: Tools (Jira, Trello, MS Project)"],

      // ── ECE SPECIFIC ──
      "Network Analysis":["Unit 1: Basic Circuit Laws (KVL, KCL, Mesh, Node)","Unit 2: Network Theorems (Thevenin, Norton, Superposition, Max Power Transfer)","Unit 3: AC Steady State Analysis (Phasors, Impedance, Resonance)","Unit 4: Two-Port Networks (Z, Y, H, ABCD Parameters)","Unit 5: Laplace Transform in Circuits","Unit 6: Transient Analysis (RL, RC, RLC)"],
      "Signals & Systems":["Unit 1: Continuous & Discrete Signals (Types, Operations)","Unit 2: LTI Systems (Convolution, Impulse Response)","Unit 3: Fourier Series & Fourier Transform","Unit 4: Laplace Transform & Z-Transform","Unit 5: Sampling & Reconstruction (Nyquist Theorem)","Unit 6: Correlation & Power Spectral Density"],
      "Electromagnetic Theory":["Unit 1: Vector Calculus Review & Coordinate Systems","Unit 2: Electrostatics (Coulomb's Law, Gauss's Law, Potential)","Unit 3: Magnetostatics (Biot-Savart, Ampere's Law)","Unit 4: Maxwell's Equations & Wave Propagation","Unit 5: Transmission Lines","Unit 6: Antennas & Radiation Basics"],
      "Analog Communication":["Unit 1: AM Modulation & Demodulation","Unit 2: FM & PM Modulation","Unit 3: Noise in Communication Systems","Unit 4: Receivers (Superheterodyne, AGC)","Unit 5: Multiplexing (FDM, TDM)"],
      "Digital Communication":["Unit 1: PCM & Quantization","Unit 2: Line Coding & Digital Modulation (ASK, FSK, PSK, QAM)","Unit 3: Baseband Transmission (ISI, Nyquist Criterion)","Unit 4: Error Detection & Correction (Hamming, CRC, Turbo)","Unit 5: Spread Spectrum (CDMA, DSSS, FHSS)"],
      "VLSI Design Basics":["Unit 1: MOS Transistor Theory","Unit 2: CMOS Logic Design","Unit 3: VLSI Design Flow (RTL to GDS)","Unit 4: Combinational & Sequential VLSI Circuits","Unit 5: VHDL/Verilog HDL Coding","Unit 6: FPGA Basics"],
      "Embedded Systems":["Unit 1: Embedded System Architecture","Unit 2: ARM Cortex-M Programming","Unit 3: RTOS Concepts (FreeRTOS)","Unit 4: Peripheral Interfacing (I2C, SPI, UART)","Unit 5: Interrupts & Timers","Unit 6: Embedded Linux Basics"],
      "Wireless Communication":["Unit 1: Mobile Radio Propagation & Fading","Unit 2: Cellular System Design & Frequency Reuse","Unit 3: GSM, CDMA, WCDMA Architecture","Unit 4: 4G LTE & 5G NR Concepts","Unit 5: OFDM & MIMO","Unit 6: Wi-Fi & Bluetooth Standards"],
      "Digital Signal Processing":["Unit 1: DFT & FFT (Radix-2 Decimation)","Unit 2: Z-Transform & Region of Convergence","Unit 3: FIR Filter Design (Windowing Method)","Unit 4: IIR Filter Design (Butterworth, Chebyshev)","Unit 5: Multirate Signal Processing","Unit 6: DSP Processors (TMS320 Architecture)"],
      "DSP Lab":["Lab 1: MATLAB/Python Basics for Signal Processing","Lab 2: DFT & FFT Implementation","Lab 3: FIR Filter Design & Verification","Lab 4: IIR Butterworth Filter","Lab 5: Spectrum Analysis of Signals","Lab 6: Convolution & Correlation"],
      "Antenna Theory":["Unit 1: Antenna Parameters (Gain, Directivity, Radiation Pattern)","Unit 2: Dipole & Half-Wave Antennas","Unit 3: Array Antennas & Beam Steering","Unit 4: Aperture Antennas (Horn, Parabolic)","Unit 5: Microstrip & Patch Antennas","Unit 6: MIMO Antennas"],
      "Control Systems":["Unit 1: Introduction (Open/Closed Loop, Transfer Function)","Unit 2: Time Domain Analysis (Step Response, 1st & 2nd order)","Unit 3: Stability Analysis (Routh-Hurwitz, Lyapunov)","Unit 4: Root Locus Technique","Unit 5: Frequency Domain (Bode Plot, Nyquist, Gain/Phase Margin)","Unit 6: Compensators (Lead, Lag, PID Controller)"],
      "Control Systems II":["Unit 1: State Space Analysis","Unit 2: Controllability & Observability","Unit 3: State Feedback & Pole Placement","Unit 4: Observer Design","Unit 5: Digital Control Systems","Unit 6: Nonlinear Systems Introduction"],

      // ── MECHANICAL ──
      "Engineering Thermodynamics":["Unit 1: Basic Concepts (Systems, Properties, Zeroth Law)","Unit 2: First Law (Closed & Open Systems, Enthalpy, SFEE)","Unit 3: Second Law (Kelvin-Planck, Carnot, Entropy)","Unit 4: Properties of Pure Substances (Phases, Steam Tables)","Unit 5: Gas Power Cycles (Otto, Diesel, Brayton)","Unit 6: Vapour & Refrigeration Cycles"],
      "Fluid Mechanics":["Unit 1: Fluid Properties & Statics (Pressure, Buoyancy, Manometers)","Unit 2: Kinematics (Types of Flow, Continuity Equation, Stream Function)","Unit 3: Bernoulli's Equation & Applications","Unit 4: Viscous Flow (Reynolds Number, Laminar/Turbulent, Hagen-Poiseuille)","Unit 5: Boundary Layer Theory","Unit 6: Flow Measurement Devices (Venturimeter, Orifice, Pitot)"],
      "Kinematics of Machinery":["Unit 1: Mechanisms & Machines (Links, Pairs, Chains)","Unit 2: Velocity & Acceleration Analysis (Relative Velocity, Instantaneous Centre)","Unit 3: Cams & Followers (Types, Profiles, Displacement Diagrams)","Unit 4: Gear Trains (Spur, Helical, Bevel, Worm)","Unit 5: Belt & Chain Drives"],
      "Strength of Materials":["Unit 1: Stress & Strain (Types, Hooke's Law, Poisson's Ratio)","Unit 2: Shear Force & Bending Moment Diagrams","Unit 3: Bending Stresses & Deflection of Beams","Unit 4: Torsion (Shafts, Springs, Torsional Rigidity)","Unit 5: Columns & Struts (Euler's Formula, Slenderness Ratio)","Unit 6: Principal Stresses & Strain Energy"],
      "Manufacturing Processes":["Unit 1: Metal Casting (Sand Casting, Die Casting, Investment Casting)","Unit 2: Forming Processes (Forging, Rolling, Extrusion, Drawing)","Unit 3: Welding Processes (Arc, Gas, Resistance, TIG/MIG)","Unit 4: Machining Fundamentals (Turning, Milling, Drilling)","Unit 5: Surface Finishing & Heat Treatment"],
      "Heat & Mass Transfer":["Unit 1: Conduction (Fourier's Law, 1D Steady & Transient)","Unit 2: Convection (Natural & Forced, Dimensionless Numbers)","Unit 3: Radiation (Stefan-Boltzmann, View Factors, Grey Bodies)","Unit 4: Heat Exchangers (Types, LMTD, NTU-Effectiveness)","Unit 5: Mass Transfer (Fick's Law, Distillation, Absorption)"],
      "Machine Design":["Unit 1: Design Philosophy (Factor of Safety, Failure Theories)","Unit 2: Fasteners (Bolted, Welded, Riveted Joints)","Unit 3: Shafts & Couplings","Unit 4: Rolling & Sliding Bearings","Unit 5: Gear Design (Lewis Equation, AGMA Standard)","Unit 6: Springs & Clutches"],
      "Internal Combustion Engines":["Unit 1: Classification & Working of IC Engines","Unit 2: Fuel & Combustion (Air-Fuel Ratio, Knock, Octane/Cetane)","Unit 3: Engine Performance (BHP, IHP, Mechanical Efficiency, BSFC)","Unit 4: Valve Timing Diagrams","Unit 5: Carburetor & Fuel Injection Systems","Unit 6: Emission Standards & Control"],
      "CAD/CAM":["Unit 1: CAD Basics (2D Drafting, 3D Modelling)","Unit 2: Solid Modelling (Feature-based, Parametric — SolidWorks/CATIA)","Unit 3: Assembly Modelling & Drawings","Unit 4: CNC Machines (Types, G & M Codes, Programming)","Unit 5: CAM (Process Planning, NC Toolpath Generation)","Unit 6: 3D Printing & Rapid Prototyping"],
      "Dynamics of Machinery":["Unit 1: Turning Moment Diagrams & Flywheel","Unit 2: Governors (Watt, Porter, Proell, Hartnell)","Unit 3: Balancing of Rotating & Reciprocating Masses","Unit 4: Vibrations (Free, Forced, Damped — SDoF & MDoF)","Unit 5: Whirling of Shafts","Unit 6: Gear Noise & Vibration"],
      "Applied Thermodynamics":["Unit 1: Steam Nozzles & Turbines (Impulse, Reaction, Compounding)","Unit 2: Steam Boilers (Types, Mountings, Accessories, Efficiency)","Unit 3: Air Compressors (Reciprocating, Rotary, Intercooling)","Unit 4: Gas Turbines (Brayton Cycle, Reheating, Regeneration)","Unit 5: Refrigeration Cycles (VCR, Absorption, COP)","Unit 6: Psychrometrics & Air Conditioning"],
      "Finite Element Analysis":["Unit 1: Introduction to FEM (Steps, Discretization, Meshing)","Unit 2: 1D Bar & Beam Elements","Unit 3: 2D Plane Stress/Strain Elements","Unit 4: Heat Transfer by FEM","Unit 5: Dynamic Analysis (Modal, Transient)","Unit 6: FEA Software (ANSYS Basics)"],
      "Mechatronics":["Unit 1: Introduction to Mechatronics","Unit 2: Sensors & Transducers","Unit 3: Actuators (Hydraulic, Pneumatic, Electric)","Unit 4: Signal Conditioning & ADC/DAC","Unit 5: PLCs & Ladder Logic Programming","Unit 6: Robotics & Automation"],

      // ── CIVIL ──
      "Concrete Technology":["Unit 1: Cement (Types, Composition, Hydration)","Unit 2: Aggregates (Properties, Grading, Tests)","Unit 3: Water-Cement Ratio & Workability","Unit 4: Mix Design (IS/ACI Methods)","Unit 5: Special Concrete (High Strength, Fibre, Self-Compacting)","Unit 6: Testing of Hardened Concrete"],
      "Design of RCC Structures":["Unit 1: Working Stress vs Limit State Method","Unit 2: Design of Beams (Singly & Doubly Reinforced)","Unit 3: Design of Slabs (One-way & Two-way)","Unit 4: Design of Columns (Axial & Eccentric Loading)","Unit 5: Design of Footings & Retaining Walls","Unit 6: Staircase Design"],
      "Transportation Engineering I":["Unit 1: Highway Planning & Geometric Design","Unit 2: Traffic Engineering (Volume, Speed, Flow Studies)","Unit 3: Pavement Design (Flexible & Rigid)","Unit 4: Road Materials (Aggregates, Bitumen, Concrete)","Unit 5: Railway Engineering Basics"],
      "Soil Mechanics":["Unit 1: Index Properties (Consistency Limits, Grain Size Distribution)","Unit 2: Soil Classification (USCS, IS Classification)","Unit 3: Permeability & Seepage (Darcy's Law, Flow Net)","Unit 4: Compaction (Proctor Test, Field Compaction)","Unit 5: Consolidation & Settlement (Terzaghi's Theory)","Unit 6: Shear Strength (Mohr-Coulomb, Direct Shear, UCS, Triaxial)"],
      "Water Resource Engineering":["Unit 1: Hydrology (Rainfall, Runoff, Infiltration, Hydrograph)","Unit 2: Reservoirs & Dams","Unit 3: Irrigation Canals & Hydraulic Structures","Unit 4: Groundwater Hydrology","Unit 5: Flood Routing & Flood Control"],
      "Foundation Engineering":["Unit 1: Site Investigation & Bore Log Interpretation","Unit 2: Shallow Foundations (Bearing Capacity — Terzaghi, IS Method)","Unit 3: Settlement Analysis","Unit 4: Deep Foundations (Pile Capacity, Pile Groups)","Unit 5: Well Foundation & Machine Foundations","Unit 6: Geotechnical Report Preparation"],
      "Environmental Engineering I":["Unit 1: Water Demand & Sources","Unit 2: Water Treatment (Coagulation, Sedimentation, Filtration, Disinfection)","Unit 3: Distribution Systems","Unit 4: Sewage Characteristics & Flow","Unit 5: Sewage Treatment (Primary, Secondary, Tertiary)"],

      // ── EEE SPECIFIC ──
      "Electrical Machines I":["Unit 1: DC Generator (Constructional Details, EMF Equation, Characteristics)","Unit 2: DC Motor (Back EMF, Torque, Characteristics, Speed Control)","Unit 3: Transformer (Principle, Equivalent Circuit, Regulation, Testing)","Unit 4: Induction Motor (Construction, Theory, Slip, Torque-Speed)","Unit 5: Synchronous Generator (Construction, EMF, Regulation)"],
      "Electrical Machines II":["Unit 1: Synchronous Motor (Starting, V-Curves, Synchronizing)","Unit 2: Special Machines (Universal Motor, Stepper, BLDC)","Unit 3: Three-Phase Induction Motor — Speed Control","Unit 4: Single-Phase Induction & Repulsion Motors","Unit 5: Traction Motors & Applications"],
      "Power Systems I":["Unit 1: Structure of Power System","Unit 2: Transmission Lines (Parameters, Pi Model, ABCD)","Unit 3: Overhead Line Insulators & Cables","Unit 4: Corona & Interference","Unit 5: Performance of Transmission Lines (Short, Medium, Long)","Unit 6: HVDC Transmission Basics"],
      "Power Electronics":["Unit 1: Power Semiconductor Devices (SCR, TRIAC, IGBT, MOSFET)","Unit 2: Controlled Rectifiers (Single & Three Phase)","Unit 3: Inverters (VSI, CSI, PWM)","Unit 4: DC-DC Converters (Buck, Boost, Buck-Boost, Flyback)","Unit 5: AC Voltage Controllers & Cycloconverters","Unit 6: Drives Applications"],
      "Renewable Energy Systems":["Unit 1: Solar PV Systems (Cell, Module, Array, MPPT)","Unit 2: Wind Energy Systems (VAWT, HAWT, DFIG)","Unit 3: Hydro Power Plants","Unit 4: Biomass & Geothermal Energy","Unit 5: Energy Storage (Battery, Supercapacitor, Flywheel)","Unit 6: Smart Grid & Grid Integration"],
      "Smart Grid Technology":["Unit 1: Smart Grid Architecture & Components","Unit 2: Advanced Metering Infrastructure (AMI)","Unit 3: Demand Response & Energy Management","Unit 4: Communication in Smart Grid (PLC, Zigbee, 5G)","Unit 5: Cybersecurity in Smart Grid","Unit 6: EV Integration & V2G"],
      "Switchgear & Protection":["Unit 1: Faults in Power Systems (Types, Effects)","Unit 2: Symmetrical Components","Unit 3: Circuit Breakers (Air, Oil, SF6, Vacuum)","Unit 4: Relays (Overcurrent, Distance, Differential)","Unit 5: Protection of Transformers, Generators, Motors","Unit 6: Earthing & Lightning Protection"],

      // ── CHEMICAL ENGINEERING ──
      "Mass Transfer I":["Unit 1: Diffusion (Fick's Law, Equimolar, Unidirectional)","Unit 2: Gas Absorption (Equilibrium, Operating Line, Tower Design)","Unit 3: Distillation (VLE, McCabe-Thiele, Ponchon-Savarit)","Unit 4: Extraction (LLE, Hunter-Nash)","Unit 5: Humidification & Drying Basics"],
      "Chemical Reaction Engineering I":["Unit 1: Reaction Rate & Stoichiometry","Unit 2: Ideal Reactors (Batch, CSTR, PFR) Design Equations","Unit 3: Temperature Effects & Arrhenius Equation","Unit 4: Multiple Reactions (Selectivity, Yield)","Unit 5: Non-Ideal Reactors (RTD, Dispersion Model)"],
      "Chemical Reaction Engineering II":["Unit 1: Catalysis (Kinetics, Mechanisms, Langmuir-Hinshelwood)","Unit 2: Fixed Bed & Fluidised Bed Reactors","Unit 3: Heat Effects in Reactors (Adiabatic, Energy Balance)","Unit 4: Polymerization Reactors","Unit 5: Biochemical Reactors"],
      "Process Simulation (ASPEN)":["Unit 1: ASPEN Plus Interface & Navigation","Unit 2: Thermodynamic Property Methods","Unit 3: Steady-State Simulation of Distillation","Unit 4: Heat Exchanger Simulation","Unit 5: Reaction Systems in ASPEN","Unit 6: Optimization & Sensitivity Analysis"],
      "Polymer Technology":["Unit 1: Polymer Classification & Nomenclature","Unit 2: Polymerization Mechanisms (Addition, Condensation)","Unit 3: Molecular Weight & Distributions","Unit 4: Mechanical, Thermal & Electrical Properties","Unit 5: Rubber & Elastomers","Unit 6: Polymer Processing (Moulding, Extrusion)"],

      // ── BCA / BSc CS SPECIFIC ──
      "Mathematics I":["Unit 1: Matrices & Determinants","Unit 2: Differential Calculus (Limits, Derivatives, Taylor)","Unit 3: Integral Calculus (Definite, Indefinite, Applications)","Unit 4: Differential Equations (ODE 1st & 2nd Order)","Unit 5: Probability & Statistics Basics"],
      "Mathematics II":["Unit 1: Numerical Methods (Bisection, Newton-Raphson, Interpolation)","Unit 2: Linear Algebra (Vector Spaces, Eigenvalues)","Unit 3: Graph Theory Basics","Unit 4: Boolean Algebra","Unit 5: Statistics (Distributions, Hypothesis Testing)"],
      "Computer Fundamentals":["Unit 1: History & Evolution of Computers","Unit 2: Computer Architecture (CPU, Memory, I/O)","Unit 3: Input/Output Devices","Unit 4: Number Systems & Data Representation","Unit 5: Networking & Internet Basics"],
      "Computer Architecture":["Unit 1: CPU Organisation & Design","Unit 2: Instruction Set Architecture (RISC vs CISC)","Unit 3: Pipelining & Hazards","Unit 4: Memory Hierarchy (Cache, Virtual Memory)","Unit 5: I/O Organisation"],
      "Advanced Web (React/Node)":["Unit 1: React.js (Hooks, Context API, Custom Hooks)","Unit 2: React Router & Code Splitting","Unit 3: Node.js & Express.js (REST API)","Unit 4: Authentication (JWT, OAuth)","Unit 5: MongoDB & Mongoose Integration","Unit 6: Deployment (Vercel, Heroku, Docker)"],
      "Web Basics (HTML/CSS)":["Unit 1: HTML Structure & Tags","Unit 2: CSS Selectors & Box Model","Unit 3: Flexbox & Grid Layout","Unit 4: Responsive Design Basics","Unit 5: Forms & Validation"],
      "JavaScript & PHP":["Unit 1: JavaScript (DOM, Events, AJAX, Fetch)","Unit 2: ES6+ Features (Arrow, Spread, Destructuring, Modules)","Unit 3: PHP Syntax & Control Flow","Unit 4: PHP Functions & Arrays","Unit 5: PHP Forms & MySQL Integration"],
      "Data Analytics":["Unit 1: Data Lifecycle & Types","Unit 2: Python for Analytics (Pandas, NumPy)","Unit 3: Descriptive Analytics & EDA","Unit 4: Predictive Analytics (Regression, Classification)","Unit 5: Data Visualization (Matplotlib, Power BI)","Unit 6: Business Intelligence Tools"],
      "Cybersecurity":["Unit 1: Threat Landscape & Attack Types","Unit 2: Cryptography Fundamentals","Unit 3: Network Security","Unit 4: Web Security (OWASP Top 10, SQL Injection, XSS)","Unit 5: Incident Response & Digital Forensics","Unit 6: Ethical Hacking Basics"],

      // ── BA / BSc SUBJECTS ──
      "Calculus":["Unit 1: Limits & Continuity","Unit 2: Differentiation & Applications (Maxima, Minima, Rolle, MVT)","Unit 3: Integration Techniques & Applications","Unit 4: Multiple Integrals","Unit 5: Differential Equations Introduction"],
      "Algebra I (Groups)":["Unit 1: Sets, Relations & Functions","Unit 2: Group Theory (Definitions, Subgroups, Lagrange's Theorem)","Unit 3: Normal Subgroups, Quotient Groups & Homomorphisms","Unit 4: Permutation Groups & Cayley's Theorem","Unit 5: Cyclic Groups & Cosets"],
      "Real Analysis I":["Unit 1: Real Number System (Completeness, Archimedean Property)","Unit 2: Sequences (Convergence, Cauchy, Subsequences)","Unit 3: Series (Convergence Tests — Ratio, Root, Comparison)","Unit 4: Limits & Continuity of Functions","Unit 5: Differentiability & Mean Value Theorems"],
      "Real Analysis II":["Unit 1: Riemann Integration","Unit 2: Uniform Convergence of Sequences & Series","Unit 3: Power Series & Taylor Series","Unit 4: Functions of Several Variables","Unit 5: Improper Integrals"],
      "Abstract Algebra":["Unit 1: Ring Theory (Definitions, Ideals, Quotient Rings)","Unit 2: Polynomial Rings & Factorization","Unit 3: Field Theory & Extensions","Unit 4: Galois Theory Basics","Unit 5: Modules Introduction"],
      "Linear Algebra":["Unit 1: Vectors & Vector Spaces","Unit 2: Linear Transformations & Matrices","Unit 3: Eigenvalues, Eigenvectors & Diagonalization","Unit 4: Inner Product Spaces & Orthogonality","Unit 5: Canonical Forms (Jordan, Rational)"],
      "Complex Analysis":["Unit 1: Complex Numbers & Functions","Unit 2: Analytic Functions & Cauchy-Riemann Equations","Unit 3: Complex Integration & Cauchy's Theorem","Unit 4: Taylor & Laurent Series","Unit 5: Residues & Poles","Unit 6: Conformal Mappings"],
      "Topology":["Unit 1: Metric Spaces (Open/Closed Sets, Completeness)","Unit 2: Topological Spaces (Basis, Subspaces)","Unit 3: Continuity, Compactness & Connectedness","Unit 4: Product & Quotient Topology","Unit 5: Separation Axioms"],

      // ── COMMERCE / BBA ──
      "Financial Accounting":["Unit 1: Accounting Concepts, Conventions & Standards","Unit 2: Journal, Ledger & Trial Balance","Unit 3: Final Accounts (Trading, P&L, Balance Sheet)","Unit 4: Depreciation (SLM, WDV) & Provisions","Unit 5: Rectification of Errors & BRS","Unit 6: Consignment & Joint Venture Accounts"],
      "Business Organization & Management":["Unit 1: Nature & Scope of Business","Unit 2: Forms of Business (Sole Trader, Partnership, Company)","Unit 3: Functions of Management (Planning, Organizing, Staffing, Directing, Controlling)","Unit 4: Business Environment (Internal, External, PEST)","Unit 5: Entrepreneurship & Innovation"],
      "Corporate Accounting":["Unit 1: Issue & Forfeiture of Shares","Unit 2: Issue & Redemption of Debentures","Unit 3: Final Accounts of Companies","Unit 4: Amalgamation & Absorption (AS-14)","Unit 5: Valuation of Goodwill & Shares","Unit 6: Liquidation of Companies"],
      "Income Tax – Direct Tax":["Unit 1: Basic Concepts of Income Tax (PY, AY, Assessee)","Unit 2: Heads of Income (Salary, House Property)","Unit 3: Business & Profession Income","Unit 4: Capital Gains & Other Sources","Unit 5: Deductions (80C, 80D, 80G)","Unit 6: Computation of Total Income & Tax Liability","Unit 7: TDS, Advance Tax & Filing of Returns"],
      "Cost Accounting":["Unit 1: Cost Concepts & Classification","Unit 2: Material Costing (EOQ, FIFO, LIFO, Weighted Avg)","Unit 3: Labour Costing & Overheads","Unit 4: Job Costing, Batch Costing & Process Costing","Unit 5: Marginal Costing & CVP Analysis","Unit 6: Standard Costing & Variance Analysis"],
      "GST & Indirect Tax":["Unit 1: Concept & Structure of GST","Unit 2: Supply, Taxable Events & Place of Supply","Unit 3: Input Tax Credit (ITC)","Unit 4: GST Registration & Composition Scheme","Unit 5: GST Returns (GSTR-1, GSTR-3B)","Unit 6: Customs Duty Basics"],
      "Financial Management":["Unit 1: Time Value of Money (PV, FV, NPV, IRR)","Unit 2: Capital Budgeting (Payback, NPV, IRR, Profitability Index)","Unit 3: Cost of Capital (WACC, Debt, Equity)","Unit 4: Capital Structure (Modigliani-Miller, Leverage)","Unit 5: Working Capital Management","Unit 6: Dividend Policy Theories"],
      "Marketing Management":["Unit 1: Marketing Concepts & Environment","Unit 2: Consumer Behaviour & Market Segmentation","Unit 3: Product Life Cycle & New Product Development","Unit 4: Pricing Strategies","Unit 5: Distribution Channels & Supply Chain","Unit 6: Promotion Mix (Advertising, Sales Promotion, Digital Marketing)","Unit 7: CRM & Service Marketing"],
      "Human Resource Management":["Unit 1: Introduction to HRM","Unit 2: Job Analysis & HR Planning","Unit 3: Recruitment & Selection","Unit 4: Training & Development","Unit 5: Performance Management & Appraisal","Unit 6: Compensation & Benefits","Unit 7: Employee Relations & Labour Laws"],
      "Organisational Behaviour":["Unit 1: Foundations of OB (Perception, Attitudes, Values)","Unit 2: Motivation Theories (Maslow, Herzberg, McGregor, Vroom)","Unit 3: Group Dynamics & Teamwork","Unit 4: Leadership Theories (Trait, Situational, Transformational)","Unit 5: Communication in Organisations","Unit 6: Organisational Culture & Change"],
      "Business Mathematics":["Unit 1: Commercial Arithmetic (Ratio, Proportion, Percentage, SI/CI)","Unit 2: Sets, Functions & Graphs","Unit 3: Matrices & Determinants","Unit 4: Differential Calculus for Business","Unit 5: Integral Calculus Applications in Business"],
      "Business Statistics":["Unit 1: Data Collection, Tabulation & Diagrammatic Representation","Unit 2: Measures of Central Tendency & Dispersion","Unit 3: Correlation & Regression","Unit 4: Index Numbers","Unit 5: Time Series Analysis","Unit 6: Probability & Sampling"],
      "Banking & Insurance":["Unit 1: Commercial Banking (Functions, Products, Types of Advances)","Unit 2: RBI & Monetary Policy","Unit 3: Digital Banking & Fintech","Unit 4: Life Insurance (Products, Regulations, LIC)","Unit 5: General Insurance (Motor, Health, Fire, Marine)","Unit 6: IRDA Regulation & Claims Process"],
      "Auditing & Assurance":["Unit 1: Nature & Objectives of Audit","Unit 2: Types of Audit (Statutory, Internal, Tax)","Unit 3: Audit Planning & Risk Assessment","Unit 4: Internal Controls & Testing","Unit 5: Audit of Financial Statements (SA Standards)","Unit 6: Audit Report & Documentation"],
      "International Business":["Unit 1: Globalization & Trade Theories (Comparative Advantage, Heckscher-Ohlin)","Unit 2: Foreign Trade Policy & EXIM","Unit 3: International Marketing","Unit 4: MNCs & FDI","Unit 5: WTO, IMF & World Bank","Unit 6: Forex Management & Hedging"],
      "Entrepreneurship Development":["Unit 1: Entrepreneurship Concepts & Traits","Unit 2: Opportunity Identification & Feasibility Study","Unit 3: Business Plan Preparation","Unit 4: Start-up India & Government Schemes","Unit 5: Funding Options (Angel, VC, Crowdfunding)","Unit 6: Legal Aspects of a New Venture"],
      "Strategic Management":["Unit 1: Strategic Management Process","Unit 2: External Analysis (PESTLE, Porter's Five Forces)","Unit 3: Internal Analysis (Value Chain, Resource-Based View, SWOT)","Unit 4: Business Level Strategies (Cost Leadership, Differentiation, Focus)","Unit 5: Corporate Strategies (Growth, Integration, Diversification)","Unit 6: Strategy Implementation & Balanced Scorecard"],
      "Operations Management":["Unit 1: Production Planning & Scheduling","Unit 2: Facility Layout & Location","Unit 3: Inventory Management (EOQ, JIT, ABC Analysis)","Unit 4: Quality Management (TQM, Six Sigma, ISO 9001)","Unit 5: Supply Chain Management","Unit 6: Project Management (PERT, CPM)"],
      "Security Analysis & Portfolio Management":["Unit 1: Investment Basics & Financial Markets","Unit 2: Fundamental Analysis (EIC Framework, Ratio Analysis)","Unit 3: Technical Analysis (Charts, Indicators, Moving Averages)","Unit 4: Portfolio Theory (Markowitz, Efficient Frontier)","Unit 5: CAPM & Beta","Unit 6: Mutual Funds & Derivatives Introduction"],
      "Principles of Management":["Unit 1: Evolution of Management Thought (Taylor, Fayol, Mayo)","Unit 2: Planning (Types, MBO, Forecasting)","Unit 3: Organising (Departmentation, Span of Control, Delegation)","Unit 4: Staffing (Recruitment, Selection, Training)","Unit 5: Directing (Motivation, Leadership, Communication)","Unit 6: Controlling (Types of Control, Budgetary, MIS)"],

      // ── PSYCHOLOGY ──
      "Introduction to Psychology":["Unit 1: What is Psychology? Branches & Methods","Unit 2: Biological Bases of Behaviour (Neurons, Brain)","Unit 3: Sensation & Perception","Unit 4: Learning & Conditioning (Classical, Operant)","Unit 5: Memory & Forgetting","Unit 6: Motivation & Emotion"],
      "Cognitive Psychology":["Unit 1: Attention (Types, Selective, Divided)","Unit 2: Perception & Pattern Recognition","Unit 3: Memory (Encoding, Storage, Retrieval; STM & LTM)","Unit 4: Language & Thought","Unit 5: Problem Solving & Decision Making","Unit 6: Intelligence Theories (Spearman, Thurstone, Gardner, Sternberg)"],
      "Abnormal Psychology Basics":["Unit 1: Defining Abnormality (Historical, Statistical, Social Norms)","Unit 2: Anxiety Disorders (GAD, Phobia, Panic, OCD)","Unit 3: Mood Disorders (Depression, Bipolar)","Unit 4: Psychotic Disorders (Schizophrenia)","Unit 5: Personality Disorders Overview"],
      "Counselling Psychology":["Unit 1: Counselling Process & Relationship","Unit 2: Theories of Counselling (Rogers, CBT, Adlerian)","Unit 3: Assessment in Counselling","Unit 4: Counselling Specific Populations (Children, Elderly, Trauma)","Unit 5: Ethics in Counselling"],
      "Social Psychology":["Unit 1: Social Cognition & Attribution","Unit 2: Attitudes & Attitude Change","Unit 3: Social Influence (Conformity, Obedience, Compliance)","Unit 4: Group Dynamics & Leadership","Unit 5: Prejudice, Discrimination & Intergroup Relations","Unit 6: Prosocial Behaviour & Aggression"],

      // ── SOCIOLOGY ──
      "Introduction to Sociology":["Unit 1: Sociology — Nature, Scope & Methods","Unit 2: Culture & Society","Unit 3: Social Structure, Institutions & Groups","Unit 4: Socialization & Social Control","Unit 5: Social Stratification (Caste, Class, Gender)"],
      "Sociological Theory I":["Unit 1: Auguste Comte & Positivism","Unit 2: Karl Marx & Conflict Theory","Unit 3: Emile Durkheim — Social Facts & Functionalism","Unit 4: Max Weber — Social Action & Bureaucracy","Unit 5: Herbert Spencer & Social Darwinism"],
      "Indian Society":["Unit 1: Caste System (Historical, Contemporary)","Unit 2: Family & Marriage in India","Unit 3: Religion, Communalism & Secularism","Unit 4: Tribal Communities & Identity","Unit 5: Social Movements (Dalit, Women, Peasant, Environmental)","Unit 6: Poverty, Inequality & Development"],

      // ── HISTORY ──
      "Ancient History of India":["Unit 1: Prehistoric India & Indus Valley Civilization","Unit 2: Vedic Age (Rigvedic & Later)","Unit 3: Mahajanapadas & Rise of Magadha","Unit 4: Mauryan Empire (Chandragupta, Ashoka)","Unit 5: Gupta Empire & Post-Gupta Period","Unit 6: Sangam Age & South India"],
      "Medieval History of India":["Unit 1: Arab Invasion & Early Sultanate","Unit 2: Delhi Sultanate (Ilbari, Khilji, Tughluq, Sayyid, Lodi)","Unit 3: Mughal Empire (Babur to Aurangzeb)","Unit 4: Vijayanagara & Bahmani Kingdoms","Unit 5: Maratha Empire & Shivaji","Unit 6: Medieval Society, Culture & Architecture"],
      "History of Modern India (1757–1857)":["Unit 1: British Conquest of India (Plassey, Buxar)","Unit 2: British Land Revenue Systems (Permanent Settlement, Ryotwari, Mahalwari)","Unit 3: Social & Religious Reform Movements","Unit 4: Economic Impact of British Rule","Unit 5: Revolt of 1857 — Causes, Events, Impact"],
      "History of Modern India (1857–1947)":["Unit 1: Indian National Congress — Formation & Early Phase","Unit 2: Partition of Bengal & Swadeshi Movement","Unit 3: Gandhian Era (Non-Cooperation, Civil Disobedience, Quit India)","Unit 4: Revolutionary Nationalism (Bhagat Singh, Subhas Chandra Bose)","Unit 5: Constitutional Developments (Morley-Minto, Montagu-Chelmsford)","Unit 6: Independence & Partition (1947)"],

      // ── GEOGRAPHY ──
      "Physical Geography I (Geomorphology)":["Unit 1: Earth's Interior & Plate Tectonics","Unit 2: Weathering, Mass Wasting & Erosion","Unit 3: Fluvial Landforms (Rivers, Valleys, Deltas)","Unit 4: Glacial & Aeolian Landforms","Unit 5: Coastal Landforms","Unit 6: Karst Topography"],
      "Physical Geography II (Climatology)":["Unit 1: Atmosphere — Composition, Layers","Unit 2: Insolation & Heat Budget","Unit 3: Atmospheric Pressure & Wind Systems","Unit 4: Humidity, Clouds & Precipitation","Unit 5: Climate Classification (Koppen, Thornthwaite)","Unit 6: Climate Change & Global Warming"],
      "Economic Geography":["Unit 1: Theories of Agricultural Location (Von Thunen)","Unit 2: Industrial Location Theory (Weber)","Unit 3: World Agriculture (Types, Green Revolution)","Unit 4: Mining & Energy Resources","Unit 5: World Trade & Transport Networks"],

      // ── ECONOMICS ──
      "Microeconomics I":["Unit 1: Introduction (Scarcity, Opportunity Cost, PPF)","Unit 2: Theory of Consumer Behaviour (Utility, Indifference Curves, Budget Line)","Unit 3: Theory of Demand (Elasticity, Consumer Surplus)","Unit 4: Theory of Production (Short & Long Run, Returns to Scale)","Unit 5: Cost Analysis (TC, MC, AC, Long-run Cost)"],
      "Microeconomics II":["Unit 1: Perfect Competition (Equilibrium, Supply Curve)","Unit 2: Monopoly (Price, Output, Discrimination)","Unit 3: Monopolistic Competition","Unit 4: Oligopoly (Cournot, Kinked Demand, Game Theory)","Unit 5: Factor Markets (Labour, Capital, Rent, Wages)"],
      "Macroeconomics I":["Unit 1: National Income Concepts (GDP, GNP, NNP, Methods)","Unit 2: Classical & Keynesian Theory of Output","Unit 3: Consumption & Investment Functions","Unit 4: Fiscal Policy & Government Expenditure","Unit 5: Money & Banking (Quantity Theory, Credit Creation)"],
      "Macroeconomics II":["Unit 1: IS-LM Model","Unit 2: Aggregate Demand & Supply","Unit 3: Inflation (Types, Causes, Phillips Curve)","Unit 4: Balance of Payments & Exchange Rates","Unit 5: Open Economy Macroeconomics","Unit 6: Economic Growth Models (Harrod-Domar, Solow)"],

      // ── POLITICAL SCIENCE ──
      "Political Theory":["Unit 1: Nature & Scope of Political Theory","Unit 2: State — Theories of Origin (Social Contract, Divine, Historical)","Unit 3: Sovereignty (Monistic, Pluralistic, Legal, Political)","Unit 4: Liberty, Equality & Rights","Unit 5: Justice — Theories (Rawls, Nozick)","Unit 6: Democracy — Forms & Theories"],
      "Indian Government & Politics":["Unit 1: Making of Indian Constitution","Unit 2: Fundamental Rights & Directive Principles","Unit 3: Parliament (Lok Sabha, Rajya Sabha, Legislation)","Unit 4: Executive (President, PM, Council of Ministers)","Unit 5: Judiciary (Supreme Court, Judicial Review, PIL)","Unit 6: Federalism & Centre-State Relations"],
      "International Relations":["Unit 1: Nature & Scope of IR","Unit 2: Theories (Realism, Liberalism, Constructivism)","Unit 3: Power & National Interest","Unit 4: Foreign Policy Analysis","Unit 5: International Law & Organizations (UN, WTO, IMF)","Unit 6: Contemporary Issues (Terrorism, Climate, Nuclear)"],
      "Indian Constitution & Politics":["Unit 1: Constitutional Framework & Amendments","Unit 2: Elections & Electoral System","Unit 3: Political Parties & Party System","Unit 4: Coalition Politics","Unit 5: Panchayati Raj & Urban Local Bodies","Unit 6: Emergency Provisions"],

      // ── BSc PHYSICS ──
      "Mechanics":["Unit 1: Vector Algebra & Newton's Laws","Unit 2: Work, Energy & Power","Unit 3: Rotational Motion & Rigid Body Dynamics","Unit 4: Gravitation (Universal Law, Kepler, Satellites)","Unit 5: Oscillations (SHM, Damped, Forced)","Unit 6: Fluid Mechanics (Bernoulli, Viscosity)"],
      "Electricity & Magnetism":["Unit 1: Electric Field & Potential (Coulomb, Gauss)","Unit 2: Dielectrics & Capacitors","Unit 3: Magnetic Field & Force (Biot-Savart, Ampere)","Unit 4: Electromagnetic Induction (Faraday, Lenz, AC Circuits)","Unit 5: Magnetic Properties of Materials (Dia, Para, Ferro)"],
      "Waves & Oscillations":["Unit 1: Simple Harmonic Motion","Unit 2: Damped & Forced Oscillations","Unit 3: Coupled Oscillators","Unit 4: Transverse & Longitudinal Waves","Unit 5: Standing Waves, Resonance, Beats","Unit 6: Doppler Effect"],
      "Optics":["Unit 1: Geometrical Optics (Reflection, Refraction, Lens Formula)","Unit 2: Interference (Young's Experiment, Newton's Rings)","Unit 3: Diffraction (Single Slit, Grating)","Unit 4: Polarization (Types, Malus's Law, Brewster)","Unit 5: Optical Instruments"],
      "Thermal Physics & Statistical Mechanics":["Unit 1: Thermodynamic Laws & Entropy","Unit 2: Carnot Engine & Refrigerator","Unit 3: Kinetic Theory of Gases","Unit 4: Maxwell-Boltzmann Distribution","Unit 5: Statistical Mechanics (MB, BE, FD Statistics)","Unit 6: Phase Transitions & Critical Points"],
      "Quantum Mechanics I":["Unit 1: Wave-Particle Duality & deBroglie","Unit 2: Schrödinger Equation (Time-Dep & Time-Indep)","Unit 3: Particle in a Box","Unit 4: Harmonic Oscillator","Unit 5: Hydrogen Atom & Quantum Numbers","Unit 6: Spin & Pauli Exclusion Principle"],
      "Nuclear & Particle Physics":["Unit 1: Nuclear Structure (Binding Energy, Stability)","Unit 2: Radioactivity (Alpha, Beta, Gamma Decay)","Unit 3: Nuclear Reactions (Fission, Fusion)","Unit 4: Nuclear Models (Liquid Drop, Shell)","Unit 5: Particle Physics (Standard Model, Quarks)","Unit 6: Detectors & Accelerators"],
      "Solid State Physics":["Unit 1: Crystal Structures & Bravais Lattices","Unit 2: X-ray Diffraction (Bragg's Law)","Unit 3: Lattice Vibrations & Phonons","Unit 4: Free Electron Theory (Drude, Sommerfeld)","Unit 5: Band Theory & Semiconductors","Unit 6: Superconductivity (BCS Theory, Meissner)"],

      // ── BSc CHEMISTRY ──
      "Inorganic Chemistry I":["Unit 1: Atomic Structure & Periodicity","Unit 2: Chemical Bonding (Ionic, Covalent, VSEPR, MOT)","Unit 3: s-Block Elements (Alkali & Alkaline Earth)","Unit 4: p-Block Elements (Group 13, 14)","Unit 5: Acids & Bases (Arrhenius, BL, Lewis)"],
      "Organic Chemistry I":["Unit 1: Nomenclature (IUPAC, Common Names)","Unit 2: Stereochemistry (Chirality, Enantiomers, Diastereomers)","Unit 3: Alkanes, Alkenes & Alkynes (Reactions, Mechanisms)","Unit 4: Aromatic Compounds (EAS Mechanism, Orientation Effects)","Unit 5: Alcohols, Phenols & Ethers"],
      "Physical Chemistry I":["Unit 1: Gaseous State (Ideal, Real Gases, van der Waals)","Unit 2: Liquid State (Viscosity, Surface Tension)","Unit 3: Thermodynamics (First & Second Law)","Unit 4: Phase Equilibria (Phase Rule, Raoult's Law)","Unit 5: Electrochemistry (EMF, Electrode Potentials, Nernst)"],
      "Spectroscopy":["Unit 1: UV-Visible Spectroscopy (Electronic Transitions, Chromophores)","Unit 2: IR Spectroscopy (Vibrational Modes, Functional Group Identification)","Unit 3: NMR Spectroscopy (Chemical Shift, Coupling Constant, Interpretation)","Unit 4: Mass Spectrometry (Fragmentation Patterns)","Unit 5: Structure Elucidation Problems"],
      "Coordination Chemistry":["Unit 1: Werner's Theory & Nomenclature","Unit 2: Crystal Field Theory (CFT) — Octahedral, Tetrahedral, Square Planar","Unit 3: Ligand Field Theory & MOT for Complexes","Unit 4: Isomerism in Coordination Compounds","Unit 5: Stability Constants & Chelate Effect","Unit 6: Organometallic Compounds Basics"],

      // ── BSc MATHS ──
      "Differential Equations":["Unit 1: First Order ODEs (Variables Separable, Exact, Linear)","Unit 2: Higher Order Linear ODEs with Constant Coefficients","Unit 3: Cauchy-Euler Equations & Power Series Solutions","Unit 4: Laplace Transform Method","Unit 5: Partial Differential Equations (Heat, Wave, Laplace Equations)"],
      "Numerical Methods":["Unit 1: Error Analysis & Root Finding (Bisection, Newton-Raphson, Secant)","Unit 2: Interpolation (Lagrange, Newton's Forward/Backward)","Unit 3: Numerical Differentiation & Integration (Simpson, Gaussian)","Unit 4: Numerical Solution of ODEs (Euler, Runge-Kutta)","Unit 5: Linear Systems (Gauss Elimination, Gauss-Seidel, LU Decomposition)"],
      "Operations Research":["Unit 1: Linear Programming (Graphical & Simplex Method)","Unit 2: Transportation & Assignment Problems","Unit 3: Game Theory (Zero-Sum, Dominance, Mixed Strategies)","Unit 4: Network Analysis (CPM, PERT)","Unit 5: Inventory Models (EOQ, Shortage)","Unit 6: Queuing Theory (M/M/1, M/M/c)"],
      "Mathematical Methods":["Unit 1: Fourier Series & Transforms","Unit 2: Laplace Transforms & Applications","Unit 3: Vector Spaces & Linear Transformations","Unit 4: Complex Variables","Unit 5: Perturbation Methods Basics"],
      "Partial Differential Equations":["Unit 1: First Order PDE (Lagrange, Charpit Methods)","Unit 2: Second Order PDE (Classification — Elliptic, Parabolic, Hyperbolic)","Unit 3: Heat Equation (Fourier Method)","Unit 4: Wave Equation","Unit 5: Laplace Equation (Dirichlet, Neumann)"],

      // ── BSc BIOLOGY ──
      "Cell Biology":["Unit 1: Cell Theory & Prokaryote vs Eukaryote","Unit 2: Cell Membrane (Fluid Mosaic Model, Transport)","Unit 3: Cell Organelles (Mitochondria, Chloroplast, Nucleus)","Unit 4: Cell Division (Mitosis & Meiosis)","Unit 5: Cell Signalling Basics"],
      "Molecular Biology":["Unit 1: DNA Structure (Watson-Crick, B/A/Z forms)","Unit 2: DNA Replication (Semiconservative, Enzymes)","Unit 3: Transcription (mRNA, rRNA, tRNA, RNA Pol)","Unit 4: Translation (Ribosomes, Genetic Code, Codon)","Unit 5: Mutations & Repair Mechanisms","Unit 6: Gene Regulation (Operon Model)"],
      "Genetics":["Unit 1: Mendelian Laws (Monohybrid, Dihybrid, Trihybrid Crosses)","Unit 2: Extensions of Mendelism (Incomplete Dominance, Epistasis)","Unit 3: Chromosomal Theory of Inheritance","Unit 4: Sex Determination & Sex-Linked Inheritance","Unit 5: Linkage, Crossing Over & Chromosome Mapping","Unit 6: Mutations (Types, Causes, Effects)"],
      "Ecology & Environment":["Unit 1: Ecosystem (Structure, Energy Flow, Biogeochemical Cycles)","Unit 2: Population Ecology (Growth Models, r & K strategists)","Unit 3: Community Ecology (Succession, Biotic Interactions)","Unit 4: Biodiversity (Types, Hotspots, Threats)","Unit 5: Conservation Strategies","Unit 6: Environmental Pollution & Climate Change"],
      "Biotechnology":["Unit 1: Recombinant DNA Technology (Restriction Enzymes, Vectors, Cloning)","Unit 2: PCR & DNA Fingerprinting","Unit 3: Gel Electrophoresis & Blotting Techniques","Unit 4: Transgenic Plants & Animals","Unit 5: DNA Vaccines & Therapeutics","Unit 6: Bioinformatics Tools (BLAST, NCBI, Protein Databases)"],
      "Microbiology":["Unit 1: Microscopy & Staining Techniques","Unit 2: Bacterial Morphology & Classification","Unit 3: Bacterial Growth & Nutrition","Unit 4: Viruses (Structure, Replication, Bacteriophage)","Unit 5: Fungi & Protozoa","Unit 6: Applied Microbiology (Food, Industrial, Clinical)"],
      "Immunology":["Unit 1: Immune System Overview (Innate & Adaptive)","Unit 2: Antigens & Antibodies","Unit 3: B & T Cell Development & Activation","Unit 4: MHC & Antigen Presentation","Unit 5: Complement System","Unit 6: Vaccines & Autoimmunity"],
      "Bioinformatics":["Unit 1: Introduction to Bioinformatics & Biological Databases","Unit 2: Sequence Analysis (BLAST, FASTA, Dot Matrix)","Unit 3: Multiple Sequence Alignment (ClustalW, MUSCLE)","Unit 4: Phylogenetic Analysis (UPGMA, NJ, Maximum Likelihood)","Unit 5: Protein Structure Prediction (Homology Modelling)","Unit 6: Genomics & Proteomics Tools"],

      // ── STATISTICS ──
      "Descriptive Statistics":["Unit 1: Types of Data & Scales of Measurement","Unit 2: Frequency Distributions & Graphical Representation","Unit 3: Measures of Central Tendency (Mean, Median, Mode)","Unit 4: Measures of Dispersion (Range, SD, Variance, CV)","Unit 5: Skewness & Kurtosis","Unit 6: Correlation & Simple Regression"],
      "Probability Theory I":["Unit 1: Basic Probability Concepts (Axioms, Sample Space)","Unit 2: Conditional Probability & Bayes' Theorem","Unit 3: Random Variables (Discrete & Continuous)","Unit 4: Expectation, Variance & Moments","Unit 5: Standard Distributions (Binomial, Poisson, Uniform, Exponential, Normal)"],
      "Statistical Inference I":["Unit 1: Sampling Distributions (t, χ², F)","Unit 2: Point Estimation (MLE, Method of Moments, Properties)","Unit 3: Interval Estimation (Confidence Intervals)","Unit 4: Hypothesis Testing (Z-test, t-test)","Unit 5: Chi-Square Tests"],
      "Design of Experiments":["Unit 1: Principles of DOE (Replication, Randomisation, Local Control)","Unit 2: CRD — Completely Randomised Design","Unit 3: RBD — Randomised Block Design","Unit 4: Latin Square Design","Unit 5: Factorial Experiments (2², 2³ Designs)","Unit 6: ANOVA (One-way, Two-way)"],
      "Regression Analysis":["Unit 1: Simple Linear Regression (OLS, ANOVA Table, R²)","Unit 2: Model Diagnostics & Residual Analysis","Unit 3: Multiple Regression","Unit 4: Multicollinearity, Heteroscedasticity, Autocorrelation","Unit 5: Logistic Regression","Unit 6: Polynomial & Non-linear Regression"],

      // ── MISC / COMMON ──
      "Probability & Statistics":["Unit 1: Probability Theory (Axioms, Bayes, Distributions)","Unit 2: Random Variables & Expectations","Unit 3: Sampling Distributions","Unit 4: Hypothesis Testing & Confidence Intervals","Unit 5: Regression & Correlation","Unit 6: Statistical Computing (R/Python)"],
      "Research Methodology":["Unit 1: Research Types & Process","Unit 2: Research Design (Experimental, Quasi-experimental, Survey)","Unit 3: Data Collection Methods (Questionnaire, Interview, Observation)","Unit 4: Sampling Techniques","Unit 5: Data Analysis & Interpretation","Unit 6: Report Writing & Citations (APA/MLA)"],
      "Project Work I":["Phase 1: Problem Identification & Literature Review","Phase 2: Methodology Design & Tool Selection","Phase 3: Data Collection / System Development","Phase 4: Testing / Analysis","Phase 5: Results, Discussion & Conclusion","Phase 6: Project Report & Presentation"],
      "Major Project":["Phase 1: Proposal & Problem Statement","Phase 2: Literature Review & Technology Stack","Phase 3: Design (Architecture, ER Diagram, Flow)","Phase 4: Development / Implementation","Phase 5: Testing (Unit, Integration, System)","Phase 6: Final Report, Demo & Viva"],
      "Major Project / Capstone":["Phase 1: Project Selection & Proposal","Phase 2: Requirement Gathering & System Design","Phase 3: Sprint-wise Development (Agile)","Phase 4: Testing & Bug Fixing","Phase 5: Deployment & Documentation","Phase 6: Final Presentation & Viva"],
      "Major Project / Dissertation":["Phase 1: Topic Selection & Research Proposal","Phase 2: Literature Survey","Phase 3: Methodology & Data Collection","Phase 4: Analysis / Implementation","Phase 5: Writing Chapters (Introduction, Review, Methods, Results)","Phase 6: Final Thesis Submission & Viva"],
      "Industrial Training / Internship":["Week 1-2: Company Orientation & Domain Understanding","Week 3-4: Learning Codebase / Tools Used","Week 5-8: Assigned Project / Feature Work","Week 9-10: Testing & Code Review","Week 11-12: Final Deliverable & Presentation","Deliverable: Internship Report & Certificate"],
      "Employability Skills":["Unit 1: Resume Writing & LinkedIn Profile","Unit 2: Technical Interview Preparation","Unit 3: Aptitude & Logical Reasoning","Unit 4: Communication & Soft Skills","Unit 5: Group Discussion Techniques"],
      "Professional Ethics in IT":["Unit 1: Ethics in Computing (ACM Code)","Unit 2: Intellectual Property Rights (Patents, Copyrights)","Unit 3: Privacy & Data Protection (GDPR, IT Act)","Unit 4: Cybercrime & Cyber Laws (IT Act 2000)","Unit 5: Social Responsibility of IT Professionals"],
      "E-Commerce Basics":["Unit 1: E-Commerce Models (B2B, B2C, C2C)","Unit 2: Electronic Payment Systems","Unit 3: Security in E-Commerce (SSL, Encryption)","Unit 4: Supply Chain & Logistics in E-Commerce","Unit 5: Social Commerce & Digital Marketing"],
      "IT Fundamentals":["Unit 1: Computer Hardware Components","Unit 2: Operating Systems (Windows, Linux)","Unit 3: Networking Basics (LAN, WAN, IP)","Unit 4: Internet & Email","Unit 5: Office Productivity Tools (MS Office)"],
      "Number Systems & Data Representation":["Unit 1: Decimal, Binary, Octal & Hexadecimal","Unit 2: Conversions Between Number Systems","Unit 3: BCD, Gray Code, ASCII","Unit 4: Signed Number Representation (2's Complement)","Unit 5: Floating Point Representation (IEEE 754)"],
      "Computer Fundamentals & Programming":["Unit 1: History & Types of Computers","Unit 2: CPU, Memory & I/O Organisation","Unit 3: Number Systems & Data Representation","Unit 4: Introduction to Programming (Algorithms, Flowcharts)","Unit 5: C Programming Basics"],
      "Professional Elective I":["Refer to specific elective chosen (AI, Blockchain, Cybersecurity, IoT, Cloud, AR/VR, etc.)"],
      "Professional Elective II":["Refer to specific elective chosen"],
      "Professional Elective III":["Refer to specific elective chosen"],
      "Open Elective I":["Refer to specific open elective chosen by department"],
      "Open Elective II":["Refer to specific open elective chosen by department"],
      "Elective I":["Refer to specific elective chosen"],
      "Elective II":["Refer to specific elective chosen"],
      "Elective (IoT / Blockchain / Data Science)":["Unit 1: Fundamentals of chosen specialisation","Unit 2: Core Concepts & Architecture","Unit 3: Tools & Technologies","Unit 4: Applications & Case Studies","Unit 5: Project / Assignments"],
      "Project Presentation & Viva":["Preparation 1: Project Report Finalisation","Preparation 2: Demonstration Build & Test","Preparation 3: Presentation Slides (PPT)","Preparation 4: Common Viva Questions Practice","Preparation 5: Live Demo Setup"],
      "Industrial Training":["Week 1-2: Orientation & Domain Study","Week 3-6: Core Work / Development","Week 7-10: Testing & Review","Week 11-12: Final Report Submission"],
    };

    /* ===================== ROADMAPS DATA ===================== */
    const roadmaps = {
        frontend: {
            title: '🌐 Frontend Development Roadmap',
            phases: [
                { title: 'Phase 1 — HTML & CSS Basics (Week 1–2)', color: 'text-yellow-200', steps: [
                    { title: 'HTML Fundamentals', desc: 'Tags & elements, Semantic HTML5, Forms & inputs, Tables, Media (img, video, audio), Accessibility basics' },
                    { title: 'CSS Styling', desc: 'Selectors, Box model, Flexbox, CSS Grid, Responsive design (Media queries), CSS variables, Animations & transitions' },
                    { title: 'Tools Setup', desc: 'VS Code + extensions, Browser DevTools, Git & GitHub basics' }
                ]},
                { title: 'Phase 2 — JavaScript (Week 3–6)', color: 'text-green-200', steps: [
                    { title: 'JS Fundamentals', desc: 'Variables (let/const/var), Data types, Functions, Arrays & Objects, Loops & conditionals, DOM manipulation, Events' },
                    { title: 'ES6+ Modern JS', desc: 'Arrow functions, Destructuring, Spread/Rest, Modules (import/export), Promises & Async/Await, Fetch API' },
                    { title: 'Practice Projects', desc: 'To-do app, Weather app (using API), Calculator, Expense Tracker' }
                ]},
                { title: 'Phase 3 — React.js (Week 7–12)', color: 'text-blue-200', steps: [
                    { title: 'React Basics', desc: 'JSX, Components (functional), Props & State, useState, useEffect, Event handling, Conditional rendering, Lists & keys' },
                    { title: 'React Intermediate', desc: 'React Router (navigation), Context API, Custom hooks, useRef, useMemo, useCallback' },
                    { title: 'State Management', desc: 'Redux Toolkit or Zustand, Async state (React Query / RTK Query)' },
                    { title: 'Styling in React', desc: 'Tailwind CSS, Styled-components, shadcn/ui components' }
                ]},
                { title: 'Phase 4 — Advanced (Month 4–6)', color: 'text-pink-200', steps: [
                    { title: 'Next.js', desc: 'SSR, SSG, ISR, App Router, API routes, Image optimisation, SEO' },
                    { title: 'Testing', desc: 'Jest, React Testing Library, Cypress (E2E testing)' },
                    { title: 'Performance', desc: 'Lighthouse audit, Lazy loading, Code splitting, PWA basics, Web Vitals (LCP, FID, CLS)' },
                    { title: 'Deployment', desc: 'Vercel / Netlify / GitHub Pages, CI/CD basics, Environment variables, Domain setup' }
                ]},
                { title: '🎓 Best Resources', color: 'text-white', steps: [
                    { title: 'Resources', desc: 'YouTube: Traversy Media, Fireship, Kevin Powell (CSS) | Docs: MDN Web Docs, React docs | Practice: Frontend Mentor, CSS Battle' }
                ]}
            ]
        },
        backend: {
            title: '⚙️ Backend Development Roadmap',
            phases: [
                { title: 'Phase 1 — Foundations (Week 1–3)', color: 'text-yellow-200', steps: [
                    { title: 'Pick a Language', desc: 'Node.js (JS) — most popular for web. Python (Django/FastAPI) — great for ML integration. Java (Spring Boot) — enterprise. Go — high performance' },
                    { title: 'Node.js + Express.js Basics', desc: 'HTTP basics, REST API concepts, Express setup, Routing, Middleware, Request/Response handling, Error handling' },
                    { title: 'Databases — SQL', desc: 'SQL basics (SELECT, JOIN, GROUP BY), PostgreSQL or MySQL, Relationships (1:1, 1:N, M:N), Indexes, Transactions' }
                ]},
                { title: 'Phase 2 — Core Backend (Week 4–8)', color: 'text-green-200', steps: [
                    { title: 'Authentication & Security', desc: 'JWT (JSON Web Tokens), Sessions & Cookies, bcrypt (password hashing), OAuth 2.0, CORS, Rate limiting, Input validation' },
                    { title: 'NoSQL Databases', desc: 'MongoDB basics, Mongoose ODM, Document model, Aggregation pipeline, When to use SQL vs NoSQL' },
                    { title: 'ORM / ODM', desc: 'Prisma (Node.js) or SQLAlchemy (Python), Sequelize, Database migrations' },
                    { title: 'API Design', desc: 'RESTful API best practices, HTTP methods & status codes, Versioning, Pagination, API documentation (Swagger/Postman)' }
                ]},
                { title: 'Phase 3 — Advanced (Month 3–5)', color: 'text-blue-200', steps: [
                    { title: 'Caching', desc: 'Redis basics, In-memory caching, Cache invalidation strategies, CDN caching' },
                    { title: 'Message Queues', desc: 'RabbitMQ or Kafka basics, Job queues (Bull/BullMQ), Async processing' },
                    { title: 'Microservices', desc: 'Monolith vs microservices, Service communication (REST, gRPC), API Gateway, Docker basics' },
                    { title: 'Testing', desc: 'Unit testing (Jest/Mocha), Integration testing, API testing (Supertest), Test-Driven Development (TDD)' }
                ]},
                { title: 'Phase 4 — DevOps & Deployment (Month 5–6)', color: 'text-pink-200', steps: [
                    { title: 'Docker & Containers', desc: 'Dockerfile, Docker Compose, Container networking, Volume management' },
                    { title: 'Cloud Deployment', desc: 'AWS (EC2, RDS, S3) or Render/Railway/Heroku, Nginx reverse proxy, SSL certificates (Let\'s Encrypt), Environment variables' },
                    { title: 'CI/CD', desc: 'GitHub Actions, Automated testing on push, Auto-deployment pipelines' }
                ]},
                { title: '🎓 Best Resources', color: 'text-white', steps: [
                    { title: 'Resources', desc: 'YouTube: Traversy Media, Codevolution, Hitesh Choudhary | Tools: Postman, TablePlus, pgAdmin | Practice: Build a full REST API with auth' }
                ]}
            ]
        },
        fullstack: {
            title: '🔗 Full Stack Development Roadmap',
            phases: [
                { title: 'Step 1 — Learn Frontend First', color: 'text-yellow-200', steps: [
                    { title: 'Complete Frontend Roadmap', desc: 'HTML + CSS + JavaScript + React.js. Refer to the Frontend roadmap above for details. Time: 2–3 months' }
                ]},
                { title: 'Step 2 — Learn Backend', color: 'text-green-200', steps: [
                    { title: 'Complete Backend Roadmap', desc: 'Node.js + Express + MongoDB/PostgreSQL + Authentication. Refer to the Backend roadmap. Time: 2–3 months' }
                ]},
                { title: 'Step 3 — Connect Frontend & Backend', color: 'text-blue-200', steps: [
                    { title: 'Integration Skills', desc: 'Axios/Fetch for API calls, CORS handling, JWT stored in localStorage/cookies, Protected routes in React, Form handling & validation' },
                    { title: 'Popular Full Stack Stacks', desc: 'MERN (MongoDB + Express + React + Node) | MEAN (MongoDB + Express + Angular + Node) | Next.js + Prisma + PostgreSQL | Django + React | FastAPI + React' }
                ]},
                { title: 'Step 4 — Full Stack Projects', color: 'text-pink-200', steps: [
                    { title: 'Project Ideas', desc: 'Blog platform with auth, E-commerce site (products, cart, payments), Task management app, Real-time chat app (Socket.io), Social media clone' },
                    { title: 'Deployment', desc: 'Frontend on Vercel/Netlify, Backend on Railway/Render/AWS, Database on Supabase/PlanetScale/MongoDB Atlas' }
                ]},
                { title: 'Step 5 — Extra Skills', color: 'text-purple-200', steps: [
                    { title: 'TypeScript', desc: 'Add TypeScript to both frontend and backend for type safety. Major companies require this.' },
                    { title: 'Payment Integration', desc: 'Stripe or Razorpay integration for e-commerce projects' },
                    { title: 'File Uploads', desc: 'Multer + Cloudinary / AWS S3 for image/video uploads' },
                    { title: 'Real-time Features', desc: 'Socket.io for live chat, notifications, real-time updates' }
                ]},
                { title: '🎓 Best Resources', color: 'text-white', steps: [
                    { title: 'Resources', desc: 'Courses: The Odin Project (free), Full Stack Open (free), Zero to Mastery | YouTube: Traversy Media, Fireship, Jack Herrington | Practice: Build 3 full stack projects for portfolio' }
                ]}
            ]
        },
        dsa: {
            title: '🧩 DSA & Competitive Programming Roadmap',
            phases: [
                { title: 'Phase 1 — Language & Basics (Week 1–2)', color: 'text-yellow-200', steps: [
                    { title: 'Choose Language', desc: 'C++ (most popular in competitive programming), Java, or Python. C++ is fastest for CP.' },
                    { title: 'Basic Programming', desc: 'Input/Output, Loops, Conditionals, Functions, Recursion basics, STL basics (vector, map, set, pair)' },
                    { title: 'Time & Space Complexity', desc: 'Big O notation, O(1), O(n), O(n²), O(log n), O(n log n). Analyse your code.' }
                ]},
                { title: 'Phase 2 — Core Data Structures (Week 3–8)', color: 'text-green-200', steps: [
                    { title: 'Arrays & Strings', desc: 'Two-pointer technique, Sliding window, Prefix sums, Kadane\'s algorithm, String manipulation' },
                    { title: 'Linked Lists', desc: 'Singly & Doubly linked lists, Reversing, Detecting cycles (Floyd\'s algorithm), Merging sorted lists' },
                    { title: 'Stacks & Queues', desc: 'Stack applications (balanced parentheses, next greater element), Queue, Deque, Monotonic stack' },
                    { title: 'Trees', desc: 'Binary Tree, BST, Tree traversals (Inorder, Preorder, Postorder), Height/diameter, LCA, Segment Tree basics' },
                    { title: 'Hashing', desc: 'HashMap/HashSet, Frequency counting, Anagram detection, Subarray with given sum' }
                ]},
                { title: 'Phase 3 — Algorithms (Month 3–5)', color: 'text-blue-200', steps: [
                    { title: 'Sorting Algorithms', desc: 'Bubble, Selection, Insertion, Merge Sort, Quick Sort. Know time complexities. Counting sort, Radix sort.' },
                    { title: 'Searching', desc: 'Binary Search (and its variations — lower_bound, upper_bound), Search in rotated array, Ternary search' },
                    { title: 'Graph Algorithms', desc: 'BFS, DFS, Dijkstra\'s shortest path, Bellman-Ford, Floyd Warshall, Topological Sort, Union-Find (DSU), Minimum Spanning Tree (Prim\'s, Kruskal\'s)' },
                    { title: 'Dynamic Programming', desc: 'Memoization vs Tabulation, 0/1 Knapsack, Longest Common Subsequence, Longest Increasing Subsequence, DP on trees, Bitmask DP' },
                    { title: 'Greedy Algorithms', desc: 'Activity selection, Huffman coding, Fractional Knapsack, Meeting rooms problem' }
                ]},
                { title: 'Phase 4 — Advanced & Competitive (Month 6+)', color: 'text-pink-200', steps: [
                    { title: 'Advanced Topics', desc: 'Segment Trees (lazy propagation), Fenwick Tree (BIT), Trie, Suffix Array, KMP / Z-algorithm for strings, Game Theory basics' },
                    { title: 'Competitive Programming', desc: 'Participate in Codeforces (Div 3 → Div 2), AtCoder Beginner Contests, LeetCode weekly/biweekly. Target: Solve 300+ problems.' },
                    { title: 'Interview Prep', desc: 'LeetCode Top 150, NeetCode 150, Blind 75. Focus on Arrays, DP, Graphs, Trees for FAANG-level interviews.' }
                ]},
                { title: '🎓 Best Resources', color: 'text-white', steps: [
                    { title: 'Resources', desc: 'YouTube: Striver (take U forward), Abdul Bari, Aditya Verma (DP) | Sheets: Striver\'s A2Z DSA Sheet, NeetCode | Practice: LeetCode, Codeforces, CodeChef, HackerRank' }
                ]}
            ]
        },
        appdev: {
            title: '📱 App Development Roadmap',
            phases: [
                { title: 'Phase 1 — Choose Your Path', color: 'text-yellow-200', steps: [
                    { title: 'Option A: Flutter (Cross-platform — Recommended)', desc: 'One codebase for Android + iOS + Web. Language: Dart. Best for startups and solo devs.' },
                    { title: 'Option B: React Native (Cross-platform)', desc: 'If you know React.js already. Uses JavaScript. Good community, used by Facebook, Shopify.' },
                    { title: 'Option C: Android Native', desc: 'Language: Kotlin (or Java). Best performance. Only Android. Use Android Studio.' }
                ]},
                { title: 'Phase 2 — Flutter Roadmap (Recommended Path)', color: 'text-green-200', steps: [
                    { title: 'Dart Language Basics', desc: 'Variables, Functions, OOP (Classes, Inheritance), Async/Await, Null safety' },
                    { title: 'Flutter Fundamentals', desc: 'Widgets (StatelessWidget, StatefulWidget), Material Design, Layout (Row, Column, Stack), Navigation, Forms, List views' },
                    { title: 'State Management', desc: 'Provider (beginner), Riverpod or Bloc (intermediate), GetX. State is crucial in Flutter.' },
                    { title: 'Backend Integration', desc: 'HTTP package for REST APIs, Firebase (Firestore, Auth, Storage), Supabase' },
                    { title: 'Publishing', desc: 'Play Store (Android) — Google Play Console, App Store (iOS) — Apple Developer account, App signing & versioning' }
                ]},
                { title: 'Phase 3 — Build Apps', color: 'text-blue-200', steps: [
                    { title: 'Project Ideas', desc: 'To-do/Notes app, Weather app (OpenWeather API), Chat app (Firebase), E-commerce app, Expense tracker' }
                ]},
                { title: '🎓 Best Resources', color: 'text-white', steps: [
                    { title: 'Resources', desc: 'Flutter: Flutter Mapp, Rivaan Ranawat, FilledStacks | React Native: William Candillon | Official: docs.flutter.dev, reactnative.dev' }
                ]}
            ]
        },
        aiml: {
            title: '🤖 AI / Machine Learning Roadmap',
            phases: [
                { title: 'Phase 1 — Prerequisites (Month 1)', color: 'text-yellow-200', steps: [
                    { title: 'Python Programming', desc: 'Python basics, Functions, OOP, File handling, Virtual environments, pip packages' },
                    { title: 'Mathematics', desc: 'Linear Algebra (vectors, matrices, dot product), Calculus (derivatives, gradients), Probability & Statistics (mean, variance, distributions), Optimization' },
                    { title: 'Data Tools', desc: 'NumPy, Pandas, Matplotlib, Seaborn (for data visualization)' }
                ]},
                { title: 'Phase 2 — Machine Learning (Month 2–4)', color: 'text-green-200', steps: [
                    { title: 'ML Fundamentals', desc: 'Supervised vs Unsupervised vs Reinforcement Learning, Train/Test split, Cross-validation, Bias-Variance tradeoff, Overfitting & Regularisation' },
                    { title: 'Algorithms', desc: 'Linear Regression, Logistic Regression, Decision Trees, Random Forests, SVM, K-Means Clustering, KNN, Naive Bayes, XGBoost' },
                    { title: 'Scikit-learn', desc: 'sklearn for implementing all ML algorithms, Pipelines, GridSearchCV, Feature engineering' }
                ]},
                { title: 'Phase 3 — Deep Learning (Month 4–7)', color: 'text-blue-200', steps: [
                    { title: 'Neural Networks', desc: 'Perceptron, Activation functions, Forward/Backpropagation, Gradient descent, Batch normalisation, Dropout' },
                    { title: 'Deep Learning Frameworks', desc: 'TensorFlow + Keras (beginner-friendly) or PyTorch (research-favourite). Learn one deeply.' },
                    { title: 'CNN (Computer Vision)', desc: 'Convolutional layers, Pooling, ImageNet, Transfer learning (ResNet, VGG, EfficientNet), Object detection (YOLO)' },
                    { title: 'NLP & LLMs', desc: 'Text preprocessing, Word embeddings (Word2Vec, GloVe), Transformers (BERT, GPT), HuggingFace, LangChain basics, RAG (Retrieval-Augmented Generation)' }
                ]},
                { title: 'Phase 4 — Projects & Deployment (Month 7–10)', color: 'text-pink-200', steps: [
                    { title: 'ML Projects', desc: 'House price prediction, Image classifier, Sentiment analysis, Chatbot, Recommendation system, Face detection' },
                    { title: 'MLOps', desc: 'MLflow (experiment tracking), Model versioning, Docker for ML, FastAPI for model serving, Deploying on AWS/GCP' },
                    { title: 'Kaggle Competitions', desc: 'Join Kaggle, solve competitions, learn from top notebooks, build public profile' }
                ]},
                { title: '🎓 Best Resources', color: 'text-white', steps: [
                    { title: 'Resources', desc: 'Courses: Andrew Ng\'s ML Course (Coursera), fast.ai, CS231n (Stanford) | YouTube: Sentdex, Andrej Karpathy, StatQuest | Books: "Hands-On ML" by Aurélien Géron' }
                ]}
            ]
        }
    };

    /* ===================== PAGE NAVIGATION ===================== */
    let currentStream = null;
    let currentSubject = null;
    let currentStreamKey = null; // track exact stream key for adv pyq
    let currentTenthKey = null;  // tracks active 10th subject key
    let currentTenthCount = 0;   // tracks chapter count for active 10th subject
