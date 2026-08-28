const curriculum = {
  nursery: {
    label: "NURSERY",
    general: "Bangla · Singapore Math · Oxford English · Drawing",
    generalDesc: "প্রাথমিক স্তরে ভাষা, সংখ্যা বোঝার দক্ষতা এবং আঁকার ভিত্তি তৈরি করা হয়।",
    deen: "Qur'an Education",
    deenDesc: "আরবি হরফ পরিচিতি এবং নির্বাচিত সূরা মুখস্থ করার মাধ্যমে কুরআন শিক্ষার ভিত্তি তৈরি করা হয়।"
  },
  kg: {
    label: "KG",
    general: "Bangla · Singapore Math · Oxford English · Drawing",
    generalDesc: "KG স্তরেও ভাষা, গণিত ও সৃজনশীলতার প্রাথমিক ভিত্তি ধারাবাহিকভাবে এগিয়ে নেওয়া হয়।",
    deen: "Qur'an Education · Special Tajweed Learning",
    deenDesc: "কুরআন শিক্ষার সাথে শুদ্ধ তিলাওয়াতের জন্য তাজবিদের নিয়মে বিশেষ গুরুত্ব দেওয়া হয়।"
  },
  g1: {
    label: "GRADE 1",
    general: "Bangla · English · Mathematics · ICT",
    generalDesc: "ভাষা, গণিত এবং প্রাথমিক আইসিটি দক্ষতা মিলিয়ে সাধারণ শিক্ষার মূল ভিত্তি গড়ে তোলা হয়।",
    deen: "Islamic Studies 1 · Special Tajweed Learning · Qur'an Education",
    deenDesc: "Islamic Studies 1-এর পাশাপাশি কুরআন শিক্ষা এবং বিশেষ তাজবিদ শেখানো হয়।"
  },
  g2: {
    label: "GRADE 2",
    general: "Bangla · English · Mathematics · ICT",
    generalDesc: "Grade 2-তে বাংলা, ইংরেজি, গণিত ও আইসিটির ধারাবাহিক শেখা অব্যাহত থাকে।",
    deen: "Islamic Studies 2 · Sahih Aqeedah Education",
    deenDesc: "এই স্তরে Islamic Studies 2-এর সাথে সহিহ আকিদা শিক্ষাকে গুরুত্ব দেওয়া হয়েছে।"
  },
  g3: {
    label: "GRADE 3",
    general: "Bangla · English · Mathematics · Science · Bangladesh & Global Studies",
    generalDesc: "ভাষা ও গণিতের পাশাপাশি বিজ্ঞান এবং বাংলাদেশ ও বিশ্বপরিচয় যুক্ত হয়ে বিষয়ভিত্তিক শেখার পরিধি বাড়ায়।",
    deen: "Islam & Moral Education · Arabic for All · Hifzul Qur'an",
    deenDesc: "দ্বীনি শিক্ষার অংশ হিসেবে নৈতিক শিক্ষা, আরবি এবং হিফজুল কুরআন অন্তর্ভুক্ত রয়েছে।"
  },
  g4: {
    label: "GRADE 4",
    general: "Bangla · English · Mathematics · Science · Bangladesh & Global Studies",
    generalDesc: "Grade 4-এ উচ্চ প্রাথমিক স্তরের নির্ধারিত সাধারণ বিষয়গুলোর ওপর ধারাবাহিকভাবে পড়াশোনা করা হয়।",
    deen: "Islam & Moral Education · Arabic for All · Hifzul Qur'an",
    deenDesc: "Grade 4-এও নৈতিক শিক্ষা, আরবি এবং হিফজুল কুরআনের দ্বীনি ধারাটি অব্যাহত থাকে।"
  },
  g5: {
    label: "GRADE 5",
    general: "Bangla · English · Mathematics · Science · Bangladesh & Global Studies",
    generalDesc: "Grade 5-এ উচ্চ প্রাথমিক স্তরের সাধারণ বিষয়গুলো আরও দৃঢ়ভাবে চর্চা করা হয়।",
    deen: "Islam & Moral Education · Arabic for All · Hifzul Qur'an",
    deenDesc: "Grade 5 পর্যন্ত নৈতিক শিক্ষা, আরবি এবং হিফজুল কুরআনের দ্বীনি ধারাটি অব্যাহত থাকে।"
  }
};

