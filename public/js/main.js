const projects = [
  {
    id: 0,
    title: "Echoes of the Void",
    category: "unreal",
    tags: ["Unreal Engine 5", "C++", "GAS"],
    thumbnail: "https://picsum.photos/seed/echoes-void-rpg/600/400.jpg",
    description: "Souls-inspired action RPG with custom ability system and rollback netcode.",
    featured: true,
    year: "2024",
    platform: "PC / PS5",
    role: "Senior Gameplay Programmer",
    longDesc: "Echoes of the Void is a dark fantasy action RPG where every encounter is a puzzle. I architected the entire combat pipeline from the ground up — from input buffering and combo trees to hit detection and damage application using UE5's Gameplay Ability System (GAS).",
    highlights: [
      "Built a data-driven combo system allowing designers to create 200+ combos without code changes",
      "Implemented rollback netcode for seamless 2-player co-op with <2ms latency",
      "Procedural dungeon generation using Wave Function Collapse algorithm",
      "Boss AI using custom behavior tree decorators and environmental awareness",
      "Shipped on time with 92 Metacritic score"
    ],
    videoUrl: "#",
    screenshots: [
      "https://picsum.photos/seed/echoes-ss1/800/450.jpg",
      "https://picsum.photos/seed/echoes-ss2/800/450.jpg",
      "https://picsum.photos/seed/echoes-ss3/800/450.jpg"
    ]
  },
  {
    id: 1,
    title: "Neon Drift",
    category: "unity",
    tags: ["Unity", "C#", "Physics"],
    thumbnail: "https://picsum.photos/seed/neon-drift-racing/600/400.jpg",
    description: "High-speed anti-gravity racer with realistic physics and track editor.",
    year: "2023",
    platform: "PC / Switch",
    role: "Gameplay Programmer",
    longDesc: "Neon Drift is an anti-gravity racer that prioritizes speed and track creativity. I built the vehicle physics from scratch using Unity's DOTS physics system, creating a feel that's both arcadey and deep.",
    highlights: [
      "Custom physics model simulating magnetic track adhesion and air resistance",
      "Built a node-based track editor allowing community track creation",
      "Implemented async multiplayer with prediction and reconciliation",
      "Optimized to hit 120fps on Switch in docked mode"
    ],
    videoUrl: "#",
    screenshots: [
      "https://picsum.photos/seed/neon-ss1/800/450.jpg",
      "https://picsum.photos/seed/neon-ss2/800/450.jpg"
    ]
  },
  {
    id: 2,
    title: "Hexbound",
    category: "unity",
    tags: ["Unity", "C#", "Netcode"],
    thumbnail: "https://picsum.photos/seed/hexbound-roguelike/600/400.jpg",
    description: "Roguelike deckbuilder with real-time card combat and co-op.",
    year: "2022",
    platform: "PC",
    role: "Gameplay Programmer",
    longDesc: "Hexbound blends Slay the Spire strategy with Hades-style action. I designed the card ability system that lets cards interact with real-time combat — shields block, spells aim, and combos chain in real-time.",
    highlights: [
      "Card ability framework supporting 350+ unique cards with modifier stacking",
      "Real-time card combat with input queuing and cancel windows",
      "Co-op netcode with deterministic simulation for card resolution",
      "Modding API that spawned a 10k+ member community"
    ],
    videoUrl: "#",
    screenshots: [
      "https://picsum.photos/seed/hex-ss1/800/450.jpg",
      "https://picsum.photos/seed/hex-ss2/800/450.jpg"
    ]
  },
  {
    id: 3,
    title: "Warden's Keep",
    category: "unreal",
    tags: ["Unreal Engine", "C++", "AI"],
    thumbnail: "https://picsum.photos/seed/wardens-keep-stealth/600/400.jpg",
    description: "Stealth-action game with emergent AI and systemic level design.",
    year: "2023",
    platform: "PC / PS5",
    role: "AI Programmer",
    longDesc: "Warden's Keep is a stealth game where the AI learns from your patterns. I built the knowledge representation system that tracks player behavior and adapts guard patrol routes and detection strategies.",
    highlights: [
      "AI knowledge system with 40+ player behavior trackers",
      "Emergent guard coordination using blackboard sharing",
      "Systemic interactions: fire, noise, light all affect AI detection",
      "Custom navigation mesh for 3D vertical pathfinding"
    ],
    videoUrl: "#",
    screenshots: [
      "https://picsum.photos/seed/warden-ss1/800/450.jpg"
    ]
  },
  {
    id: 4,
    title: "Tiny Wizards",
    category: "jam",
    tags: ["Godot", "GDScript", "48h"],
    thumbnail: "https://picsum.photos/seed/tiny-wizards-jam/600/400.jpg",
    description: "Ludum Dare 55 entry — cooperative spell-crafting puzzle game. Won 2nd place.",
    year: "2024",
    platform: "Web",
    role: "Solo Dev",
    longDesc: "Built in 48 hours for Ludum Dare 55 (theme: 'Summon'). Two players share a spellbook and must combine runes cooperatively to defeat enemies. Surprisingly deep for a jam game!",
    highlights: [
      "2nd place out of 3,400+ entries",
      "Rune-combining spell system with 60+ combinations",
      "Local co-op with shared screen and shared spellbook",
      "Featured on 'Best of Ludum Dare' YouTube roundup"
    ],
    videoUrl: "#",
    screenshots: [
      "https://picsum.photos/seed/tiny-ss1/800/450.jpg"
    ]
  },
  {
    id: 5,
    title: "Grapple Gunner",
    category: "personal",
    tags: ["Godot", "GDScript", "Open Source"],
    thumbnail: "https://picsum.photos/seed/grapple-gunner-movement/600/400.jpg",
    description: "Open-source movement tech demo showcasing advanced grapple physics in Godot.",
    year: "2024",
    platform: "PC / Web",
    role: "Solo Dev",
    longDesc: "A physics playground built to explore what makes grapple mechanics feel incredible. Iterated over 30 versions of the swinging model. Open-sourced so others can learn from the approach.",
    highlights: [
      "30+ iterations on grapple physics for 'just right' feel",
      "Momentum conservation system preserving speed through swings",
      "Open source with detailed dev blog on every iteration",
      "1.2k GitHub stars, featured in Godot community showcase"
    ],
    videoUrl: "#",
    screenshots: [
      "https://picsum.photos/seed/grapple-ss1/800/450.jpg",
      "https://picsum.photos/seed/grapple-ss2/800/450.jpg"
    ]
  },
  {
    id: 6,
    title: "DungeonStack",
    category: "jam",
    tags: ["Unity", "C#", "72h"],
    thumbnail: "https://picsum.photos/seed/dungeon-stack-puzzle/600/400.jpg",
    description: "GMTK Game Jam 2023 — Stack dungeon rooms to build your path. Top 50 finish.",
    year: "2023",
    platform: "Web",
    role: "Solo Dev",
    longDesc: "Built for GMTK Jam 2023 (theme: 'Roles Reversed'). Instead of exploring a dungeon, you BUILD it by stacking rooms Tetris-style while an AI hero navigates your creation. Top 50 out of 6,000+ entries.",
    highlights: [
      "Top 50 / 6,000+ entries",
      "Room-stacking procedural generation",
      "AI hero that pathfinds through your built dungeon",
      "2,000+ plays on itch.io in first week"
    ],
    videoUrl: "#",
    screenshots: [
      "https://picsum.photos/seed/stack-ss1/800/450.jpg"
    ]
  },
  {
    id: 7,
    title: "Skyframe",
    category: "personal",
    tags: ["Unreal Engine 5", "C++", "VFX"],
    thumbnail: "https://picsum.photos/seed/skyframe-airship/600/400.jpg",
    description: "Airship combat prototype with modular damage and Niagara VFX system.",
    year: "2024",
    platform: "PC",
    role: "Solo Dev",
    longDesc: "A prototype exploring modular ship damage where each component (hull, engine, weapons, balloon) can be individually targeted and destroyed. Features a custom Niagara VFX pipeline for fire, smoke, and debris propagation.",
    highlights: [
      "Modular damage system with 12 destructible components per ship",
      "Fire propagation simulation using Niagara",
      "Destructible mesh integration with physics-based debris",
      "Dev blog series with 50k+ total views"
    ],
    videoUrl: "#",
    screenshots: [
      "https://picsum.photos/seed/sky-ss1/800/450.jpg",
      "https://picsum.photos/seed/sky-ss2/800/450.jpg"
    ]
  },
  {
    id: 8,
    title: "Pocket Quest",
    category: "unity",
    tags: ["Unity", "C#", "Mobile"],
    thumbnail: "https://picsum.photos/seed/pocket-quest-mobile/600/400.jpg",
    description: "Idle RPG with real-time boss fights and 500k+ downloads.",
    year: "2021",
    platform: "iOS / Android",
    role: "Gameplay Programmer",
    longDesc: "An idle RPG that secretly has real-time action combat during boss fights. I built the auto-battle AI, the real-time boss combat system, and the offline progression calculator.",
    highlights: [
      "500k+ downloads across iOS and Android",
      "Hybrid idle + real-time combat system",
      "Offline progression with deterministic simulation",
      "Live ops event system running 2+ years post-launch"
    ],
    videoUrl: "#",
    screenshots: [
      "https://picsum.photos/seed/pocket-ss1/800/450.jpg"
    ]
  }
];

