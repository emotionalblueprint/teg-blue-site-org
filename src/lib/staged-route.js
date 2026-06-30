import { redirect } from "next/navigation";

export const metadata = {
  title: "Not published | TEG-Blue",
  description: "This TEG-Blue route is currently cleared for future use.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function StagedRoute() {
  redirect("/");
}
