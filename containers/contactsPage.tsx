import Container from "@/components/container";
import { contactsDetails } from "@/data/contactsDetails";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaWhatsappSquare, FaInstagramSquare } from "react-icons/fa";

export default async function ContactsPage() {
  return (
    <div className="min-h-screen">
      <Container>
        <main className="pt-16 md:pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-playfair font-light mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-gray-600" />
                    <span>
                      {contactsDetails?.email || "hello@lenaartem.com"}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-gray-600" />
                    <span>{contactsDetails?.phone || "+1 (555) 123-4567"}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-gray-600" />
                    <span>{contactsDetails?.address || "New York, NY"}</span>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-playfair font-light mb-6">
                  Let's Create Together
                </h2>
                <p className="text-gray-600 mb-6">
                  {contactsDetails?.description ||
                    "Ready to bring your vision to life? We'd love to hear about your project and discuss how we can help you create something beautiful."}
                </p>
                <div className="flex justify-start items-center gap-6 mx-auto w-full">
                  <a
                    href="https://wa.me/+2347065828796"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md"
                  >
                    <FaWhatsappSquare className="w-6 h-6" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href="https://www.instagram.com/aoevisuals"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-white bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-md"
                  >
                    <FaInstagramSquare className="w-6 h-6" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </Container>
    </div>
  );
}
