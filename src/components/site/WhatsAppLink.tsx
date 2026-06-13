import { type ReactNode } from "react";
import { WHATSAPP_ORDER_URL } from "@/lib/site";
import { trackWaClick } from "@/lib/pixel";

type Props = {
  href?: string;
  className?: string;
  children: ReactNode;
};

export function WhatsAppLink({ href = WHATSAPP_ORDER_URL, className, children }: Props) {
  return (
    <a
      href={href}
      onClick={trackWaClick}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
