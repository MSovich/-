const DEFAULT_VTUBERS = [
    {
        id: "gura",
        name: "Gawr Gura",
        slug: "gura",
        desc: "Морской хищник из затерянной Атлантиды. Любит пиццу, мемы и петь песни. Самый популярный втубер в мире с невероятно преданной фан-базой.",
        socials: { twitter: "@gawrgura", youtube: "Gawr Gura Ch.", twitch: "gawr_gura" },
        photo: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400&q=80"
    },
    {
        id: "calli",
        name: "Mori Calliope",
        slug: "calli",
        desc: "Первый ученик Мрачного Жнеца. Поскольку современные системы медицины работают слишком эффективно, она решила стать рэпером и втубером, чтобы собирать души через музыку.",
        socials: { twitter: "@moricalliope", youtube: "Mori Calliope Ch.", twitch: "moricalliope" },
        photo: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&q=80"
    },
    {
        id: "lily",
        name: "Shylily",
        slug: "lily",
        desc: "Независимая касатка-втубер с невероятно веселым и задорным характером. Покорила миллионы сердец своим смехом и потрясающим стилем стримов.",
        socials: { twitter: "@shylily", youtube: "Shylily Ch.", twitch: "shylily" },
        photo: "https://images.unsplash.com/photo-1560942485-b2a11cc13456?w=400&q=80"
    },
    {
        id: "mouse",
        name: "Ironmouse",
        slug: "mouse",
        desc: "Королева демонов, сбежавшая из преисподней, чтобы заводить друзей, петь песни и играть в игры. Обладает потрясающим оперным вокалом и харизмой.",
        socials: { twitter: "@ironmouse", youtube: "Ironmouse Ch.", twitch: "ironmouse" },
        photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80"
    }
];

const DEFAULT_PRODUCTS = [
    { 
        id: 1, vtuberId: "gura", title: "Худи 'Shark Attack'", 
        desc: "Плотный премиальный хлопок (420г/м²), вышивка на груди и принт на спине. Синий оверсайз крой.", 
        price: 4900, 
        photo: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80",
            "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&q=80",
            "https://images.unsplash.com/photo-1556906781-9a4f4f8b7b4b?w=600&q=80"
        ]
    },
    { 
        id: 2, vtuberId: "gura", title: "Брелок 'Gura Chibi'", 
        desc: "Акриловый двусторонний брелок с защитной пленкой.", 
        price: 450, 
        photo: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&q=80",
            "https://images.unsplash.com/photo-1544816155-12df9643f364?w=600&q=80",
            "https://images.unsplash.com/photo-1544816155-12df9643f365?w=600&q=80"
        ]
    },
    { 
        id: 3, vtuberId: "calli", title: "Футболка 'Death Metal'", 
        desc: "Черная футболка с кислотным принтом жнеца, вареный хлопок.", 
        price: 2500, 
        photo: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=400&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&q=80",
            "https://images.unsplash.com/photo-1521572267360-ee0c2909d519?w=600&q=80",
            "https://images.unsplash.com/photo-1521572267360-ee0c2909d520?w=600&q=80"
        ]
    },
    { 
        id: 4, vtuberId: "lily", title: "Плед 'Shy Splash'", 
        desc: "Огромный мягкий флисовый плед с уникальным артом касатки.", 
        price: 3200, 
        photo: "https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?w=400&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?w=600&q=80",
            "https://images.unsplash.com/photo-1580301762395-21ce84d00bc7?w=600&q=80",
            "https://images.unsplash.com/photo-1580301762395-21ce84d00bc8?w=600&q=80"
        ]
    },
    { 
        id: 5, vtuberId: "mouse", title: "Кепка 'Demon Queen'", 
        desc: "Розовая структурированная кепка с вышивкой рожек демона.", 
        price: 1800, 
        photo: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&q=80",
            "https://images.unsplash.com/photo-1588850561407-ed78c282e89c?w=600&q=80",
            "https://images.unsplash.com/photo-1588850561407-ed78c282e89d?w=600&q=80"
        ]
    }
];

