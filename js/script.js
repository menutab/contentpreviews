const products = [
    {
        id: 1,
        name: "Ivanka and Little Bro",
        description: "Solo and Incest With little Bro",
        price: 35,
        video: "assets/videos/product-01.mp4",
        coverTime: 2
    },
    {
        id: 2,
        name: "Amelia Blonde Girl",
        description: "Young Girl Solo Stuff",
        price: 20,
        video: "assets/videos/product-02.mp4",
        coverTime: 2
    },
    {
        id: 3,
        name: "Ayumi Girl",
        description: "Latina Young Teen Leaks",
        price: 25,
        video: "assets/videos/product-03.mp4",
        coverTime: 2
    },
    {
        id: 4,
        name: "Lizzy and Brother",
        description: "Snapgod Solo Girl and Incest with Brother",
        price: 30,
        video: "assets/videos/product-04.mp4",
        coverTime: 2
    },
    {
        id: 5,
        name: "Mom and Son CP",
        description: "Moms incests with their sons",
        price: 45,
        video: "assets/videos/product-05.mp4",
        coverTime: 2
    },
    {
        id: 6,
        name: "Young Teens&CP Blowjob",
        description: "Young Teens and Cp doing blowjobs",
        price: 30,
        video: "assets/videos/product-06.mp4",
        coverTime: 2
    },
    {
        id: 7,
        name: "CP1",
        description: "Cp1 with hard childs",
        price: 50,
        video: "assets/videos/product-07.mp4",
        coverTime: 2
    },
    {
        id: 8,
        name: "CP2",
        description: "Young childs fucking with fathers, brothers and grandfathers",
        price: 45,
        video: "assets/videos/product-08.mp4",
        coverTime: 2
    },
    {
        id: 9,
        name: "Young Teens CP",
        description: "Young Teens fucking with their fathers/brothers",
        price: 35,
        video: "assets/videos/product-09.mp4",
        coverTime: 2
    },
    {
        id: 10,
        name: "VIP GROUP Channel",
        description: "Telegram Group with varius teens and CP videos",
        price: 85,
        video: "assets/videos/product-10.mp4",
        coverTime: 2
    },
    {
        id: 11,
        name: "Teens and Dogs",
        description: "Teens Fucking With Dogs ",
        price: 50,
        video: "assets/videos/product-11.mp4",
        coverTime: 2
    },
    {
        id: 12,
        name: "Emmi Sellers",
        description: "Solo hot Teen",
        price: 30,
        video: "assets/videos/product-12.mp4",
        coverTime: 2
    },
    {
        id: 13,
        name: "Monkey app - BBC Reactions",
        description: "Young Teens reacting on Big Black Cocks Online",
        price: 35,
        video: "assets/videos/product-13.mp4",
        coverTime: 2
    },
    {
        id: 14,
        name: "Anxious Panda",
        description: "Omegle Games Challenge on young girls online",
        price: 30,
        video: "assets/videos/product-14.mp4",
        coverTime: 2
    },
    {
        id: 15,
        name: "Highschool Thots",
        description: "Highschool leaks - solo, orgy and more",
        price: 30,
        video: "assets/videos/product-15.mp4",
        coverTime: 2
    },
    {
        id: 16,
        name: "Snap Folder",
        description: "Varius Teens fucking",
        price: 35,
        video: "assets/videos/product-16.mp4",
        coverTime: 2
    },
    {
        id: 17,
        name: "Ximena Folder",
        description: "Young Ximena CP girl",
        price: 30,
        video: "assets/videos/product-17.mp4",
        coverTime: 2
    },
    {
        id: 18,
        name: "Father and Daugther CP",
        description: "Fathers fucking their own daugthers",
        price: 40,
        video: "assets/videos/product-18.mp4",
        coverTime: 2
    },
    {
        id: 19,
        name: "Darkzadie Ren",
        description: "Famous Tiktoker leaked her own snap",
        price: 25,
        video: "assets/videos/product-19.mp4",
        coverTime: 2
    },
    {
        id: 20,
        name: "Desire Garcia",
        description: "Young girl masturbating while provoking men",
        price: 30,
        video: "assets/videos/product-20.mp4",
        coverTime: 2
    },
    {
        id: 21,
        name: "Young Teen Collection",
        description: "Young teens fucking and squirting",
        price: 45,
        video: "assets/videos/product-21.mp4",
        coverTime: 2
    },
    {
        id: 22,
        name: "English Teens CP",
        description: "English Teens Leaks",
        price: 35,
        video: "assets/videos/product-22.mp4",
        coverTime: 2
    },
    {
        id: 23,
        name: "Black Pyt Leaks",
        description: "Black skin teens fucking, orgy and more",
        price: 30,
        video: "assets/videos/product-23.mp4",
        coverTime: 2
    },
    {
        id: 24,
        name: "Latina Teens Leaks",
        description: "Latina teens solo, getting fucked and more",
        price: 30,
        video: "assets/videos/product-24.mp4",
        coverTime: 2
    },
    {
        id: 25,
        name: "Gay CP",
        description: "Young boys CP, Father and Son",
        price: 35,
        video: "assets/videos/product-25.mp4",
        coverTime: 1
    }


];


