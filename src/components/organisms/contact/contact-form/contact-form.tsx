"use client";
import {
  useForm,
  getFormProps,
  getInputProps,
  getTextareaProps,
} from "@conform-to/react";
import { getZodConstraint, parseWithZod } from "@conform-to/zod";
import { useEffect, type ComponentProps } from "react";
import { toast } from "sonner";
import {
  Field,
  TextareaField,
  SubmitButton,
  ErrorList,
} from "#app/components/molecules";
import { Toaster } from "#app/components/molecules";
import { Section } from "#app/components/templates";
import { cn } from "#app/utils/misc.tsx";
import { ContactFormSchema } from "./contact-form.helpers";
import { sendEmailServerAction } from "./contact-form.action";
import { useActionState } from "react";

export const ContactForm = ({
  className,
  ...props
}: ComponentProps<"section">) => {
  const contactFormTitle = "contact-form-title";
  const [formState, action, isPending] = useActionState(
    sendEmailServerAction,
    undefined
  );

  const [form, fields] = useForm({
    id: "contact-form",
    constraint: getZodConstraint(ContactFormSchema),
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: ContactFormSchema });
    },
    lastResult: formState?.result,
    shouldRevalidate: "onBlur",
  });

  useEffect(() => {
    if (isPending) {
      toast.dismiss();
      toast.loading("Wysyłanie wiadomości...", {
        description: "Proces może chwilę potrwać. Dziękujemy za wyrozumiałość.",
      });
    }

    if (formState?.status === "email-sent" && !isPending) {
      toast.dismiss();
      toast.success("Dziękujemy za wiadomość!", {
        description:
          "Twoja wiadomość została pomyślnie wysłana. Skontaktujemy się z Tobą wkrótce.",
      });
    }

    if (formState?.status === "email-failed" && !isPending) {
      toast.dismiss();
      toast.error("Nie udało się wysłać wiadomości.", {
        description: "Przepraszamy za utrudnienia. Spróbuj ponownie za chwilę.",
      });
    }
  }, [formState?.status, isPending]);

  return (
    <Section
      aria-labelledby={contactFormTitle}
      {...props}
      className={cn(
        "z-10 flex flex-col gap-strong rounded-lg bg-secondary-100 p-strong lg:col-start-3 lg:col-end-11",
        className
      )}
    >
      <h2
        className="font-headings text-h2 text-primary-900"
        id={contactFormTitle}
      >
        Napisz do nas wiadomość
      </h2>

      <form action={action} className="flex flex-col" {...getFormProps(form)}>
        <div className="flex flex-col md:flex-row md:gap-subtle">
          <Field
            className="md:w-1/2"
            labelProps={{ children: "Adres e-mail" }}
            inputProps={{
              ...getInputProps(fields.email, { type: "email" }),
            }}
            errors={fields.email.errors}
          />
          <Field
            className="md:w-1/2"
            labelProps={{ children: "Temat wiadomości" }}
            inputProps={{
              ...getInputProps(fields.topic, { type: "text" }),
            }}
            errors={fields.topic.errors}
          />
        </div>
        <TextareaField
          labelProps={{ children: "Twoja wiadomość" }}
          textareaProps={{
            ...getTextareaProps(fields.message),
            placeholder: "Opisz w czym możemy Ci pomóc",
            rows: 8,
          }}
          errors={fields.message.errors}
        />

        <SubmitButton type="submit" className="w-fit">
          Wyślij wiadomość
        </SubmitButton>

        <ErrorList
          errors={form.errors}
          id={form.errorId}
          className="pt-2 max-w-prose"
        />
      </form>
      <Toaster />
    </Section>
  );
};
