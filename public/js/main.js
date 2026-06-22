const projects = [
  {
    id: 0,
    title: "Sandbox Playground",
    category: "sfml",
    tags: ["SFML", "C++", "Physics"],
    thumbnail: "public/assets/images/SandboxImg.png",
    description: "A personal project built in SFML with C++ to experiment with Physics driven gameplay that features fully working fluid system, temperature simulation, and dynamic interactions.",
    featured: true,
    year: "2025",
    platform: "PC",
    role: "Solo Gameplay Programmer",
    longDesc: "Sandbox Playground is a personal project built in SFML with C++ to experiment with Physics driven gameplay that features fully working fluid system, temperature simulation, and dynamic interactions.",
    problem: "Build a physics sandbox in C++/SFML that handles fluid, temperature, and large numbers of interacting bodies while staying responsive on a single thread.",
    approach: "Architected a modular C++ codebase with a clean split between simulation and rendering, profiled the hot paths with Visual Studio diagnostics, and applied modern C++ practices for maintainability and extensibility.",
    result: "Stable performance with many active objects and a codebase I can extend with new simulation systems without major refactors.",
    videoUrl: "https://www.youtube.com/watch?v=Wp8y9kzPa9k",
    repoUrl: "https://github.com/lainouzz/SFML-Sandbox",
    itchUrl: "https://lainouzz.itch.io/sandbox-sfml",
    screenshots: [
      "public/assets/images/SandboxImg2.png",
      "public/assets/images/SandboxImg3.png",
      "public/assets/images/SandboxImg4.png"
    ]
  },
  {
    id: 3,
    title: "Minecraft Mod Development",
    category: "work",
    tags: ["JavaScript", "TypeScript", "Mods", "Bedrock Edition", "GameTest Framework"],
    thumbnail: "public/assets/images/Minecraft.png",
    description: "Contributed to an official Minecraft Bedrock add-on at a Mojang Development Parter company, House Of How. as a Intern Gameplay Programmer.",
    year: "2025",
    platform: "PC (Minecraft Bedrock Edition), Console (Minecraft Bedrock Edition)",
    role: "Intern Gameplay Programmer",
    longDesc: "During my internship at House Of How I contributed to a Minecraft mod where players could purchase and run a restaurant, upgrade it over time, take in orders and earn money, and progress toward converting it into a hotel. Worked on gameplay systems for 2 months before transitioning to an internal project. Due to NDA restrictions no screenshots or footage could be taken during this time.",
    problem: "Contribute progression and economy systems to a Minecraft Bedrock add-on during a tight internship window, then adapt to an Unreal Engine 5 project mid-internship.",
    approach: "Worked in TypeScript with the GameTest framework on restaurant purchase/upgrade systems and player-economy hooks; switched stacks mid-internship and ramped up on UE5 quickly.",
    result: "Shipped progression features tying restaurant upgrades to player economy, and proved I can pick up new engines and tooling under deadline pressure.",
    videoUrl: "#",
    repoUrl: null,
    screenshots: [
      "public/assets/images/Minecraft.png",
    ]
  },
  {
    id: 1,
    title: "Advanced Weapon System",
    category: "unity",
    tags: ["Unity", "C#", "System Design"],
    thumbnail: "public/assets/images/AWS-Thumbnail.png",
    description: "Fully customizable firearm system in Unity with procedural animation and attachment-based customization.",
    year: "2024",
    platform: "PC",
    role: "Solo Gameplay Programmer",
    longDesc: "Built a fully customizable firearm system in Unity utilizing procedural animation techniques, attachment-based customization, and parameter-driven weapon behavior for efficient gameplay tuning. The system supports a wide variety of weapon types and allows designers to create new weapons without additional programming.",
    problem: "Build a Unity firearm system flexible enough to support many weapon types and on-the-fly customization without writing new code per gun.",
    approach: "Designed a parameter-driven weapon class with a modular attachment system that updates stats and visuals at runtime, and implemented procedural recoil and sway so all weapons share one animation pipeline.",
    result: "Designers can author new weapons entirely through the Inspector. One procedural animation system serves every weapon — no per-weapon animation work required.",
    videoUrl: "https://youtu.be/Dwy508wOmEo",
    repoUrl: null,
    screenshots: [
      "public/assets/images/AWS1.png",
      "public/assets/images/AWS2.png"
    ]
  },
  {
    id: 2,
    title: "Procedural Mesh Generator",
    category: "unity",
    tags: ["Unity", "C#", "Math", "Procedural Generation", "Mesh Generation"],
    thumbnail: "public/assets/images/PM-Thumbnail.PNG",
    description: "Procedural mesh generator for creating complex 3D models in Unity.",
    year: "2024",
    platform: "PC",
    role: "Gameplay Programmer",
    longDesc: "Built a procedural mesh generation system in Unity that generates terrain and primitive shapes, including terrain heightmaps and cylinders, entirely through code without relying on Unity's built-in primitives or terrain system. Vertices, triangles, and UVs are calculated both at runtime and in editor.",
    problem: "Generate 3D terrain and primitive meshes entirely in code, without relying on Unity's built-in primitives or terrain system.",
    approach: "Manually calculated vertex rings, triangle winding, and UV layouts for cylinder, cube, and heightmap meshes, and exposed all generation parameters to the Inspector for real-time iteration.",
    result: "100% code-generated geometry — zero imported meshes or built-in primitives — fully tweakable from the Inspector at edit time and runtime.",
    videoUrl: "https://youtu.be/nkrdwcayU9c",
    repoUrl: null,
    screenshots: [
      "public/assets/images/PM1.png",
      "public/assets/images/PM2.png"
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
        <img src="${project.thumbnail}" alt="${project.title}" class="project-img w-full h-48 object-cover" loading="lazy" decoding="async">
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
        <div class="flex items-center justify-between mb-1.5">
          <h3 class="font-serif text-lg font-semibold text-stone-900">${project.title}</h3>
          <span class="text-xs text-stone-400">${project.year}</span>
        </div>
        ${project.role ? `<div class="flex items-center gap-1.5 text-xs font-medium text-brand-neutral mb-2">
          <i data-lucide="user-round" class="w-3 h-3"></i> ${project.role}
        </div>` : ''}
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

function parHtml(project) {
  const blocks = [
    { label: 'Problem', icon: 'target', value: project.problem },
    { label: 'Approach', icon: 'compass', value: project.approach },
    { label: 'Result', icon: 'check-circle-2', value: project.result }
  ].filter((block) => block.value);

  if (blocks.length === 0 && project.highlights) {
    return `
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
    `;
  }

  if (blocks.length === 0) return '';

  return `
    <div class="mb-8 grid gap-4 md:grid-cols-3">
      ${blocks.map((block) => `
        <div class="bg-white/60 border border-stone-200 rounded-xl p-5">
          <div class="flex items-center gap-2 mb-2">
            <div class="w-7 h-7 rounded-lg bg-brand-dark text-white flex items-center justify-center">
              <i data-lucide="${block.icon}" class="w-3.5 h-3.5"></i>
            </div>
            <h4 class="font-serif text-base font-semibold text-stone-900">${block.label}</h4>
          </div>
          <p class="text-sm text-stone-600 leading-relaxed">${block.value}</p>
        </div>
      `).join('')}
    </div>
  `;
}

function toEmbedUrl(url) {
  if (!url) return url;
  try {
    const u = new URL(url);
    const host = u.hostname.replace('www.', '');
    if (host.includes('youtube.com')) {
      if (u.pathname === '/watch') {
        const v = u.searchParams.get('v');
        if (v) return `https://www.youtube.com/embed/${v}`;
      }
      if (u.pathname.startsWith('/embed/')) return url;
    }
    if (host === 'youtu.be') {
      const id = u.pathname.slice(1);
      if (id) return `https://www.youtube.com/embed/${id}`;
    }
  } catch (e) {
    const m = url.match(/(?:youtu\.be\/|v=)([\w-]{6,})/);
    if (m && m[1]) return `https://www.youtube.com/embed/${m[1]}`;
  }
  return url;
}

function openModal(id) {
  const project = projects.find((entry) => entry.id === id);
  if (!project) {
    return;
  }

  const hasVideo = project.videoUrl && project.videoUrl !== '#';

  document.getElementById('modal-title').textContent = project.title;

  const videoHtml = hasVideo
    ? `
      <div id="project-video" class="mb-8">
        <h4 class="font-serif text-lg font-semibold text-stone-900 mb-3">Demo Video</h4>
        <div class="aspect-video rounded-lg overflow-hidden bg-black">
          <iframe
            src="${toEmbedUrl(project.videoUrl)}"
            title="${project.title} Demo"
            class="w-full h-full"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    `
    : '';

  let screenshotsHtml = '';
  if (project.screenshots && project.screenshots.length > 0) {
    screenshotsHtml = `
      <div class="mb-8">
        <h4 class="font-serif text-lg font-semibold text-stone-900 mb-3">Screenshots</h4>
        <div class="grid ${project.screenshots.length > 1 ? 'md:grid-cols-2' : ''} gap-3">
          ${project.screenshots.map((screenshot) => `
            <div class="h-48 md:h-56 bg-[#0f0f13] rounded-lg overflow-hidden flex items-center justify-center">
              <img src="${screenshot}" alt="Screenshot" class="max-w-full max-h-full object-contain" loading="lazy" decoding="async">
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  document.getElementById('modal-body').innerHTML = `
    ${videoHtml}
    <div class="flex flex-wrap items-center gap-3 mb-6">
      <span class="bg-stone-200 text-stone-700 px-3 py-1 rounded-full text-xs font-medium">${project.platform}</span>
      <span class="bg-stone-200 text-stone-700 px-3 py-1 rounded-full text-xs font-medium">${project.year}</span>
      <span class="bg-brand-light text-stone-800 px-3 py-1 rounded-full text-xs font-medium">${project.role}</span>
    </div>
    <p class="text-stone-600 leading-relaxed mb-6">${project.longDesc}</p>
    ${parHtml(project)}
    ${screenshotsHtml}
    <div class="flex flex-wrap gap-2 mb-6">
      ${project.tags.map((tag) => `<span class="bg-stone-200 text-stone-700 px-3 py-1.5 rounded-lg text-xs font-medium">${tag}</span>`).join('')}
    </div>
    <div class="flex flex-wrap items-center gap-4">
      ${hasVideo
        ? `<a href="${project.videoUrl}" target="_blank" rel="noopener noreferrer" class="bg-bg-secondary text-stone-900 font-medium px-6 py-3 rounded-lg hover:bg-black hover:text-white transition-colors duration-300 ease-in-out flex items-center gap-2"><i data-lucide="play" class="w-4 h-4"></i> Watch Demo</a>`
        : `<span class="bg-stone-200 text-stone-500 font-medium px-6 py-3 rounded-lg flex items-center gap-2 cursor-not-allowed"><i data-lucide="clock-3" class="w-4 h-4"></i> Demo Soon</span>`}
      ${project.itchUrl
        ? `<a href="${project.itchUrl}" target="_blank" rel="noopener noreferrer" class="bg-[#FA5C5C] text-white font-medium px-6 py-3 rounded-lg hover:bg-[#e04a4a] transition-colors duration-300 ease-in-out flex items-center gap-2"><i data-lucide="gamepad-2" class="w-4 h-4"></i> Get on itch.io</a>`
        : ''}
      ${project.repoUrl
        ? `<a href="${project.repoUrl}" target="_blank" rel="noopener noreferrer" class="text-stone-600 font-medium flex items-center gap-1 hover:text-stone-900 transition-colors group">
        View Code <i data-lucide="external-link" class="w-4 h-4 group-hover:translate-x-1 transition-transform"></i>
      </a>`
        : ''}
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
    document.getElementById('modal-body').innerHTML = '';
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

function initCounters() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const target = parseInt(element.dataset.count, 10);
        const suffix = element.dataset.suffix || '';
        let current = 0;
        const step = Math.ceil(target / 30);
        const interval = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(interval);
          }
          element.textContent = current >= target ? `${current}${suffix}` : `${current}`;
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
  initCounters();
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  lucide.createIcons();
});
