"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "~/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "~/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Checkbox } from "~/components/ui/checkbox";
import ErrorIcon from "~~/svg/error.svg";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "~/components/ui/input-otp";
import { Button } from "~/components/ui/button";
import { cn } from "../_utils/twMerge";
import Spinner from "~~/svg/spinner.svg";
import Link from "next/link";
import Wycieczka from "~~/svg/wycieczka.svg";
import { useLocale, useTranslations } from "next-intl";
// import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";

const FormSchema = z.object({
  firstName: z.string().min(2, { message: "Form.firstNameRequired" }),
  lastName: z.string().min(2, { message: "Form.lastNameRequired" }),
  email: z
    .string()
    .min(1, { message: "Form.emailRequired" })
    .regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, {
      message: "Form.emailCustom",
    }),
  // trip: z.string().min(1, { message: "Form.tripRequired" }),
  birthDate: z
    .string()
    .min(8, { message: "Form.birthDateRequired" })
    .refine(
      (value) => {
        const day = value?.slice(0, 2);
        return +day > 0 && +day <= 31;
      },
      {
        message: "Form.dayCustom",
      },
    )
    .refine(
      (value) => {
        const month = value?.slice(2, 4);
        return +month <= 12 && +month > 0;
      },
      {
        message: "Form.monthCustom",
      },
    )
    .refine(
      (value) => {
        const year = value?.slice(4, 8);
        return +year <= 2023 && +year >= 1900;
      },
      {
        message: "Form.yearCustom",
      },
    ),
  consent: z.boolean().refine((val) => val === true, {
    message: "Form.consentRequired",
  }),
  consent2: z.boolean().refine((val) => val === true, {
    message: "Form.consent2Required",
  }),
});

const ErrorMessage = ({ error }: { error: string }) => {
  const t = useTranslations();
  return (
    <span className="md:text-base mt-2 flex items-center gap-2 text-left text-sm leading-tight text-red">
      <div className="-mt-px">
        <ErrorIcon />
      </div>
      {t(error)}
    </span>
  );
};

