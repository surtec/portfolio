/* ================================================================
   Portfolio — i18n.js  (EN / NL language switching)
   ================================================================ */

const TRANSLATIONS = {
  en: {
    /* ── NAV ── */
    'nav.home':    'Home',
    'nav.about':   'About',
    'nav.work':    'Work',
    'nav.contact': 'Contact',

    /* ── FOOTER ── */
    'ftr.copy': '© 2025 Muhammad Abdoel. Crafted with ❤️ and lots of ☕',

    /* ══ INDEX · HERO ══ */
    'idx.hero.badge':       'Available for Work',
    'idx.hero.greeting':    "Hi, I'm",
    'idx.hero.desc':        "First-year ICT student at UNASAT, Paramaribo, Suriname. With a background in management, I'm passionate about technology and building digital solutions that make a real difference.",
    'idx.hero.viewWork':    'View My Work',
    'idx.hero.letsTalk':    "Let's Talk",
    'idx.stats.companies':  'Companies',
    'idx.stats.yearsExp':   'Years Work Exp.',
    'idx.stats.yearIct':    'Year ICT',

    /* ══ INDEX · ABOUT ══ */
    'idx.abt.tag':       'About Me',
    'idx.abt.title':     'Who I <span class="gradient-text">Am</span>',
    'idx.abt.subtitle':  'A curious builder who turns coffee into code.',
    'idx.abt.p1':        "I'm Muhammad Abdoel, a first-year ICT student at UNASAT in Paramaribo, Suriname. Alongside my studies, I bring real-world experience from working in management roles across multiple companies — giving me a unique perspective that blends business thinking with technical skills.",
    'idx.abt.p2':        "I'm driven by a passion for technology and problem-solving. Whether it's learning new programming concepts, building projects, or improving processes, I always strive to grow and deliver results. Technology, for me, is a tool to create meaningful impact.",
    'idx.abt.c1.title':  'Clean Code',
    'idx.abt.c1.desc':   'Writing readable, maintainable, and well-structured code every time.',
    'idx.abt.c2.title':  'Performance',
    'idx.abt.c2.desc':   'Optimizing for speed, scalability, and exceptional user experiences.',
    'idx.abt.c3.title':  'Responsive',
    'idx.abt.c3.desc':   'Building pixel-perfect layouts that work beautifully on every device.',
    'idx.abt.c4.title':  'Security',
    'idx.abt.c4.desc':   'Prioritizing security best practices in every project I touch.',
    'idx.abt.badge':     'Years of Experience',

    /* ══ INDEX · EDUCATION ══ */
    'idx.edu.tag':      'Education',
    'idx.edu.title':    'My <span class="gradient-text">Background</span>',
    'idx.edu.subtitle': 'The academic foundation that shaped my technical thinking and problem-solving approach.',
    'idx.edu.1.deg':    'Bachelor of ICT',
    'idx.edu.1.sch':    'UNASAT — Paramaribo, Suriname',
    'idx.edu.1.desc':   'Currently in my first year of the ICT program at the University of Suriname (UNASAT). Building a strong foundation in information technology, programming, networking, and digital systems, while applying real-world experience from my professional background.',
    'idx.edu.1.stat':   'First Year — In Progress',
    'idx.edu.2.deg':    'Secondary Education',
    'idx.edu.2.sch':    'ADEK',
    'idx.edu.2.desc':   'Completed my final year of secondary school at ADEK, strengthening my academic foundation before pursuing higher education in ICT.',
    'idx.edu.2.stat':   'Graduated',
    'idx.edu.3.deg':    'Secondary Education',
    'idx.edu.3.sch':    'Lyco1',
    'idx.edu.3.desc':   'Attended Lyco1 for five years, building the academic and analytical skills that laid the groundwork for my future studies in technology.',
    'idx.edu.3.stat':   'Completed',

    /* ══ INDEX · EXPERIENCE ══ */
    'idx.exp.tag':      'Experience',
    'idx.exp.title':    'Work <span class="gradient-text">Experience</span>',
    'idx.exp.subtitle': "Places where I've grown, shipped, and made an impact.",
    'idx.exp.1.role':   'Management',
    'idx.exp.1.co':     'AzalTransport — Paramaribo, Suriname',
    'idx.exp.1.desc':   'Worked in a management role at AzalTransport, overseeing day-to-day operations and coordinating logistics activities. Responsible for planning, team coordination, and ensuring smooth operational workflows within the organisation.',
    'idx.exp.2.role':   'Management',
    'idx.exp.2.co':     'Adesh — Paramaribo, Suriname',
    'idx.exp.2.desc':   'Continued professional development in a management capacity at Adesh. Handled organisational tasks, supported decision-making processes, and contributed to improving internal efficiency and team performance.',
    'idx.exp.3.role':   'Management',
    'idx.exp.3.co':     'Francisco N.V — Paramaribo, Suriname',
    'idx.exp.3.desc':   'Currently working in a management role at Francisco N.V alongside my ICT studies at UNASAT. Applying strong organisational and leadership skills while continuing to grow my technical knowledge in the field of information technology.',

    /* ══ INDEX · SKILLS ══ */
    'idx.sk.tag':     'Skills',
    'idx.sk.title':   'Tech <span class="gradient-text">Stack</span>',
    'idx.sk.sub':     "The technologies I've learned and worked with so far in my ICT studies and projects.",
    'idx.sk.webdev':  'Web Development',
    'idx.sk.prog':    'Programming',
    'idx.sk.db':      'Database & Tools',

    /* ══ ABOUT PAGE · HERO ══ */
    'abt.hero.tag':   'About Me',
    'abt.hero.title': 'The Story <span class="gradient-text">Behind the Code</span>',
    'abt.hero.sub':   'A curious builder from Paramaribo, Suriname — combining management experience with a passion for technology to create things that matter.',

    /* ══ ABOUT PAGE · BIO ══ */
    'abt.bio.tag':      'Who I Am',
    'abt.bio.title':    'Muhammad <span class="gradient-text">Abdoel</span>',
    'abt.bio.subtitle': 'ICT student, developer in progress, and former manager.',
    'abt.bio.p1':       "I'm Muhammad Abdoel, a first-year ICT student at UNASAT (University of Suriname) in Paramaribo, Suriname. My journey into technology didn't start in a classroom — it started in the real world, where I spent over two years working in management roles across three different companies.",
    'abt.bio.p2':       "That professional background gave me something most developers don't have early on: a deep understanding of how organisations actually work. I know what it means to coordinate teams, manage operations, and solve real business problems. Now I'm combining that with the technical skills I'm building in my ICT studies to become a developer who doesn't just write code — but understands the impact behind it.",
    'abt.bio.p3':       "Outside of studying and coding, I'm constantly exploring new technologies, building side projects, and looking for ways to apply what I learn to real-world problems. Technology, for me, is the most powerful tool we have to create meaningful change.",
    'abt.bio.c1.title': 'Goal-Oriented',
    'abt.bio.c1.desc':  'Every project I take on has a clear purpose. I focus on outcomes, not just output.',
    'abt.bio.c2.title': 'Fast Learner',
    'abt.bio.c2.desc':  'From management to code — I adapt quickly and thrive when learning new things.',
    'abt.bio.c3.title': 'Team Player',
    'abt.bio.c3.desc':  'Years of team coordination taught me that great work is almost always collaborative.',
    'abt.bio.c4.title': 'Problem Solver',
    'abt.bio.c4.desc':  "I don't just write code — I look for the smartest solution to the actual problem.",
    'abt.bio.badge':    'Years of Experience',

    /* ══ ABOUT PAGE · EDUCATION ══ */
    'abt.edu.tag':    'Education',
    'abt.edu.title':  'Academic <span class="gradient-text">Background</span>',
    'abt.edu.sub':    'The academic foundation that shaped my thinking and launched my technical journey.',
    'abt.edu.1.deg':  'Bachelor of ICT',
    'abt.edu.1.sch':  'UNASAT — Paramaribo, Suriname',
    'abt.edu.1.desc': 'Currently in my first year of the ICT program at the University of Suriname (UNASAT). Building a strong foundation in information technology, programming, networking, and digital systems, while applying real-world experience from my professional background.',
    'abt.edu.1.stat': 'First Year — In Progress',
    'abt.edu.2.deg':  'Secondary Education',
    'abt.edu.2.sch':  'ADEK',
    'abt.edu.2.desc': 'Completed my final year of secondary school at ADEK, strengthening my academic foundation before pursuing higher education in ICT.',
    'abt.edu.2.stat': 'Graduated',
    'abt.edu.3.deg':  'Secondary Education',
    'abt.edu.3.sch':  'Lyco1',
    'abt.edu.3.desc': 'Attended Lyco1 for five years, building the academic and analytical skills that laid the groundwork for my future studies in technology.',
    'abt.edu.3.stat': 'Completed',

    /* ══ ABOUT PAGE · EXPERIENCE ══ */
    'abt.exp.tag':    'Experience',
    'abt.exp.title':  'Work <span class="gradient-text">Experience</span>',
    'abt.exp.sub':    'Real-world roles that gave me the business insight to complement my technical skills.',
    'abt.exp.1.role': 'Management',
    'abt.exp.1.co':   'AzalTransport — Paramaribo, Suriname',
    'abt.exp.1.desc': 'Worked in a management role at AzalTransport, overseeing day-to-day operations and coordinating logistics activities. Responsible for planning, team coordination, and ensuring smooth operational workflows within the organisation. Also built an internal website for the company using HTML, CSS, and JavaScript.',
    'abt.exp.2.role': 'Management',
    'abt.exp.2.co':   'Adesh — Paramaribo, Suriname',
    'abt.exp.2.desc': 'Continued professional development in a management capacity at Adesh. Handled organisational tasks, supported decision-making processes, and contributed to improving internal efficiency and team performance.',
    'abt.exp.3.role': 'Management',
    'abt.exp.3.co':   'Francisco N.V — Paramaribo, Suriname',
    'abt.exp.3.desc': 'Currently working in a management role at Francisco N.V alongside my ICT studies at UNASAT. Applying strong organisational and leadership skills while continuing to grow my technical knowledge in the field of information technology.',

    /* ══ ABOUT PAGE · SKILLS ══ */
    'abt.sk.tag':              'Skills',
    'abt.sk.title':            'Tech <span class="gradient-text">Stack</span>',
    'abt.sk.sub':              "The technologies I've learned and worked with so far in my ICT studies and projects.",
    'abt.sk.webdev':           'Web Development',
    'abt.sk.prog':             'Programming',
    'abt.sk.db':               'Database & Tools',
    'abt.sk.lvl.comfortable':  'Comfortable',
    'abt.sk.lvl.learning':     'Learning',
    'abt.sk.lvl.exploring':    'Exploring',

    /* ══ ABOUT PAGE · CTA ══ */
    'abt.cta.tag':   "Let's Work Together",
    'abt.cta.title': 'Interested in <span class="gradient-text">Working Together?</span>',
    'abt.cta.text':  "I'm open to freelance work, collaborations, and full-time opportunities. Don't hesitate to reach out — I'd love to hear about your project.",
    'abt.cta.btn1':  'Get In Touch',
    'abt.cta.btn2':  'View My Work',
    'abt.cta.cv':    'Download CV',

    /* ══ WORK PAGE ══ */
    'wrk.hero.tag':   'Portfolio',
    'wrk.hero.title': 'My <span class="gradient-text">Project</span>',
    'wrk.hero.sub':   "I'm early in my ICT journey — here's the first real project I've built and shipped for a real organisation.",
    'wrk.p1.badge':   'Live Project',
    'wrk.p1.type':    'Internal Web Development · 2024',
    'wrk.p1.title':   'AzalTransport Internal Website',
    'wrk.p1.desc':    'Designed and built an internal website for AzalTransport, the transport company where I worked in management. The site serves as an internal tool for the organisation, helping streamline information sharing and day-to-day operations for staff. Built from the ground up using core web technologies during my time there.',
    'wrk.p1.locked':  'Internal — Not Public',
    'wrk.more.text':  'More projects are on the way as I continue my ICT studies at UNASAT.',
    'wrk.more.btn':   'Get In Touch',

    /* ══ CONTACT PAGE ══ */
    'cnt.hero.tag':    'Contact',
    'cnt.hero.title':  "Let's <span class=\"gradient-text\">Connect</span>",
    'cnt.hero.sub':    "Have a project in mind, a question, or just want to say hello? I'd love to hear from you — my inbox is always open.",
    'cnt.info.title':  'Get In <span class="gradient-text">Touch</span>',
    'cnt.info.p':      "Whether you're looking for a developer to join your team, need a freelance collaborator for a project, or simply want to chat about tech — I'm all ears. I typically respond within 24 hours.",
    'cnt.d.email':     'Email',
    'cnt.d.location':  'Location',
    'cnt.d.locVal':    'Paramaribo, Suriname 🇸🇷',
    'cnt.d.resp':      'Response Time',
    'cnt.d.respVal':   'Within 24 hours',
    'cnt.d.mode':      'Work Mode',
    'cnt.d.modeVal':   'Remote / Hybrid / On-site',
    'cnt.avail':       'Currently available for freelance & full-time roles',
    'cnt.f.title':     'Send a Message',
    'cnt.f.sub':       "Fill in the form below and I'll get back to you as soon as possible.",
    'cnt.f.fname':     'First Name',
    'cnt.f.lname':     'Last Name',
    'cnt.f.email':     'Email Address',
    'cnt.f.subject':   'Subject',
    'cnt.f.s.ph':      'Select a topic…',
    'cnt.f.s.o1':      'Freelance / Contract Work',
    'cnt.f.s.o2':      'Full-Time Opportunity',
    'cnt.f.s.o3':      'Collaboration / Partnership',
    'cnt.f.s.o4':      'Feedback on My Work',
    'cnt.f.s.o5':      'Just Saying Hello 👋',
    'cnt.f.budget':    'Budget Range (optional)',
    'cnt.f.b.ph':      'Select a range…',
    'cnt.f.b.o1':      'Under €1,000',
    'cnt.f.b.o2':      '€1,000 – €5,000',
    'cnt.f.b.o3':      '€5,000 – €15,000',
    'cnt.f.b.o4':      '€15,000+',
    'cnt.f.b.o5':      'Not Applicable',
    'cnt.f.msg':       'Message',
    'cnt.f.msg.ph':    'Tell me about your project, idea, or anything on your mind…',
    'cnt.f.submit':    'Send Message',
    'cnt.ok.title':    'Message Sent! 🎉',
    'cnt.ok.text':     "Thanks for reaching out. I'll review your message and get back to you within 24 hours.",
    'cnt.faq.title':   'Frequently Asked <span class="gradient-text">Questions</span>',
    'cnt.faq.1.q':     'Are you available for freelance?',
    'cnt.faq.1.a':     "Yes! I take on select freelance and contract projects alongside my main work. Let's discuss your needs.",
    'cnt.faq.2.q':     "What's your typical timeline?",
    'cnt.faq.2.a':     'Small projects take 1–3 weeks; larger applications typically 4–12 weeks depending on complexity and scope.',
    'cnt.faq.3.q':     'Do you work remotely?',
    'cnt.faq.3.a':     "Absolutely — I'm fully set up for remote work and have collaborated with international teams across time zones.",
    'cnt.faq.4.q':     'What does collaboration look like?',
    'cnt.faq.4.a':     'Regular check-ins, transparent progress updates, iterative feedback loops, and clear documentation at every stage.',
  },

  nl: {
    /* ── NAV ── */
    'nav.home':    'Home',
    'nav.about':   'Over',
    'nav.work':    'Werk',
    'nav.contact': 'Contact',

    /* ── FOOTER ── */
    'ftr.copy': '© 2025 Muhammad Abdoel. Gemaakt met ❤️ en veel ☕',

    /* ══ INDEX · HERO ══ */
    'idx.hero.badge':      'Beschikbaar voor Werk',
    'idx.hero.greeting':   'Hoi, ik ben',
    'idx.hero.desc':       'Eerstejaars ICT-student aan de UNASAT, Paramaribo, Suriname. Met een achtergrond in management ben ik gepassioneerd door technologie en het bouwen van digitale oplossingen die echt een verschil maken.',
    'idx.hero.viewWork':   'Bekijk Mijn Werk',
    'idx.hero.letsTalk':   'Neem Contact Op',
    'idx.stats.companies': 'Bedrijven',
    'idx.stats.yearsExp':  'Jaar Werkervaring',
    'idx.stats.yearIct':   'Jaar ICT',

    /* ══ INDEX · ABOUT ══ */
    'idx.abt.tag':      'Over Mij',
    'idx.abt.title':    'Wie Ik <span class="gradient-text">Ben</span>',
    'idx.abt.subtitle': 'Een nieuwsgierige bouwer die koffie omzet in code.',
    'idx.abt.p1':       'Ik ben Muhammad Abdoel, een eerstejaars ICT-student aan de UNASAT in Paramaribo, Suriname. Naast mijn studie breng ik praktijkervaring mee uit managementfuncties bij meerdere bedrijven — wat mij een uniek perspectief geeft dat zakelijk denken combineert met technische vaardigheden.',
    'idx.abt.p2':       'Ik word gedreven door een passie voor technologie en probleemoplossing. Of het nu gaat om het leren van nieuwe programmeerconcepten, het bouwen van projecten of het verbeteren van processen — ik streef er altijd naar te groeien en resultaten te leveren. Technologie is voor mij een middel om betekenisvolle impact te creëren.',
    'idx.abt.c1.title': 'Schone Code',
    'idx.abt.c1.desc':  'Leesbare, onderhoudbare en goed gestructureerde code schrijven, elke keer weer.',
    'idx.abt.c2.title': 'Prestaties',
    'idx.abt.c2.desc':  'Optimaliseren voor snelheid, schaalbaarheid en uitzonderlijke gebruikerservaringen.',
    'idx.abt.c3.title': 'Responsief',
    'idx.abt.c3.desc':  'Pixel-perfecte lay-outs bouwen die op elk apparaat prachtig werken.',
    'idx.abt.c4.title': 'Beveiliging',
    'idx.abt.c4.desc':  'Beveiligingsbest practices prioriteren in elk project dat ik aanpak.',
    'idx.abt.badge':    'Jaar Ervaring',

    /* ══ INDEX · EDUCATION ══ */
    'idx.edu.tag':      'Opleiding',
    'idx.edu.title':    'Mijn <span class="gradient-text">Achtergrond</span>',
    'idx.edu.subtitle': 'De academische basis die mijn technisch denken en probleemoplossend vermogen heeft gevormd.',
    'idx.edu.1.deg':    'Bachelor ICT',
    'idx.edu.1.sch':    'UNASAT — Paramaribo, Suriname',
    'idx.edu.1.desc':   'Momenteel in mijn eerste jaar van het ICT-programma aan de Universiteit van Suriname (UNASAT). Ik bouw een sterke basis in informatietechnologie, programmeren, netwerken en digitale systemen, terwijl ik praktijkervaring toepas vanuit mijn professionele achtergrond.',
    'idx.edu.1.stat':   'Eerste Jaar — Bezig',
    'idx.edu.2.deg':    'Middelbaar Onderwijs',
    'idx.edu.2.sch':    'ADEK',
    'idx.edu.2.desc':   'Mijn laatste jaar van het middelbaar onderwijs afgerond aan het ADEK, waarbij ik mijn academische basis verstevigde voordat ik begon aan een hogere opleiding in ICT.',
    'idx.edu.2.stat':   'Geslaagd',
    'idx.edu.3.deg':    'Middelbaar Onderwijs',
    'idx.edu.3.sch':    'Lyco1',
    'idx.edu.3.desc':   'Vijf jaar lang Lyco1 gevolgd, waarbij ik de academische en analytische vaardigheden heb opgebouwd die de basis legden voor mijn toekomstige studie in technologie.',
    'idx.edu.3.stat':   'Afgerond',

    /* ══ INDEX · EXPERIENCE ══ */
    'idx.exp.tag':      'Ervaring',
    'idx.exp.title':    'Werk<span class="gradient-text">ervaring</span>',
    'idx.exp.subtitle': 'Plaatsen waar ik ben gegroeid, heb geleverd en impact heb gemaakt.',
    'idx.exp.1.role':   'Management',
    'idx.exp.1.co':     'AzalTransport — Paramaribo, Suriname',
    'idx.exp.1.desc':   'Werkzaam in een managementfunctie bij AzalTransport, verantwoordelijk voor dagelijkse operaties en het coördineren van logistieke activiteiten. Verantwoordelijk voor planning, teamcoördinatie en het waarborgen van soepele operationele workflows binnen de organisatie.',
    'idx.exp.2.role':   'Management',
    'idx.exp.2.co':     'Adesh — Paramaribo, Suriname',
    'idx.exp.2.desc':   'Professionele ontwikkeling voortgezet in een managementcapaciteit bij Adesh. Organisatorische taken afgehandeld, besluitvormingsprocessen ondersteund en bijgedragen aan het verbeteren van interne efficiëntie en teamprestaties.',
    'idx.exp.3.role':   'Management',
    'idx.exp.3.co':     'Francisco N.V — Paramaribo, Suriname',
    'idx.exp.3.desc':   'Momenteel werkzaam in een managementfunctie bij Francisco N.V naast mijn ICT-studie aan de UNASAT. Sterke organisatorische en leiderschapsvaardigheden toepassen terwijl ik mijn technische kennis op het gebied van informatietechnologie blijf uitbreiden.',

    /* ══ INDEX · SKILLS ══ */
    'idx.sk.tag':    'Vaardigheden',
    'idx.sk.title':  'Tech <span class="gradient-text">Stack</span>',
    'idx.sk.sub':    'De technologieën die ik tot nu toe heb geleerd en gebruikt in mijn ICT-studie en projecten.',
    'idx.sk.webdev': 'Webontwikkeling',
    'idx.sk.prog':   'Programmeren',
    'idx.sk.db':     'Database & Tools',

    /* ══ ABOUT PAGE · HERO ══ */
    'abt.hero.tag':   'Over Mij',
    'abt.hero.title': 'Het Verhaal <span class="gradient-text">Achter de Code</span>',
    'abt.hero.sub':   'Een nieuwsgierige bouwer uit Paramaribo, Suriname — die managementervaring combineert met een passie voor technologie om dingen te creëren die ertoe doen.',

    /* ══ ABOUT PAGE · BIO ══ */
    'abt.bio.tag':      'Wie Ik Ben',
    'abt.bio.title':    'Muhammad <span class="gradient-text">Abdoel</span>',
    'abt.bio.subtitle': 'ICT-student, ontwikkelaar in wording en voormalig manager.',
    'abt.bio.p1':       'Ik ben Muhammad Abdoel, een eerstejaars ICT-student aan de UNASAT (Universiteit van Suriname) in Paramaribo, Suriname. Mijn reis in de technologie begon niet in een klas — het begon in de echte wereld, waar ik meer dan twee jaar in managementfuncties heb gewerkt bij drie verschillende bedrijven.',
    'abt.bio.p2':       'Die professionele achtergrond gaf mij iets wat de meeste ontwikkelaars niet vroeg hebben: een diepgaand begrip van hoe organisaties echt werken. Ik weet wat het betekent om teams te coördineren, operaties te beheren en echte bedrijfsproblemen op te lossen. Nu combineer ik dat met de technische vaardigheden die ik opbouw in mijn ICT-studie om een ontwikkelaar te worden die niet alleen code schrijft — maar ook de impact erachter begrijpt.',
    'abt.bio.p3':       'Naast studeren en coderen ben ik constant nieuwe technologieën aan het verkennen, side-projecten aan het bouwen en op zoek naar manieren om wat ik leer toe te passen op echte problemen. Technologie is voor mij het krachtigste instrument dat we hebben om betekenisvolle verandering te creëren.',
    'abt.bio.c1.title': 'Doelgericht',
    'abt.bio.c1.desc':  'Elk project dat ik aanneem heeft een duidelijk doel. Ik focus op resultaten, niet alleen op output.',
    'abt.bio.c2.title': 'Snelle Leerder',
    'abt.bio.c2.desc':  'Van management naar code — ik pas me snel aan en gedij goed bij het leren van nieuwe dingen.',
    'abt.bio.c3.title': 'Teamspeler',
    'abt.bio.c3.desc':  'Jaren van teamcoördinatie leerden mij dat geweldig werk bijna altijd een samenwerking is.',
    'abt.bio.c4.title': 'Probleemoplosser',
    'abt.bio.c4.desc':  'Ik schrijf niet alleen code — ik zoek naar de slimste oplossing voor het werkelijke probleem.',
    'abt.bio.badge':    'Jaar Ervaring',

    /* ══ ABOUT PAGE · EDUCATION ══ */
    'abt.edu.tag':    'Opleiding',
    'abt.edu.title':  'Academische <span class="gradient-text">Achtergrond</span>',
    'abt.edu.sub':    'De academische basis die mijn denken heeft gevormd en mijn technische reis heeft gelanceerd.',
    'abt.edu.1.deg':  'Bachelor ICT',
    'abt.edu.1.sch':  'UNASAT — Paramaribo, Suriname',
    'abt.edu.1.desc': 'Momenteel in mijn eerste jaar van het ICT-programma aan de Universiteit van Suriname (UNASAT). Ik bouw een sterke basis in informatietechnologie, programmeren, netwerken en digitale systemen, terwijl ik praktijkervaring toepas vanuit mijn professionele achtergrond.',
    'abt.edu.1.stat': 'Eerste Jaar — Bezig',
    'abt.edu.2.deg':  'Middelbaar Onderwijs',
    'abt.edu.2.sch':  'ADEK',
    'abt.edu.2.desc': 'Mijn laatste jaar van het middelbaar onderwijs afgerond aan het ADEK, waarbij ik mijn academische basis verstevigde voordat ik begon aan een hogere opleiding in ICT.',
    'abt.edu.2.stat': 'Geslaagd',
    'abt.edu.3.deg':  'Middelbaar Onderwijs',
    'abt.edu.3.sch':  'Lyco1',
    'abt.edu.3.desc': 'Vijf jaar lang Lyco1 gevolgd, waarbij ik de academische en analytische vaardigheden heb opgebouwd die de basis legden voor mijn toekomstige studie in technologie.',
    'abt.edu.3.stat': 'Afgerond',

    /* ══ ABOUT PAGE · EXPERIENCE ══ */
    'abt.exp.tag':    'Ervaring',
    'abt.exp.title':  'Werk<span class="gradient-text">ervaring</span>',
    'abt.exp.sub':    'Praktijkfuncties die mij het zakelijke inzicht gaven om mijn technische vaardigheden aan te vullen.',
    'abt.exp.1.role': 'Management',
    'abt.exp.1.co':   'AzalTransport — Paramaribo, Suriname',
    'abt.exp.1.desc': 'Werkzaam in een managementfunctie bij AzalTransport, verantwoordelijk voor dagelijkse operaties en het coördineren van logistieke activiteiten. Ook een interne website gebouwd voor het bedrijf met HTML, CSS en JavaScript.',
    'abt.exp.2.role': 'Management',
    'abt.exp.2.co':   'Adesh — Paramaribo, Suriname',
    'abt.exp.2.desc': 'Professionele ontwikkeling voortgezet in een managementcapaciteit bij Adesh. Organisatorische taken afgehandeld, besluitvormingsprocessen ondersteund en bijgedragen aan het verbeteren van interne efficiëntie en teamprestaties.',
    'abt.exp.3.role': 'Management',
    'abt.exp.3.co':   'Francisco N.V — Paramaribo, Suriname',
    'abt.exp.3.desc': 'Momenteel werkzaam in een managementfunctie bij Francisco N.V naast mijn ICT-studie aan de UNASAT. Sterke organisatorische en leiderschapsvaardigheden toepassen terwijl ik mijn technische kennis blijf uitbreiden.',

    /* ══ ABOUT PAGE · SKILLS ══ */
    'abt.sk.tag':              'Vaardigheden',
    'abt.sk.title':            'Tech <span class="gradient-text">Stack</span>',
    'abt.sk.sub':              'De technologieën die ik tot nu toe heb geleerd en gebruikt in mijn ICT-studie en projecten.',
    'abt.sk.webdev':           'Webontwikkeling',
    'abt.sk.prog':             'Programmeren',
    'abt.sk.db':               'Database & Tools',
    'abt.sk.lvl.comfortable':  'Bedreven',
    'abt.sk.lvl.learning':     'Aan het Leren',
    'abt.sk.lvl.exploring':    'Aan het Verkennen',

    /* ══ ABOUT PAGE · CTA ══ */
    'abt.cta.tag':   'Laten We Samenwerken',
    'abt.cta.title': 'Geïnteresseerd in <span class="gradient-text">Samenwerken?</span>',
    'abt.cta.text':  'Ik sta open voor freelance werk, samenwerkingen en voltijdse kansen. Aarzel niet om contact op te nemen — ik hoor graag over uw project.',
    'abt.cta.btn1':  'Neem Contact Op',
    'abt.cta.btn2':  'Bekijk Mijn Werk',
    'abt.cta.cv':    'Download CV',

    /* ══ WORK PAGE ══ */
    'wrk.hero.tag':   'Portfolio',
    'wrk.hero.title': 'Mijn <span class="gradient-text">Project</span>',
    'wrk.hero.sub':   'Ik sta nog aan het begin van mijn ICT-reis — hier is het eerste echte project dat ik heb gebouwd en geleverd voor een echte organisatie.',
    'wrk.p1.badge':   'Live Project',
    'wrk.p1.type':    'Interne Webontwikkeling · 2024',
    'wrk.p1.title':   'AzalTransport Interne Website',
    'wrk.p1.desc':    'Een interne website ontworpen en gebouwd voor AzalTransport, het transportbedrijf waar ik in management werkte. De site dient als intern hulpmiddel voor de organisatie en helpt bij het stroomlijnen van informatiedeling en dagelijkse operaties voor medewerkers.',
    'wrk.p1.locked':  'Intern — Niet Openbaar',
    'wrk.more.text':  'Meer projecten komen eraan terwijl ik mijn ICT-studie aan de UNASAT voortzet.',
    'wrk.more.btn':   'Neem Contact Op',

    /* ══ CONTACT PAGE ══ */
    'cnt.hero.tag':   'Contact',
    'cnt.hero.title': 'Laten We <span class="gradient-text">Verbinden</span>',
    'cnt.hero.sub':   'Heeft u een project in gedachten, een vraag, of wilt u gewoon hallo zeggen? Ik hoor graag van u — mijn inbox staat altijd open.',
    'cnt.info.title': 'Neem <span class="gradient-text">Contact Op</span>',
    'cnt.info.p':     'Of u nu op zoek bent naar een ontwikkelaar voor uw team, een freelance samenwerking nodig heeft, of gewoon wilt praten over tech — ik luister. Ik reageer doorgaans binnen 24 uur.',
    'cnt.d.email':    'E-mail',
    'cnt.d.location': 'Locatie',
    'cnt.d.locVal':   'Paramaribo, Suriname 🇸🇷',
    'cnt.d.resp':     'Reactietijd',
    'cnt.d.respVal':  'Binnen 24 uur',
    'cnt.d.mode':     'Werkmodus',
    'cnt.d.modeVal':  'Remote / Hybride / Op locatie',
    'cnt.avail':      'Momenteel beschikbaar voor freelance en voltijdse functies',
    'cnt.f.title':    'Stuur een Bericht',
    'cnt.f.sub':      'Vul het formulier hieronder in en ik neem zo snel mogelijk contact met u op.',
    'cnt.f.fname':    'Voornaam',
    'cnt.f.lname':    'Achternaam',
    'cnt.f.email':    'E-mailadres',
    'cnt.f.subject':  'Onderwerp',
    'cnt.f.s.ph':     'Selecteer een onderwerp…',
    'cnt.f.s.o1':     'Freelance / Contractwerk',
    'cnt.f.s.o2':     'Voltijdse Functie',
    'cnt.f.s.o3':     'Samenwerking / Partnerschap',
    'cnt.f.s.o4':     'Feedback op Mijn Werk',
    'cnt.f.s.o5':     'Gewoon Hallo Zeggen 👋',
    'cnt.f.budget':   'Budgetbereik (optioneel)',
    'cnt.f.b.ph':     'Selecteer een bereik…',
    'cnt.f.b.o1':     'Onder €1.000',
    'cnt.f.b.o2':     '€1.000 – €5.000',
    'cnt.f.b.o3':     '€5.000 – €15.000',
    'cnt.f.b.o4':     '€15.000+',
    'cnt.f.b.o5':     'Niet van toepassing',
    'cnt.f.msg':      'Bericht',
    'cnt.f.msg.ph':   'Vertel me over uw project, idee of iets anders dat u bezighoudt…',
    'cnt.f.submit':   'Verstuur Bericht',
    'cnt.ok.title':   'Bericht Verzonden! 🎉',
    'cnt.ok.text':    'Bedankt voor uw bericht. Ik bekijk het en neem binnen 24 uur contact met u op.',
    'cnt.faq.title':  'Veelgestelde <span class="gradient-text">Vragen</span>',
    'cnt.faq.1.q':    'Bent u beschikbaar voor freelance?',
    'cnt.faq.1.a':    'Ja! Ik neem selectieve freelance en contractprojecten aan naast mijn hoofdwerk. Laten we uw behoeften bespreken.',
    'cnt.faq.2.q':    'Wat is uw gebruikelijke tijdlijn?',
    'cnt.faq.2.a':    'Kleine projecten duren 1–3 weken; grotere applicaties doorgaans 4–12 weken afhankelijk van complexiteit en omvang.',
    'cnt.faq.3.q':    'Werkt u op afstand?',
    'cnt.faq.3.a':    'Absoluut — ik ben volledig ingericht voor remote werk en heb samengewerkt met internationale teams in verschillende tijdzones.',
    'cnt.faq.4.q':    'Hoe ziet samenwerking eruit?',
    'cnt.faq.4.a':    'Regelmatige check-ins, transparante voortgangsupdates, iteratieve feedbackloops en duidelijke documentatie in elke fase.',
  },
};

/* ── Apply all translations to the page ── */
function applyLang(lang) {
  const t = TRANSLATIONS[lang];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = t[el.dataset.i18n];
    if (v !== undefined) el.textContent = v;
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const v = t[el.dataset.i18nHtml];
    if (v !== undefined) el.innerHTML = v;
  });

  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const v = t[el.dataset.i18nPh];
    if (v !== undefined) el.placeholder = v;
  });

  document.querySelectorAll('[data-i18n-opt]').forEach(el => {
    const v = t[el.dataset.i18nOpt];
    if (v !== undefined) el.textContent = v;
  });

  /* Update toggle button */
  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.querySelector('.lang-en').classList.toggle('lang-active', lang === 'en');
    btn.querySelector('.lang-nl').classList.toggle('lang-active', lang === 'nl');
  });

  localStorage.setItem('portfolio-lang', lang);
  document.documentElement.lang = lang;
}

/* ── Bootstrap ── */
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('portfolio-lang') || 'en';
  applyLang(saved);

  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const next = (localStorage.getItem('portfolio-lang') || 'en') === 'en' ? 'nl' : 'en';
      applyLang(next);
    });
  });
});
