/**
 * Custom Home Scripts for Editorial Sneakers Storefront
 * Handles instant Buy Now, AJAX Add to Cart with Sense Cart Drawer integration.
 */

document.addEventListener('DOMContentLoaded', () => {
  initEditorialCartButtons();
});

function initEditorialCartButtons() {
  document.addEventListener('click', async (e) => {
    // 1. BUY NOW BUTTON
    const buyBtn = e.target.closest('.btn-card-buy');
    if (buyBtn) {
      e.preventDefault();
      const variantId = buyBtn.dataset.variantId;
      const productUrl = buyBtn.dataset.productUrl;

      if (!variantId || variantId === 'demo') {
        if (productUrl) window.location.href = productUrl;
        return;
      }

      const originalText = buyBtn.innerText;
      buyBtn.innerText = '...';
      buyBtn.style.opacity = '0.7';
      buyBtn.disabled = true;

      try {
        const response = await fetch('/cart/add.js', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            items: [{ id: parseInt(variantId), quantity: 1 }]
          })
        });

        if (response.ok) {
          window.location.href = '/checkout';
        } else {
          if (productUrl) window.location.href = productUrl;
        }
      } catch (err) {
        console.error('Error adding to cart:', err);
        if (productUrl) window.location.href = productUrl;
      } finally {
        buyBtn.innerText = originalText;
        buyBtn.style.opacity = '1';
        buyBtn.disabled = false;
      }
      return;
    }

    // 2. ADD TO CART BUTTON (AJAX)
    const addBtn = e.target.closest('.btn-card-add');
    if (addBtn) {
      e.preventDefault();
      const variantId = addBtn.dataset.variantId;
      const productUrl = addBtn.dataset.productUrl;

      if (!variantId || variantId === 'demo') {
        if (productUrl) window.location.href = productUrl;
        return;
      }

      const originalText = addBtn.innerText;
      addBtn.innerText = '...';
      addBtn.style.opacity = '0.7';
      addBtn.disabled = true;

      try {
        const response = await fetch('/cart/add.js', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            items: [{ id: parseInt(variantId), quantity: 1 }]
          })
        });

        if (response.ok) {
          addBtn.innerText = '✓';
          setTimeout(() => {
            addBtn.innerText = originalText;
            addBtn.style.opacity = '1';
            addBtn.disabled = false;
          }, 1200);

          // Trigger Sense theme cart drawer or notification
          if (window.routes && window.routes.cart_url) {
            const cartResponse = await fetch(`${window.routes.cart_url}?section_id=cart-drawer`);
            const cartHtml = await cartResponse.text();
            
            const cartDrawer = document.querySelector('cart-drawer');
            if (cartDrawer) {
              const htmlDoc = new DOMParser().parseFromString(cartHtml, 'text/html');
              const newInner = htmlDoc.querySelector('#CartDrawer');
              const currentInner = cartDrawer.querySelector('#CartDrawer');
              if (newInner && currentInner) {
                currentInner.innerHTML = newInner.innerHTML;
              }
              cartDrawer.open();
            } else {
              // Update cart count bubble
              const bubbleResponse = await fetch(`${window.routes.cart_url}.js`);
              const cartData = await bubbleResponse.json();
              const countBubble = document.querySelector('.cart-count-bubble');
              if (countBubble) {
                const countSpan = countBubble.querySelector('span[aria-hidden="true"]');
                if (countSpan) countSpan.textContent = cartData.item_count;
              }
            }
          }
        } else {
          if (productUrl) window.location.href = productUrl;
        }
      } catch (err) {
        console.error('Error adding to cart:', err);
        if (productUrl) window.location.href = productUrl;
      }
    }
  });
}
