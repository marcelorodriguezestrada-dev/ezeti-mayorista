import {
  state,
  addToCart,
  removeFromCart,
  setSelectedTier,
} from "./state.js";
import { renderGrid, renderCart, renderFilters, openDrawer, closeDrawer } from "./render.js";
import { sendWhatsapp } from "./whatsapp.js";

function refresh() {
  renderGrid(handleAdd, handleSelectTier);
  renderCart(handleRemove);
}

function handleAdd(productId) {
  addToCart(productId);
  refresh();
  openDrawer();
}

function handleRemove(productId) {
  removeFromCart(productId);
  refresh();
}

function handleSelectTier(productId, tierIndex) {
  setSelectedTier(productId, tierIndex);
  refresh();
}

function handleFilter(cat) {
  state.activeCat = cat;
  refresh();
}

document.getElementById("cartOpenBtn").addEventListener("click", openDrawer);
document.getElementById("cartCloseBtn").addEventListener("click", closeDrawer);
document.getElementById("overlay").addEventListener("click", closeDrawer);
document.getElementById("waBtn").addEventListener("click", () => sendWhatsapp(refresh));

renderFilters(handleFilter);
refresh();