let visibleCount = 6;
let currentFilter = 'all';

function renderProjects() {
  const grid = document.getElementById('project-grid');
  const filtered = currentFilter === 'all' ? projects : projects.filter((project) => project.category === currentFilter);
  const toShow = filtered.slice(0, visibleCount);

  grid.innerHTML = toShow.map((project, index) => `
    <div class="project-card reveal ${index > 2 ? 'reveal-delay-' + (index % 3 + 1) : ''} glass rounded-xl overflow-hidden cursor-pointer" data-id="${project.id}" onclick="openModal(${project.id})">
      <div class="relative overflow-hidden">
        <img src="${project.thumbnail}" alt="${project.title}" class="project-img w-full h-48 object-cover">
        <div class="absolute top-3 left-3 flex items-center gap-2">
          <span class="bg-brand-dark text-white text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">${project.category}</span>
          ${project.featured ? '<span class="bg-brand-light text-stone-900 text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">★ Featured</span>' : ''}
        </div>
        <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        <div class="absolute bottom-3 right-3 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <i data-lucide="play" class="w-4 h-4 text-brand-dark"></i>
        </div>
      </div>
      <div class="p-5">
        <div class="flex items-center justify-between mb-2">
          <h3 class="font-serif text-lg font-semibold text-stone-900">${project.title}</h3>
          <span class="text-xs text-stone-400">${project.year}</span>
        </div>
        <p class="text-sm text-stone-500 leading-relaxed mb-3">${project.description}</p>
        <div class="flex flex-wrap gap-1.5">
          ${project.tags.map((tag) => `<span class="bg-stone-200 text-stone-700 px-2 py-0.5 rounded text-[10px] font-medium">${tag}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');

  const button = document.getElementById('load-more-btn');
  if (toShow.length >= filtered.length) {
    button.style.display = 'none';
  } else {
    button.style.display = 'inline-flex';
  }

  lucide.createIcons();
  initScrollReveal();
}

document.querySelectorAll('.filter-pill').forEach((pill) => {
  pill.addEventListener('click', () => {
    document.querySelectorAll('.filter-pill').forEach((filterPill) => filterPill.classList.remove('active'));
    pill.classList.add('active');
    currentFilter = pill.dataset.filter;
    visibleCount = 6;
    renderProjects();
  });
});

document.getElementById('load-more-btn').addEventListener('click', () => {
  visibleCount += 6;
  renderProjects();
});

function openModal(id) {
  const project = projects.find((entry) => entry.id === id);
  if (!project) {
    return;
  }

  document.getElementById('modal-title').textContent = project.title;

  let screenshotsHtml = '';
  if (project.screenshots && project.screenshots.length > 0) {
    screenshotsHtml = `
      <div class="mb-8">
        <h4 class="font-serif text-lg font-semibold text-stone-900 mb-3">Screenshots</h4>
        <div class="grid ${project.screenshots.length > 1 ? 'md:grid-cols-2' : ''} gap-3">
          ${project.screenshots.map((screenshot) => `<img src="${screenshot}" alt="Screenshot" class="w-full rounded-lg object-cover h-48 md:h-56">`).join('')}
        </div>
      </div>
    `;
  }

  document.getElementById('modal-body').innerHTML = `
    <div class="flex flex-wrap items-center gap-3 mb-6">
      <span class="bg-stone-200 text-stone-700 px-3 py-1 rounded-full text-xs font-medium">${project.platform}</span>
      <span class="bg-stone-200 text-stone-700 px-3 py-1 rounded-full text-xs font-medium">${project.year}</span>
      <span class="bg-brand-light text-stone-800 px-3 py-1 rounded-full text-xs font-medium">${project.role}</span>
    </div>
    <p class="text-stone-600 leading-relaxed mb-6">${project.longDesc}</p>
    <div class="mb-8">
      <h4 class="font-serif text-lg font-semibold text-stone-900 mb-3">Key Contributions</h4>
      <ul class="space-y-2">
        ${project.highlights.map((highlight) => `
          <li class="flex items-start gap-3">
            <div class="w-5 h-5 bg-brand-dark rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <i data-lucide="check" class="w-3 h-3 text-white"></i>
            </div>
            <span class="text-sm text-stone-600 leading-relaxed">${highlight}</span>
          </li>
        `).join('')}
      </ul>
    </div>
    ${screenshotsHtml}
    <div class="flex flex-wrap gap-2 mb-6">
      ${project.tags.map((tag) => `<span class="bg-stone-200 text-stone-700 px-3 py-1.5 rounded-lg text-xs font-medium">${tag}</span>`).join('')}
    </div>
    <div class="flex items-center gap-4">
      <a href="${project.videoUrl}" class="bg-bg-secondary text-stone-900 font-medium px-6 py-3 rounded-lg hover:bg-black hover:text-white transition-colors duration-300 ease-in-out flex items-center gap-2">
        <i data-lucide="play" class="w-4 h-4"></i> Watch Demo
      </a>
      <a href="#" class="text-stone-600 font-medium flex items-center gap-1 hover:text-stone-900 transition-colors group">
        Source Code <i data-lucide="external-link" class="w-4 h-4 group-hover:translate-x-1 transition-transform"></i>
      </a>
    </div>
  `;

  const modal = document.getElementById('project-modal');
  modal.classList.remove('hidden');
  modal.querySelector('.modal-overlay').style.opacity = '1';
  modal.querySelector('.modal-content').style.transform = 'scale(1) translateY(0)';
  modal.querySelector('.modal-content').style.opacity = '1';
  document.body.style.overflow = 'hidden';
  lucide.createIcons();
}

function closeModal() {
  const modal = document.getElementById('project-modal');
  modal.querySelector('.modal-overlay').style.opacity = '0';
  modal.querySelector('.modal-content').style.transform = 'scale(0.95) translateY(20px)';
  modal.querySelector('.modal-content').style.opacity = '0';
  setTimeout(() => {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }, 300);
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
});

