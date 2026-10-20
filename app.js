// --- Data: Industrial Experience & Technical Case Studies Array ---
const projects = [
    {
        id: "atp-ato-vv",
        title: "ATP/ATO Functional Verification & TCMS Integration",
        category: "Railway Signalling • ALSTOM (Vulcain Engineering)",
        tech: ["ATP/ATO", "TCMS", "ClearQuest", "Movement Authority", "Emergency Braking"],
        shortDesc: "End-to-end functional requirement review, test case development, and verification scenario execution for onboard ATP/ATO train control systems.",
        fullDesc: "Carried out within the Vulcain Engineering Group for ALSTOM railway projects, this work centers on ensuring absolute functional reliability of Automatic Train Protection (ATP) and Automatic Train Operation (ATO) subsystems. Responsibilities include reviewing software functional requirements for coverage, consistency, and traceability, designing robust test cases, and executing complex verification scenarios covering Movement Authority (MA) management, speed supervision, Emergency Braking (EB), and real-time ATP/ATO–TCMS traction and braking command interactions. Specification defects and anomalies are rigorously tracked via ClearQuest in close collaboration with Design and RAMS teams.",
        image: "https://www.railwaypro.com/wp/wp-content/uploads/2023/11/RERNG%C2%A9SamuelDhote_1360-1.jpg"
    },
    {
        id: "ertms-etcs-onboard",
        title: "ERTMS/ETCS Onboard Signalling V&V",
        category: "European Train Control • ALSTOM (Alten Maroc)",
        tech: ["ERTMS/ETCS", "CENELEC EN 50128", "IBM DOORS", "DMI", "Level Transitions"],
        shortDesc: "CENELEC-compliant verification and validation of ERTMS/ETCS Onboard signalling functions, level transitions, and DMI data.",
        fullDesc: "Delivered for ALSTOM projects at Alten Maroc, this engagement encompassed full-lifecycle verification and validation of ERTMS/ETCS Onboard signalling functions in strict compliance with CENELEC EN 50126, EN 50128, and EN 50129 standards. Work included reviewing system and subsystem specifications, authoring safety-aligned test plans, and executing functional test scenarios for Movement Authority (MA), speed supervision curves, driving mode transitions, ETCS level transitions, Emergency Braking, and Driver Machine Interface (DMI) application data validation.",
        image: "https://www.alstom.com/sites/alstom.com/files/2020/06/02/AlstomGermanyJ2%2035.jpg"
    },
    {
        id: "ma-speed-eb",
        title: "Movement Authority & Speed Supervision Validation",
        category: "Safety-Critical Functions • Train Control",
        tech: ["Speed Supervision", "Movement Authority", "Braking Curves", "GSM-R", "Safety Logic"],
        shortDesc: "Verification of dynamic speed profiles, braking intervention thresholds, and fail-safe Emergency Braking reaction logic.",
        fullDesc: "A core pillar of onboard railway signalling safety is guaranteeing that a train never exceeds its permitted speed envelope or Movement Authority (MA). Across both ERTMS/ETCS and ATP/ATO projects, I designed and executed boundary-value and fault-injection verification scenarios testing target speed monitoring, ceiling speed supervision, traction cut-off interfaces, and unconditional Emergency Braking (EB) commands under degraded and nominal trackside-to-train telecommunication states.",
        image: "https://images.unsplash.com/photo-1515165562839-978bbcf18277?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: "doors-traceability",
        title: "CENELEC Requirements Traceability & Audit Readiness",
        category: "Quality & RAMS Compliance • EN 50126/50128/50129",
        tech: ["IBM DOORS", "ClearQuest", "Doc4A", "AEC", "ISTQB CTFL"],
        shortDesc: "Bidirectional requirements traceability, specification defect management, and audit-ready verification reporting.",
        fullDesc: "In safety-critical SIL-rated railway programs, every software and system requirement must be demonstrably verified and traceable from high-level specifications down to individual test execution logs. Using IBM DOORS, Doc4A, AEC, and ClearQuest, I managed bidirectional traceability matrices, imported formal verification results, authored comprehensive test reports, and supported quality, RAMS, and safety assessors through formal technical reviews and validation milestones.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: "autosar-vsm-mbd",
        title: "AUTOSAR Central ECU (VSM) Model-Based Design",
        category: "Automotive Architecture • EE 2020 (NEA)",
        tech: ["AUTOSAR", "MATLAB/Simulink", "ISO 26262", "MISRA C", "MAAB"],
        shortDesc: "Design and modeling of AUTOSAR-compliant software components for Central ECU (VSM) covering Cluster, Chassis, and Braking interfaces.",
        fullDesc: "As a Model-Based Design Software Architect at Alten Maroc, I architected AUTOSAR-compliant software components (interfaces and I/O) for the Vehicle System Manager (VSM) Central ECU within the EE 2020 (NEA) automotive electrical architecture. Using MATLAB/Simulink, I modeled functional subsystems governing Cluster, Chassis, and Braking interfaces directly from OEM customer requirements while enforcing ISO 26262 functional safety, MAAB modeling guidelines, and MISRA C compliance.",
        image: "https://www.aranca.com/assets/uploads/blogs/Biomimicry.jpg"
    },
    {
        id: "embedded-coder-can",
        title: "Embedded Code Generation & CANalyzer Diagnostics",
        category: "Embedded Software • Bus Protocols & Simulation",
        tech: ["Embedded Coder", "C / C++", "CANalyzer", "CAN / LIN", "Git / GitHub"],
        shortDesc: "Production C code generation via Embedded Coder and bus-level debugging using CANalyzer across international engineering teams.",
        fullDesc: "Bridging graphical Simulink models and target automotive hardware required rigorous Model-in-the-Loop (MIL) and Software-in-the-Loop (SIL) verification, automated C code generation with Embedded Coder, and frame-level network diagnostics over CAN and LIN buses using Vector CANalyzer. Version control and collaborative releases were managed via Git and GitHub in coordination with distributed engineering teams across France, Italy, Romania, China, and India.",
        image: "https://images.ansys.com/is/image/ansys/bmw-lp-og4-1?wid=1200"
    }
];

