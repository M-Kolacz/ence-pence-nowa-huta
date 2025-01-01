"use server";

import { ContactFormSchema, sendEmail } from "./contact-form.helpers";
import { parseWithZod } from "@conform-to/zod";

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

  const response = await sendEmail(submission.value);

  return {
    status: response.ok ? "email-sent" : "email-failed",
  } as const;
};
