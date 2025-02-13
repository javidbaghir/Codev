import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { contactUsData } from "../../../database/ContactData";
import MapEmbed from "./MapEmbed";

const ContactUsAdresses = () => {
  return (
    <div>
      {contactUsData.map((item) => (
        <div key={item?.id} className="space-y-4">
          <div className="flex items-center gap-5">
            <FaLocationDot className="text-[20px]" />
            <span className="text-[20px]">
              {item?.country}, {item?.city}, {item?.street}
            </span>
          </div>
          <div className="flex items-center gap-5">
            <FaPhoneAlt />
            <span className="text-[20px]">{item?.phone}</span>
          </div>

          <div className="flex items-center gap-5">
            <MdEmail />
            <span className="text-[20px]">{item?.email}</span>
          </div>
          <MapEmbed
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12156.676466068859!2d49.82200598715819!3d40.38294430000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d640daa4cb5%3A0x8f57e7e504a1dd71!2sAF%20City!5e0!3m2!1saz!2saz!4v1737278511354!5m2!1saz!2saz" 
          />
        </div>
      ))}
    </div>
  );
}

export default ContactUsAdresses;