// --- 1. Three.js Plexus Background Animation (Amber/Gold Theme) ---
const initThreeJS = () => {
    const canvas = document.getElementById('webgl-canvas');
    if (!canvas || typeof THREE === 'undefined') return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050505, 0.002);

    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 400;

    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Particles Data
    const particleCount = 240;
    const maxDistance = 90; 
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleVelocities = [];

    const range = 600;

    for (let i = 0; i < particleCount; i++) {
        const x = (Math.random() - 0.5) * range;
        const y = (Math.random() - 0.5) * range;
        const z = (Math.random() - 0.5) * range;

        particlePositions[i * 3] = x;
        particlePositions[i * 3 + 1] = y;
        particlePositions[i * 3 + 2] = z;

        particleVelocities.push({
            x: (Math.random() - 0.5) * 0.45,
            y: (Math.random() - 0.5) * 0.45,
            z: (Math.random() - 0.5) * 0.45
        });
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    // Particle Material (Warm Amber/Gold #fbbf24)
    const pMaterial = new THREE.PointsMaterial({
        color: 0xfbbf24,
        size: 4,
        transparent: true,
        opacity: 0.95,
        sizeAttenuation: true
    });

    const particles = new THREE.Points(particleGeometry, pMaterial);
    scene.add(particles);

    // Lines Geometry (Amber #f59e0b)
    const lineMaterial = new THREE.LineBasicMaterial({
        color: 0xf59e0b,
        transparent: true,
        opacity: 0.3
    });
    
    const linesGeometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array((particleCount * particleCount) * 3);
    linesGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3).setUsage(THREE.DynamicDrawUsage));
    
    const linesMesh = new THREE.LineSegments(linesGeometry, lineMaterial);
    scene.add(linesMesh);

    // Mouse and Scroll Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetScrollY = 0;
    let currentScrollY = 0;

    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;

    document.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX - windowHalfX) * 0.2;
        mouseY = (event.clientY - windowHalfY) * 0.2;
    });

    window.addEventListener('scroll', () => {
        targetScrollY = window.scrollY;
    });

    // Animation Loop
    const animate = () => {
        requestAnimationFrame(animate);

        const positions = particleGeometry.attributes.position.array;
        
        for (let i = 0; i < particleCount; i++) {
            positions[i * 3] += particleVelocities[i].x;
            positions[i * 3 + 1] += particleVelocities[i].y;
            positions[i * 3 + 2] += particleVelocities[i].z;
            
            if (Math.abs(positions[i * 3]) > range / 2) particleVelocities[i].x *= -1;
            if (Math.abs(positions[i * 3 + 1]) > range / 2) particleVelocities[i].y *= -1;
            if (Math.abs(positions[i * 3 + 2]) > range / 2) particleVelocities[i].z *= -1;
        }
        particleGeometry.attributes.position.needsUpdate = true;

        let vertexpos = 0;
        let numConnected = 0;
        
        for (let i = 0; i < particleCount; i++) {
            for (let j = i + 1; j < particleCount; j++) {
                const dx = positions[i * 3] - positions[j * 3];
                const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
                const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
                const distSq = dx * dx + dy * dy + dz * dz;
                
                if (distSq < maxDistance * maxDistance) {
                    linePositions[vertexpos++] = positions[i * 3];
                    linePositions[vertexpos++] = positions[i * 3 + 1];
                    linePositions[vertexpos++] = positions[i * 3 + 2];
                    
                    linePositions[vertexpos++] = positions[j * 3];
                    linePositions[vertexpos++] = positions[j * 3 + 1];
                    linePositions[vertexpos++] = positions[j * 3 + 2];
                    
                    numConnected++;
                }
            }
        }
        linesGeometry.setDrawRange(0, numConnected * 2);
        linesGeometry.attributes.position.needsUpdate = true;

        currentScrollY += (targetScrollY - currentScrollY) * 0.05;

        camera.position.x += (mouseX - camera.position.x) * 0.05;
        camera.position.y += (-mouseY - (currentScrollY * 0.05) - camera.position.y) * 0.05;
        
        scene.rotation.y = currentScrollY * 0.001;
        scene.rotation.x = currentScrollY * 0.0005;

        camera.lookAt(scene.position);
        renderer.render(scene, camera);
    };

    animate();

    window.addEventListener('resize', () => {
        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
};

// --- 2. GSAP Animations & Setup ---
const initAnimations = () => {
    gsap.registerPlugin(ScrollTrigger);

    // Text Split Utility (preserves line breaks)
    const splitTextToSpans = (selector) => {
        document.querySelectorAll(selector).forEach(el => {
            const lines = el.innerText.split('\n');
            el.innerHTML = lines.map(line => {
                return line.trim().split('').map(char => {
                    if (char === ' ') return '&nbsp;';
                    return `<span class="char">${char}</span>`;
                }).join('');
            }).join('<br/>');
        });
    };

    splitTextToSpans('.split-text');

    const tl = gsap.timeline();
    
    tl.to('.logo-anim', { opacity: 1, duration: 1, ease: 'power2.out' })
      .to('.char', {
          y: 0,
          opacity: 1,
          stagger: 0.04,
          duration: 0.8,
          ease: 'back.out(1.7)'
      }, "-=0.5")
      .fromTo('.reveal-text', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 }, "-=0.5")
      .fromTo('.reveal-text-delay', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 }, "-=0.8")
      .fromTo('.reveal-button', { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.5)' }, "-=0.5")
      .fromTo('.scroll-indicator', { opacity: 0 }, { opacity: 0.5, duration: 1 });

    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: "top 80%",
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });
    });

    gsap.utils.toArray('.exp-item').forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 85%",
            },
            x: -50,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.1,
            ease: "power2.out"
        });
    });
};

