"use client";

import { motion } from "framer-motion";
import { useForm as useFormspree, ValidationError } from "@formspree/react";
import { useForm as useReactHookForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { ButtonWithGlow } from "@/components/ui/button-with-glow";
import { CardWithTrail } from "@/components/ui/card-with-trail";

const formSchema = z.object({
    name: z
        .string()
        .min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
    email: z
        .string()
        .email({ message: "Ingrese un correo electrónico válido." }),
    message: z
        .string()
        .min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
});

interface FormData {
    name: string;
    email: string;
    message: string;
}

const socialLinks = [
    {
        name: "github.com/marc7hedev",
        icon: Github,
        url: "https://github.com/marc7hedev",
    },
    {
        name: "linkedin.com/in/marco-rangel-it",
        icon: Linkedin,
        url: "https://www.linkedin.com/in/marco-rangel-it/",
    },
    {
        name: "rangelmarco1994@gmail.com",
        icon: Mail,
        url: "mailto:rangelmarco1994@gmail.com",
    },
];

export function ContactSection() {
    const [formspreeState, formspreeSubmit] = useFormspree("mdkaaqdr");
    const { toast } = useToast();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useReactHookForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormData) => {
        try {
            await formspreeSubmit({
                name: data.name,
                email: data.email,
                message: data.message,
            } as const);

            if (formspreeState.succeeded) {
                toast({
                    title: "Mensaje enviado",
                    description:
                        "Gracias por tu mensaje. Te contactaré pronto.",
                });
                reset();
            }
        } catch {
            toast({
                title: "Error",
                description:
                    "Hubo un problema al enviar el mensaje. Por favor, intenta de nuevo.",
                variant: "destructive",
            });
        }
    };

    return (
        <section id="contact" className="py-20">
            <div className="container max-w-6xl mx-auto px-4">
                <AnimatedSection>
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Contacto
                    </h2>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Formulario de contacto */}
                    <AnimatedSection delay={0.2}>
                        <motion.div
                            whileHover={{ y: -5 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <CardWithTrail trailColor="bg-gradient-to-r from-pink-400 via-fuchsia-500 to-pink-400">
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="font-semibold tracking-tight text-xl">Envíame un mensaje</h3>
                                        <p className="text-muted-foreground text-sm">
                                            Completa el formulario y me pondré en contacto contigo lo antes posible.
                                        </p>
                                    </div>
                                    <form
                                        onSubmit={handleSubmit(onSubmit)}
                                        className="space-y-4"
                                    >
                                        <div className="space-y-2">
                                            <Input
                                                placeholder="Nombre"
                                                {...register("name")}
                                                className="transition-all focus:scale-[1.01]"
                                            />
                                            {errors.name && (
                                                <p className="text-red-500 text-sm mt-1">
                                                    {errors.name.message}
                                                </p>
                                            )}
                                            <ValidationError
                                                prefix="Name"
                                                field="name"
                                                errors={formspreeState.errors}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Input
                                                type="email"
                                                placeholder="Email"
                                                {...register("email")}
                                                className="transition-all focus:scale-[1.01]"
                                            />
                                            {errors.email && (
                                                <p className="text-red-500 text-sm mt-1">
                                                    {errors.email.message}
                                                </p>
                                            )}
                                            <ValidationError
                                                prefix="Email"
                                                field="email"
                                                errors={formspreeState.errors}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Textarea
                                                placeholder="Mensaje"
                                                {...register("message")}
                                                className="min-h-[150px] transition-all focus:scale-[1.01]"
                                            />
                                            {errors.message && (
                                                <p className="text-red-500 text-sm mt-1">
                                                    {errors.message.message}
                                                </p>
                                            )}
                                            <ValidationError
                                                prefix="Message"
                                                field="message"
                                                errors={formspreeState.errors}
                                            />
                                        </div>
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <ButtonWithGlow
                                                type="submit"
                                                disabled={formspreeState.submitting}
                                                className="w-full"
                                            >
                                                <Send className="mr-2 h-4 w-4" />
                                                {formspreeState.submitting
                                                    ? "Enviando..."
                                                    : "Enviar mensaje"}
                                            </ButtonWithGlow>
                                        </motion.div>
                                    </form>
                                </div>
                            </CardWithTrail>
                        </motion.div>
                    </AnimatedSection>

                    {/* Información de contacto */}
                    <AnimatedSection delay={0.4}>
                        <motion.div
                            whileHover={{ y: -5 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <CardWithTrail trailColor="bg-gradient-to-l from-fuchsia-400 via-pink-500 to-fuchsia-400">
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="font-semibold tracking-tight text-xl">Conecta conmigo</h3>
                                        <p className="text-muted-foreground text-sm">
                                            Encuéntrame en las siguientes plataformas o envíame un mensaje directo.
                                        </p>
                                    </div>
                                    <div className="space-y-4">
                                        {socialLinks.map((link) => (
                                            <motion.div
                                                key={link.name}
                                                whileHover={{ x: 5 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <a
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center p-3 rounded-lg hover:bg-muted transition-colors"
                                                >
                                                    <link.icon className="h-5 w-5 mr-3" />
                                                    <span>{link.name}</span>
                                                </a>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <div className="mt-8 space-y-6 bg-muted/50 p-6 rounded-lg">
                                        <div>
                                            <h3 className="font-semibold mb-2">Ubicación</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Guanajuato, México
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-2">Horario</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Lunes a Sábado
                                                <br />
                                                8:00 AM - 10:00 PM
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CardWithTrail>
                        </motion.div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
