/* ==========================================================================
   1. DATABASE & CONFIGURATION
   ========================================================================== */

const CLOTHING_DATABASE = {
  /* WOMENS */
  "angel": {
    "title": "ANGEL ZIP UP HOODIE",
    "price": "$49.99",
    "imageSrc": "women/clothes-(women)/tops/angel.jpg"
  },
  "character": {
    "title": "MAKI TEE",
    "price": "$29.99",
    "imageSrc": "women/clothes-(women)/tops/character.jpg"
  },
  "cat": {
    "title": "INVERTCAT TANK TOP",
    "price": "$39.99",
    "imageSrc": "women/clothes-(women)/tops/cat.jpg"
  },
  "princess": {
    "title": "PRINCESS TEE",
    "price": "$34.99",
    "imageSrc": "women/clothes-(women)/tops/princess.jpg"
  },
  "baggy": {
    "title": "BAGGY JEANS",
    "price": "$54.99",
    "imageSrc": "women/clothes-(women)/bottoms/baggy.jpg"
  },
  "vampire": {
    "title": "VAMPIRE TEE",
    "price": "$39.99",
    "imageSrc": "women/clothes-(women)/tops/vampire.jpg"
  },
  "jeanskirt": {
    "title": "JEAN SKIRT",
    "price": "$44.99",
    "imageSrc": "women/clothes-(women)/bottoms/jeanskirt.jpg"
  },
  "bellbottom": {
    "title": "BELL BOTTOMS",
    "price": "$59.99",
    "imageSrc": "women/clothes-(women)/bottoms/bellbottom.jpg"
  },
  "contain": {
    "title": "CONTAIN JEANS",
    "price": "$59.99",
    "imageSrc": "women/clothes-(women)/bottoms/contain.jpg"
  },
  /* MENS */
  "cross": {
    "title": "CROSS TEE",
    "price": "$24.99",
    "imageSrc": "mens/clothes-(men)/tops/cross.jpg"
  },
  "diesel": {
    "title": "DIESEL ZIP UP",
    "price": "$59.99",
    "imageSrc": "mens/clothes-(men)/tops/diesel.jpg"
  },
  "dragon": {
    "title": "DRAGON TEE",
    "price": "$24.99",
    "imageSrc": "mens/clothes-(men)/tops/dragonshirt.jpg"
  },
  "bluejean": {
    "title": "Y3 BLUE JEANS",
    "price": "$54.99",
    "imageSrc": "mens/clothes-(men)/bottoms/bluejean.jpg"
  },
  "jorts": {
    "title": "DRAGON JORTS",
    "price": "$39.99",
    "imageSrc": "mens/clothes-(men)/bottoms/jorts.jpg"
  },
  "hollis": {
    "title": "2HOLLIS",
    "price": "$59.99",
    "imageSrc": "mens/clothes-(men)/tops/hollis.jpg"
  },
  "waves": {
    "title": "WAVE JORTS",
    "price": "$59.99",
    "imageSrc": "mens/clothes-(men)/bottoms/waves.jpg"
  },
   "yellow": {
    "title": "KILL BILL TEE",
    "price": "$29.99",
    "imageSrc": "mens/clothes-(men)/tops/yellow.jpg"
  },
  "greyjeans": {
    "title": "CHAINED RIPPED JEANS",
    "price": "$69.99",
    "imageSrc": "mens/clothes-(men)/bottoms/greyjean.jpg"
  },
  /* SUMMER COLLECTION */
  "aero": {
    "title": "AERO FRUTIGER SWIM SET",
    "price": "$54.99",
    "imageSrc": "summer/clothes-(summer)/aero.jpg"
  },
  "astro": {
    "title": "ASTRO MEDIA TOFER",
    "price": "$49.99",
    "imageSrc": "summer/clothes-(summer)/astro.jpg"
  },
  "billard": {
    "title": "SURFER SWIM TRUNK",
    "price": "$24.99",
    "imageSrc": "summer/clothes-(summer)/billard.jpg"
  },
  "cargo": {
    "title": "WHITE CARGO SHORTS",
    "price": "$29.99",
    "imageSrc": "summer/clothes-(summer)/cargo.jpg"
  },
  "criminal98": {
    "title": "CRIMINAL 83 TANK TEE",
    "price": "$24.99",
    "imageSrc": "summer/clothes-(summer)/criminal83.jpg"
  },
  "daisy": {
    "title": "DAISY PARADISE TANK TEE",
    "price": "$19.99",
    "imageSrc": "summer/clothes-(summer)/daisy.jpg"
  },
  "gum": {
    "title": "GREEN GUM TEE",
    "price": "$34.99",
    "imageSrc": "summer/clothes-(summer)/gum.jpg"
  },
  "hellokitty": {
    "title": "HELLO KITTY SHORTS",
    "price": "$14.99",
    "imageSrc": "summer/clothes-(summer)/hellokitty.jpg"
  },
  "blueswim": {
    "title": "BLUE BILLARD SWIM TRUNKS",
    "price": "$29.99",
    "imageSrc": "summer/clothes-(summer)/blueswim.jpg"
  },
  "chinese": {
    "title": "ALWAYS RIGHT TANK TOP",
    "price": "$14.99",
    "imageSrc": "summer/clothes-(summer)/chinese.jpg"
  },
  "jersey": {
    "title": "NEW YORK JERSEY",
    "price": "$54.99",
    "imageSrc": "summer/clothes-(summer)/jersey.jpg"
  },
  "lover": {
    "title": "COLLECT LOVERS TANK TEE",
    "price": "$39.99",
    "imageSrc": "summer/clothes-(summer)/lover.jpg"
  },
  "oceanpacific": {
    "title": "OCEAN PACIFIC TANK TOP",
    "price": "$29.99",
    "imageSrc": "summer/clothes-(summer)/oceanpacific.jpg"
  },
  "patch": {
    "title": "PATCHED SHORT SKIRT",
    "price": "$24.99",
    "imageSrc": "summer/clothes-(summer)/patch.jpg"
  },
  "pink": {
    "title": "PINK PUFF SKIRT",
    "price": "$34.99",
    "imageSrc": "summer/clothes-(summer)/pink.jpg"
  },
  "polo": {
    "title": "TOMMY STRIPPED POLO",
    "price": "$54.99",
    "imageSrc": "summer/clothes-(summer)/polo.jpg"
  },
  "stars": {
    "title": "BLINGD STAR SKIRT",
    "price": "$44.99",
    "imageSrc": "summer/clothes-(summer)/stars.jpg"
  },
  "sweats": {
    "title": "GRILL'D SWEAT PANTS",
    "price": "$59.99",
    "imageSrc": "summer/clothes-(summer)/sweats.jpg"
  },
  "usajorts": {
    "title": "USA CROPPED JORTS",
    "price": "$39.99",
    "imageSrc": "summer/clothes-(summer)/usajorts.jpg"
  },
  "whiteshorts": {
    "title": "WHITE SAILOR SHORTS",
    "price": "$34.99",
    "imageSrc": "summer/clothes-(summer)/whiteshorts.jpg"
  },
};

