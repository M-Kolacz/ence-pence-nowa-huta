"use server";
import { ContactFormSchema, sendEmail } from "./contact-form.helpers";
import { parseWithZod } from "@conform-to/zod";
import * as Sentry from "@sentry/nextjs";

export type FormResponse = Awaited<
  ReturnType<typeof sendEmailServerAction>
>["response"];

export const sendEmailServerAction = async (
  prevState: unknown,
  formData: FormData
) => {
  const submission = parseWithZod(formData, {
    schema: ContactFormSchema,
  });

  if (submission.status !== "success") {
    return {
      result: submission.reply(),
    };
  }

  const response = await sendEmail(submission.value).catch((error) => {
    Sentry.captureException(error);
    console.error("🛑 Error occured while sending email", error);
    return { ok: false };
  });

  if (!response.ok) {
    return {
      response: "email-failed",
      result: submission.reply({
        formErrors: [
          "Nie udało się wysłać wiadomości do żłobka. Spróbuj ponownie za chwilę. W razie dalszych trudności prosimy o kontakt bezpośredni na adres zlobekhuta@gmail.com.",
        ],
      }),
    } as const;
  }

  return {
    response: "email-sent",
  } as const;
};
