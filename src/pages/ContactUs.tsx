import { useTranslation } from "react-i18next";
import ContactUsAdresses from "../components/ui/contactus/ContactUsAdresses";
import Title from "../components/ui/Title";

const ContactUs = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-10 md:mt-16 mb-16 md:mb-20 pt-[120px] md:pt-[140px]">
      <Title title={t("contactPage.contactTitle")} />

      <div className="flex justify-center items-start md:flex-row p-5 md:p-10 gap-10 max-w-7xl mx-auto">
        <ContactUsAdresses />
      </div>
    </div>
  );
}

export default ContactUs;