const Formularz = () => {
  const [status, setStatus] = useState("idle");
  const [isFocused, setIsFocused] = useState(false);
  const t = useTranslations();
  const locale = useLocale();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      birthDate: "",
      consent: false,
      consent2: false,
      // trip: "",
    },
  });

  async function onSubmit(values: z.infer<typeof FormSchema>) {
    try {
      setStatus("loading");
      form.clearErrors();
      // if (values?.trip === "03.08") {
      //   setStatus("success2");
      //   return;
      // }
      const res = await fetch("/api", {
        method: "POST",
        headers: {
          accept: "application/json",
        },
        body: JSON.stringify({
          ...values,
          locale,
        }),
      });
      const resData = (await res.json()) as { code: number; message: string };
      if (resData?.code !== 1) {
        setStatus("error");
      } else {
        setStatus("success2");
      }
    } catch (error) {
      setStatus("error");
    }
  }
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mx-auto mt-16 w-full max-w-[1024px]"
          noValidate
        >
          <div className="space-y-[28px] md:flex md:items-center md:gap-6 md:space-y-0 md:[&>div]:flex-1">
            <div>
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="flex flex-col ">
                    <FormLabel className="text-base mb-2 ml-[18px] text-left font-normal text-white">
                      {t("Form.firstName")}*
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        placeholder={t("Form.firstName")}
                        error={form.formState.errors.firstName}
                      ></Input>
                    </FormControl>
                  </FormItem>
                )}
              />
              {form.formState.errors?.firstName?.message && (
                <ErrorMessage
                  error={form.formState.errors?.firstName?.message}
                />
              )}
            </div>
            <div>
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="flex flex-col ">
                    <FormLabel className="text-base mb-2 ml-[18px] text-left font-normal text-white">
                      {t("Form.lastName")}*
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        placeholder={t("Form.lastName")}
                        error={form.formState.errors.lastName}
                      ></Input>
                    </FormControl>
                  </FormItem>
                )}
              />
              {form.formState.errors?.lastName?.message && (
                <ErrorMessage
                  error={form.formState.errors?.lastName?.message}
                />
              )}
            </div>
          </div>
          <div className="mt-[28px] space-y-[28px] md:flex md:items-center md:gap-6 md:space-y-0 md:[&>div]:flex-1">
            <div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-base mb-2 ml-[18px] text-left font-normal text-white">
                      E-mail*
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="E-mail"
                        error={form.formState.errors.email}
                      ></Input>
                    </FormControl>
                  </FormItem>
                )}
              />
              {form.formState.errors?.email?.message && (
                <ErrorMessage error={form.formState.errors?.email?.message} />
              )}
            </div>
            <div>
              <FormField
                control={form.control}
                name="birthDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col items-center justify-center text-center md:items-start md:text-left">
                    <FormLabel className="text-base mb-2 text-left font-normal text-white md:ml-[18px]">
                      {t("Form.birthDate")}
                    </FormLabel>
                    <FormControl>
                      <InputOTP maxLength={8} {...field}>
                        <InputOTPGroup
                          className={cn(
                            "rounded-[12px] px-[18px] ring-[1px] ring-light xl:rounded-[17px]",
                            isFocused && "ring-[2px]",
                          )}
                        >
                          <InputOTPSlot setIsFocused={setIsFocused} index={0} />
                          <InputOTPSlot setIsFocused={setIsFocused} index={1} />
                        </InputOTPGroup>
                        <InputOTPGroup
                          className={cn(
                            "rounded-[12px] px-[18px] ring-[1px] ring-light xl:rounded-[17px]",
                            isFocused && "ring-[2px]",
                          )}
                        >
                          <InputOTPSlot setIsFocused={setIsFocused} index={2} />
                          <InputOTPSlot setIsFocused={setIsFocused} index={3} />
                        </InputOTPGroup>
                        <InputOTPGroup
                          className={cn(
                            "rounded-[12px] px-[18px] ring-[1px] ring-light xl:rounded-[17px]",
                            isFocused && "ring-[2px]",
                          )}
                        >
                          <InputOTPSlot setIsFocused={setIsFocused} index={4} />
                          <InputOTPSlot setIsFocused={setIsFocused} index={5} />
                          <InputOTPSlot setIsFocused={setIsFocused} index={6} />
                          <InputOTPSlot setIsFocused={setIsFocused} index={7} />
                        </InputOTPGroup>
                      </InputOTP>
                    </FormControl>
                  </FormItem>
                )}
              />
              {form.formState.errors?.birthDate?.message && (
                <ErrorMessage
                  error={form.formState.errors?.birthDate?.message}
                />
              )}
            </div>
          </div>
          {/* <div className="pt-16">
            <FormField
              control={form.control}
              name="trip"
              render={({ field }) => (
                <FormItem className="space-y-3 md:flex md:items-center md:justify-between md:gap-10 md:space-y-0">
                  <FormLabel className="text-center text-xl font-normal text-white lg:whitespace-nowrap">
                    {t("Form.radioDate")}
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col flex-wrap items-center justify-center space-y-[48px] pt-[60px] md:flex-row md:items-center md:space-y-0 md:pt-0"
                    >
                      <FormItem className="flex w-[150px] items-center space-y-0">
                        <FormControl>
                          <RadioGroupItem value="27.07" />
                        </FormControl>
                        <FormLabel className="pl-5 text-lg font-normal text-white">
                          27.07
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex w-[150px] items-center space-y-0">
                        <FormControl>
                          <RadioGroupItem value="03.08" />
                        </FormControl>
                        <FormLabel className="whitespace-nowrap pl-5 text-lg font-normal text-white">
                          03.08 (DE)
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                </FormItem>
              )}
            />
            {form.formState.errors?.trip?.message && (
              <ErrorMessage error={form.formState.errors?.trip?.message} />
            )}
          </div> */}
          <p className="text-base pt-16 text-left text-white">
            {t("Form.required")}
          </p>
          <div className="mt-10">
            <FormField
              control={form.control}
              name="consent"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="pl-2 text-left leading-[1.15] text-white">
                    <FormLabel className="text-[12px] font-normal xl:text-sm">
                      {t("Form.consent")}
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />
            {form.formState.errors?.consent?.message && (
              <ErrorMessage error={form.formState.errors?.consent?.message} />
            )}
          </div>
          <div className="mt-4">
            <FormField
              control={form.control}
              name="consent2"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="pl-2 text-left leading-[1.15] text-white">
                    <FormLabel className="text-[12px] font-normal xl:text-sm">
                      {t("Form.terms1")}{" "}
                      {/* <Link
                        className="underline"
                        href="/pdf/Regulamin.pdf"
                        target="_blank"
                      >
                        Regulamin
                      </Link>
                      {" "}oraz{" "} */}
                      <Link
                        className="underline"
                        href={
                          locale === "pl"
                            ? "/pdf/Regulamin-wycieczka-z-przewodnikiem.pdf"
                            : " /pdf/Regulamin-wycieczka-z-przewodnikiem-de.pdf"
                        }
                        target="_blank"
                      >
                        {t("Form.terms2")}{" "}
                      </Link>
                      {t("Form.terms3")}
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />
            {form.formState.errors?.consent2?.message && (
              <ErrorMessage error={form.formState.errors?.consent2?.message} />
            )}
          </div>
          <Button
            className={cn(
              "relative mt-[46px] h-16 w-[305px] rounded-[10px] bg-light text-lg font-light text-dark hover:bg-green hover:text-light disabled:bg-[#E6E6E6] disabled:text-[#848484] xl:mt-[100px]",
              status === "loading" && "pointer-events-none",
            )}
          >
            <span
              className={cn(
                "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition",
                status === "loading" && "left-[45%]",
              )}
            >
              {t("Form.btn")}
            </span>
            <Spinner
              className={cn(
                "absolute right-7 top-1/2 -translate-y-1/2 stroke-dark opacity-0 transition",
                status === "loading" && "opacity-100",
              )}
            />
          </Button>
        </form>
      </Form>
      {status === "error" && (
        <div className="fixed left-1/2 top-1/2 z-10 flex h-screen w-screen -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center bg-red">
          <Wycieczka className="stroke-red-500 absolute left-1/2 top-1/3 z-20 w-[calc(100%_-_30px)] max-w-[500px] -translate-x-1/2 -translate-y-1/2 md:top-1/2 xl:max-w-[700px] 1440:max-w-[772px]" />
          <div className="spacer z-20 max-w-[1024px] xl:max-w-[1216px]">
            <h1 className="flex flex-col gap-5 text-3xl font-bold text-white xl:block xl:text-4xl">
              Ooops,{" "}
              <span className="text-xl font-bold text-white xl:text-4xl">
                {t("Form.error1")}
              </span>
            </h1>
            <p className="mt-[68px] text-md font-light text-white xl:text-2xl">
              {t("Form.error2")}
            </p>
            <Button
              onClick={() => {
                setStatus("idle");
                form.reset();
              }}
              className="mt-[54px] h-16 w-[305px] rounded-[10px] bg-light text-lg font-light text-dark hover:bg-green hover:text-light disabled:bg-[#E6E6E6] disabled:text-[#848484] xl:mt-[66px]"
            >
              <span>Ok</span>
            </Button>
          </div>
        </div>
      )}
      {status === "success" && (
        <div className="fixed left-1/2 top-1/2 z-10 flex h-screen w-screen -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center bg-dark">
          <Wycieczka className="stroke-red-500 absolute left-1/2 top-1/2 z-20 w-[calc(100%_-_100px)] max-w-[500px] -translate-x-1/2 -translate-y-1/2 md:top-1/2 xl:max-w-[700px] 1440:max-w-[772px]" />
          <div className="spacer z-20 max-w-[1024px] xl:max-w-[1216px]">
            <h1 className="flex flex-col gap-5 text-xl font-bold text-white md:text-2xl xl:block xl:text-3xl">
              {/* Dziękujemy{" "} */}
              {/* Dzień dobry,{" "} */}
              <span className="font-bold text-white">{t("Form.success")}</span>
            </h1>
            {/* <p className="mt-[10px] text-sm font-light leading-tight text-white sm:mt-[20px] lg:text-md xl:text-lg">
              Zgodnie z regulaminem limit osób na każdej wycieczce wynosi 15.
              Wpisujemy Pana/Panią na listę rezerwową i zobowiązujemy się
              poinformować o wolnym miejscu, jeśli takie się pojawi.
              Jednocześnie informujemy, że 29.06.2024, o godz. 9.00 mogą Państwo
              wziąć udział w wycieczce. Informujemy jednak, że opiekun wycieczki
              nie bierze odpowiedzialności za Państwa obecność.
            </p>
            <p className="mt-5 text-sm font-light leading-tight text-white lg:text-md xl:text-lg">
              Przepraszamy za zaistniałą sytuację i zapraszamy do zapisów na
              kolejne Wycieczki z Przewodnikiem!
            </p>
            <p className="mt-5 text-sm font-light leading-tight text-white lg:text-md xl:text-lg">
              Terminy wycieczek:
              <br />
              <span>
                06.07.2024 r (DE), 13.07.2024 r, 27.07.2024 r, 03.08.2024 r
                (DE), 10.08.2024 r, 24.08.2024 r
              </span>
            </p> */}
            <Button
              onClick={() => {
                setStatus("idle");
                form.reset();
              }}
              className="mt-[20px] h-12 w-[305px] rounded-[10px] bg-light text-md font-light text-dark hover:bg-green hover:text-light disabled:bg-[#E6E6E6] disabled:text-[#848484] lg:mt-[40px] lg:h-16 lg:text-lg xl:mt-[66px]"
            >
              <span>Ok</span>
            </Button>
          </div>
        </div>
      )}
      {status === "success2" && (
        <div className="fixed left-1/2 top-1/2 z-10 flex h-screen w-screen -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center bg-dark">
          <Wycieczka className="stroke-red-500 absolute left-1/2 top-1/2 z-20 w-[calc(100%_-_100px)] max-w-[500px] -translate-x-1/2 -translate-y-1/2 md:top-1/2 xl:max-w-[700px] 1440:max-w-[772px]" />
          <div className="spacer z-20 max-w-[1024px] xl:max-w-[1216px]">
            <h1 className="flex flex-col gap-5 text-xl font-bold text-white md:text-2xl xl:block xl:text-3xl">
              Dzień dobry,{" "}
              {/* <span className="font-bold text-white">{t("Form.success")}</span> */}
            </h1>
            <p className="mt-[10px] text-sm font-light leading-tight text-white sm:mt-[20px] lg:text-md xl:text-lg">
              Zgodnie z regulaminem limit osób na każdej wycieczce wynosi 15.
              Wpisujemy Pana/Panią na listę rezerwową i zobowiązujemy się
              poinformować o wolnym miejscu, jeśli takie się pojawi.
              Jednocześnie informujemy, że 24.08.2024, o godz. 9.00 mogą Państwo
              wziąć udział w wycieczce. Informujemy jednak, że opiekun wycieczki
              nie bierze odpowiedzialności za Państwa obecność.
            </p>
            <p className="mt-5 text-sm font-light leading-tight text-white lg:text-md xl:text-lg">
              Przepraszamy za zaistniałą sytuację i zapraszamy do zapisów na
              kolejne Wycieczki z Przewodnikiem!
            </p>
            <Button
              onClick={() => {
                setStatus("idle");
                form.reset();
              }}
              className="mt-[20px] h-12 w-[305px] rounded-[10px] bg-light text-md font-light text-dark hover:bg-green hover:text-light disabled:bg-[#E6E6E6] disabled:text-[#848484] lg:mt-[40px] lg:h-16 lg:text-lg xl:mt-[66px]"
            >
              <span>Ok</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Formularz;
