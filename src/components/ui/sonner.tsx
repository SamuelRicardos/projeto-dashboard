"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--success-bg": "#3b82f6", // Azul para sucesso
          "--success-text": "#ffffff",
          "--error-bg": "#ef4444", // Vermelho para erro
          "--error-text": "#ffffff"
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
