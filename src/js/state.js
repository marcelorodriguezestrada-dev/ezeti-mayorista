import { PRODUCTS } from "../data/products.js";

const CART_STORAGE_KEY = "ezeti-mayorista-cart";

function loadCart() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export const state = {
  cart: loadCart(),   // { [productId]: { tierIndex, qty } }
  selectedTier: {},   // { [productId]: tierIndex }
  pendingQty: {},      // { [productId]: qty a agregar (antes de tocar "Agregar") }
  activeCat: "all",
  checkoutStep: "cart", // "cart" | "checkout"
};

export function persistCart() {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.cart));
  } catch {
    // localStorage no disponible (modo privado, etc.) — el carrito sigue
    // funcionando en memoria, simplemente no persiste entre recargas.
  }
}

export function fmt(n) {
  return "$" + n.toLocaleString("es-AR");
}

export function gainFor(product, tier) {
  const perUnitResale = product.resale;
  const perUnitCost = tier.price / tier.qty;
  return Math.max(0, Math.round((perUnitResale - perUnitCost) * tier.qty));
}

export function defaultTierIndex(product) {
  const bestIdx = product.tiers.findIndex((t) => t.best);
  return bestIdx >= 0 ? bestIdx : 0;
}

export function getSelectedTierIndex(productId) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (state.selectedTier[productId] === undefined) {
    state.selectedTier[productId] = defaultTierIndex(product);
  }
  return state.selectedTier[productId];
}

export function setSelectedTier(productId, tierIndex) {
  state.selectedTier[productId] = tierIndex;
}

export function getPendingQty(productId) {
  return state.pendingQty[productId] ?? 1;
}

export function setPendingQty(productId, qty) {
  state.pendingQty[productId] = Math.max(1, qty);
}

export function addToCart(productId) {
  const tierIndex = getSelectedTierIndex(productId);
  const qtyToAdd = getPendingQty(productId);
  const existing = state.cart[productId];
  const newQty = existing ? existing.qty + qtyToAdd : qtyToAdd;
  state.cart[productId] = { tierIndex, qty: newQty };
  state.pendingQty[productId] = 1; // reset selector tras agregar
  persistCart();
}

export function updateCartQty(productId, qty) {
  if (!state.cart[productId]) return;
  state.cart[productId].qty = Math.max(1, qty);
  persistCart();
}

export function removeFromCart(productId) {
  delete state.cart[productId];
  persistCart();
}

export function clearCart() {
  state.cart = {};
  state.checkoutStep = "cart";
  persistCart();
}

export function cartTotals() {
  let total = 0;
  let gain = 0;
  let count = 0;
  Object.keys(state.cart).forEach((id) => {
    const product = PRODUCTS.find((p) => p.id == id);
    const item = state.cart[id];
    const tier = product.tiers[item.tierIndex];
    total += tier.price * item.qty;
    gain += gainFor(product, tier) * item.qty;
    count += 1;
  });
  return { total, gain, count };
}

export function visibleProducts() {
  return PRODUCTS.filter(
    (p) => state.activeCat === "all" || p.cat === state.activeCat
  );
}
