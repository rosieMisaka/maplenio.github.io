let activeCat = 'all';

document.getElementById('pageCat').addEventListener('click', e=>{
    const el = e.target.closest('.cat');
    if(!el) return;
    document.querySelectorAll('.cat').forEach(c=>{
        c.classList.remove('active');
        c.setAttribute('aria-pressed', 'false');
    });
    el.classList.add('active');
    el.setAttribute('aria-pressed', 'true');
    activeCat = el.dataset.cat;
    console.log("active Cat is:",activeCat);
});