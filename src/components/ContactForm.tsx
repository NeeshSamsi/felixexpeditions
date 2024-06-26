"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { contactFormSchema } from "@/lib/schemas"
import { send } from "@/actions/contact-form"
import { cn } from "@/lib/utils"

import { useState } from "react"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import Icon from "./Icon"
import Text from "./Text"

export default function ContactForm() {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  const [submitting, setSubmitting] = useState(false)
  const [confirmation, setConfirmation] = useState<string | undefined>(
    undefined,
  )

  async function onSubmit(values: z.infer<typeof contactFormSchema>) {
    setSubmitting(true)
    const res = await send(values)

    if (res.success) {
      setSubmitting(false)
      form.reset()
      setConfirmation(res.message)
      setTimeout(() => setConfirmation(undefined), 5000)
    } else {
      setSubmitting(false)
      setConfirmation(res.message)
      setTimeout(() => setConfirmation(undefined), 5000)
    }
  }

  const textStyles = "text-base lg:text-lg 2xl:text-xl"

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-8 space-y-4 md:space-y-8"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={cn(textStyles)}>Full Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Your full name..."
                  type="text"
                  {...field}
                  className={cn(textStyles, "placeholder:font-light")}
                />
              </FormControl>
              <FormMessage className={cn(textStyles)} />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={cn(textStyles)}>Email Address</FormLabel>
              <FormControl>
                <Input
                  placeholder="Your email address..."
                  type="email"
                  {...field}
                  className={cn(textStyles, "placeholder:font-light")}
                />
              </FormControl>
              <FormMessage className={cn(textStyles)} />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={cn(textStyles)}>Bio</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter your message here"
                  className={cn(
                    textStyles,
                    "resize-none placeholder:font-light",
                  )}
                  {...field}
                />
              </FormControl>
              <FormMessage className={cn(textStyles)} />
            </FormItem>
          )}
        />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
          <Button
            type="submit"
            disabled={submitting}
            className={cn(textStyles, "group flex items-center gap-2")}
          >
            {submitting ? (
              <span>Sending message</span>
            ) : (
              <span>Send message</span>
            )}
            {submitting ? (
              <Icon name="loader-circle" size={20} className="animate-spin" />
            ) : (
              <Icon
                name="send-horizontal"
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            )}
          </Button>

          {confirmation && <Text size="base">{confirmation}</Text>}
        </div>
      </form>
    </Form>
  )
}
