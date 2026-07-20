import {
  state,
  addToCart,
  removeFromCart,
  setSelectedTier,
  setPendingQty,
  updateCartQty,
} from "./state.js";
import {
  renderGrid,
  renderCart,
  renderFilters,
  openDrawer,
  closeDrawer,
  showCartStep,
  showCheckoutStep,
} from "./render.js";
import { sendWhatsapp } from "./whatsapp.js";
import { initMarketing } from "./marketing.js";

const ADMIN_KEY = "ezeti-mayorista-admin";

function checkAdminMode() {
  const params = new URLSearchParams(window.location.search);
  if (params.get("admin") === "1") {
    try {
      localStorage.setItem(ADMIN_KEY, "1");
    } catch {}
  }
  let isAdmin = false;
  try {
    isAdmin = localStorage.getItem(ADMIN_KEY) === "1";
  } catch {}

  if (isAdmin) {
    document.getElementById("marketingOpenBtn").style.display = "";
  }
  return isAdmin;
}

function refresh() {
  renderGrid(handleAdd, handleSelectTier, handleQtyChange);
  renderCart(handleRemove, handleCartQtyChange);
}

function handleAdd(productId) {
  addToCart(productId);
  refresh();
  openDrawer();
  showCartStep();
}

function handleRemove(productId) {
  removeFromCart(productId);
  refresh();
}

function handleCartQtyChange(productId, qty) {
  updateCartQty(productId, qty);
  refresh();
}

function handleSelectTier(productId, tierIndex) {
  setSelectedTier(productId, tierIndex);
  refresh();
}

function handleQtyChange(productId, qty) {
  setPendingQty(productId, qty);
  refresh();
}

function handleFilter(cat) {
  state.activeCat = cat;
  refresh();
}

document.getElementById("cartOpenBtn").addEventListener("click", () => {
  openDrawer();
  showCartStep();
});
document.getElementById("cartCloseBtn").addEventListener("click", closeDrawer);
document.getElementById("overlay").addEventListener("click", closeDrawer);

document.getElementById("continueBtn").addEventListener("click", showCheckoutStep);
document.getElementById("backToCartBtn").addEventListener("click", showCartStep);

document.getElementById("waBtn").addEventListener("click", () => {
  const customerInfo = {
    nombre: document.getElementById("ckNombre").value.trim(),
    telefono: document.getElementById("ckTelefono").value.trim(),
    localidad: document.getElementById("ckLocalidad").value.trim(),
    comentario: document.getElementById("ckComentario").value.trim(),
  };
  sendWhatsapp(customerInfo, () => {
    refresh();
    showCartStep();
    document.getElementById("ckNombre").value = "";
    document.getElementById("ckTelefono").value = "";
    document.getElementById("ckLocalidad").value = "";
    document.getElementById("ckComentario").value = "";
  });
});

renderFilters(handleFilter);
refresh();
if (checkAdminMode()) {
  initMarketing();
}