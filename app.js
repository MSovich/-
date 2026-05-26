// Shared JS State & Database Engine using LocalStorage
const DEFAULT_VTUBERS = [
    {
        id: "gura",
        name: "Gawr Gura",
        desc: "Морской хищник из затерянной Атлантиды. Любит пиццу, мемы и петь песни. Самый популярный втубер в мире с невероятно преданной фан-базой.",
        socials: { twitter: "@gawrgura", youtube: "Gawr Gura Ch.", twitch: "gawr_gura" },
        photo: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400&q=80"
    },
    {
        id: "calli",
        name: "Mori Calliope",
        desc: "Первый ученик Мрачного Жнеца. Поскольку современные системы медицины работают слишком эффективно, она решила стать рэпером и втубером, чтобы собирать души через музыку.",
        socials: { twitter: "@moricalliope", youtube: "Mori Calliope Ch.", twitch: "moricalliope" },
        photo: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&q=80"
    },
    {
        id: "lily",
        name: "Shylily",
        desc: "Независимая касатка-втубер с невероятно веселым и задорным характером. Покорила миллионы сердец своим смехом и потрясающим стилем стримов.",
        socials: { twitter: "@shylily", youtube: "Shylily Ch.", twitch: "shylily" },
        photo: "https://images.unsplash.com/photo-1560942485-b2a11cc13456?w=400&q=80"
    },
    {
        id: "mouse",
        name: "Ironmouse",
        desc: "Королева демонов, сбежавшая из преисподней, чтобы заводить друзей, петь песни и играть в игры. Обладает потрясающим оперным вокалом и харизмой.",
        socials: { twitter: "@ironmouse", youtube: "Ironmouse Ch.", twitch: "ironmouse" },
        photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80"
    }
];

const DEFAULT_PRODUCTS = [
    {
        id: 1,
        vtuberId: "gura",
        title: "Худи 'Shark Attack'",
        desc: "Плотный премиальный хлопок (420г/м²), вышивка на груди и принт на спине. Синий оверсайз крой.",
        price: 4900,
        photo: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80"
    },
    {
        id: 2,
        vtuberId: "gura",
        title: "Брелок 'Gura Chibi'",
        desc: "Акриловый двусторонний брелок с защитной пленкой.",
        price: 450,
        photo: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400&q=80"
    },
    {
        id: 3,
        vtuberId: "calli",
        title: "Футболка 'Death Metal'",
        desc: "Черная футболка с кислотным принтом жнеца, вареный хлопок.",
        price: 2500,
        photo: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=400&q=80"
    },
    {
        id: 4,
        vtuberId: "lily",
        title: "Плед 'Shy Splash'",
        desc: "Огромный мягкий флисовый плед с уникальным артом касатки.",
        price: 3200,
        photo: "https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?w=400&q=80"
    },
    {
        id: 5,
        vtuberId: "mouse",
        title: "Кепка 'Demon Queen'",
        desc: "Розовая структурированная кепка с вышивкой рожек демона.",
        price: 1800,
        photo: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&q=80"
    }
];

// Initialize Database in LocalStorage if it doesn't exist
function initDatabase() {
    if (!localStorage.getItem('vtubers')) {
        localStorage.setItem('vtubers', JSON.stringify(DEFAULT_VTUBERS));
    }
    if (!localStorage.getItem('products')) {
        localStorage.setItem('products', JSON.stringify(DEFAULT_PRODUCTS));
    }
    if (!localStorage.getItem('orders')) {
        localStorage.setItem('orders', JSON.stringify([
            { id: 4820, client: "user", item: "Худи 'Shark Attack' (L) x1", price: 4900, status: "done" },
            { id: 5102, client: "user", item: "Футболка 'Death Metal' (M) x1", price: 2500, status: "work" }
        ]));
    }
    if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify([]));
    }
    if (!localStorage.getItem('users')) {
        localStorage.setItem('users', JSON.stringify([
            { username: "admin", password: "admin", role: "admin", name: "Менеджер Главный" },
            { username: "user", password: "user", role: "user", name: "Константин" }
        ]));
    }
}

// Global DB Getters
function getVtubers() { return JSON.parse(localStorage.getItem('vtubers')); }
function getProducts() { return JSON.parse(localStorage.getItem('products')); }
function getOrders() { return JSON.parse(localStorage.getItem('orders')); }
function getCart() { return JSON.parse(localStorage.getItem('cart')); }
function getUsers() { return JSON.parse(localStorage.getItem('users')); }

