// Navigation Category check active category
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

// temperory code for template, will remove and retrive picture from backend
const listings = [
    { title:"Used EarPod Pro 2019", price:25, cat:"electric",
        img:"https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=600&q=80&auto=format&fit=crop" },
    { title:"Moving Sale Ottawa IKEA Nightstand", price:25, cat:"furniture",
        img:"https://images.unsplash.com/photo-1592078615290-033ee584e267?w=600&q=80&auto=format&fit=crop" },
    { title:"4 KALLAX Container Shelf", price:25, cat:"furniture",
        img:"https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&q=80&auto=format&fit=crop" },
    { title:"IKEA second hand electric desk", price:25, cat:"furniture",
        img:"https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&q=80&auto=format&fit=crop" },
    { title:"Winter down jacket, size M", price:30, cat:"clothes",
        img:"https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1336&auto=format&fit=crop" },
    { title:"Rice cooker, barely used", price:18, cat:"electric",
        img:"https://images.unsplash.com/photo-1544233726-9f1d2b27be8b?q=80&w=987&auto=format&fit=crop" },
    { title:"Study desk lamp", price:10, cat:"daily",
        img:"https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&q=80&auto=format&fit=crop" },
    { title:"Ceramic dinnerware set", price:20, cat:"daily",
        img:"https://images.unsplash.com/photo-1603199506016-b9a594b593c0?w=600&q=80&auto=format&fit=crop" },
    { title:"Ceramic dinnerware set", price:20, cat:"daily",
        img:"https://images.unsplash.com/photo-1603199506016-b9a594b593c0?w=600&q=80&auto=format&fit=crop" },
    { title:"Ceramic dinnerware set", price:20, cat:"daily",
        img:"https://images.unsplash.com/photo-1603199506016-b9a594b593c0?w=600&q=80&auto=format&fit=crop" },
    { title:"Ceramic dinnerware set", price:20, cat:"daily",
        img:"https://images.unsplash.com/photo-1603199506016-b9a594b593c0?w=600&q=80&auto=format&fit=crop" },
    { title:"Ceramic dinnerware set", price:20, cat:"daily",
        img:"https://images.unsplash.com/photo-1603199506016-b9a594b593c0?w=600&q=80&auto=format&fit=crop" },
    { title:"Ceramic dinnerware set", price:20, cat:"daily",
        img:"https://images.unsplash.com/photo-1603199506016-b9a594b593c0?w=600&q=80&auto=format&fit=crop" },
    { title:"Ceramic dinnerware set", price:20, cat:"daily",
        img:"https://images.unsplash.com/photo-1603199506016-b9a594b593c0?w=600&q=80&auto=format&fit=crop" },
    { title:"Ceramic dinnerware set", price:20, cat:"daily",
        img:"https://images.unsplash.com/photo-1603199506016-b9a594b593c0?w=600&q=80&auto=format&fit=crop" },
    { title:"Ceramic dinnerware set", price:20, cat:"daily",
        img:"https://images.unsplash.com/photo-1603199506016-b9a594b593c0?w=600&q=80&auto=format&fit=crop" },
    { title:"Ceramic dinnerware set", price:20, cat:"daily",
        img:"https://images.unsplash.com/photo-1603199506016-b9a594b593c0?w=600&q=80&auto=format&fit=crop" }
];

// 生成 grid list
const grid = document.getElementById('grid');
grid.innerHTML = '';
listings.forEach(item=>{
    const card = document.createElement('a');
    card.className = 'card';
    card.href = '#';
    card.innerHTML = `
        <div class="thumb">
          <img src="${item.img}" alt="${item.title}" loading="lazy">
        </div>
        <p class="card-title">${item.title}</p>
        <p class="card-price">$${item.price}</p>
      `;
    grid.appendChild(card);
});

// Search bar search input detection
document.getElementById('searchInput').addEventListener('keydown', e=>{

    console.log("User input is: ");
    if(e.key === 'Enter') {
        query = e.target.value.trim();
        console.log(query);
    }
});


// scroll to top button
const toTop = document.getElementById('toTop');
window.addEventListener('scroll', ()=>{
    toTop.classList.toggle('show', window.scrollY > 200);
});
toTop.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));


// scroll to show side filter
const sideFilter = document.getElementById('sideFilter');
window.addEventListener('scroll', ()=>{
    sideFilter.classList.toggle('apps', window.scrollY > 200);
});