const PRODUCTS_PER_PAGE = 10;


/*
    Coloque aqui apenas o username,
    sem @.

    Exemplo:

    const TELEGRAM_USERNAME = "S3ller_Adm";
*/

const TELEGRAM_PHONE = "258857561707";


let currentPage = 1;

let cart =
    JSON.parse(
        localStorage.getItem("veloraCart")
    ) || [];

let purchaseMode = null;

let directPurchaseProduct = null;

let activeModalProduct = null;


/*
    Dados guardados depois que o cliente
    seleciona um método de pagamento.

    O Telegram só será aberto depois
    do clique em "Continue to Telegram".
*/

let pendingTelegramMessage = "";

let pendingPaymentMethod = "";


/* =========================
   MAIN ELEMENTS
========================= */

const productsGrid =
    document.querySelector(
        ".products-grid"
    );

const productsCount =
    document.querySelector(
        ".products-count"
    );

const pagination =
    document.querySelector(
        ".pagination"
    );


/* =========================
   CART ELEMENTS
========================= */

const headerCartButton =
    document.querySelector(
        ".header-cart-button"
    );

const floatingCartButton =
    document.querySelector(
        ".floating-cart-button"
    );

const cartDrawer =
    document.querySelector(
        ".cart-drawer"
    );

const cartCloseButton =
    cartDrawer.querySelector(
        ".close-button"
    );

const cartItemsContainer =
    cartDrawer.querySelector(
        ".cart-items"
    );

const cartTotalElement =
    cartDrawer.querySelector(
        ".cart-total-row strong"
    );

const cartPayButton =
    cartDrawer.querySelector(
        ".cart-pay-button"
    );

const continueShoppingButton =
    cartDrawer.querySelector(
        ".continue-shopping"
    );

const cartCountElements =
    document.querySelectorAll(
        ".cart-count"
    );


/* =========================
   PRODUCT MODAL ELEMENTS
========================= */

const productModalOverlay =
    document.querySelector(
        ".preview-modal-example"
    );

const productModal =
    productModalOverlay.querySelector(
        ".product-modal"
    );

const productModalCloseButton =
    productModal.querySelector(
        ".modal-close"
    );

const productModalVideoWrapper =
    productModal.querySelector(
        ".adaptive-video-wrapper"
    );

const productModalVideo =
    productModal.querySelector(
        ".modal-video-wrapper video"
    );

const productModalName =
    productModal.querySelector(
        ".modal-product-name"
    );

const productModalDescription =
    productModal.querySelector(
        ".modal-product-description"
    );

const productModalPrice =
    productModal.querySelector(
        ".modal-price"
    );

const productModalPayButton =
    productModal.querySelector(
        ".modal-pay-button"
    );

const productModalAddCartButton =
    productModal.querySelector(
        ".modal-add-cart-button"
    );


/* =========================
   PAYMENT MODAL ELEMENTS
========================= */

const paymentModalOverlay =
    document.querySelector(
        ".payment-modal-example"
    );

const paymentModal =
    paymentModalOverlay.querySelector(
        ".payment-modal"
    );

