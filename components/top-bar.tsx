import { Phone, MessageCircle, MapPin } from "lucide-react"

export function TopBar() {
  return (
    <div className="bg-primary text-primary-foreground py-2.5 px-4 text-sm">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">আমাদের যে কোন পণ্য অর্ডার করতে কল বা</span>
            <span className="sm:hidden">ঢাকায় ২৪ ঘন্টায় ডেলিভারি</span>
          </div>
        </div>
        <div className="flex items-center gap-4 flex-wrap">
          <a
            href="https://wa.me/8801234567890"
            className="flex items-center gap-1.5 hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            <span>09642922922</span>
          </a>
          <a href="tel:09642922922" className="flex items-center gap-1.5 hover:opacity-90 transition-opacity">
            <Phone className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">কল করুন:</span>
            <span>09642-922922</span>
          </a>
        </div>
      </div>
    </div>
  )
}
