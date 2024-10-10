/**
 * Calcula el área de un círculo dado su radio.
 *
 * @param {number} radio - El radio del círculo.
 * @returns {number} El área del círculo.
 * @throws {Error} Si el radio no es un número positivo.
 * 
 * @example
 * import { calcularAreaCirculo } from './calculoAreaCirculo.js';
 * const area = calcularAreaCirculo(5);
 * console.log(area); // 78.53981633974483
 */
export function calcularAreaCirculo(radio) {
    if (radio <= 0 || isNaN(radio)) {
        throw new Error("El radio debe ser un número positivo.");
    }
    return Math.PI * Math.pow(radio, 2);
}
