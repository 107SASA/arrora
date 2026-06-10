'use client'
import { WhatsAppIcon } from '@/components/ui/Icons'

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919123650220?text=Hi%2C%20I%20would%20like%20a%20free%20consultation"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="rsp-float-wa"
    >
      <WhatsAppIcon size={28} color="white" />
    </a>
  )
}
