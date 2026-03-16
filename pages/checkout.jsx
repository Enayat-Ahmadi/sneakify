import CheckoutForm from "@/components/Checkout/CheckoutForm";

export default function Checkout() {
  function handleOrder(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const order = Object.fromEntries(formData);
    console.log(order);
  }
  return (
    <>
      <CheckoutForm onSubmit={handleOrder} />
    </>
  );
}
