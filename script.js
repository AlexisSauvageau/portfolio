/* ---------- Sample data ---------- */
import { initialProjects } from "./projects.js";
import {
    t,
    setLanguage,
    getCurrentLanguage
} from "./i18n.js";

let projects = [...initialProjects];

let currentPage = 1;
const itemsPerPage = 6;

const grid = document.getElementById('grid');
const qInput = document.getElementById('q');
const backdrop = document.getElementById('backdrop');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalEnterprise = document.getElementById('modalEnterprise');
const modalDates = document.getElementById('modalDates');
const modalTools = document.getElementById('modalTools');
const modalToolsList = document.getElementById('modalToolsList');
const modalLanguages = document.getElementById('modalLanguages');
const modalLangList = document.getElementById('modalLangList');
const modalTeam = document.getElementById('modalTeam');
const modalTeamCount = document.getElementById('modalTeamCount');
const modalImages = document.getElementById('modalImages');

const AREAS = {
  AI:       { label: 'AI',       rgb: '224, 60, 90'   },
  Graphics: { label: 'Graphics', rgb: '148, 90, 219'  },
  Mobile:   { label: 'Mobile',   rgb: '255, 197, 91'  },
  IoT:      { label: 'IoT',      rgb: '0, 200, 130'   },
  Systems:  { label: 'Systems',  rgb: '230, 130, 40'  },
  Web:      { label: 'Web',      rgb: '70, 140, 255'  },
  Software: { label: 'Software', rgb: '20, 184, 166' }
};

// renvoie le SVG correspondant au type de projet
function getTypeIcon(type){
    const t = type.toLowerCase();

    // Projet scolaire / Academic
    if(t.includes('scolaire') || t.includes('academic')){
        return `icons/project-type/academic.svg`;
    }

    // CDI / CDD / Full-time
    if(t.includes('cdi') || t.includes('cdd') || t.includes("fixed-term") || t.includes("full-time")){
        return `icons/project-type/work.svg`;
    }

    // Stage / Internship
    if(t.includes('stage') || t.includes('internship') || t.includes('intern')){
        return `icons/project-type/internship.svg`;
    }

    // Personnel / Personal
    if(t.includes('personnel') || t.includes('personal')){
        return `icons/project-type/personal.svg`;
    }

    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18"/></svg>`;
}

// afficher le domaine du projet
function renderPill(p) {
  const a = AREAS[p.area] ?? { label: p.area, rgb: '255,255,255' };
  return `
    <div class="pill" style="--accent:${a.rgb}">
      <span class="pill-dot"></span>${a.label} • ${p.year}
    </div>
  `;
}

// afficher un projet
function renderCard(p){
    const el = document.createElement('article');
    el.className = 'card';
    el.setAttribute('tabindex', 0);

    const title = t(p.title);
    const desc = t(p.desc);
    const type = t(p.type);

    // On vérifie si p.image existe, sinon on met une image par défaut
    const thumbHTML = p.icon
        ? `<img src="${p.icon}" alt="aperçu ${escapeHTML(title)}" class="thumb-img">`
        : `<div class="thumb placeholder"></div>`;

    el.innerHTML = `
    <div class="meta">
        <div class="thumb">${thumbHTML}</div>
        <div style="flex:1">
        <div class="title">${escapeHTML(title)}</div>
        <div class="desc">${escapeHTML(desc)}</div>
        <div class="tags" aria-hidden>
            ${p.tags.map(t => `<span class="tag">${escapeHTML(t)}</span>`).join('')}
        </div>
        </div>
    </div>
    <div class="card-footer">
        ${renderPill(p)}
        <div style="display:flex;gap:8px;align-items:center">

            <button
                class="btn detail"
                data-action="open"
                data-id="${p.id}">
                ${getCurrentLanguage() === "fr" ? "Détails" : "Details"}
            </button>

            <div class="project-type">
                <img src="${getTypeIcon(type)}" alt="" class="project-type-icon" aria-hidden="true">
                <span>${escapeHTML(type)}</span>
            </div>
        </div>
    </div>`;

    // keyboard access to details
    el.addEventListener('keydown', e => {
        if(e.key === 'Enter'){
            openModal(p.id);
        }
    });
    
    el.querySelector('[data-action="open"]')
        .addEventListener('click', () => openModal(p.id));

    return el;
}

