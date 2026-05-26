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
    { id: 1, vtuberId: "gura", title: "Худи 'Shark Attack'", desc: "Плотный премиальный хлопок (420г/м²), вышивка на груди и принт на спине. Синий оверсайз крой.", price: 4900, photo: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80" },
    { id: 2, vtuberId: "gura", title: "Брелок 'Gura Chibi'", desc: "Акриловый двусторонний брелок с защитной пленкой.", price: 450, photo: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400&q=80" },
    { id: 3, vtuberId: "calli", title: "Футболка 'Death Metal'", desc: "Черная футболка с кислотным принтом жнеца, вареный хлопок.", price: 2500, photo: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=400&q=80" },
    { id: 4, vtuberId: "lily", title: "Плед 'Shy Splash'", desc: "Огромный мягкий флисовый плед с уникальным артом касатки.", price: 3200, photo: "https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?w=400&q=80" },
    { id: 5, vtuberId: "mouse", title: "Кепка 'Demon Queen'", desc: "Розовая структурированная кепка с вышивкой рожек демона.", price: 1800, photo: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&q=80" }
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
const DEFAULT_REVIEWS = [
    { id: 1, author: "@AlexVtuberFan", text: "Качество худи от Gawr Gura просто нереальное. Очень плотная ткань, принт после 10 стирок как новый. Жду новый дроп!", approved: true },
    { id: 2, author: "@ShyShipper", text: "Заказывал брелок и футболку с Shylily. Доставка СДЭКом за 4 дня. Очень крутой минималистичный дизайн сайта, все супер.", approved: true },
    { id: 3, author: "@CalliMyQueen", text: "Техподдержка ответила за 5 минут, помогли поменять размер в заказе до отправки. Сервис на высоте!", approved: true }
];
const DEFAULT_SHIPPING = [
    { id: "sdek", name: "СДЭК", price: 350 },
    { id: "post", name: "Почта России", price: 250 },
    { id: "courier", name: "Курьер до двери", price: 600 }
];
const DEFAULT_CHATS = [
    { roomId: "chat_user", clientName: "user", messages: [{ senderId: "manager", text: "Здравствуйте! Чем я могу помочь вам по поводу мерча?", timestamp: "26.05.2026, 12:00" }] }
];
function initDatabase() {
    if (!localStorage.getItem('vtubers')) localStorage.setItem('vtubers', JSON.stringify(DEFAULT_VTUBERS));
    if (!localStorage.getItem('products')) localStorage.setItem('products', JSON.stringify(DEFAULT_PRODUCTS));
    if (!localStorage.getItem('arts')) localStorage.setItem('arts', JSON.stringify(DEFAULT_ARTS));
    if (!localStorage.getItem('news')) localStorage.setItem('news', JSON.stringify(DEFAULT_NEWS));
    if (!localStorage.getItem('reviews')) localStorage.setItem('reviews', JSON.stringify(DEFAULT_REVIEWS));
    if (!localStorage.getItem('shipping_settings')) localStorage.setItem('shipping_settings', JSON.stringify(DEFAULT_SHIPPING));
    if (!localStorage.getItem('support_chats')) localStorage.setItem('support_chats', JSON.stringify(DEFAULT_CHATS));
    if (!localStorage.getItem('orders')) {
        localStorage.setItem('orders', JSON.stringify([
            { id: 4820, client: "user", item: "Худи 'Shark Attack' (L) x1", price: 5250, status: "done", address: "Москва, СДЭК", deliveryType: "sdek", paymentType: "yookassa" },
            { id: 5102, client: "user", item: "Футболка 'Death Metal' (M) x1", price: 2750, status: "work", address: "Санкт-Петербург, ул. Мира 10", deliveryType: "post", paymentType: "cash" }
        ]));
    }
    if (!localStorage.getItem('cart')) localStorage.setItem('cart', JSON.stringify([]));
    if (!localStorage.getItem('users')) {
        localStorage.setItem('users', JSON.stringify([
            { username: "admin", password: "admin", role: "admin", name: "Менеджер Главный" },
            { username: "manager", password: "manager", role: "manager", name: "Оператор Анна" },
            { username: "writer", password: "writer", role: "writer", name: "Редактор Алекс" },
            { username: "user", password: "user", role: "user", name: "Константин" }
        ]));
    }
}
function getVtubers() { return JSON.parse(localStorage.getItem('vtubers')); }
function getProducts() { return JSON.parse(localStorage.getItem('products')); }
function getArts() { return JSON.parse(localStorage.getItem('arts')); }
function getNews() { return JSON.parse(localStorage.getItem('news')); }
function getReviews() { return JSON.parse(localStorage.getItem('reviews')); }
function getOrders() { return JSON.parse(localStorage.getItem('orders')); }
function getCart() { return JSON.parse(localStorage.getItem('cart')); }
function getUsers() { return JSON.parse(localStorage.getItem('users')); }
function getShippingSettings() { return JSON.parse(localStorage.getItem('shipping_settings')); }
function getSupportChats() { return JSON.parse(localStorage.getItem('support_chats')); }
function getCurrentUser() { return JSON.parse(sessionStorage.getItem('currentUser')); }
function login(username, password) {
    const users = getUsers();
    const user = users.find(u => u.username === username && u.password === password);
    if (user) { sessionStorage.setItem('currentUser', JSON.stringify(user)); return user; }
    return null;
}
function logout() { sessionStorage.removeItem('currentUser'); window.location.href = "account.html"; }
function addToCart(productId, size) {
    const productsList = getProducts();
    const product = productsList.find(p => p.id === productId);
    let cart = getCart();
    const existing = cart.find(item => item.product.id === productId && item.size === size);
    if (existing) { existing.qty++; } else { cart.push({ product, size, qty: 1 }); }
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
    if (modal) { modal.classList.toggle('active'); if (modal.classList.contains('active')) { renderCartItems(); } }
}
function renderCartItems() {
    const container = document.getElementById('cart-items-container');
    const cart = getCart();
    const checkoutArea = document.getElementById('checkout-form-area');
    if (checkoutArea) checkoutArea.style.display = "none";
    document.getElementById('cart-main-area').style.display = "block";
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
    if (cart[index].qty <= 0) { cart.splice(index, 1); }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCartItems();
}
function showCheckout() {
    const cart = getCart();
    if (cart.length === 0) { alert('Ваша корзина пуста!'); return; }
    document.getElementById('cart-main-area').style.display = "none";
    const checkoutArea = document.getElementById('checkout-form-area');
    checkoutArea.style.display = "block";
    const shipMethods = getShippingSettings();
    const shipSelect = document.getElementById('checkout-shipping');
    shipSelect.innerHTML = shipMethods.map(s => `<option value="${s.id}" data-price="${s.price}">${s.name} (+${s.price} ₽)</option>`).join('');
    updateCheckoutTotal();
}
function updateCheckoutTotal() {
    const cart = getCart();
    const shipSelect = document.getElementById('checkout-shipping');
    const shipPrice = parseInt(shipSelect.options[shipSelect.selectedIndex]?.getAttribute('data-price') || 0);
    const itemsTotal = cart.reduce((sum, item) => sum + (item.product.price * item.qty), 0);
    const finalTotal = itemsTotal + shipPrice;
    document.getElementById('checkout-total-price').textContent = `${finalTotal} ₽`;
}
function completeCheckout() {
    const address = document.getElementById('checkout-address').value.trim();
    const delivery = document.getElementById('checkout-shipping').value;
    const payment = document.getElementById('checkout-payment').value;
    if (!address) { alert('Пожалуйста, укажите адрес доставки!'); return; }
    const cart = getCart();
    const currentUser = getCurrentUser();
    const clientName = currentUser ? currentUser.username : "guest_user";
    const shipMethods = getShippingSettings();
    const shipPrice = shipMethods.find(s => s.id === delivery)?.price || 0;
    const itemsTotal = cart.reduce((sum, item) => sum + (item.product.price * item.qty), 0);
    const finalPrice = itemsTotal + shipPrice;
    const newId = Math.floor(Math.random() * 9000) + 1000;
    const itemsSummary = cart.map(item => `${item.product.title} (${item.size}) x${item.qty}`).join(', ');
    let orders = getOrders();
    orders.unshift({ id: newId, client: clientName, item: itemsSummary, price: finalPrice, status: "new", address: address, deliveryType: delivery, paymentType: payment });
    localStorage.setItem('orders', JSON.stringify(orders));
    localStorage.setItem('cart', JSON.stringify([]));
    updateCartCount();
    toggleCart();
    document.getElementById('checkout-address').value = '';
    alert(`Спасибо за покупку! Заказ #${newId} сформирован на сумму ${finalPrice} ₽.`);
    window.location.href = "account.html?tab=orders";
}
function appendCartModalHTML() {
    if (document.getElementById('cart-modal')) return;
    const div = document.createElement('div');
    div.id = "cart-modal";
    div.className = "modal";
    div.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Корзина покупок</h3>
                <button class="modal-close" onclick="toggleCart()">×</button>
            </div>
            <div id="cart-main-area">
                <div class="cart-items-list" id="cart-items-container"></div>
                <div class="cart-total-section">
                    <span>Итого:</span>
                    <span id="cart-total-price">0 ₽</span>
                </div>
                <button class="btn-danger" style="width: 100%; padding: 12px; font-weight: bold;" onclick="showCheckout()">Оформить заказ</button>
            </div>
            <div id="checkout-form-area" style="display:none;">
                <div class="form-group">
                    <label>Адрес доставки / Пункт СДЭК</label>
                    <input type="text" class="form-control" id="checkout-address" placeholder="Адрес или пункт самовывоза">
                </div>
                <div class="form-group">
                    <label>Способ доставки</label>
                    <select class="form-control" id="checkout-shipping" onchange="updateCheckoutTotal()"></select>
                </div>
                <div class="form-group">
                    <label>Способ оплаты</label>
                    <select class="form-control" id="checkout-payment">
                        <option value="yookassa">ЮКасса (Банковские карты / СБП)</option>
                        <option value="cloudpayments">CloudPayments</option>
                        <option value="cash">При получении</option>
                    </select>
                </div>
                <div class="cart-total-section" style="margin-top: 15px;">
                    <span>К оплате:</span>
                    <span id="checkout-total-price">0 ₽</span>
                </div>
                <div style="display: flex; gap: 10px;">
                    <button class="btn-secondary" style="flex:1;" onclick="renderCartItems()">Назад</button>
                    <button class="btn-danger" style="flex:2;" onclick="completeCheckout()">Купить</button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(div);
}
function renderHeaderNav() {
    const nav = document.querySelector('nav');
    if (!nav) return;
    const currentUser = getCurrentUser();
    let currentFile = window.location.pathname.split("/").pop() || "index.html";
    let html = `
        <a href="index.html" class="${currentFile === 'index.html' ? 'active' : ''}">Главная</a>
        <a href="wiki.html" class="${currentFile === 'wiki.html' ? 'active' : ''}">Втуберы (Вики)</a>
        <a href="shop.html" class="${currentFile === 'shop.html' ? 'active' : ''}">Магазин</a>
        <a href="account.html" class="${currentFile === 'account.html' ? 'active' : ''}">Кабинет</a>
    `;
    if (currentUser && currentUser.role !== 'user') {
        html += `<a href="admin.html" class="${currentFile === 'admin.html' ? 'active' : ''}">Панель</a>`;
    }
    html += `
        <a class="cart-trigger" onclick="toggleCart()">
            Корзина <span class="cart-badge" id="cart-count">0</span>
        </a>
    `;
    nav.innerHTML = html;
    updateCartCount();
}
initDatabase();
window.addEventListener('DOMContentLoaded', () => {
    appendCartModalHTML();
    renderHeaderNav();
});