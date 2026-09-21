import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/essay/$id")({
  beforeLoad: ({ params }) => {
    throw redirect({ to: "/mcq/$id", params: { id: params.id } });
  },
  component: () => null,
});