/* ==========================================================================
   2. STATE VARIABLES
   ========================================================================== */
let selectedSize = null;
let currentQty = 1;

/* ==========================================================================
   3. HELPER FUNCTIONS
   ========================================================================== */

/**
 * Resolves relative image paths into clean URLs based on current page depth.
 */
function getCleanImagePath(relativePath) {
  const isSubfolder = window.location.pathname.includes('/women/') || 
                      window.location.pathname.includes('/product/');
  const prefix = isSubfolder ? '../' : './';
  return new URL(prefix + relativePath, window.location.href).href;
}

/* ==========================================================================
   4. CART SYSTEM (LocalStorage Management)
   ========================================================================== */

/**
 * Renders the shopping cart dropdown and updates header badges/totals.
 */
function renderCartDropdown() {
  const cart = JSON.parse(localStorage.getItem('lucy_cart')) || [];
  const itemsContainer = document.querySelector('.cart-dropdown-items');
  const subtotalElement = document.querySelector('.subtotal-amount');
  const badgeElement = document.querySelector('.cart-badge');

  if (!itemsContainer) return;
  itemsContainer.innerHTML = '';

  // Handle Empty Cart State
  if (cart.length === 0) {
    itemsContainer.innerHTML = '<p class="empty-cart-msg">YOUR CART IS CURRENTLY EMPTY</p>';
    if (subtotalElement) subtotalElement.textContent = '$0.00';
    if (badgeElement) badgeElement.textContent = '0';
    return;
  }

  let subtotal = 0;
  let totalCount = 0;

  // Build Cart Rows
  cart.forEach((item, index) => {
    const priceNum = Number(item.price) || 0;
    subtotal += priceNum * item.quantity;
    totalCount += item.quantity;

    const itemRow = document.createElement('div');
    itemRow.classList.add('cart-item-row');
    itemRow.innerHTML = `
      <img src="${item.image}" alt="${item.title}" class="cart-item-img">
      <div class="cart-item-details">
        <h4>${item.title}</h4>
        <p>SIZE: ${item.size}</p>
        <p>${item.quantity} x $${priceNum.toFixed(2)}</p>
      </div>
      <button class="remove-btn" onclick="removeItemFromCart(${index})">&times;</button>
    `;
    itemsContainer.appendChild(itemRow);
  });

  // Update Summary UI
  if (subtotalElement) subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
  if (badgeElement) badgeElement.textContent = totalCount;
}

