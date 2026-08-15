import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactClient from "@/components/ContactClient";

export const metadata = {
  title: "Contact | Heading North",
  description: "Get in touch with the Heading North team for partnerships, investment, or press inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <ContactClient />
      <Footer />
    </>
  );
}
