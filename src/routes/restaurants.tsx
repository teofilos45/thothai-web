import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/restaurants")({
  beforeLoad: () => {
    throw redirect({ to: "/for-restaurants" });
  },
  component: () => null,
});
