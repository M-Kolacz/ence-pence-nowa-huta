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
import { ContactFormSchema, toasts } from "./contact-form.helpers";
import { sendEmailServerAction, Response } from "./contact-form.action";
import { useActionState } from "react";

const getFormStatus = (isPending: boolean, response: Response) => {
  if (isPending) return "loading";
  if (response === "email-sent" && !isPending) return "success";
  if (response === "email-failed" && !isPending) return "error";
  return "idle";
};

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
    const formStatus = getFormStatus(isPending, formState?.response);
    if (formStatus === "idle") return;

    toast[formStatus](toasts[formStatus].title, {
      description: toasts[formStatus].description,
    });
  }, [formState?.response, isPending]);

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
