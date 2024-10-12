// Funcion que recibe por parametro el % de descuento

import { calculateTotalPrice } from "./calculatetotalprice.mjs";

export function applyDiscount(library, discountPercentage) {
    const totalPrice = calculateTotalPrice(library);
    const discountAmount = (totalPrice * discountPercentage) / 100;
    return totalPrice - discountAmount;
}