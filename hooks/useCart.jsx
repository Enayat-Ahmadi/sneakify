import { useLocalStorage } from "@uidotdev/usehooks";

export default function useCart() {
  const [productCart, setProductCart] = useLocalStorage("cart", []);

  function addToCart(productId) {
    const isExist = productCart.find((item) => item.productId === productId);
    if (isExist) {
      setProductCart(
        productCart.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setProductCart([...productCart, { productId, quantity: 1 }]);
    }
  }
  return {
    productCart,
    addToCart,
  };
}
