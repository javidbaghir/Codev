import { MapPin, Phone, Mail } from "lucide-react";
import { contactUsData } from "../../../database/ContactData";
import MapEmbed from "./MapEmbed";

const ContactUsAdresses = () => {
  return (
    <div className="group relative">
      {/* Neon Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#6366f1] via-[#ec4899] to-[#14b8a6] rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-all duration-500"></div>

      <div className="relative glass-dark p-8 md:p-10 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
        {contactUsData.map((item) => (
          <div key={item?.id} className="space-y-6">
            {/* Address */}
            <div className="group/item flex items-start gap-4 p-6 glass-light rounded-xl border border-white/10 hover:border-[#14b8a6] hover:neon-shadow transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#14b8a6] to-[#6366f1] flex items-center justify-center flex-shrink-0">
                <MapPin size={24} className="text-white" />
              </div>
              <div>
                <span className="text-xs text-gray-400 block mb-2">Address</span>
                <span className="text-lg md:text-xl text-white font-medium">
                  {item?.country}, {item?.city}, {item?.street}
                </span>
              </div>
            </div>

            {/* Phone */}
            <div className="group/item flex items-start gap-4 p-6 glass-light rounded-xl border border-white/10 hover:border-[#6366f1] hover:neon-shadow transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#6366f1] to-[#ec4899] flex items-center justify-center flex-shrink-0">
                <Phone size={24} className="text-white" />
              </div>
              <div>
                <span className="text-xs text-gray-400 block mb-2">Phone</span>
                <a
                  href={`tel:${item?.phone.replace(/[^0-9+]/g, '')}`}
                  className="text-lg md:text-xl text-white font-medium hover:gradient-text transition-all duration-300"
                >
                  {item?.phone}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="group/item flex items-start gap-4 p-6 glass-light rounded-xl border border-white/10 hover:border-[#ec4899] hover:neon-shadow transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#ec4899] to-[#14b8a6] flex items-center justify-center flex-shrink-0">
                <Mail size={24} className="text-white" />
              </div>
              <div>
                <span className="text-xs text-gray-400 block mb-2">Email</span>
                <a
                  href={`mailto:${item?.email}`}
                  className="text-lg md:text-xl text-white font-medium hover:gradient-text transition-all duration-300"
                >
                  {item?.email}
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg">
              <MapEmbed
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12156.676466068859!2d49.82200598715819!3d40.38294430000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d640daa4cb5%3A0x8f57e7e504a1dd71!2sAF%20City!5e0!3m2!1saz!2saz!4v1737278511354!5m2!1saz!2saz"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactUsAdresses;