const paymentModalCloseButton =
    paymentModal.querySelector(
        ".modal-close"
    );

const paymentOptions =
    paymentModal.querySelectorAll(
        ".payment-option"
    );


/* =========================
   TELEGRAM CONFIRMATION
========================= */

const telegramConfirmationOverlay =
    document.querySelector(
        ".telegram-confirmation-example"
    );

const telegramConfirmationModal =
    telegramConfirmationOverlay.querySelector(
        ".telegram-confirmation-modal"
    );

const telegramConfirmationCloseButton =
    telegramConfirmationModal.querySelector(
        ".telegram-confirmation-close"
    );

const telegramSelectedPayment =
    telegramConfirmationModal.querySelector(
        ".telegram-selected-payment"
    );

const telegramContinueButton =
    telegramConfirmationModal.querySelector(
        ".telegram-continue-button"
    );


/* =========================
   GENERAL HELPERS
========================= */

function formatPrice(price) {
    return `$${price}`;
}


function saveCart() {
    localStorage.setItem(
        "veloraCart",
        JSON.stringify(cart)
    );
}


function getProductById(productId) {
    return products.find(
        product =>
            product.id === Number(productId)
    );
}


/* =========================
   PRODUCT CARDS
========================= */

function createProductCard(product) {
    return `
        <article
            class="product-card"
            data-product-id="${product.id}"
        >

            <button
                class="video-preview"
                type="button"
                aria-label="Preview ${product.name}"
                data-product-id="${product.id}"
            >

                <video
                    class="card-video"
                    preload="metadata"
                    muted
                    playsinline
                    data-cover-time="${product.coverTime}"
                >
                    <source
                        src="${product.video}"
                        type="video/mp4"
                    >
                </video>

                <span class="video-overlay"></span>

                <span class="play-button">

                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path
                            d="M8 5V19L19 12L8 5Z"
                        ></path>
                    </svg>

                </span>

                <span class="preview-label">
                    PREVIEW
                </span>

            </button>


            <div class="product-content">

                <h3 class="product-name">
                    ${product.name}
                </h3>

                <p class="product-description">
                    ${product.description}
                </p>


                <div class="product-purchase-area">

                    <span class="product-price">
                        ${formatPrice(product.price)}
                    </span>


                    <div class="product-actions">

                        <button
                            class="btn btn-primary pay-now-button"
                            type="button"
                            data-product-id="${product.id}"
                        >
                            Pay Now
                        </button>


                        <button
                            class="btn btn-cart add-cart-button"
                            type="button"
                            data-product-id="${product.id}"
                        >

                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M3 4H5L7.2 14.2C7.4 15.2 8.3 16 9.4 16H17.4C18.4 16 19.3 15.3 19.6 14.3L21 8H6"
                                    stroke="currentColor"
                                    stroke-width="1.8"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />

                                <path
                                    d="M12 9V13M10 11H14"
                                    stroke="currentColor"
                                    stroke-width="1.8"
                                    stroke-linecap="round"
                                />
                            </svg>

                            <span>
                                Add to Cart
                            </span>

                        </button>

                    </div>

                </div>

            </div>

        </article>
    `;
}


function renderProducts() {
    const startIndex =
        (currentPage - 1) *
        PRODUCTS_PER_PAGE;

    const endIndex =
        startIndex +
        PRODUCTS_PER_PAGE;

    const visibleProducts =
        products.slice(
            startIndex,
            endIndex
        );

    productsGrid.innerHTML =
        visibleProducts
            .map(createProductCard)
            .join("");

    productsCount.textContent =
        `${products.length} Products`;

    prepareVideoCovers();
}


/* =========================
   VIDEO COVER FRAME
========================= */

