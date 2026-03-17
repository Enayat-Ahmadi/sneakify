import CheckoutForm from "@/components/Checkout/CheckoutForm";
import OrderSummary from "@/components/Checkout/OrderSummary";
import useCart from "@/hooks/useCart";

export default function Checkout({ products }) {
  const { productCart } = useCart();
  const cartProducts =
    productCart
      ?.map((item) => {
        const product = products?.find((product) => product._id === item.id);
        if (!product) return null;

        return {
          ...product,
          quantity: item.quantity,
        };
      })
      .filter(Boolean) || [];

  function handleOrder(e) {
    e.preventDefault();
    console.log(order);
  }
  return (
    <form
      id="checkout-form"
      onSubmit={handleOrder}
      className="min-h-screen bg-muted/30 px-4 py-8 md:px-8 grid max-w-7xl gap-6 lg:grid-cols-3"
    >
      <div className="grid lg:col-span-2 ">
        <CheckoutForm />
      </div>
      <div className="h-fit lg:sticky lg:top-24">
        <OrderSummary cartProducts={cartProducts} />
      </div>
    </form>
  );
}
