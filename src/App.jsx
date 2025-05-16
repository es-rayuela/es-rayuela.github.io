// Site da Rayuela com detalhamento interativo dos serviços e foco em conversão

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaUser, FaUserFriends, FaUsers, FaMoneyBillWave, FaPlusCircle, FaHeadphones, FaBook, FaPhotoVideo, FaRegEnvelope, FaInstagram } from "react-icons/fa";

export default function RayuelaSite() {
  const [selectedService, setSelectedService] = useState("none");

  return (
    <>
      <Header />  
      <main className="font-nunito bg-[#ffffff] text-[#242736]" role="main">
        <Home />
        <About />
        <Method />
        <Journey />
        <Services setSelectedService={setSelectedService} />
        {selectedService === "Curso Regular" && <CourseRegular />}
        {selectedService === "Projeto Personalizado" && <ProjectPersonal />}
        {selectedService === "Mentoria para Autodidatas" && <Mentorship />}
        <Taster />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
      <WhatsappButton />
    </>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Detecta rolagem para alterar a logo
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // muda após 50px de scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e) => {
    const href = e.currentTarget.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false); 
      }
    }
  };
  
  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <>
      <div className={`${scrolled ? "fixed rounded-full top-4 left-4" : "static"} lg:fixed lg:top-4 lg:left-4 z-50 transition-all duration-300 bg-[#6ca7b7] px-4 py-2`}>
        <img
          src={scrolled ? `/logo_rayuela_h.png` : `/logo_rayuela.jpg`}
          alt="Logo Rayuela"
          className={`transition-all duration-300 ${scrolled ? "h-12" : "h-70 mx-auto"}`}
        />
      </div>
      <Button
        onClick={toggleMenu}
        className="fixed top-4 right-4 z-50 bg-[#ed4c87] text-white p-3 rounded-full shadow-lg w-24 h-24"
        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
      >
        {menuOpen ? (
          <span className="text-4xl font-bold">×</span>
        ) : (
          <span className="text-4xl font-bold">☰</span>
        )}
      </Button>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed top-2 right-2 w-96/100 lg:w-1/5 shadow-sm pt-35 pb-20 rounded-lg bg-white text-[#242736] flex flex-col items-center justify-center space-y-6 text-xl z-40"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {[
              { href: "#home", label: "Início" },
              { href: "#about", label: "Sobre" },
              { href: "#method", label: "Abordagem" },
              { href: "#journey", label: "Sua Jornada" },
              { href: "#services", label: "Serviços" },
              { href: "#taster", label: "Experimente" },
              { href: "#testimonials", label: "Depoimentos" },
              { href: "#contact", label: "Contato" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleSmoothScroll}
                className="hover:text-[#ed4c87] transition-colors"

              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function WhatsappButton() {
  return (
    <a
      href="https://wa.me/5548998091771"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 right-4 bottom-4 bg-[#25D366] text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-[#1ebd5a] transition-colors"
      aria-label="Converse no WhatsApp"
    >
      <FaWhatsapp className="text-2xl" />
    </a>
  );
}

function Home() {
  return (
    <section id="home" className="p-6 md:p-12 lg:p-24 text-center bg-[#6ca7b7] text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        >
        <h2 className="text-4xl font-barriecito mb-4">Mais que um curso. Uma travessia.</h2>
        <p className="text-xl max-w-3xl mx-auto">
          Se você chegou aqui, provavelmente sente que precisa de algo a mais com o espanhol. Seja desbloquear a fala, retomar os estudos, ganhar autonomia, ou criar conexão com o idioma e a cultura. Na Rayuela, a gente começa pelo desejo e caminha junto.
        </p>
      </motion.div>
      <div className="bg-home">
        <img src="/src/assets/img/bg_home.svg" alt="bg" aria-label="no-label"/>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="p-6 md:p-12 lg:p-24 bg-white text-[#242736]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        >
        <h2 className="text-3xl font-barriecito text-center text-[#ed4c87] mb-8">A Rayuela</h2>
        <div className="max-w-3xl mx-auto space-y-4 text-lg">
          <p>A Rayuela nasceu da certeza de que aprender espanhol pode ser uma experiência afetiva, artística e transformadora. Inspirada na amarelinha, que brincamos na infância e que dá nome a um romance de Cortázar, a Rayuela é um caminho em espiral, com pulos, fases, descobertas e renascimentos.</p>
          <p>A cada passo da jornada, você se aproxima de uma versão mais conectada de si. A cada aula, você se reconstrói um pouco mais. O espanhol aqui não é fim — é ponte. É voz, identidade e sentido.</p>
          <p>Quem ensina é Bianka: professora licenciada em Letras Espanhol pela UFSC com mérito acadêmico, tradutora, artista e viajante de mundos latinos. Ela traz para as aulas sua experiência na Argentina, na Espanha e em muitos outros cantinhos da língua espanhola. Ensina com beleza, escuta, humor e sensibilidade.</p>
        </div>
      </motion.div>
    </section>
  );
}

function Method() {
  return (
    <section id="method" className="p-6 md:p-12 lg:p-24 bg-[#ed4c87]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 text-lg items-center">
        <div className="lg:col-span-3 space-y-4 bg-[#242736] text-white p-12 rounded-lg">
          <h2 className="text-3xl font-barriecito text-center text-[#ed4c87] mb-8">Como ensinamos</h2>
          <div className="max-w-3xl mx-auto space-y-4 text-lg">
            <p>Ensinamos com presença e escuta. Usamos a metodologia comunicativa, que valoriza a comunicação real desde o primeiro dia. Trabalhamos as quatro habilidades (fala, escuta, leitura e escrita), sempre de forma integrada, personalizada e significativa.</p>
            <p>Todo o conteúdo nasce de dois pilares: o livro de apoio (<em>Gente Hoy</em>) e propostas autorais construídas com base em materiais autênticos — músicas, memes, filmes, redes sociais, notícias, jogos e cultura pop. A gramática aparece quando faz sentido, e o foco é a fluidez, a compreensão, o prazer.</p>
            <p>O resultado? Aulas envolventes, memoráveis e que te transformam por dentro.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section id="journey" className="p-6 md:p-12 lg:p-24 bg-white text-[#242736]">
      <h2 className="text-3xl font-barriecito text-center text-[#6ca7b7] mb-8">Sua Jornada pela Rayuela 🧡</h2>
      <div className="max-w-3xl mx-auto space-y-4 text-lg">
        <p>Cada aluno(a) percorre sua própria Rayuela, mas todos vivem uma experiência que vai muito além da aula ao vivo. Veja o que espera por você:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Antes de começar:</strong> você recebe um documento de onboarding com orientações, expectativas e dicas práticas de como tirar o melhor proveito do curso.</li>
          <li><strong>Durante o curso:</strong> você tem acesso à sua página personalizada no Notion, com materiais da aula, portfólio, feedbacks, espaço para dúvidas, sugestões culturais e até um habit tracker para nutrir o espanhol no dia a dia.</li>
          <li><strong>Ao final:</strong> você recebe um certificado e um presente: um material exclusivo chamado "Como cuidar do seu espanhol a partir de agora".</li>
        </ul>
        <p>Na Rayuela, a jornada é viva, afetiva, divertida e inesquecível. E o melhor: ela é sua. 🏹</p>
      </div>
    </section>
  );
}

function Services() {
  const [selected, setSelected] = useState("Curso Regular");

  const services = [
    {
      title: "Curso Regular",
      description:
        "Para quem busca estrutura e consistência nas aulas, com o livro Gente Hoy e material personalizado.",
      bg: '#ed4c87',
    },
    {
      title: "Projeto Personalizado",
      description:
        "Curso sob medida com base no seu objetivo específico, como viagem, entrevista ou projeto de trabalho.",
      bg: '#6ca7b7',
    },
    {
      title: "Mentoria para Autodidatas",
      description:
        "Estude com autonomia com um plano estruturado e encontros mensais para dúvidas e conversação.",
      bg: '#f2ad5e',
    },
  ];
  const handleSmoothScroll = () => {
    if(window.matchMedia("(max-width: 1024px)").matches) {
      const target = document.querySelector("#services-content");
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };
  return (
    <section id="services" className="p-6 md:p-12 lg:p-24 bg-[#242736] text-white text-center">
      <h2 className="text-3xl font-barriecito text-center text-[#ed4c87] mb-8">
        Serviços Rayuela
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {/* Coluna esquerda com os cards */}
        <div className="space-y-4">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              bg={service.bg}
              isActive={selected === service.title}
              onClick={() => {setSelected(service.title); handleSmoothScroll()}}
            />
          ))}
        </div>

        {/* Coluna direita com o conteúdo detalhado */}
        <div className="lg:col-span-2" id="services-content">
          {selected === "Curso Regular" && <CourseRegular />}
          {selected === "Projeto Personalizado" && <ProjectPersonal />}
          {selected === "Mentoria para Autodidatas" && <Mentorship />}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, description, onClick, isActive, bg }) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer p-6 rounded-lg transition-all shadow-sm bg-[${bg}] text-white shadow-md border-3
        ${isActive ? 'border-white' : 'border-transparent'}
      `}
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
}

function CourseRegular() {
  return (
    <section className="p-6 lg:p-12 bg-white text-[#242736] rounded-lg h-full">
      <h2 className="text-3xl font-barriecito text-center text-[#ed4c87] mb-6">Curso Regular</h2>
      <div className="max-w-3xl mx-auto space-y-4 text-lg">
        <p>Ideal para quem deseja aprender com consistência e estrutura. O curso regular segue o Quadro Comum Europeu de Referência para Línguas (CEFR), com aulas ao vivo que combinam o livro <strong>Gente Hoy</strong>, propostas autorais e muito conteúdo cultural.</p>
        <p>Está disponível em formato individual, dupla ou grupo.</p>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="bg-white border border-[#ed4c87] rounded-xl text-center p-4 gap-0">
            <div>
              <FaUser className="text-3xl text-[#ed4c87] mx-auto mb-1 h-12" />
              <h3 className="text-xl font-semibold mb-2">Individual</h3>
            </div>
            <p>R$400 <br /><span className="text-sm">(4 aulas/mês)</span></p>
            <p className="text-sm">ou</p>
            <p>R$800 <br /><span className="text-sm">(8 aulas/mês)</span></p>
          </Card>
          <Card className="bg-white border border-[#ed4c87] rounded-xl text-center p-4 gap-0">
            <div>
              <FaUserFriends className="text-3xl text-[#ed4c87] mx-auto mb-1 h-12" />
              <h3 className="text-xl font-semibold mb-2">Dupla</h3>
            </div>
            <p>R$650/mês</p>
          </Card>
          <Card className="bg-white border border-[#ed4c87] rounded-xl text-center p-4 gap-0">
            <div>
              <FaUsers className="text-3xl text-[#ed4c87] mx-auto mb-1 h-12" />
              <h3 className="text-xl font-semibold mb-2">Grupo</h3>
            </div>
            <p>R$350/mês <br/>por pessoa</p>
            <p className="text-sm">(4 aulas ao vivo + 4 videoaulas gravadas)</p>
          </Card>
        </div>
      </div>
      <div className="flex justify-center">
        <a
          href="https://wa.me/5548998091771"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#ed4c87] font-barriecito text-white p-4 mt-8 rounded-lg shadow-lg flex items-center justify-center hover:bg-[#d54479] transition-colors"
          aria-label="Converse no WhatsApp"
        >
          <FaWhatsapp className="text-2xl mr-4" /> Inscreva-se!
        </a>
      </div>
    </section>
  );
}

function ProjectPersonal() {
  return (
    <section className="p-6 lg:p-12 bg-white text-[#242736] rounded-lg h-full">
      <h2 className="text-3xl font-barriecito text-center text-[#6ca7b7] mb-6">Projeto Personalizado</h2>
      <div className="max-w-3xl mx-auto space-y-4 text-lg">
        <p>Ideal para quem tem um objetivo tangível com o espanhol: uma viagem, um projeto de trabalho, uma apresentação, uma entrevista ou outra demanda pontual. Aqui, o curso é 100% desenhado por mim com foco na sua necessidade.</p>
        <p>Você aprende o que precisa, no tempo certo, com leveza, profundidade e beleza.</p>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="bg-white border border-[#6ca7b7] rounded-xl text-center p-6 gap-0">
            <div>
              <FaUser className="text-3xl text-[#6ca7b7] mx-auto mb-1 h-12" />
              <h3 className="text-xl font-semibold mb-2">Individual</h3>
            </div>
            <p>R$600 <br/> <span className="text-sm">(4 aulas/mês)</span></p>
            <p className="text-sm">ou</p>
            <p>R$1200 <br/> <span className="text-sm">(8 aulas/mês)</span></p>
          </Card>
          <Card className="bg-white border border-[#6ca7b7] rounded-xl text-center p-6 gap-0">
            <div>
              <FaUserFriends className="text-3xl text-[#6ca7b7] mx-auto mb-1 h-12" />
              <h3 className="text-xl font-semibold mb-2">Dupla</h3>
            </div>
            <p>R$950 <br/> <span className="text-sm">(4 aulas/mês)</span></p>
          </Card>
        </div>
      </div>
      <div className="flex justify-center">
        <a
          href="https://wa.me/5548998091771"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#6ca7b7] font-barriecito text-white p-4 mt-8 rounded-lg shadow-lg flex items-center justify-center hover:bg-[#568592] transition-colors"
          aria-label="Converse no WhatsApp"
        >
          <FaWhatsapp className="text-2xl mr-4" /> Inscreva-se!
        </a>
      </div>
    </section>
  );
}

function Mentorship() {
  return (
    <section className="p-6 lg:p-12 bg-white text-[#242736] rounded-lg h-full">
      <h2 className="text-3xl font-barriecito text-center text-[#f2ad5e] mb-6">Mentoria para Autodidatas</h2>
      <div className="max-w-3xl mx-auto space-y-4 text-lg">
        <p>Você prefere estudar por conta própria, mas sente falta de direção, consistência e apoio? A mentoria Rayuela é pra você. Eu preparo um plano de estudos semanal com materiais selecionados, além de encontros mensais ao vivo para prática e dúvidas.</p>
        <p>Ideal para quem quer liberdade, mas não quer estar só.</p>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="bg-white border border-[#f2ad5e] rounded-xl text-center p-6">
            <div>
              <FaPlusCircle className="text-3xl text-[#f2ad5e] mx-auto mb-1 h-12" />
              <h3 className="text-xl font-semibold mb-2">Incluso</h3>
            </div>
            <p>3 planos de estudo</p>
            <p>+ 1 encontro ao vivo por mês</p>
          </Card>
          <Card className="bg-white border border-[#f2ad5e] rounded-xl text-center p-6">
            <div>
              <FaMoneyBillWave className="text-3xl text-[#f2ad5e] mx-auto mb-1 h-12" />
              <h3 className="text-xl font-semibold mb-2">Valor</h3>
            </div>
            <p>R$400/mês</p>
          </Card>
        </div>
      </div>
      <div className="flex justify-center">
        <a
          href="https://wa.me/5548998091771"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#f2ad5e] font-barriecito text-white p-4 mt-8 rounded-lg shadow-lg flex items-center justify-center hover:bg-[#d99b54] transition-colors"
          aria-label="Converse no WhatsApp"
        >
          <FaWhatsapp className="text-2xl mr-4" /> Inscreva-se!
        </a>
      </div>
    </section>
  );
}

function Taster() {
  return (
    <section id="taster" className="p-6 lg:p-12 bg-[#ed4c87] text-white text-center">
      <h2 className="text-3xl font-barriecito mb-6">Sinta um gostinho da Rayuela ✨</h2>
      <p className="text-lg max-w-2xl mx-auto mb-6">Quer sentir como é estudar espanhol de um jeito único, afetivo e criativo? Explore nossos materiais gratuitos:</p>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <Card className="bg-white border border-[#ed4c87] rounded-xl text-center p-4 gap-0">
          <FaHeadphones className="text-3xl text-[#ed4c87] mx-auto mb-1 h-12" />
          <p>Playlist no YouTube com músicas latinas incríveis</p>
        </Card>
        <Card className="bg-white border border-[#ed4c87] rounded-xl text-center p-4 gap-0">
          <FaBook className="text-3xl text-[#ed4c87] mx-auto mb-1 h-12" />
          <p>Ebook gratuito com dicas, atividades e inspiração Rayuelística</p>
        </Card>
        <Card className="bg-white border border-[#ed4c87] rounded-xl text-center p-4 gap-0">
          <FaPhotoVideo className="text-3xl text-[#ed4c87] mx-auto mb-1 h-12" />
          <p>Uma aula</p>
        </Card>
      </div>
      <p className="mt-4">É só clicar, baixar, dançar e aprender. 💃🏻</p>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      text: "Bianka é uma professora incrível, seus materiais e a organização da aula conseguem mesclar prática e teoria muito bem. Além de sempre passar feedbacks necessários e incentivar o contato com o espanhol por outros meios.",
      author: "Isabela",
    },
    {
      text: "Uma didática excelente, uma profissional super dedicada, competente e atenta. A Bianka consegue identificar o potencial da gente e nos conduz com segurança.",
      author: "Nathalie",
    },
    {
      text: "As aulas com a Bianka são leves, criativas e cheias de conteúdo cultural. Me sinto motivada a continuar estudando!",
      author: "Renata",
    },
    {
      text: "O carinho e a atenção que recebo nas aulas fazem toda a diferença. Nunca pensei que aprender espanhol pudesse ser tão prazeroso.",
      author: "Carlos",
    },
    {
      text: "Estou amando a experiência com a Rayuela. As aulas são incríveis e me sinto realmente aprendendo com sentido!",
      author: "Fernanda",
    },
  ];

  const [index, setIndex] = useState(0);

  const totalSlides = Math.ceil(testimonials.length / 3);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const visibleTestimonials = testimonials.slice(index * 3, index * 3 + 3);
  if (visibleTestimonials.length < 3) {
    visibleTestimonials.push(
      ...testimonials.slice(0, 3 - visibleTestimonials.length)
    );
  }

  return (
    <section id="testimonials" className="p-6 md:p-12 lg:p-24 bg-[#f2ad5e] text-[#242736] text-center">
      <h2 className="text-3xl font-barriecito mb-6">O que dizem os alunos</h2>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-left">
          {visibleTestimonials.map((testimonial, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <p>{testimonial.text}</p>
                <p className="mt-2 font-semibold">— {testimonial.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Setas de navegação */}
        <Button
          onClick={prevSlide}
          className="absolute -left-7 top-3/7 transform -translate-y-1/2 bg-white rounded-full shadow p-2 cursor-pointer"
          aria-label="Anterior"
        >
          ‹
        </Button>
        <Button
          onClick={nextSlide}
          className="absolute -right-7 top-3/7 transform -translate-y-1/2 bg-white rounded-full shadow p-2 cursor-pointer"
          aria-label="Próximo"
        >
          ›
        </Button>

        {/* Bolinhas de navegação */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <Button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                i === index ? "bg-[#ed4c87]" : "bg-white"
              }`}
              aria-label={`Ir para slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 

function Contact() {
  return (
    <section id="contact" className="p-6 lg:p-12 bg-white text-[#242736] text-center">
      <h2 className="text-3xl font-barriecito mb-6">Fale com a Rayuela</h2>
      <div className="grid md:grid-cols-8 gap-6 max-w-5xl mx-auto">
        <Card className="md:col-start-2 col-span-2 bg-white rounded-xl text-center shadow-none border-none p-4 gap-0">
          <a
            href="https://wa.me/5548998091771"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white p-4 rounded-full shadow-lg flex items-center mx-auto justify-center hover:bg-[#1ebd5a] transition-colors mb-4"
            aria-label="Converse no WhatsApp"
          >
            <FaWhatsapp className="text-4xl" />
          </a>
          <p><a href="https://wa.me/5548998091771" target="_blank">(48) 99809-1771</a></p>
        </Card>
        <Card className="col-span-2 bg-white rounded-xl text-center shadow-none border-none p-4 gap-0">
          <a
            href="https://www.instagram.com/es.rayuela"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-linear-65 hover:from-pink-500 hover:to-purple-500 from-purple-500 to-pink-500 text-white p-4 rounded-full shadow-lg flex items-center mx-auto justify-center hover:bg-[#8134AF] transition-all mb-4"
            aria-label="Converse no WhatsApp"
          >
            <FaInstagram className="text-4xl" />
          </a>
          <p><a href="https://www.instagram.com/es.rayuela" target="_blank">@es.rayuela</a></p>
        </Card>
        <Card className="col-span-2 bg-white rounded-xl text-center shadow-none border-none p-4 gap-0">
          <a
            href="mailto:rayuela.escuela@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#007BFF] text-white p-4 rounded-full shadow-lg flex items-center mx-auto justify-center hover:bg-[#4A90E2] transition-colors mb-4"
            aria-label="Converse no WhatsApp"
          >
            <FaRegEnvelope className="text-4xl" />
          </a>
          <p><a href="mailto:rayuela.escuela@gmail.com" target="_blank">rayuela.escuela@gmail.com</a></p>
        </Card>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#242736] text-white text-center py-4">
      <p>© 2025 Rayuela. Todos os direitos reservados.</p>
    </footer>
  );
}
