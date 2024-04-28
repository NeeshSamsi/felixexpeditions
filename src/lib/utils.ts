import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type DateStyle = Intl.DateTimeFormatOptions["dateStyle"]

export function formatDate(date: Date, dateStyle: DateStyle) {
  const formatter = new Intl.DateTimeFormat("en", { dateStyle })

  return formatter.format(date)
}
