import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function CustomFooter() {
  return (
    <footer className=" bg-white w-full">
      <div className="max-w-8xl mx-auto px-4">
        <div className="bg-pink-100 text-black">
          {/* Tagline */}
          <div className="bg-green-300 text-yellow-600 text-center text-3xl md:text-4xl px-3 py-6 font-serif">
        WE CAPTURE AND SAVE SOME OF THE BEST MOMENTS IN PEOPLE'S LIVES IN ABUJA
          </div>

          {/* Main Content */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-12 py-24 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl text-gray-900 md:text-5xl font-serif font-semibold italic mb-8">
          Your Move!
        </h2>

        <div className="flex flex-col sm:flex-row justify-center items-start md:items-center gap-4 md:gap-16 mb-10">
          <a
            href="mailto:olaleyealaba2@gmail.com"
            className="flex items-center text-lg text-gray-700 hover:text-gray-900 transition-colors"
          >
            <FaEnvelope className="w-8 h-8 inline mr-2" />
            <span>Email</span>
          </a>
          <a
            href="https://www.instagram.com/aoevisuals/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-lg text-gray-700 hover:text-gray-900 transition-colors"
          >
            <FaInstagram className="w-8 h-8 inline mr-2" />
            <span>Instagram</span>
          </a>
          <a
            href="https://wa.me/+2347065828796"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-lg text-gray-700 hover:text-gray-900 transition-colors"
          >
            <FaWhatsapp className="w-8 h-8 inline mr-2" />
            <span>WhatsApp</span>
          </a>
        </div>
          </div>
          <p className="text-center py-6 text-gray-600">
        &copy; {new Date().getFullYear()} AOE Studios. All rights reserved.
          </p>
        </div>
      </div>
      {/* Tagline */}
    </footer>
  );
}