function prepareVideoCovers() {
    const videos =
        productsGrid.querySelectorAll(
            ".card-video"
        );

    videos.forEach(video => {
        const coverTime =
            Number(
                video.dataset.coverTime
            ) || 0;

        const setCoverFrame = () => {
            if (
                !Number.isFinite(
                    video.duration
                )
            ) {
                return;
            }

            const safeTime =
                Math.min(
                    coverTime,
                    Math.max(
                        0,
                        video.duration - 0.1
                    )
                );

            try {
                video.currentTime =
                    safeTime;
            } catch (error) {
                console.warn(
                    "Unable to set video cover frame:",
                    error
                );
            }
        };

        if (
            video.readyState >= 1
        ) {
            setCoverFrame();
        } else {
            video.addEventListener(
                "loadedmetadata",
                setCoverFrame,
                {
                    once: true
                }
            );
        }

        video.addEventListener(
            "seeked",
            () => {
                video.pause();
            },
            {
                once: true
            }
        );
    });
}


/* =========================
   PAGINATION
========================= */

function renderPagination() {
    const totalPages =
        Math.ceil(
            products.length /
            PRODUCTS_PER_PAGE
        );

    let paginationHTML = `
        <button
            class="pagination-button pagination-arrow"
            type="button"
            data-pagination="previous"
            aria-label="Previous page"
            ${
                currentPage === 1
                    ? "disabled"
                    : ""
            }
        >
            ‹
        </button>
    `;

    for (
        let page = 1;
        page <= totalPages;
        page++
    ) {
        paginationHTML += `
            <button
                class="pagination-button ${
                    page === currentPage
                        ? "active"
                        : ""
                }"
                type="button"
                data-page="${page}"
            >
                ${page}
            </button>
        `;
    }

    paginationHTML += `
        <button
            class="pagination-button pagination-arrow"
            type="button"
            data-pagination="next"
            aria-label="Next page"
            ${
                currentPage === totalPages
                    ? "disabled"
                    : ""
            }
        >
            ›
        </button>
    `;

    pagination.innerHTML =
        paginationHTML;
}


function changePage(page) {
    const totalPages =
        Math.ceil(
            products.length /
            PRODUCTS_PER_PAGE
        );

    if (
        page < 1 ||
        page > totalPages
    ) {
        return;
    }

    currentPage = page;

    renderProducts();
    renderPagination();

    document
        .querySelector(
            ".products-section"
        )
        .scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
}


/* =========================
   CART
========================= */

function addToCart(productId) {
    const product =
        getProductById(
            productId
        );

    if (!product) {
        return;
    }

    const alreadyInCart =
        cart.some(
            item =>
                item.id ===
                product.id
        );

    if (alreadyInCart) {
        return;
    }

    cart.push(product);

    saveCart();
    updateCart();
}


function removeFromCart(productId) {
    cart =
        cart.filter(
            item =>
                item.id !==
                Number(productId)
        );

    saveCart();
    updateCart();
}


function getCartTotal() {
    return cart.reduce(
        (total, product) =>
            total + product.price,
        0
    );
}


function updateCartCount() {
    cartCountElements.forEach(
        element => {
            element.textContent =
                cart.length;
        }
    );
}


function renderCartItems() {
    if (
        cart.length === 0
    ) {
        cartItemsContainer.innerHTML = `
            <div class="cart-empty-state">
                <p>
                    Your cart is currently empty.
                </p>
            </div>
        `;

        return;
    }

    cartItemsContainer.innerHTML =
        cart
            .map(
                product => `
                    <div
                        class="cart-item"
                        data-product-id="${product.id}"
                    >

                        <div class="cart-item-info">

                            <h3>
                                ${product.name}
                            </h3>

                            <span>
                                ${formatPrice(product.price)}
                            </span>

                        </div>


                        <button
                            class="remove-item"
                            type="button"
                            data-remove-id="${product.id}"
                        >
                            Remove
                        </button>

                    </div>
                `
            )
            .join("");
}


function updateCart() {
    renderCartItems();
    updateCartCount();

    cartTotalElement.textContent =
        formatPrice(
            getCartTotal()
        );

    cartPayButton.disabled =
        cart.length === 0;
}


function openCart() {
    cartDrawer.style.display =
        "flex";

    document.body.style.overflow =
        "hidden";
}


function closeCart() {
    cartDrawer.style.display =
        "none";

    document.body.style.overflow =
        "";
}


/* =========================
   ADAPTIVE VIDEO PLAYER
========================= */