// --- 3. DOM Population & Interactivity ---
const initDOM = () => {
    const grid = document.getElementById('project-grid');
    
    projects.forEach((proj) => {
        const tags = proj.tech.map(t => `<span class="text-xs font-['Space_Grotesk'] px-2.5 py-1 bg-white/5 border border-white/10 rounded text-gray-300">${t}</span>`).join('');
        
        const cardHTML = `
            <div class="project-card rounded-2xl cursor-pointer flex flex-col justify-between" data-id="${proj.id}" style="opacity: 0; transform: translateY(50px);">
                <div>
                    <div class="project-img-container h-48 w-full rounded-t-2xl relative">
                        <img src="${proj.image}" alt="${proj.title}" class="project-img w-full h-full object-cover">
                        <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent"></div>
                        <div class="absolute bottom-4 left-4 right-4 text-xs font-bold tracking-widest text-amber-400 uppercase">${proj.category}</div>
                    </div>
                    <div class="p-6">
                        <h3 class="font-['Syncopate'] text-lg font-bold mb-3 leading-snug">${proj.title}</h3>
                        <p class="font-['Space_Grotesk'] text-gray-400 text-sm mb-5">${proj.shortDesc}</p>
                    </div>
                </div>
                <div class="px-6 pb-6 flex flex-wrap gap-2">
                    ${tags}
                </div>
            </div>
        `;
        grid.insertAdjacentHTML('beforeend', cardHTML);
    });

    gsap.to('.project-card', {
        scrollTrigger: {
            trigger: '#project-grid',
            start: "top 80%",
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
    });

    // Overlay Logic
    const overlay = document.getElementById('project-overlay');
    const closeBtn = document.getElementById('close-overlay');
    const contentContainer = document.getElementById('overlay-content');

    const openOverlay = (id) => {
        const proj = projects.find(p => p.id === id);
        if (!proj) return;

        const tags = proj.tech.map(t => `<span class="text-sm font-['Space_Grotesk'] px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-300">${t}</span>`).join('');

        const contentHTML = `
            <div class="w-full h-[40vh] md:h-[55vh] relative">
                <img src="${proj.image}" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
            </div>
            <div class="max-w-4xl mx-auto px-6 -mt-32 relative z-10">
                <p class="text-amber-400 font-['Space_Grotesk'] tracking-[0.2em] text-sm mb-2 uppercase">${proj.category}</p>
                <h2 class="font-['Syncopate'] text-3xl md:text-5xl font-bold mb-8 uppercase leading-tight">${proj.title}</h2>
                <div class="flex flex-wrap gap-3 mb-12">
                    ${tags}
                </div>
                <div class="font-['Space_Grotesk'] text-gray-300 text-lg md:text-xl leading-relaxed space-y-6">
                    <p>${proj.fullDesc}</p>
                    <p>Every verification activity was conducted with strict adherence to international safety standards (CENELEC EN 50126/50128/50129 for railway signalling and ISO 26262 / MISRA C for automotive systems), ensuring full traceability and zero-defect delivery.</p>
                </div>
                
                <div class="mt-16 border-t border-white/10 pt-8 flex justify-between items-center">
                    <span class="font-['Syncopate'] text-white">AM<span class="text-amber-400">.</span></span>
                    <button class="px-6 py-3 border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black rounded-full font-['Space_Grotesk'] font-semibold transition-all close-from-bottom">Close Domain</button>
                </div>
            </div>
        `;

        contentContainer.innerHTML = contentHTML;
        overlay.classList.add('overlay-open');
        document.body.style.overflow = 'hidden'; 

        document.querySelector('.close-from-bottom').addEventListener('click', closeOverlayFunc);
    };

    const closeOverlayFunc = () => {
        overlay.classList.remove('overlay-open');
        document.body.style.overflow = 'auto';
        setTimeout(() => {
            contentContainer.innerHTML = '';
        }, 700); 
    };

    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            openOverlay(card.dataset.id);
        });
    });

    closeBtn.addEventListener('click', closeOverlayFunc);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('overlay-open')) {
            closeOverlayFunc();
        }
    });
};

// --- 4. Initialize Everything on Page Load ---
window.addEventListener('DOMContentLoaded', () => {
    initThreeJS();
    initDOM();
    initAnimations();
});
