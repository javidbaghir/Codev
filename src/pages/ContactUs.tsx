import { useTranslation } from "react-i18next";
import ContactUsAdresses from "../components/ui/contactus/ContactUsAdresses";
import Title from "../components/ui/Title";

const ContactUs = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-10 md:mt-10">
      <Title title={t("contactPage.contactTitle")} />

      <div className="flex justify-center items-center md:flex-row p-5 md:p-20 gap-10">
        <ContactUsAdresses />
      </div>
    </div>
  );
}

export default ContactUs;
