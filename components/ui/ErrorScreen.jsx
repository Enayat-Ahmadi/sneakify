import StatusScreen from "./StatusScreen";

export default function ErrorScreen(props) {
  return (
    <StatusScreen
      type="error"
      actionLabel="Back to shop"
      actionHref="/products"
      {...props}
    />
  );
}