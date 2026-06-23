import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/restaurants")({
  beforeLoad: () => {
    throw redirect({ to: "/thothfood/for-restaurants" });
  },
  component: () => null,
});
