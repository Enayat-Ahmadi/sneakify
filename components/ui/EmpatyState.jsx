import StatusScreen from "./StatusScreen";

export default function EmptyState(props) {
  return (
    <StatusScreen
      type="empty"
      actionLabel="Explore sneakers"
      actionHref="/products"
      fullScreen={false}
      {...props}
    />
  );
}