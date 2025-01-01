import { z } from "zod";

export const ContactFormSchema = z.object({
  email: z
    .string({ message: "Pole jest wymagane" })
    .email({ message: "Podany adres email jest nieprawidłowy" }),
  topic: z.string({ message: "Pole jest wymagane" }).min(2).max(50),
  message: z.string({ message: "Pole jest wymagane" }).min(10).max(500),
});

export const sendEmail = async (data: {
  email: string;
  message: string;
  topic: string;
}) => {
  return await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    body: JSON.stringify({
      service_id: process.env.EMAIL_SERVICE_ID,
      template_id: process.env.EMAIL_TEMPLATE_ID,
      user_id: process.env.EMAIL_PUBLIC_KEY,
      accessToken: process.env.EMAIL_PRIVATE_KEY,
      template_params: data,
    }),
    headers: { "Content-Type": "application/json" },
  });
};
