import { useLocalStorage } from "@uidotdev/usehooks";

export default function useCart() {
  const [productCart, setProductCart] = useLocalStorage("cart", []);
  function getProductQuantity(productId) {
    const quantity = productCart.find(
      (item) => item.id === productId,
    )?.quantity;
    return quantity === undefined ? 0 : quantity;
  }
  function addToCart(productId) {
    const quantity = getProductQuantity(productId);
    if (quantity === 0) {
      setProductCart([...productId, { id: productId, quantity: 1 }]);
    } else {
      setProductCart(
        productCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    }
  }
}
