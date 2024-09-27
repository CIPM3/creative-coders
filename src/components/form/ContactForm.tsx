import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PrimaryButton from "@components/button/primaryButton";
import FormInput from "@components/inputs/formInput";
import FormTextarea from "@components/inputs/formTextarea";
import emailjs from 'emailjs-com';

const ContactForm = () => {
    // Validaciones con Yup
    const validationSchema = Yup.object({
        nombre: Yup.string().required('El nombre es requerido'),
        email: Yup.string().email('Correo electrónico inválido').required('El correo es requerido'),
        phone: Yup.string().required('El número de teléfono es requerido'),
        message: Yup.string().required('El mensaje es requerido')
    });

    // Configuración de Formik
    const formik = useFormik({
        initialValues: {
            nombre: '',
            email: '',
            phone: '',
            message: ''
        },
        validationSchema,
        onSubmit: (values, { resetForm }) => {
            // Agregar los valores de servicio, plantilla y usuario de EmailJS
            const SERVICE_ID = import.meta.env.PUBLIC_EMAILJS_SERVICE_API;
            const TEMPLATE_ID = import.meta.env.PUBLIC_EMAILJS_TEMPLATE_API;
            const USERID = import.meta.env.PUBLIC_EMAILJS_USERID_API
            try {
                emailjs.send(SERVICE_ID, TEMPLATE_ID, values,USERID);
                resetForm()
                alert("Correo Enviado")
            } catch (error) {
                console.log(error)
            }
        }
    });

    return (
        <div className="w-full md:w-[90%] lg:w-[70%] mx-auto xl:mx-0 xl:w-full h-full lg:max-h-[50vh] xl:max-h-[80vh] overflow-hidden bg-white rounded-lg">
            <div className="w-full py-5 flex bg-creative_orange justify-center">
                <h2 className="text-white text-2xl md:text-4xl font-bold">Cotizar una página web</h2>
            </div>

            <form
                className="w-full h-full gap-y-5 flex items-center flex-col pb-[9vh] md:pb-[10vh] lg:pb-[7vh] xl:pb-[15vh] py-14 px-[4dvw]"
                onSubmit={formik.handleSubmit}
            >
                {/* Nombre */}
                <FormInput
                    title="Nombre"
                    placeholder="Nombre"
                    name="nombre"
                    value={formik.values.nombre}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    onError={formik.errors.nombre}
                />

                {/* Correo */}
                <FormInput
                    title="Correo electrónico"
                    placeholder="Correo electrónico"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    onError={formik.errors.email}
                />

                {/* Teléfono */}
                <FormInput
                    title="Número de teléfono"
                    placeholder="Número de teléfono"
                    name="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    onError={formik.errors.phone}
                />

                {/* Mensaje */}
                <FormTextarea
                    title="Mensaje"
                    placeholder="Mensaje"
                    name="message"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    onError={formik.errors.message}
                />

                {/* Botón Enviar */}
                <PrimaryButton onClick={() => { }} title="Enviar" type="submit" />
            </form>
        </div>
    );
};

export default ContactForm;
