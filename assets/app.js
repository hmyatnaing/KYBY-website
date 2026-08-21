const data = window.KYBY_SITE_DATA || {};

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function setText(selector, value) {
  document.querySelectorAll(selector).forEach((node) => {
    node.textContent = value;
  });
}

function setHref(selector, value) {
  document.querySelectorAll(selector).forEach((node) => {
    node.setAttribute("href", value);
  });
}

function productTemplate(product) {
  const specs = [
    ["အရက်ပါဝင်မှု", product.alcohol],
    ["တစ်ဘူး", product.bottle],
    ["တစ်ပုံး", product.carton],
  ];

  return `
    <article class="product-card product-card-${escapeHtml(product.accent)}">
      <div class="product-image">
        <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.flavorEn)} rice wine bottle">
      </div>
      <div class="product-body">
        <p class="product-kicker">${escapeHtml(product.nameEn)}</p>
        <h3>${escapeHtml(product.nameMy)}</h3>
        <p class="product-flavor">${escapeHtml(product.flavorMy)} <span>${escapeHtml(product.flavorEn)}</span></p>
        <p>${escapeHtml(product.meaningMy)}</p>
        <p class="en-copy">${escapeHtml(product.meaningEn)}</p>
        <dl class="spec-list">
          ${specs
            .map(
              ([label, value]) => `
                <div>
                  <dt>${escapeHtml(label)}</dt>
                  <dd>${escapeHtml(value)}</dd>
                </div>
              `,
            )
            .join("")}
        </dl>
        <div class="taste-note">
          <span>အရသာ / Taste</span>
          <p>${escapeHtml(product.tasteMy)}</p>
          <p class="en-copy">${escapeHtml(product.tasteEn)}</p>
        </div>
        <div class="ingredients">
          <span>အဓိကပါဝင်ပစ္စည်းများ / Ingredients</span>
          <p>${escapeHtml(product.ingredientsMy)}</p>
          <p class="en-copy">${escapeHtml(product.ingredientsEn)}</p>
        </div>
        <a class="button button-product" href="${escapeHtml(data.contact?.phoneHref)}">ဤအရသာကိုမှာယူရန်</a>
      </div>
    </article>
  `;
}

function galleryTemplate(item, index) {
  return `
    <figure class="gallery-item ${index === 0 ? "gallery-item-large" : ""}">
      <img src="${item.image}" alt="${item.titleEn}">
      <figcaption>
        <strong>${escapeHtml(item.titleMy)}</strong>
        <span>${escapeHtml(item.titleEn)}</span>
      </figcaption>
    </figure>
  `;
}

function initContact() {
  setText("[data-phone-text]", data.contact.phoneDisplay);
  setText("[data-viber-text]", data.contact.viberDisplay);
  setText("[data-address-text]", data.contact.address);
  setHref("[data-phone-link]", data.contact.phoneHref);
  setHref("[data-viber-link]", data.contact.viberHref);
  setHref("[data-map-link]", data.contact.mapHref);
}

function initProducts() {
  const target = document.querySelector("[data-products]");
  if (!target) return;
  target.innerHTML = (data.products || []).map(productTemplate).join("");
}

function initGallery() {
  const target = document.querySelector("[data-gallery]");
  if (!target) return;
  target.innerHTML = (data.gallery || []).map(galleryTemplate).join("");
}

function initHeaderShadow() {
  const header = document.querySelector("[data-header]");
  if (!header) return;
  const update = () => header.classList.toggle("is-scrolled", window.scrollY > 12);
  update();
  window.addEventListener("scroll", update, { passive: true });
}

initContact();
initProducts();
initGallery();
initHeaderShadow();
setText("[data-year]", new Date().getFullYear());
