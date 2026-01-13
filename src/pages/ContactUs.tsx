import { useTranslation } from "react-i18next";
import ContactUsAdresses from "../components/ui/contactus/ContactUsAdresses";
import { Sparkles, Mail, MessageSquare } from "lucide-react";

const ContactUs = () => {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen py-20 px-4 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f23] via-[#1a1a3e] to-[#0f0f23]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#6366f1] rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-[#ec4899] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-[#14b8a6] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto pt-24">
        {/* Page Header */}
        <div className="text-center mb-20 space-y-6 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 text-[#14b8a6] animate-pulse" />
            <span className="px-4 py-2 rounded-full glass-light border border-white/20 text-sm font-semibold text-white inline-flex items-center gap-2">
              <Mail size={16} className="text-[#6366f1]" />
              {t("contactPage.badge") || "Contact Us"}
            </span>
            <Sparkles className="w-5 h-5 text-[#ec4899] animate-pulse" />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text animate-fade-in-up animation-delay-200">
            {t("contactPage.contactTitle") || "Get In Touch"}
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
            {t("contactPage.subtitle") || "Have questions? We'd love to hear from you"}
          </p>

          <div className="flex items-center justify-center gap-3 pt-4 animate-fade-in-up animation-delay-600">
            <MessageSquare className="w-6 h-6 text-[#6366f1]" />
            <span className="text-gray-300">We typically respond within 24 hours</span>
          </div>
        </div>

        {/* Contact Content */}
        <div className="animate-fade-in-up animation-delay-800">
          <ContactUsAdresses />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
