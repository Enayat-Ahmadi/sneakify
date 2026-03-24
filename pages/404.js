import ErrorScreen from "@/components/ui/ErrorScreen";

export default function Custom404() {
  return (
    <ErrorScreen
      title="Page not found"
      message="The page you are looking for does not exist or has been moved."
      actionLabel="Go home"
      actionHref="/"
    />
  );
}