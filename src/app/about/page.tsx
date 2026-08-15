import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutClient from "@/components/AboutClient";

export const metadata = {
  title: "About | Heading North",
  description: "Learn about Heading North — a global holding company building tomorrow's leading brands.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutClient />
      <Footer />
    </>
  );
}
