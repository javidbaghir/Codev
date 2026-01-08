import React, { useRef } from "react";
import { Input, Button } from "antd";
import emailjs from "@emailjs/browser";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";

const ContactUsForm: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const { t } = useTranslation();

    const validationSchema = Yup.object({
        name: Yup.string().required("Ad tələb olunur"),
        surname: Yup.string().required("Soyad tələb olunur"),
        email: Yup.string()
            .email("Düzgün email formatı deyil")
            .required("Email tələb olunur"),
        title: Yup.string().required("Başlıq tələb olunur"),
        message: Yup.string().required("Mesaj tələb olunur"),
    });

    const formik = useFormik({
        initialValues: {
            name: "",
            surname: "",
            email: "",
            title: "",
            message: "",
        },
        validationSchema: validationSchema,
        onSubmit: (_, { resetForm }) => {
            if (formRef.current) {
                emailjs
                    .sendForm(
                        "service_ii7rczr",
                        "template_5swurkr",
                        formRef.current,
                        "P703uwkrEiCP3caOr"
                    )
                    .then(
                        () => {
                            resetForm();
                            alert("Mesaj uğurla göndərildi!");
                        },
                        () => {
                            alert("Mesaj göndərilmədi");
                        }
                    );
            }
        },
    });

    return (
        <div className="relative z-10 bg-white p-8 md:p-10 rounded-2xl shadow-xl border-2 border-gray-100">
            <form
                ref={formRef}
                onSubmit={formik.handleSubmit}
                autoComplete="off"
                className="space-y-6"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <label className="block text-secondary-700 font-semibold mb-2">{t("contactPage.contactFormName")}</label>
                        <Input
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="rounded-lg border-2 border-gray-200 focus:border-primary hover:border-primary-300"
                            size="large"
                        />
                        {formik.touched.name && formik.errors.name && (
                            <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
                        )}
                    </div>
                    <div>
                        <label className="block text-secondary-700 font-semibold mb-2">{t("contactPage.contactFormSurname")}</label>
                        <Input
                            name="surname"
                            value={formik.values.surname}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="rounded-lg border-2 border-gray-200 focus:border-primary hover:border-primary-300"
                            size="large"
                        />
                        {formik.touched.surname && formik.errors.surname && (
                            <div className="text-red-500 text-sm mt-1">{formik.errors.surname}</div>
                        )}
                    </div>
                </div>
                <div className="flex flex-col space-y-5">
                    <div>
                        <label className="block text-secondary-700 font-semibold mb-2">{t("contactPage.contactFormEmail")}</label>
                        <Input
                            name="email"
                            type="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="rounded-lg border-2 border-gray-200 focus:border-primary hover:border-primary-300"
                            size="large"
                        />
                        {formik.touched.email && formik.errors.email && (
                            <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
                        )}
                    </div>
                    <div>
                        <label className="block text-secondary-700 font-semibold mb-2">{t("contactPage.contactFormTitle")}</label>
                        <Input
                            name="title"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="rounded-lg border-2 border-gray-200 focus:border-primary hover:border-primary-300"
                            size="large"
                        />
                        {formik.touched.title && formik.errors.title && (
                            <div className="text-red-500 text-sm mt-1">{formik.errors.title}</div>
                        )}
                    </div>
                    <div>
                        <label className="block text-secondary-700 font-semibold mb-2">{t("contactPage.contactFormMessage")}</label>
                        <Input.TextArea
                            name="message"
                            rows={4}
                            value={formik.values.message}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="rounded-lg border-2 border-gray-200 focus:border-primary hover:border-primary-300"
                        />
                        {formik.touched.message && formik.errors.message && (
                            <div className="text-red-500 text-sm mt-1">{formik.errors.message}</div>
                        )}
                    </div>
                </div>
                <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    className="w-full md:w-auto"
                    style={{ backgroundColor: "#2bb80b", color: "#FFFFFF", borderRadius: "0.75rem", fontWeight: "600", padding: "0.75rem 2rem", height: "auto" }}
                >
                    {t("contactPage.contactFormButton")}
                </Button>
            </form>
        </div>
    );
};

export default ContactUsForm;