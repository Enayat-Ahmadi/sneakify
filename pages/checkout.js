import CheckoutForm from "@/components/Checkout/CheckoutForm";
import OrderSummary from "@/components/Checkout/OrderSummary";
import useCart from "@/hooks/useCart";
import { useRouter } from "next/router";



export default function Checkout({ products }) {

  const router = useRouter();
  const { productCart, clearCart } = useCart();
  const cartProducts = productCart
    ?.map((item) => {
      const product = products?.find((product) => product._id === item.id);
      if (!product) return null;

      return {
        ...product,
        quantity: item.quantity,
        size: item.size,
      };
    })
    .filter(Boolean);

  async function handleOrder(e) {
    e.preventDefault();
    if (cartProducts.length === 0) return;

    try {
      const formData = new FormData(e.target);
      const order = {
        customer: {
          fullName: formData.get("fullname"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          address: formData.get("address"),
          city: formData.get("city"),
          postalCode: formData.get("postalCode"),
        },
        items: cartProducts.map((product) => ({
          productId: product._id,
          name: product.name,
          price: Number(product.price),
          size: Number(product.size),
          quantity: Number(product.quantity),
        })),
        totalAmount: cartProducts.reduce(
          (sum, product) =>
            sum + Number(product.price) * Number(product.quantity),
          0,
        ),
      };
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(
          data.status || data.message || "Failed to create order",
        );
      }
      
      clearCart();
      console.log("Order saved:", data.order);
      router.push("/order-success");
    } catch (error) {
      console.error("Order error:", error);
    }
  }
  return (
    <div className="px-4 py-8 md:px-8 grid mx-auto max-w-7xl gap-6 lg:grid-cols-3">
      <div className="lg:order-2 h-fit lg:sticky lg:top-24">
        <OrderSummary cartProducts={cartProducts} />
      </div>
      <div className="flex flex-col gap-4 lg:col-span-2">
        <CheckoutForm onSubmit={handleOrder} cartProducts={cartProducts} />
      </div>
    </div>
  );
}
