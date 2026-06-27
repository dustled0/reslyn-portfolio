import FadeIn from "./FadeIn";

const WHATSAPP_NUMBER = "639664833781";
const WA_MESSAGE = "Hi Reslyn! I found your portfolio and I'm interested in working with you.";

const contacts = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    ),
    label: "WhatsApp",
    value: "+63 966 483 3781",
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`,
    hoverColor: "hover:border-green-500",
    iconColor: "text-green-400",
    badge: "Fastest Response",
    external: true,
  },
  {
    icon: <span className="text-2xl">✉️</span>,
    label: "Email",
    value: "aera191421@gmail.com",
    href: "mailto:aera191421@gmail.com",
    hoverColor: "hover:border-amber-500",
    iconColor: "text-amber-400",
    badge: null,
    external: false,
  },
  {
    icon: <span className="text-2xl">📱</span>,
    label: "Phone",
    value: "+63 966 483 3781",
    href: "tel:+639664833781",
    hoverColor: "hover:border-emerald-700",
    iconColor: "text-emerald-300",
    badge: null,
    external: false,
  },
];

const profiles = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/reslyn-dequito",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: "hover:bg-blue-600",
  },
  {
    label: "Upwork",
    href: "https://www.upwork.com/freelancers/reslyn-dequito",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.545-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
      </svg>
    ),
    color: "hover:bg-amber-600",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-emerald-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-amber-400" />
            <span className="text-amber-400 text-sm font-medium tracking-widest uppercase">
              Get In Touch
            </span>
            <div className="w-8 h-px bg-amber-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-emerald-300 max-w-xl mx-auto">
            I&apos;m open to ESL teaching roles, customer service positions, and remote
            opportunities. Feel free to reach out via any channel below.
          </p>
        </FadeIn>

        <div className="max-w-2xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {contacts.map((c, i) => (
              <FadeIn key={c.label} delay={i * 0.1}>
                <a
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener noreferrer" : undefined}
                  className={`relative bg-emerald-900 border border-emerald-800 ${c.hoverColor} rounded-2xl p-6 text-center transition-all group flex flex-col items-center h-full`}
                >
                  {c.badge && (
                    <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs font-bold px-3 py-0.5 rounded-full whitespace-nowrap">
                      {c.badge}
                    </span>
                  )}
                  <div className={`mb-3 ${c.iconColor}`}>{c.icon}</div>
                  <div className="text-emerald-500 text-xs mb-1">{c.label}</div>
                  <div className="text-white text-sm font-medium group-hover:text-amber-400 transition-colors break-all">
                    {c.value}
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center mb-8">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white font-semibold px-10 py-4 rounded-xl text-lg transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Start a Conversation
            </a>
          </FadeIn>

          <FadeIn className="flex justify-center gap-3">
            {profiles.map((p) => (
              <a
                key={p.label}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 bg-emerald-900 ${p.color} border border-emerald-800 text-emerald-200 hover:text-white font-medium px-5 py-2.5 rounded-xl text-sm transition-all`}
              >
                {p.icon}
                {p.label}
              </a>
            ))}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
