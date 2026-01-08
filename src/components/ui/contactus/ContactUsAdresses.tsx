import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { contactUsData } from "../../../database/ContactData";
import MapEmbed from "./MapEmbed";

const ContactUsAdresses = () => {
  return (
    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border-2 border-gray-100">
      {contactUsData.map((item) => (
        <div key={item?.id} className="space-y-6">
          <div className="flex items-start gap-4 p-4 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors">
            <FaLocationDot className="text-[24px] text-primary mt-1" />
            <span className="text-[18px] md:text-[20px] text-secondary-700 font-medium">
              {item?.country}, {item?.city}, {item?.street}
            </span>
          </div>
          <div className="flex items-center gap-4 p-4 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors">
            <FaPhoneAlt className="text-[20px] text-primary" />
            <span className="text-[18px] md:text-[20px] text-secondary-700 font-medium">{item?.phone}</span>
          </div>

          <div className="flex items-center gap-4 p-4 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors">
            <MdEmail className="text-[22px] text-primary" />
            <span className="text-[18px] md:text-[20px] text-secondary-700 font-medium">{item?.email}</span>
          </div>
          <div className="rounded-xl overflow-hidden shadow-md">
            <MapEmbed
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12156.676466068859!2d49.82200598715819!3d40.38294430000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d640daa4cb5%3A0x8f57e7e504a1dd71!2sAF%20City!5e0!3m2!1saz!2saz!4v1737278511354!5m2!1saz!2saz"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContactUsAdresses;
