import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRandomElementsFromArray<T>(array: T[], count: number): T[] {
  const elements = [];
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * array.length);
    elements.push(array.splice(randomIndex, 1)[0]);
  }
  return elements;
}
