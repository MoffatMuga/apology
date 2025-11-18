import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex rounded-full justify-center items-center whitespace-nowrap font-semibold ring-offset-white ",
  {
    variants: {
      variant: {
        default: "bg-[var(--color-pink)] text-[var(--colour-background)]",
        primary: "bg-[var(--color-pink)] text-white",
        outline: "border border-[var(--color-pink)] bg-transparent text-[var(--color-pink)] hover:bg-[var(--color-pink)] hover:text-[var(--colour-background)]" 

      },
      size: {
        default: "h-[44px] px-6",
        md:"h-[48px] px-6",
        lg: "h-1[56px] px-8 text-sm uppercase tracking-[2px]",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props} />
  );
}

export { Button, buttonVariants }
