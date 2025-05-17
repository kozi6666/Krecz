import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";
import { env } from "~/env";
import { z } from "zod";
import { db } from "~/server/db";
import { posts } from "~/server/db/schema";

sgMail.setApiKey(env.SENDGRID_API_KEY);

const FormSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z
    .string()
    .min(1)
    .regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
  birthDate: z
    .string()
    .min(8)
    .refine((value) => {
      const day = value?.slice(0, 2);
      return +day > 0 && +day <= 31;
    })
    .refine((value) => {
      const month = value?.slice(2, 4);
      return +month <= 12 && +month > 0;
    })
    .refine((value) => {
      const year = value?.slice(4, 8);
      return +year <= 2023 && +year >= 1900;
    }),
  consent: z.boolean().refine((val) => val === true),
  consent2: z.boolean().refine((val) => val === true),
  locale: z.string(),
});

type FormSchema = z.infer<typeof FormSchema>;

export async function POST(req: Request) {
  const body = (await req.json()) as FormSchema;

  if (!FormSchema.safeParse(body).success) {
    return NextResponse.json(
      { message: "Data is invalid", code: 2 },
      { status: 500 },
    );
  }
  try {
    await db.insert(posts).values({
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      birthDate: body.birthDate,
      distance: `przewodnik`,
      locale: "24.08",
      consent: body.consent,
      consent2: body.consent2,
    });
    //Wysyłanie emaila
    // await sgMail.send({
    //   to: body.email,
    //   from: env.SENDGRID_EMAIL_TO,
    //   dynamicTemplateData: {
    //     title: "Przewodnik",
    //   },
    //   templateId: env.SENDGRID_TEMPLATE_ID,
    // });
    return Response.json({ message: "Ok", code: 1 }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error", code: 2 },
      { status: 500 },
    );
  }
}