/**
 * Global function to remove an item index from cart array.
 */
window.removeItemFromCart = function(index) {
  let cart = JSON.parse(localStorage.getItem('lucy_cart')) || [];
  cart.splice(index, 1);
  localStorage.setItem('lucy_cart', JSON.stringify(cart));
  renderCartDropdown();
};

/**
 * Saves selected item to LocalStorage and updates UI.
 */
function handleAddToCart() {
  if (!selectedSize) {
    alert("PLEASE SELECT A SIZE!");
    return;
  }

  const titleText = document.getElementById('detail-title')?.textContent || "Clothing Item";
  const priceText = document.getElementById('detail-price')?.textContent || "$0";
  const imageEl = document.getElementById('detail-image');

  const absoluteImgUrl = imageEl ? imageEl.src : "";
  const parsedPrice = parseFloat(priceText.replace(/[^0-9.]/g, '')) || 0;

  let cart = JSON.parse(localStorage.getItem('lucy_cart')) || [];

  const newProduct = {
    id: titleText.toLowerCase().trim().replace(/\s+/g, '-'),
    title: titleText,
    price: parsedPrice,
    size: selectedSize,
    quantity: currentQty,
    image: absoluteImgUrl
  };

  // Check for duplicate item + size combo
  const existingIndex = cart.findIndex(
    item => item.id === newProduct.id && item.size === newProduct.size
  );

  if (existingIndex > -1) {
    cart[existingIndex].quantity += currentQty;
  } else {
    cart.push(newProduct);
  }

  localStorage.setItem('lucy_cart', JSON.stringify(cart));

  renderCartDropdown();
  document.getElementById('shoppingcart')?.classList.add('show');
}

/* ==========================================================================
   5. PAGE INTERACTIONS & DOM SETUP
   ========================================================================== */

/**
 * Reads URL query params and injects matching item into the details page.
 */
function loadProductFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  const itemId = urlParams.get('id') || urlParams.get('item');
  const itemData = CLOTHING_DATABASE[itemId];

  if (itemData) {
    const titleEl = document.getElementById('detail-title');
    const priceEl = document.getElementById('detail-price');
    const imageEl = document.getElementById('detail-image');

    if (titleEl) titleEl.textContent = itemData.title;
    if (priceEl) priceEl.textContent = itemData.price;
    if (imageEl) {
      imageEl.src = getCleanImagePath(itemData.imageSrc);
      imageEl.style.display = "block";
    }
  }
}

/**
 * Binds click events for size selectors, quantity counters, and back links.
 */
function setupUIEventListeners() {
  // Size Selector Buttons
  const sizeButtons = document.querySelectorAll('.size-btn');
  sizeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      selectedSize = btn.getAttribute('data-size');
      sizeButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Quantity Stepper Logic
  const qtyDisplay = document.getElementById('quantity-type');
  const plusBtn = document.getElementById('plus-btn');
  const minusBtn = document.getElementById('minus-btn');

  if (plusBtn && qtyDisplay) {
    plusBtn.addEventListener('click', () => {
      currentQty++;
      qtyDisplay.textContent = currentQty;
    });
  }

  if (minusBtn && qtyDisplay) {
    minusBtn.addEventListener('click', () => {
      if (currentQty > 1) {
        currentQty--;
        qtyDisplay.textContent = currentQty;
      }
    });
  }

  // Add To Cart Button Listener
  const addToCartBtn = document.getElementById('add-to-cart-btn');
  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', handleAddToCart);
  }

  // Dynamic Back Link
  const backLink = document.getElementById('back-link');
  if (backLink) {
    backLink.addEventListener('click', (e) => {
      e.preventDefault();
      if (document.referrer && document.referrer.includes(window.location.host)) {
        window.history.back();
      } else {
        window.location.href = "shopall/shopall.html";
      }
    });
  }
}

/* ==========================================================================
   6. INITIALIZATION
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  loadProductFromURL();
  setupUIEventListeners();
  renderCartDropdown();
});