function resetProductModalRatio() {
    productModal.classList.remove(
        "video-landscape-modal",
        "video-portrait-modal",
        "video-square-modal"
    );

    productModal.classList.add(
        "video-landscape-modal"
    );

    productModalVideoWrapper.style.setProperty(
        "--video-aspect-ratio",
        "16 / 9"
    );
}


function applyAdaptiveVideoRatio() {
    const videoWidth =
        productModalVideo.videoWidth;

    const videoHeight =
        productModalVideo.videoHeight;

    if (
        !videoWidth ||
        !videoHeight
    ) {
        return;
    }

    productModal.classList.remove(
        "video-landscape-modal",
        "video-portrait-modal",
        "video-square-modal"
    );

    /*
        Usa a proporção EXATA do vídeo.

        Exemplo:
        1920 / 1080
        1080 / 1920
        1080 / 1080
        etc.
    */

    productModalVideoWrapper.style.setProperty(
        "--video-aspect-ratio",
        `${videoWidth} / ${videoHeight}`
    );

    const ratio =
        videoWidth /
        videoHeight;

    /*
        Próximo de quadrado.
    */

    if (
        ratio >= 0.90 &&
        ratio <= 1.10
    ) {
        productModal.classList.add(
            "video-square-modal"
        );

        return;
    }

    /*
        Vertical.
    */

    if (
        videoHeight >
        videoWidth
    ) {
        productModal.classList.add(
            "video-portrait-modal"
        );

        return;
    }

    /*
        Horizontal.
    */

    productModal.classList.add(
        "video-landscape-modal"
    );
}


/* =========================
   PRODUCT MODAL
========================= */

function openProductModal(productId) {
    const product =
        getProductById(
            productId
        );

    if (!product) {
        return;
    }

    activeModalProduct =
        product;

    productModalName.textContent =
        product.name;

    productModalDescription.textContent =
        product.description;

    productModalPrice.textContent =
        formatPrice(
            product.price
        );

    productModalVideo.pause();

    resetProductModalRatio();

    productModalVideo.src =
        product.video;

    productModalVideo.load();

    productModalOverlay.style.display =
        "flex";

    document.body.style.overflow =
        "hidden";
}


function closeProductModal() {
    productModalVideo.pause();

    try {
        productModalVideo.currentTime =
            0;
    } catch (error) {
        /*
            Ignora caso o metadata
            ainda não tenha sido carregado.
        */
    }

    productModalOverlay.style.display =
        "none";

    activeModalProduct =
        null;

    resetProductModalRatio();

    document.body.style.overflow =
        "";
}


/* =========================
   PAYMENT MODAL
========================= */

function openPaymentModal(
    mode,
    product = null
) {
    purchaseMode =
        mode;

    directPurchaseProduct =
        product;

    paymentModalOverlay.style.display =
        "flex";

    document.body.style.overflow =
        "hidden";
}


/*
    resetPurchase = true:
    cancela completamente o checkout.

    resetPurchase = false:
    usamos quando o cliente já selecionou
    o pagamento e vai para o modal
    de confirmação do Telegram.
*/

function closePaymentModal(
    resetPurchase = true
) {
    paymentModalOverlay.style.display =
        "none";

    if (resetPurchase) {
        purchaseMode =
            null;

        directPurchaseProduct =
            null;
    }

    document.body.style.overflow =
        "";
}


/* =========================
   TELEGRAM MESSAGE
========================= */

function buildDirectPurchaseMessage(
    product,
    paymentMethod
) {
    return [
        "I want access to:",
        "",
        `${product.name} - ${formatPrice(product.price)}`,
        "",
        `Payment Option: ${paymentMethod}`
    ].join("\n");
}


function buildCartPurchaseMessage(
    paymentMethod
) {
    const productLines =
        cart.map(
            product =>
                `${product.name} - ${formatPrice(product.price)}`
        );

    const total =
        getCartTotal();

    return [
        "I want access to:",
        "",
        ...productLines,
        "",
        `Total to pay: ${formatPrice(total)}`,
        "",
        `Payment Option: ${paymentMethod}`
    ].join("\n");
}


/* =========================
   TELEGRAM REDIRECT
========================= */

