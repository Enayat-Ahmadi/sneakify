import CheckoutForm from "@/components/Checkout/CheckoutForm";
import OrderSummary from "@/components/Checkout/OrderSummary";
import useCart from "@/hooks/useCart";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";

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
      };
    })
    .filter(Boolean);

  function handleOrder(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const customerInfo = Object.fromEntries(formData);
    const order = {
      customer: customerInfo,
      products: cartProducts,
    };
    clearCart();
    router.push("/order-success");
  }
  return (
    <div className="px-4 py-8 md:px-8 grid mx-auto max-w-7xl gap-6 lg:grid-cols-3">
      <div className="lg:order-2 h-fit lg:sticky lg:top-24">
        <OrderSummary cartProducts={cartProducts} />
      </div>
      <form
        id="checkout-form"
        onSubmit={handleOrder}
        className="flex flex-col gap-4 lg:col-span-2"
      >
        <CheckoutForm />
        <Button
          type="submit"
          size="lg"
          disabled={cartProducts.length === 0}
          className="mt-auto h-12 rounded-full bg-black text-lg font-semibold transition hover:bg-neutral-800"
        >
          Place Order
        </Button>
      </form>
    </div>
  );
}
