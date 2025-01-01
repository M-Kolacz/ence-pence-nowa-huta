import emailjs from "@emailjs/nodejs";
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
  return await emailjs.send(
    process.env.EMAIL_SERVICE_ID,
    process.env.EMAIL_TEMPLATE_ID,
    data,
    {
      publicKey: process.env.EMAIL_PUBLIC_KEY,
      privateKey: process.env.EMAIL_PRIVATE_KEY,
    }
  );
};
