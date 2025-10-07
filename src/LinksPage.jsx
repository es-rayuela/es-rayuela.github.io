import React from "react";
import bgAbout from "@/assets/img/bg_about.svg";

// Página minimalista de Links, sem cabeçalho/rodapé, mobile-first
export default function LinksPage() {
  return (
    <div
      className="bg-[#242736] min-h-screen w-full flex items-center justify-center px-6 py-10 text-[#242736]"
      style={{
        backgroundImage: `url(${bgAbout})`,
        backgroundSize: "cover",
        backgroundPosition: "180% center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <main
        className="w-full h-full md:h-auto md:max-w-md mx-auto flex flex-col items-center gap-6 bg-[#242736] rounded-2xl p-6 shadow-lg"
        role="main"
        aria-labelledby="links-title"
      >
        <img
          src="/logo_rayuela_h.png"
          alt="Rayuela Logo"
          className="h-12 object-contain"
          loading="eager"
          fetchPriority="high"
        />
        <h1 id="links-title" className="sr-only">
          Links úteis Rayuela
        </h1>
        <nav className="w-full flex flex-col gap-4" aria-label="Links principais">
          <LinkButton
            href="/#services"
            label="Conheça as formas de aprender espanhol na Rayuela: e escolha a que faz mais sentido pra você!"
            bg="#ed4c87"
            hover="#d54479"
          />
          <LinkButton
            href="https://wa.me/+55041988162747"
            label="Quer tirar dúvidas ou começar agora? Me chama no WhatsApp!"
            bg="#6ca7b7"
            hover="#568592"
            external
          />
          <LinkButton
            href="https://www.youtube.com/playlist?list=PLl9yiqWKeiN3mPYUwl9esxDgmqkAfctzr&si=Fv1QN7fJtPR8aPrN"
            label="🎶 Imersão começa aqui: ouça a playlist que preparei pra você!"
            bg="#f2ad5e"
            hover="#d99b54"
            external
          />
        </nav>
        <p className="text-xs opacity-80 text-center text-white">
          Toque em um dos botões para acessar.
        </p>
      </main>
    </div>
  );
}

function LinkButton({ href, label, bg, hover, external = false }) {
  const commonProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <a
      href={href}
      {...commonProps}
      className={`block w-full text-center text-white font-semibold py-4 px-6 rounded-xl shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-black/20 transition-colors`}
      style={{ backgroundColor: bg }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hover)}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = bg)}
      aria-label={label}
    >
      <span className="text-lg md:text-xl">{label}</span>
    </a>
  );
}