const DEFAULT_ARTS = [
    { id: 101, streamerId: "gura", imageUrl: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&q=80", caption: "Gura Chibi Fanart" },
    { id: 102, streamerId: "calli", imageUrl: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&q=80", caption: "Mori Death Metal Concert Art" },
    { id: 103, streamerId: "lily", imageUrl: "https://images.unsplash.com/photo-1560942485-b2a11cc13456?w=600&q=80", caption: "Shylily Splash Art" },
    { id: 104, streamerId: "mouse", imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80", caption: "Demon Queen Poster" }
];

const DEFAULT_NEWS = [
    { id: 1, title: "Дроп коллекции Mori Calliope", content: "Доступна новая лимитированная серия футболок и худи. Спешите купить!", publishedAt: "2026-05-20" },
    { id: 2, title: "Концерт Gawr Gura в Атлантиде", content: "Виртуальный концерт состоится уже в эту субботу. Эксклюзивные брелоки в продаже.", publishedAt: "2026-05-25" }
];

// Отзывы с привязкой к товарам
const DEFAULT_REVIEWS = [
    { id: 1, productId: 1, author: "@AlexVtuberFan", text: "Качество худи от Gawr Gura просто нереальное. Очень плотная ткань, принт после 10 стирок как новый. Жду новый дроп!", approved: true },
    { id: 2, productId: 3, author: "@ShyShipper", text: "Заказывал брелок и футболку с Shylily. Доставка СДЭКом за 4 дня. Очень крутой минималистичный дизайн сайта, все супер.", approved: true },
    { id: 3, productId: 1, author: "@CalliMyQueen", text: "Техподдержка ответила за 5 минут, помогли поменять размер в заказе до отправки. Сервис на высоте!", approved: true },
    { id: 4, productId: 4, author: "@LilyLover", text: "Плед просто шикарный! Мягкий, тёплый, арт на нём как живой. Очень доволен покупкой.", approved: true }
];

function initDatabase() {
    if (!localStorage.getItem('vtubers')) localStorage.setItem('vtubers', JSON.stringify(DEFAULT_VTUBERS));
    if (!localStorage.getItem('products')) localStorage.setItem('products', JSON.stringify(DEFAULT_PRODUCTS));
    if (!localStorage.getItem('arts')) localStorage.setItem('arts', JSON.stringify(DEFAULT_ARTS));
    if (!localStorage.getItem('news')) localStorage.setItem('news', JSON.stringify(DEFAULT_NEWS));
    if (!localStorage.getItem('reviews')) localStorage.setItem('reviews', JSON.stringify(DEFAULT_REVIEWS));
    migrateProducts();
}

function migrateProducts() {
    const products = getProducts();
    let needUpdate = false;
    const updated = products.map(p => {
        if (!p.gallery) {
            needUpdate = true;
            return { ...p, gallery: [p.photo] };
        }
        return p;
    });
    if (needUpdate) {
        localStorage.setItem('products', JSON.stringify(updated));
    }
}

function getVtubers() { return JSON.parse(localStorage.getItem('vtubers')); }
function getProducts() { return JSON.parse(localStorage.getItem('products')); }
function getArts() { return JSON.parse(localStorage.getItem('arts')); }
function getNews() { return JSON.parse(localStorage.getItem('news')); }
function getReviews() { return JSON.parse(localStorage.getItem('reviews')); }

function renderHeaderNav() {
    const nav = document.querySelector('nav');
    if (!nav) return;
    const currentFile = window.location.pathname.split("/").pop() || "index.html";
    nav.innerHTML = `
        <a href="index.html" class="${currentFile === 'index.html' ? 'active' : ''}">Главная</a>
        <a href="wiki.html" class="${currentFile === 'wiki.html' ? 'active' : ''}">Втуберы (Вики)</a>
        <a href="shop.html" class="${currentFile === 'shop.html' ? 'active' : ''}">Магазин</a>
    `;
}

function initMobileNav() {
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('nav');
    if (!toggle || !nav) return;

    const closeNav = function() {
        nav.classList.remove('open');
        toggle.textContent = '☰';
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('wheel', handleWheel);
        window.removeEventListener('scroll', handleScroll);
    };

    const handleTouchMove = function(e) {
        if (!nav.contains(e.target)) {
            closeNav();
        }
    };

    const handleWheel = function(e) {
        if (!nav.contains(e.target)) {
            closeNav();
        }
    };

    const handleScroll = function() {
        if (nav.classList.contains('open')) {
            closeNav();
        }
    };

    toggle.addEventListener('click', function(e) {
        e.stopPropagation();
        nav.classList.toggle('open');
        toggle.textContent = nav.classList.contains('open') ? '✕' : '☰';
        if (nav.classList.contains('open')) {
            document.addEventListener('touchmove', handleTouchMove, { passive: true });
            document.addEventListener('wheel', handleWheel, { passive: true });
            window.addEventListener('scroll', handleScroll, { passive: true });
        } else {
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('wheel', handleWheel);
            window.removeEventListener('scroll', handleScroll);
        }
    });

    document.addEventListener('click', function(e) {
        const container = document.querySelector('.nav-container');
        if (container && !container.contains(e.target) && !nav.contains(e.target)) {
            closeNav();
        }
    });

    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            closeNav();
        });
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && nav.classList.contains('open')) {
            closeNav();
        }
    });
}

initDatabase();
window.addEventListener('DOMContentLoaded', () => {
    renderHeaderNav();
    initMobileNav();
});