const header = document.querySelector('.site-header');
const progress = document.getElementById('scrollProgress');
const year = document.getElementById('year');
const menuBtn = document.getElementById('menuBtn');
const mainNav = document.getElementById('mainNav');

year.textContent = new Date().getFullYear();

function onScroll(){
  header.classList.toggle('scrolled', window.scrollY > 24);
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
}
window.addEventListener('scroll', onScroll, { passive:true });
onScroll();

menuBtn.addEventListener('click', () => {
  const open = !mainNav.classList.contains('open');
  mainNav.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', String(open));
  menuBtn.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  document.body.classList.toggle('menu-open', open);
});
mainNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  mainNav.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
  menuBtn.setAttribute('aria-label', 'Open navigation');
  document.body.classList.remove('menu-open');
}));

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(reduceMotion){
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
}else{
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold:.11, rootMargin:'0px 0px -28px' });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

const classDisplay = document.getElementById('classDisplay');
const generalTitle = document.getElementById('generalTitle');
const generalDesc = document.getElementById('generalDesc');
const deenTitle = document.getElementById('deenTitle');
const deenDesc = document.getElementById('deenDesc');
generalDesc.setAttribute('lang','bn');
deenDesc.setAttribute('lang','bn');

function setCurriculum(tab){
  const data = curriculum[tab.dataset.grade];
  if(!data) return;
  document.querySelectorAll('.grade-tab').forEach(t => {
    t.classList.toggle('active', t === tab);
    t.setAttribute('aria-selected', t === tab ? 'true' : 'false');
  });
  classDisplay.textContent = data.label;
  generalTitle.textContent = data.general;
  generalDesc.textContent = data.generalDesc;
  deenTitle.textContent = data.deen;
  deenDesc.textContent = data.deenDesc;
  if(!reduceMotion){
    [classDisplay,generalTitle,generalDesc,deenTitle,deenDesc].forEach(el => {
      el.animate([{opacity:.15,transform:'translateY(5px)'},{opacity:1,transform:'none'}],{duration:230,easing:'ease-out'});
    });
  }
}
document.querySelectorAll('.grade-tab').forEach(tab => tab.addEventListener('click', () => setCurriculum(tab)));

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeBtn = document.getElementById('lightboxClose');
function closeLightbox(){ lightbox.classList.remove('open'); lightbox.setAttribute('aria-hidden','true'); }
document.querySelectorAll('.gallery-item').forEach(item => item.addEventListener('click', () => {
  lightboxImg.src = item.dataset.img;
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden','false');
}));
closeBtn.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if(e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeLightbox(); });

function videoEmbed(url){
  try{
    const u = new URL(url);
    if(u.hostname.includes('youtu.be')) return `https://www.youtube.com/embed/${u.pathname.replace('/','')}`;
    if(u.hostname.includes('youtube.com')){
      const id = u.searchParams.get('v');
      if(id) return `https://www.youtube.com/embed/${id}`;
      const parts = u.pathname.split('/').filter(Boolean);
      const idx = parts.findIndex(p => p === 'shorts' || p === 'embed');
      if(idx >= 0 && parts[idx+1]) return `https://www.youtube.com/embed/${parts[idx+1]}`;
    }
    if(u.hostname.includes('vimeo.com')){
      const id = u.pathname.split('/').filter(Boolean).pop();
      if(id) return `https://player.vimeo.com/video/${id}`;
    }
  }catch(e){}
  return '';
}

const cfg = window.BIS_CONFIG || {};
if(Array.isArray(cfg.videos)){
  const grid = document.getElementById('videoGrid');
  cfg.videos.slice(0,2).forEach((v,i) => {
    if(!v || !v.url) return;
    const src = videoEmbed(v.url);
    if(!src) return;
    const card = document.createElement('article');
    card.className = 'video-embed-card';
    card.innerHTML = `<iframe class="video-frame" src="${src}" title="${v.title || `School video ${i+1}`}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><div><h3>${v.title || `School video ${i+1}`}</h3><p lang="bn">${v.caption || ''}</p></div>`;
    if(grid.children[i]) grid.replaceChild(card, grid.children[i]);
    else grid.appendChild(card);
  });
}