document.querySelectorAll('.code-tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.code-tab').forEach((codeTab) => {
      codeTab.classList.remove('active', 'bg-white/10', 'text-white');
      codeTab.classList.add('text-stone-400');
    });
    tab.classList.add('active', 'bg-white/10', 'text-white');
    tab.classList.remove('text-stone-400');

    document.querySelectorAll('[id^="code-"]').forEach((codeBlock) => codeBlock.classList.add('hidden'));
    document.getElementById('code-' + tab.dataset.tab).classList.remove('hidden');
  });
});

document.getElementById('mobile-menu-btn').addEventListener('click', () => {
  document.getElementById('mobile-menu').classList.toggle('hidden');
});

document.querySelectorAll('#mobile-menu a').forEach((link) => {
  link.addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.add('hidden');
  });
});

function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal:not(.visible)').forEach((element) => observer.observe(element));
}

function initSkillBars() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        fill.style.width = fill.dataset.width + '%';
        fill.classList.add('filled');
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.skill-fill').forEach((bar) => observer.observe(bar));
}

function initCounters() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const target = parseInt(element.dataset.count, 10);
        let current = 0;
        const step = Math.ceil(target / 30);
        const interval = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(interval);
          }
          element.textContent = current;
        }, 40);
        observer.unobserve(element);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-count]').forEach((element) => observer.observe(element));
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    event.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.classList.add('shadow-md');
  } else {
    nav.classList.remove('shadow-md');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  initScrollReveal();
  initSkillBars();
  initCounters();
  lucide.createIcons();
});