function redirectToTelegram(message) {
    if (!TELEGRAM_PHONE) {
        console.log(
            "Telegram message:",
            message
        );

        alert(
            "Add your Telegram phone number inside js/script.js before activating checkout."
        );

        return;
    }

    const encodedMessage =
        encodeURIComponent(
            message
        );

    const telegramURL =
        `tg://resolve?phone=${TELEGRAM_PHONE}&text=${encodedMessage}`;

    window.location.href =
        telegramURL;
}


/* =========================
   TELEGRAM CONFIRMATION MODAL
========================= */

function openTelegramConfirmation(
    paymentMethod,
    message
) {
    pendingPaymentMethod =
        paymentMethod;

    pendingTelegramMessage =
        message;

    telegramSelectedPayment.textContent =
        paymentMethod;

    telegramConfirmationOverlay.style.display =
        "flex";

    document.body.style.overflow =
        "hidden";
}


function closeTelegramConfirmation(
    clearCheckout = true
) {
    telegramConfirmationOverlay.style.display =
        "none";

    if (clearCheckout) {
        pendingPaymentMethod =
            "";

        pendingTelegramMessage =
            "";

        purchaseMode =
            null;

        directPurchaseProduct =
            null;
    }

    document.body.style.overflow =
        "";
}


/* =========================
   PAYMENT SELECTION
========================= */

function handlePaymentSelection(
    paymentMethod
) {
    let message = "";

    if (
        purchaseMode ===
            "direct" &&
        directPurchaseProduct
    ) {
        message =
            buildDirectPurchaseMessage(
                directPurchaseProduct,
                paymentMethod
            );
    }

    if (
        purchaseMode ===
        "cart"
    ) {
        if (
            cart.length === 0
        ) {
            return;
        }

        message =
            buildCartPurchaseMessage(
                paymentMethod
            );
    }

    if (!message) {
        return;
    }

    /*
        Antes o código enviava diretamente
        para o Telegram aqui.

        Agora fechamos o seletor de pagamento
        e mostramos primeiro o aviso.
    */

    closePaymentModal(false);

    openTelegramConfirmation(
        paymentMethod,
        message
    );
}


/* =========================
   PRODUCT GRID EVENTS
========================= */

function handleProductsClick(event) {
    const preview =
        event.target.closest(
            ".video-preview"
        );

    if (preview) {
        openProductModal(
            preview.dataset.productId
        );

        return;
    }


    const payButton =
        event.target.closest(
            ".pay-now-button"
        );

    if (payButton) {
        const product =
            getProductById(
                payButton.dataset.productId
            );

        if (product) {
            openPaymentModal(
                "direct",
                product
            );
        }

        return;
    }


    const addCartButton =
        event.target.closest(
            ".add-cart-button"
        );

    if (addCartButton) {
        addToCart(
            addCartButton.dataset.productId
        );
    }
}


/* =========================
   PAGINATION EVENTS
========================= */

function handlePaginationClick(event) {
    const pageButton =
        event.target.closest(
            "[data-page]"
        );

    if (pageButton) {
        changePage(
            Number(
                pageButton.dataset.page
            )
        );

        return;
    }


    const navigationButton =
        event.target.closest(
            "[data-pagination]"
        );

    if (
        !navigationButton
    ) {
        return;
    }


    if (
        navigationButton
            .dataset
            .pagination ===
        "previous"
    ) {
        changePage(
            currentPage - 1
        );
    }


    if (
        navigationButton
            .dataset
            .pagination ===
        "next"
    ) {
        changePage(
            currentPage + 1
        );
    }
}


/* =========================
   CART EVENTS
========================= */

function handleCartClick(event) {
    const removeButton =
        event.target.closest(
            "[data-remove-id]"
        );

    if (
        !removeButton
    ) {
        return;
    }

    removeFromCart(
        removeButton.dataset.removeId
    );
}


/* =========================
   OUTSIDE MODAL CLICK
========================= */

function handleOutsideModalClick(
    event,
    overlay,
    closeFunction
) {
    if (
        event.target ===
        overlay
    ) {
        closeFunction();
    }
}


/* =========================
   EVENT LISTENERS
========================= */

productsGrid.addEventListener(
    "click",
    handleProductsClick
);


