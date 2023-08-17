export function calcPrice(data = []) {
  const result = data.reduce((acc, cart) => acc += cart.price * cart.quatity, 0);
  return result;
}