function escapeHTML(s){
    return String(s).replace(/[&<>\"][\u00A0-\u9999<>&]/gim,function(i){return '&#'+i.charCodeAt(0)+';';});
}

// afficher la grille des projets
function renderGrid(list){
    grid.innerHTML = '';
    if(list.length === 0){ 
        grid.innerHTML = '<div class="empty">Aucun projet trouvé — essayez d\'enlever des filtres.</div>';
        return; 
    }
    const frag = document.createDocumentFragment();
    list.forEach(p => frag.appendChild(renderCard(p)));
    grid.appendChild(frag);
}

// affiche une page de la liste filtrée
function renderPaginatedGrid(fullList, page = 1){
    currentPage = page;

    const totalPages = Math.max(1, Math.ceil(fullList.length / itemsPerPage));

    // sécurité si on tombe sur une page qui n'existe plus (ex: après un filtre)
    if(currentPage > totalPages) currentPage = totalPages;

    const start = (currentPage - 1) * itemsPerPage;
    const pageItems = fullList.slice(start, start + itemsPerPage);

    renderGrid(pageItems);
    renderPagination(fullList.length, totalPages);
}

function renderPagination(totalItems, totalPages){
    let pagEl = document.getElementById('pagination');
    if(!pagEl){
        pagEl = document.createElement('div');
        pagEl.id = 'pagination';
        pagEl.className = 'pagination';
        grid.after(pagEl); // insère juste après la grille
    }
    pagEl.innerHTML = '';

    if(totalPages <= 1) return; // pas besoin de pagination

    const isFr = getCurrentLanguage() === 'fr';

    const makeBtn = (label, page, opts = {}) => {
        const btn = document.createElement('button');
        btn.className = 'page-btn' + (opts.active ? ' active' : '');
        btn.textContent = label;
        btn.disabled = !!opts.disabled;
        btn.addEventListener('click', () => {
            renderPaginatedGrid(opts.list, page);
            grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        return btn;
    };

    const list = window.__currentFilteredList || []; // voir point 4

    // bouton précédent
    pagEl.appendChild(makeBtn(isFr ? '←' : '←', currentPage - 1, {
        list, disabled: currentPage === 1
    }));

    // numéros de page avec ellipses pour ne pas surcharger
    const pages = getPageRange(currentPage, totalPages);
    pages.forEach(p => {
        if(p === '...'){
            const span = document.createElement('span');
            span.className = 'page-ellipsis';
            span.textContent = '…';
            pagEl.appendChild(span);
        } else {
            pagEl.appendChild(makeBtn(p, p, { list, active: p === currentPage }));
        }
    });

    // bouton suivant
    pagEl.appendChild(makeBtn(isFr ? '→' : '→', currentPage + 1, {
        list, disabled: currentPage === totalPages
    }));
}

// calcule quels numéros afficher (avec "..." si trop de pages)
function getPageRange(current, total, delta = 1){
    const range = [];
    for(let i = 1; i <= total; i++){
        if(i === 1 || i === total || (i >= current - delta && i <= current + delta)){
            range.push(i);
        } else if(range[range.length - 1] !== '...'){
            range.push('...');
        }
    }
    return range;
}

function openModal(id){
    const p = projects.find(x => x.id == id); 
    if(!p){
        return;
    }

    modalTitle.innerHTML = `<span class="lightblue">${escapeHTML(t(p.title))}</span> • ${escapeHTML(t(p.type))}`;
    modalDesc.textContent = t(p.desc);

    if(p.enterprise){
        modalEnterprise.innerText = t(p.enterprise);
    }
    else{
       modalEnterprise.innerText = ""; 
    }

    modalDates.innerText = t(p.dates);

    // Taille de l'équipe
    if (p.team && p.team > 0) {
        modalTeamCount.textContent = `${p.team} participant${p.team > 1 ? 's' : ''}`;
        modalTeam.style.display = 'block';
    } else {
        modalTeam.style.display = 'none';
    }

    // Langages utilisés
    if (p.languages && p.languages.length > 0) {
        modalLangList.innerHTML = p.languages.map(lang => `<li>${t(lang)}</li>`).join('');
        modalLanguages.style.display = 'block';
    } else {
        modalLanguages.style.display = 'none';
    }

    // Outils utilisés
    if (p.tools && p.tools.length > 0) {
        modalToolsList.innerHTML = p.tools.map(tool => `<li>${t(tool)}</li>`).join('');
        modalTools.style.display = 'block';
    } else {
        modalTools.style.display = 'none';
    }

    // Images du projet
    if (p.images && p.images.length > 0) {
        modalImages.innerHTML = p.images
        .map(src => `
            <a href="images/${src}" target="_blank" rel="noopener noreferrer">
                <img src="images/${src}" alt="Image du projet ${p.title}">
            </a>
        `)
        .join('');
        modalImages.style.display = 'flex';
    } else {
        modalImages.innerHTML = '';
        modalImages.style.display = 'none';
    }

    backdrop.style.display='flex'; 
    backdrop.setAttribute('aria-hidden','false');
}

document.getElementById('closeModal').addEventListener('click', ()=> { 
    backdrop.style.display='none'; backdrop.setAttribute('aria-hidden','true'); 
});

backdrop.addEventListener('click', e=>{ 
    if(e.target===backdrop) { 
        backdrop.style.display='none'; 
        backdrop.setAttribute('aria-hidden','true'); 
    } 
});

// --------- Filtering & Searching ---------
function applyFilters(){
    const q = qInput.value.trim().toLowerCase();
    const active = Array.from(document.querySelectorAll('.filters .btn')).filter(b=>b.classList.contains('active')).map(b=>b.dataset.filter);
    let list = projects.slice();
    
    if(active.length>0 && !active.includes('all')){
        list = list.filter(p=> active.some(f=> String(p.year)===f || p.area===f ));
    }
    if(q){ 
        list = list.filter(p=> (p.title+p.languages+p.tools+p.tags.join(' ')+p.area).toLowerCase().includes(q)); 
    }
    window.__currentFilteredList = list;
    renderPaginatedGrid(list, 1);
}

// toggle filter buttons
document.querySelectorAll('.filters .btn').forEach(b=>{
    b.addEventListener('click', ()=>{
    // single-select except 'all'
    if(b.dataset.filter==='all'){
        document.querySelectorAll('.filters .btn').forEach(x=>x.classList.remove('active'));
        b.classList.add('active');
    } else {
        document.querySelector('[data-filter="all"]').classList.remove('active');
        b.classList.toggle('active');
    }
    applyFilters();
    });
});

// clear filters
document.getElementById('clearFilters').addEventListener('click', ()=>{
    document.querySelectorAll('.filters .btn').forEach(x=>x.classList.remove('active'));
    document.querySelector('[data-filter="all"]').classList.add('active');
    qInput.value='';
    window.__currentFilteredList = projects;
    renderPaginatedGrid(projects, 1);
});

// search
qInput.addEventListener('input', applyFilters);

// init
document.querySelector('[data-filter="all"]').classList.add('active');
window.__currentFilteredList = projects;
renderPaginatedGrid(projects, 1);

// keyboard escape to close modal
document.addEventListener('keydown', e=>{ 
    if(e.key==='Escape'){ 
        backdrop.style.display='none'; 
        backdrop.setAttribute('aria-hidden','true'); 
    } 
});

// change language
const languageSelector = document.querySelector('.language-selector');
const languageButtons = languageSelector.querySelectorAll('.language-btn');

function changeLanguage(language){
    
    setLanguage(language);
    window.__currentFilteredList = projects;
    renderPaginatedGrid(projects, currentPage);

    // mise à jour visuelle du sélecteur
    languageSelector.dataset.active = language;
    languageButtons.forEach(btn => {
        const isActive = btn.dataset.lang === language;
        btn.classList.toggle('is-active', isActive);
        btn.setAttribute('aria-pressed', isActive);
    });
}

document.getElementById("languageFr")
    .addEventListener("click", () => changeLanguage("fr"));

document.getElementById("languageEn")
    .addEventListener("click", () => changeLanguage("en"));