pagination.addEventListener(
    "click",
    handlePaginationClick
);


headerCartButton.addEventListener(
    "click",
    openCart
);


floatingCartButton.addEventListener(
    "click",
    openCart
);


cartCloseButton.addEventListener(
    "click",
    closeCart
);


continueShoppingButton.addEventListener(
    "click",
    closeCart
);


cartItemsContainer.addEventListener(
    "click",
    handleCartClick
);


cartPayButton.addEventListener(
    "click",
    () => {
        if (
            cart.length === 0
        ) {
            return;
        }

        closeCart();

        openPaymentModal(
            "cart"
        );
    }
);


/* =========================
   PRODUCT MODAL EVENTS
========================= */

productModalCloseButton.addEventListener(
    "click",
    closeProductModal
);


/*
    Depois que o vídeo carrega os metadados,
    detectamos automaticamente:

    videoWidth
    videoHeight

    e adaptamos a dimensão do player.
*/

productModalVideo.addEventListener(
    "loadedmetadata",
    applyAdaptiveVideoRatio
);


productModalPayButton.addEventListener(
    "click",
    () => {
        if (
            !activeModalProduct
        ) {
            return;
        }

        const product =
            activeModalProduct;

        closeProductModal();

        openPaymentModal(
            "direct",
            product
        );
    }
);


productModalAddCartButton.addEventListener(
    "click",
    () => {
        if (
            !activeModalProduct
        ) {
            return;
        }

        addToCart(
            activeModalProduct.id
        );
    }
);


/* =========================
   PAYMENT EVENTS
========================= */

paymentModalCloseButton.addEventListener(
    "click",
    () => {
        closePaymentModal(true);
    }
);


paymentOptions.forEach(
    option => {
        option.addEventListener(
            "click",
            () => {
                handlePaymentSelection(
                    option.dataset.payment
                );
            }
        );
    }
);


/* =========================
   TELEGRAM CONFIRMATION EVENTS
========================= */

telegramConfirmationCloseButton.addEventListener(
    "click",
    () => {
        closeTelegramConfirmation(
            true
        );
    }
);


telegramContinueButton.addEventListener(
    "click",
    () => {
        if (
            !pendingTelegramMessage
        ) {
            return;
        }

        const messageToSend =
            pendingTelegramMessage;

        /*
            Abrimos o Telegram diretamente
            a partir deste clique.
            Isso também reduz problemas
            de popup blockers.
        */

        redirectToTelegram(
            messageToSend
        );

        closeTelegramConfirmation(
            true
        );
    }
);


/* =========================
   OUTSIDE CLICK
========================= */

productModalOverlay.addEventListener(
    "click",
    event => {
        handleOutsideModalClick(
            event,
            productModalOverlay,
            closeProductModal
        );
    }
);


paymentModalOverlay.addEventListener(
    "click",
    event => {
        if (
            event.target ===
            paymentModalOverlay
        ) {
            closePaymentModal(
                true
            );
        }
    }
);


telegramConfirmationOverlay.addEventListener(
    "click",
    event => {
        if (
            event.target ===
            telegramConfirmationOverlay
        ) {
            closeTelegramConfirmation(
                true
            );
        }
    }
);


/* =========================
   ESC KEY
========================= */

document.addEventListener(
    "keydown",
    event => {
        if (
            event.key !==
            "Escape"
        ) {
            return;
        }


        if (
            productModalOverlay
                .style
                .display ===
            "flex"
        ) {
            closeProductModal();

            return;
        }


        if (
            telegramConfirmationOverlay
                .style
                .display ===
            "flex"
        ) {
            closeTelegramConfirmation(
                true
            );

            return;
        }


        if (
            paymentModalOverlay
                .style
                .display ===
            "flex"
        ) {
            closePaymentModal(
                true
            );

            return;
        }


        if (
            cartDrawer
                .style
                .display ===
            "flex"
        ) {
            closeCart();
        }
    }
);


/* =========================
   INITIALIZE
========================= */

function initializeStore() {
    renderProducts();
    renderPagination();
    updateCart();

    resetProductModalRatio();
}


initializeStore();