import CheckoutForm from "@/components/Checkout/CheckoutForm";

export default function Checkout() {
  function handleOrder(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const order = Object.fromEntries(formData);
    console.log(order);
  }
  return (
    <div className="mx-auto min-h-screen w-full max-w-7xl px-4 py-8 md:px-6">
      <CheckoutForm onSubmit={handleOrder} />
    </div>
  );
}