// User Session Management
function getCurrentUser() {
    return JSON.parse(sessionStorage.getItem('currentUser'));
}

function login(username, password) {
    const users = getUsers();
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        sessionStorage.setItem('currentUser', JSON.stringify(user));
        return user;
    }
    return null;
}

function logout() {
    sessionStorage.removeItem('currentUser');
    window.location.href = "account.html";
}

// Global Cart System
function addToCart(productId, size) {
    const productsList = getProducts();
    const product = productsList.find(p => p.id === productId);
    let cart = getCart();

    const existing = cart.find(item => item.product.id === productId && item.size === size);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ product, size, qty: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(`Товар "${product.title}" (${size}) добавлен в корзину!`);
}

function updateCartCount() {
    const cart = getCart();
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    const badge = document.getElementById('cart-count');
    if (badge) badge.textContent = count;
}

function toggleCart() {
    const modal = document.getElementById('cart-modal');
    if (modal) {
        modal.classList.toggle('active');
        if (modal.classList.contains('active')) {
            renderCartItems();
        }
    }
}

function renderCartItems() {
    const container = document.getElementById('cart-items-container');
    const cart = getCart();
    if (cart.length === 0) {
        container.innerHTML = '<p style="color: var(--text-muted); text-align: center; padding: 20px 0;">Ваша корзина пуста</p>';
        document.getElementById('cart-total-price').textContent = '0 ₽';
        return;
    }

    container.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
            <div class="cart-item-details">
                <h4>${item.product.title}</h4>
                <p>Размер: ${item.size} | Цена: ${item.product.price} ₽</p>
            </div>
            <div class="cart-qty-control">
                <button class="qty-btn" onclick="changeQty(${index}, -1)">-</button>
                <span class="qty-num">${item.qty}</span>
                <button class="qty-btn" onclick="changeQty(${index}, 1)">+</button>
            </div>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + (item.product.price * item.qty), 0);
    document.getElementById('cart-total-price').textContent = `${total} ₽`;
}

function changeQty(index, change) {
    let cart = getCart();
    cart[index].qty += change;
    if (cart[index].qty <= 0) {
        cart.splice(index, 1);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCartItems();
}

function checkout() {
    const cart = getCart();
    if (cart.length === 0) {
        alert('Ваша корзина пуста!');
        return;
    }

    const currentUser = getCurrentUser();
    const clientName = currentUser ? currentUser.username : "guest_user";

    const newId = Math.floor(Math.random() * 9000) + 1000;
    const itemsSummary = cart.map(item => `${item.product.title} (${item.size}) x${item.qty}`).join(', ');
    const total = cart.reduce((sum, item) => sum + (item.product.price * item.qty), 0);

    let orders = getOrders();
    orders.unshift({
        id: newId,
        client: clientName,
        item: itemsSummary,
        price: total,
        status: "new"
    });

    localStorage.setItem('orders', JSON.stringify(orders));
    localStorage.setItem('cart', JSON.stringify([]));
    updateCartCount();
    toggleCart();

    alert(`Спасибо за покупку! Заказ #${newId} сформирован успешно на сумму ${total} ₽.`);
    
    // Redirect to orders page if logged in
    window.location.href = "account.html?tab=orders";
}

// Generate the global cart modal frame dynamically on page load to ensure all pages can use the Cart
function appendCartModalHTML() {
    const div = document.createElement('div');
    div.id = "cart-modal";
    div.className = "modal";
    div.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Корзина покупок</h3>
                <button class="modal-close" onclick="toggleCart()">×</button>
            </div>
            <div class="cart-items-list" id="cart-items-container"></div>
            <div class="cart-total-section">
                <span>Итог:</span>
                <span id="cart-total-price">0 ₽</span>
            </div>
            <button class="btn-danger" style="width: 100%; padding: 12px; font-weight: bold;" onclick="checkout()">Купить (Оформить заказ)</button>
        </div>
    `;
    document.body.appendChild(div);
}

// Initialize on Every Page
initDatabase();
window.addEventListener('DOMContentLoaded', () => {
    appendCartModalHTML();
    updateCartCount();
});
