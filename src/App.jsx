// Site da Rayuela com detalhamento interativo dos serviços e foco em conversão

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useMemo } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaUser, FaUserFriends, FaUsers, FaMoneyBillWave, FaPlusCircle, FaHeadphones, FaBook, FaPhotoVideo, FaRegEnvelope, FaInstagram, FaPen, FaHeart, FaFilm, FaPlay } from "react-icons/fa";
import { SiGoogleforms } from "react-icons/si";

export default function RayuelaSite() {
  const [selectedService, setSelectedService] = useState("none");

  return (
    <>
      <Header />  
      <main className="font-nunito bg-[#ffffff] text-[#242736]" role="main">
        <Home />
        <Method />
        <About />
        <Journey />
        <Services setSelectedService={setSelectedService} />
        {selectedService === "Curso Regular" && <CourseRegular />}
        {selectedService === "Projeto Personalizado" && <ProjectPersonal />}
        {selectedService === "Acompanhamento para Autodidatas" && <Mentorship />}
        {selectedService === "¡Clubes!" && <Clubes />}
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
      <div className={`lg:fixed lg:left-4 z-50 transition-all duration-300 bg-[#6ca7b7] px-4 py-2 ${scrolled ? "fixed rounded-full lg:top-4 left-4" : "static lg:top-24"}`}>
        <img
          src={scrolled ? `/logo_rayuela_h.png` : `/logo_rayuela.jpg`}
          alt="Logo Rayuela - Escola de Espanhol Online com Abordagem Afetiva"
          className={`transition-all duration-300 ${scrolled ? "h-12" : "h-70 mx-auto"}`}
          loading="eager" // O logo deve carregar imediatamente por ser acima da dobra
          fetchPriority="high" // Prioridade alta para o logo que é um elemento crítico
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
              { href: "#method", label: "Abordagem" },
              { href: "#about", label: "Sobre" },
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
      href="https://wa.me/5541988162747"
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
        <h1 className="text-4xl font-barriecito mb-4">SENTIDO PARA TU ESPAÑOL</h1>
        <p className="text-xl max-w-3xl mx-auto">
          <strong>¡BIENVENIDA! ¡BIENVENIDO!</strong> Se você chegou aqui, é porque precisa desenvolver algo em relação ao seu espanhol, certo? Seja <strong>aprender do zero</strong> ou <strong>dar continuidade</strong> ao seu aprendizado; fluir na <strong>conversação</strong>; desenvolver a <strong>escrita</strong>; preparar-se melhor para uma <strong>viagem</strong> ou para desempenhar funções no seu <strong>trabalho</strong>; ganhar mais <strong>confiança e autonomia</strong>; ou porque deseja estabelecer uma verdadeira <strong>conexão com o idioma e a cultura</strong>. Na Rayuela, <strong>o seu espanhol vai ganhar sentido</strong>, com toda a riqueza que essa palavra traz: sentido como rumo, <strong>direcionamento</strong>; e sentido como algo <strong>significativo</strong> - que faz sentido para você!
        </p>
      </motion.div>
      <div className="bg-home">
        <img 
          src="/src/assets/img/bg_home.svg" 
          alt="Elemento gráfico ilustrativo da abordagem de ensino da Rayuela" 
          loading="lazy" 
        />
      </div>
    </section>
  );
}

function Method() {
  return (
    <section id="method" className="p-6 md:p-12 lg:p-24 bg-white text-[#242736]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        >
        <h2 className="text-3xl font-barriecito text-center text-[#ed4c87] mb-8">O quê você vai aprender e como você vai aprender</h2>
        <div className="max-w-3xl mx-auto space-y-4 text-lg">
          <p>Você vai aprender a <strong>falar, escrever e ler em espanhol</strong> + <strong>entender quando falarem com você em espanhol</strong>, além de <strong>expandir muito o seu conhecimento e sua experiência cultural</strong> de países que têm o espanhol como  um de seus idiomas oficiais.</p>
          <p>Agora, o "como"!</p> 
          <p><strong>Você já parou para pensar que aprender um idioma vai muito além de decorar regras ou traduzir palavras?</strong> Que, na verdade, é um convite para se expressar, conectar e descobrir o mundo sob outra perspectiva?</p>
          <p>Na <strong>Rayuela</strong>, utilizamos <strong>três abordagens modernas e potentes</strong>: a <strong>Metodologia Comunicativa</strong>, a <strong>Abordagem por Tarefas</strong> e o <strong>Ensino por Projetos</strong>. Todas elas partem de <strong>uma mesma ideia</strong>: <strong>o idioma se aprende usando-o. Vivendo-o. Colocando-o em ação</strong>.</p>
          <p>Com a <strong>Metodologia Comunicativa</strong>, a aula se torna um espaço de troca real. Falar sobre si, interagir com o outro, negociar sentidos. Aqui, o erro não é um problema, mas parte do caminho. <strong>A comunicação vem antes da perfeição</strong>.</p>
          <p>Com a <strong>Abordagem por Tarefas</strong>, a língua ganha função: pedir informação, resolver um conflito, planejar uma viagem. O foco não está na regra, mas na ação. A <strong>gramática</strong> aparece, sim, mas <strong>como uma ferramenta</strong>, não como ponto de partida.</p>
          <p>Com o <strong>Ensino por Projetos</strong>, o idioma é ponte para <strong>criar algo com propósito</strong>. Um podcast, uma campanha, uma entrevista. Você se torna autora/autor, protagonista de uma jornada que ultrapassa os limites da sala de aula.</p>
          <p>O que une essas três abordagens é o respeito pela linguagem como vida em movimento. É o compromisso com <strong>aulas significativas, conectadas com o mundo real</strong>.</p>
        </div>
        <div className="flex justify-center">
          <a
            href="https://wa.me/5541988162747"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#6ca7b7] font-barriecito text-white p-4 mt-8 rounded-lg flex items-center justify-center hover:bg-[#568592] transition-colors border-white border-2 text-2xl"
            aria-label="Converse no WhatsApp"
          >
            <FaWhatsapp className="text-4xl mr-4" /> Adorei! Quero começar!
          </a>
        </div>
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="p-6 md:p-12 lg:p-24 bg-[#ed4c87]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 text-lg items-center">
        <div className="lg:col-span-3 space-y-4 bg-[#242736] text-white p-12 rounded-lg">
        <h2 className="text-3xl font-barriecito text-center text-[#ed4c87] mb-8">A Rayuela</h2>
          <div className="max-w-3xl mx-auto space-y-4 text-lg">
            <p>A Rayuela foi fundada por <strong>Bianka Silva</strong>, professora <strong>licenciada com mérito acadêmico em Letras Espanhol</strong> pela UFSC, com 7 anos ininteruptos de experiência no ensino de espanhol para brasileiras/os, <strong>tradutora</strong> com mais de 10 anos de experiência, <strong>artista</strong> do movimento e <strong>viajante</strong> de mundos latinos.</p>
            <p>A <strong>Rayuela</strong> nasceu da certeza de que <strong>aprender espanhol</strong> pode ser uma <strong>experiência</strong> ao mesmo tempo <strong>leve</strong>, <strong>profunda</strong>, <strong>prazeirosa</strong> e <strong>transformadora</strong>.</p>
            <p>O nome Rayuela tem dupla <strong>inspiração</strong>: em um livro de mesmo nome, do autor argentino Julio Cortázar; e no jogo da amarelinha - <em>Rayuela</em>, em espanhol.</p> <p>O livro de Cortázar é célebre por ser disruptivo: é uma <strong>obra-prima</strong> da literatura latino-americana que desafia a leitura tradicional com sua estrutura não linear e seu jogo interativo com o leitor.</p>
            <p>E o jogo da amarelinha? É um jogo dinâmico em que, quando estamos bricando, estamos imersos no momento presente, para nos equilibrarmos, jogarmos e conseguirmos avançar. A graça é mais o percurso que a linha de chegada, ainda que a linha de chegada seja o próprio Céu.</p>
            <p>Assim como no jogo da amarelinha e no livro de Cortázar, acreditamos que o <strong>melhor</strong> aprendizado do <strong>espanhol</strong> se dá quando nos envolvemos nessa jornada de maneira <strong>autêntica</strong>, com <strong>liberdade</strong> e uma boa dose de <strong>autonomia</strong> para viver nossa própria experiência, para traçar nosso próprio trajeto: que é o próprio processo de aprendizagem do espanhol.</p>           <p>Na <strong>Rayuela</strong>, a cada aula você se <strong>envolve</strong> mais com o <strong>idioma e a cultura</strong> e desenvolve um <strong>espanhol significativo para você</strong> e que, ao mesmo tempo, leva você a <strong>se conectar com os outros</strong>. <strong>O espanhol aqui não é fim — é ponte</strong>. É <strong>voz, identidade e sentido</strong>.</p>
            <p>Bianka traz para as aulas sua experiência de anos na Argentina, na Espanha e em outros locais que expressam sua identidade e cultura por meio da língua espanhola. Ensina com <strong>escuta, dedicação, humor e sensibilidade</strong>.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section id="journey" className="p-6 md:p-12 lg:p-24 bg-white text-[#242736]">
      <h2 className="text-3xl font-barriecito text-center text-[#6ca7b7] mb-8">Sua Jornada pela Rayuela</h2>
      <div className="max-w-3xl mx-auto space-y-4 text-lg">
        <p>Cada aluna/o percorre sua própria Rayuela, mas todos vivem uma experiência que vai além dos momentos de aula ao vivo. Veja o que espera por você:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Antes de começarmos</strong>, você recebe um documento de <em>onboarding</em> com orientações, expectativas e dicas práticas para que você possa tirar o melhor proveito da sua jornada.</li>
          <li><strong>Durante a sua jornada</strong> você tem acesso a uma página personalizada no Notion, com materiais da aula, portfólio com propostas exclusivas, feedback personalizado, espaço para dúvidas, sugestões culturais e até um <em>habit tracker</em> para ajudar você a nutrir e construir o seu espanhol no dia a dia.</li>
          <li><strong>Ao final da sua jornada</strong> você recebe um certificado e um mimo: um material exclusivo chamado "Como cuidar do seu espanhol a partir de agora", com orientações para que você possa manter os avanços que teve ao longo da sua aprendizagem.</li>
        </ul>
      </div>
    </section>
  );
}

function Services() {
  const [selected, setSelected] = useState("Curso Regular");

  // Usando useMemo para evitar recriação do array services a cada renderização
  const services = useMemo(() => [
    {
      title: "Acompanhamento para Autodidatas",
      description:
        "Para quem quer aprender com mais autonomia e flexibilidade horária: planos de estudos semanais e um encontro síncrono mensal.",
      bg: '#f2ad5e',
      id: "acompanhamento-autodidatas"
    },
    {
      title: "Curso Regular",
      description:
        "Para quem quer aprender espanhol acompanhando os níveis do Quadro Europeu Comum de Referência para as Línguas (CEFR).",
      bg: '#ed4c87',
      id: "curso-regular"
    },
    {
      title: "Projeto Personalizado",
      description:
        "Para quem quer um curso 100% personalizado, feito sob medida, com foco total nas suas necessidades e nos seus objetivos pessoais.",
      bg: '#6ca7b7',
      id: "projeto-personalizado"
    },
    {
      title: "¡Clubes!",
      description: "Seja do livro; do audiovisual; de escrita; ou de bem-estar e autodesenvolvimento: clubes para você se encontrar com outras pessoas com gostos em comum e falar, viver e aprender en español.",
      bg: '#fff',
      id: "clubes"
    }
  ], []);
  
  const handleSmoothScroll = (serviceId) => {
    // Atualize a URL sem recarregar a página (para SEO e compartilhamento)
    window.history.pushState({}, '', `#${serviceId}`);
    
    if(window.matchMedia("(max-width: 1024px)").matches) {
      const target = document.querySelector("#services-content");
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };
  
  // Verificar a URL ao carregar para definir o serviço selecionado com base na âncora
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const serviceFromHash = services.find(s => `#${s.id}` === hash);
      if (serviceFromHash) {
        setSelected(serviceFromHash.title);
      }
    }
  }, [services]);
  
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
              id={service.id}
              isActive={selected === service.title}
              onClick={() => {setSelected(service.title); handleSmoothScroll(service.id)}}
            />
          ))}
        </div>

        {/* Coluna direita com o conteúdo detalhado */}
        <div className="lg:col-span-2" id="services-content">
          {selected === "Curso Regular" && <div id="curso-regular"><CourseRegular /></div>}
          {selected === "Projeto Personalizado" && <div id="projeto-personalizado"><ProjectPersonal /></div>}
          {selected === "Acompanhamento para Autodidatas" && <div id="acompanhamento-autodidatas"><Mentorship /></div>}
          {selected === "¡Clubes!" && <div id="clubes"><Clubes /></div>}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, description, onClick, isActive, bg, id }) {
  const serviceId = id || title.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <a 
      href={`#${serviceId}`}
      onClick={(e) => {
        e.preventDefault(); // Impede o comportamento padrão
        onClick(); // Executa o callback original
      }}
      className={`block cursor-pointer p-6 rounded-lg transition-all shadow-sm bg-[${bg}] text-white shadow-md border-3
        ${isActive ? 'border-white' : 'border-transparent'}
        hover:shadow-lg text-decoration-none
      `}
      aria-label={`Serviço: ${title}`}
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </a>
  );
}

function CourseRegular() {
  return (
    <section className="p-6 lg:p-12 bg-white text-[#242736] rounded-lg h-full">
      <h2 className="text-3xl font-barriecito text-center text-[#ed4c87] mb-6">Curso Regular</h2>
      <div className="max-w-3xl mx-auto space-y-4 text-lg">
        <p>O curso regular segue a progressão de conteúdos conforme o estabelecido pelo Quadro Comum Europeu de Referência para Línguas (CEFR).</p>
        <p>As aulas são ao vivo e nelas combinamos <strong>propostas do livro Gente Hoy</strong> + propostas para reforçar e aprofundar a <strong>gramática</strong> quando necessário + <strong>propostas autorais</strong> para reforçar as estruturas e o vocabulário aprendido + contato contínuo com <strong>material autêntico</strong>  - ou seja, muito conteúdo cultural.</p>
        <p>Se você escolher aprender em <strong>grupo</strong>, a dinâmica é levemente diferente. Cada semana você terá uma <strong>aula ao vivo</strong> com o grupo + uma <strong>videoaula gravada</strong> que trará conteúdo que será desenvolvido na prática na próxima aula ao vivo.</p>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="bg-white border border-[#ed4c87] rounded-xl text-center p-4 gap-0">
            <div>
              <FaUser className="text-3xl text-[#ed4c87] mx-auto mb-1 h-12" />
              <h3 className="text-xl font-semibold mb-2">Individual</h3>
            </div>
            <p>R$480 <br /><span className="text-sm">(4 aulas/mês)</span></p>
            <p className="text-sm">ou</p>
            <p>R$960 <br /><span className="text-sm">(8 aulas/mês)</span></p>
          </Card>
          <Card className="bg-white border border-[#ed4c87] rounded-xl text-center p-4 gap-0">
            <div>
              <FaUserFriends className="text-3xl text-[#ed4c87] mx-auto mb-1 h-12" />
              <h3 className="text-xl font-semibold mb-2">Dupla</h3>
            </div>
            <p>R$325/mês<br/>por pessoa <br/><span className="text-sm">(4 aulas/mês)</span></p>
            <p className="text-sm">ou</p>
            <p>R$650/mês<br/>por pessoa <span className="text-sm">(8 aulas/mês)</span></p>
          </Card>
          <Card className="bg-white border border-[#ed4c87] rounded-xl text-center p-4 gap-0">
            <div>
              <FaUsers className="text-3xl text-[#ed4c87] mx-auto mb-1 h-12" />
              <h3 className="text-xl font-semibold mb-2">Grupo</h3>
            </div>
            <p className="text-sm mb-4">De 3 a 6 pessoas</p>
            <p>R$350/mês <br/>por pessoa</p>
            <p className="text-sm">(4 aulas ao vivo + 4 videoaulas gravadas)</p>
          </Card>
        </div>
      </div>
      <p className="text-sm text-center mt-4">*Válido para todas as modalidades: para pagamentos feitos por boleto antes da data de vencimento, 10% de desconto no valor da mensalidade.</p>
      <div className="flex justify-center">
        <a
          href="https://wa.me/5541988162747"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#ed4c87] font-barriecito text-white p-4 mt-8 rounded-lg shadow-lg flex items-center justify-center hover:bg-[#d54479] transition-colors text-2xl"
          aria-label="Converse no WhatsApp"
        >
          <FaWhatsapp className="text-4xl mr-4" /> Quero me inscrever!
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
        <p>O curso baseado em um projeto personalizado segue uma <strong>estrutura exclusiva</strong>, que é criada pela professora, para desenvolver as habilidades e os conhecimentos necessários para que seja atingido o objetivo do projeto - determinado previamente pela aluna/o. <strong>Exemplos</strong> de objetivo: preparar-se para uma <strong>viagem</strong>; participar de <strong>reuniões</strong> ou entrevistas <strong>de trabalho</strong> em espanhol; apresentar um <strong>trabalho acadêmico</strong> em espanhol.</p>
        <p>As <strong>aulas</strong> são <strong>ao vivo com propostas autorais</strong> - não trabalhamos nessa modalidade com livro de apoio, são propostas feitas sob medida + propostas para reforçar e aprofundar a <strong>gramática</strong> quando necessário + contato contínuo com <strong>material autêntico</strong> do idioma - ou seja, bastante conteúdo cultural.</p>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="bg-white border border-[#6ca7b7] rounded-xl text-center p-6 gap-0">
            <div>
              <FaUser className="text-3xl text-[#6ca7b7] mx-auto mb-1 h-12" />
              <h3 className="text-xl font-semibold mb-2">Individual</h3>
            </div>
            <p>R$680 <br/> <span className="text-sm">(4 aulas/mês)</span></p>
            <p className="text-sm">ou</p>
            <p>R$1.360,00 <br/> <span className="text-sm">(8 aulas/mês)</span></p>
          </Card>
          <Card className="bg-white border border-[#6ca7b7] rounded-xl text-center p-6 gap-0">
            <div>
              <FaUserFriends className="text-3xl text-[#6ca7b7] mx-auto mb-1 h-12" />
              <h3 className="text-xl font-semibold mb-2">Dupla</h3>
            </div>
            <p>R$500/mês <br/> por pessoa <br/> <span className="text-sm">(4 aulas/mês)</span></p>
            <p className="text-sm">ou</p>
            <p>R$1.000/mês <br/> por pessoa <br/> <span className="text-sm">(8 aulas/mês)</span></p>
          </Card>
          <Card className="bg-white border border-[#6ca7b7] rounded-xl text-center p-6 gap-0">
            <div>
              <FaUsers className="text-3xl text-[#6ca7b7] mx-auto mb-1 h-12" />
              <h3 className="text-xl font-semibold mb-2">Grupo</h3>
            </div>
            <p className="text-sm mb-4">De 3 a 4 pessoas</p>
            <p>R$400/mês <br/> por pessoa <br/> <span className="text-sm">(4 aulas/mês)</span></p>
            <p className="text-sm">ou</p>
            <p>R$800/mês <br/> por pessoa <br/> <span className="text-sm">(8 aulas/mês)</span></p>
          </Card>
        </div>
      </div>
      <p className="text-sm text-center mt-4">*Válido para todas as modalidades: para pagamentos feitos por boleto antes da data de vencimento, 10% de desconto no valor da mensalidade.</p>
      <div className="flex justify-center">
        <a
          href="https://wa.me/5541988162747"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#6ca7b7] font-barriecito text-white p-4 mt-8 rounded-lg shadow-lg flex items-center justify-center hover:bg-[#568592] transition-colors text-2xl"
          aria-label="Converse no WhatsApp"
        >
          <FaWhatsapp className="text-4xl mr-4" /> Quero me inscrever!
        </a>
      </div>
    </section>
  );
}

function Mentorship() {
  return (
    <section className="p-6 lg:p-12 bg-white text-[#242736] rounded-lg h-full">
      <h2 className="text-3xl font-barriecito text-center text-[#f2ad5e] mb-6">Acompanhamento para Autodidatas</h2>
      <div className="max-w-3xl mx-auto space-y-4 text-lg">
        <p>Você prefere estudar por conta própria, mas sente falta de direcionamento, consistência e apoio? O <strong>acompanhamento Rayuela</strong> é pra você.</p>
        <p>Optando pelo acompanhamento para autodidatas você receberá <strong>um plano de estudo por semana</strong> para você seguir no seu ritmo, e nos encontramos <strong>1 vez por mês</strong> para prática de <strong>conversação</strong> e esclarecimento de dúvidas.</p>
        <p>Os planos de estudos são compostos por: <strong>propostas do livro Gente Hoy</strong> + propostas para reforçar e aprofundar a <strong>gramática</strong> quando necessário + propostas autorais para reforçar as estruturas e o vocabulário aprendido + contato contínuo com <strong>material autêntico</strong> - ou seja, muito conteúdo cultural.</p>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="bg-white border border-[#f2ad5e] rounded-xl text-center p-6">
            <div>
              <FaMoneyBillWave className="text-3xl text-[#f2ad5e] mx-auto mb-1 h-12" />
              <h3 className="text-xl font-semibold mb-2">Valor</h3>
            </div>
            <p>R$360/mês</p>
          </Card>
        </div>
      </div>
      <p className="text-sm text-center mt-4">*Válido para todas as modalidades: para pagamentos feitos por boleto antes da data de vencimento, 10% de desconto no valor da mensalidade.</p>
      <div className="flex justify-center">
        <a
          href="https://wa.me/5541988162747"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#f2ad5e] font-barriecito text-white p-4 mt-8 rounded-lg shadow-lg flex items-center justify-center hover:bg-[#d99b54] transition-colors text-2xl"
          aria-label="Converse no WhatsApp"
        >
          <FaWhatsapp className="text-4xl mr-4" /> Quero me inscrever!
        </a>
      </div>
    </section>
  );
}
function Clubes() {
  return (
    <section className="p-6 lg:p-12 bg-white text-[#242736] rounded-lg h-full">
      <h2 className="text-3xl font-barriecito text-center text-[#f2ad5e] mb-6">¡Clubes!</h2>
      <div className="max-w-3xl mx-auto space-y-4 text-lg">
        <p>Se você curte livros; séries e filmes; escrita criativa ou explorar diferentes gêneros textuais; ou temas ligados ao bem-estar e autodesenvolvimento, aqui tem um clube para você!</p>
        <p>Os ¡Clubes! são encontros em grupo para quem quer conviver em espanhol de forma leve e significativa, com pessoas que compartilham interesses semelhantes. Cada clube é formado por um número determinado de encontros ao vivo, com um cronograma claro e interessante: você saberá exatamente o que vamos discutir, assistir, experimentar ou criar em cada encontro.</p>
        <p>É um espaço de troca e prática real — onde o idioma deixa de ser apenas conteúdo e vira experiência.</p>
        <p>Ao final do ciclo, você recebe um feedback personalizado, com observações sobre pontos a desenvolver no seu espanhol, explicações e sugestões de exercícios para continuar avançando com autonomia.</p>
        <p>É um formato pensado especialmente para quem já tem uma boa base no idioma ou para quem já fala bem, mas sente falta de oportunidades para manter o contato com o idioma.</p>
        <p>Registre seu interesse e te avisaremos assim que lançarmos o próximo clube!</p>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <Card className="bg-white border border-[#f2ad5e] rounded-xl text-center p-6">
            <div>
              <FaBook className="text-3xl text-[#f2ad5e] mx-auto mb-1 h-12" />
              <h3 className="text-xl font-semibold mb-2">Clube do Livro</h3>
            </div>
          </Card>
          <Card className="bg-white border border-[#f2ad5e] rounded-xl text-center p-6">
            <div>
              <FaFilm className="text-3xl text-[#f2ad5e] mx-auto mb-1 h-12" />
              <h3 className="text-xl font-semibold mb-2">Clube do Audiovisual</h3>
            </div>
          </Card>
          <Card className="bg-white border border-[#f2ad5e] rounded-xl text-center p-6">
            <div>
              <FaPen className="text-3xl text-[#f2ad5e] mx-auto mb-1 h-12" />
              <h3 className="text-xl font-semibold mb-2">Clube de escrita: gêneros textuais ou escritura criativa</h3>
            </div>
          </Card>
          <Card className="bg-white border border-[#f2ad5e] rounded-xl text-center p-6">
            <div>
              <FaHeart className="text-3xl text-[#f2ad5e] mx-auto mb-1 h-12" />
              <h3 className="text-xl font-semibold mb-2">Clube de bem-estar e autodesenvolvimento</h3>
            </div>
          </Card>
        </div>
      </div>
      <div className="flex justify-center">
        <a
          href="https://forms.gle/XQj3YxQTmYDx1HkNA"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#f2ad5e] font-barriecito text-white p-4 mt-8 rounded-lg shadow-lg flex items-center justify-center hover:bg-[#d99b54] transition-colors text-2xl"
          aria-label="Link para o formulário de interesse"
        >
          <SiGoogleforms className="text-4xl mr-4" /> Legal! Quero registrar meu interesse!
        </a>
      </div>
    </section>
  );
}

function Taster() {
  return (
    <section id="taster" className="p-6 lg:p-12 bg-[#ed4c87] text-white text-center">
      <h2 className="text-3xl font-barriecito mb-6">Sinta um gostinho da Rayuela ✨</h2>
      <p className="text-lg max-w-2xl mx-auto mb-6">Quer sentir como é estudar espanhol de um jeito único? Explore nossos materiais gratuitos:</p>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <Card className="bg-white border border-[#ed4c87] rounded-xl text-center p-4 gap-0">
          <FaHeadphones className="text-3xl text-[#ed4c87] mx-auto mb-1 h-12" />
          <p className="mb-4">Playlist no YouTube com músicas latinas incríveis!</p>
          <a
            href="https://www.youtube.com/playlist?list=PLl9yiqWKeiN3mPYUwl9esxDgmqkAfctzr&si=Fv1QN7fJtPR8aPrN"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ed4c87] font-barriecito text-white p-4 rounded-lg shadow-lg flex items-center justify-center hover:bg-[#d99b54] transition-colors"
          >
            <FaPlay className="text-2xl mr-4" /> Acessar playlist
          </a>
        </Card>
        <Card className="bg-white border border-[#ed4c87] rounded-xl text-center p-4 gap-0">
          <FaBook className="text-3xl text-[#ed4c87] mx-auto mb-1 h-12" />
          <p className="mb-4">Guia gratuito que vai te ajudar a reconhecer a principais interferências do português no seu espanhol.</p>
          <a
            href="https://gamma.app/docs/Um-breve-passeio-pelas-armadilhas-do-portugues-no-espanhol-Volu-k16d7w31wmcxmv8"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ed4c87] font-barriecito text-white p-4 rounded-lg shadow-lg flex items-center justify-center hover:bg-[#d99b54] transition-colors"
          >
            <FaPlay className="text-2xl mr-4" /> Acessar o guia
          </a>
        </Card>
        <Card className="bg-white border border-[#ed4c87] rounded-xl text-center p-4 gap-0">
          <FaPhotoVideo className="text-3xl text-[#ed4c87] mx-auto mb-1 h-12" />
          <p className="mb-4">Essa é a aula que vai te ajudar a aproveitar o guia da Rayuela ao máximo!</p>
          <a
            href="https://youtu.be/0DCUJ7NNB7w"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ed4c87] font-barriecito text-white p-4 rounded-lg shadow-lg flex items-center justify-center hover:bg-[#d99b54] transition-colors"
          >
            <FaPlay className="text-2xl mr-4" /> Acessar a aula
          </a>
        </Card>
      </div>
      <p className="mt-4">É só clicar e aproveitar. ⚡</p>
    </section>
  );
}

function Testimonials() {
  //todo: add Embla carousel to testimonials;
  const testimonials = [
    {
      text: '"Eu precisava melhorar minha fluência na língua, pois ia dar aulas em países cujo a língua oficial é o espanhol. Uma coisa que achei fantástica em suas aulas que além de ela me atender em relação a o que eu precisava, me deu uma aula cultural de cada região em que fui dar as aulas, e isso me fez me aproximar muito e conhecer coisas fanáticas de cada lugar que nem sonhava que existia, e que tornaram a viagem ainda mais incrível. É como se eu tivesse ido para esses lugares antes mesmo de ir. E as aulas são levadas de forma leve e de fácil compreensão, super recomendo."',
      author: "Witheney",
    },
    {
      text: '"Bianka é uma professora incrível, seus materiais e a organização sa aula conseguem mesclar prática e teoria muito bem. Além de sempre passar feedbacks necessários e incentivar o contato com o espanhol por outros meios, como séries, filmes, apps e sites mais lúdicos. Com toda certeza sua aula vai ser divertida e irá sair muito mais confiante para falar espanhol."',
      author: "Isabela",
    },
    {
      text: '"Bianka é uma Profe ótima, super paciente, com um jeito simples e boas analogias para entender o conteúdo, que por sinal é maravilhoso, aprendi sobre cultura, gastronomia e muitos outros temas que ela aborda, além de tudo isso, é simpática e engraçada."',
      author: "Gislaine",
    },
    {
      text: '"Uma didática excelente, uma profissional super dedicada, competente, e atenta, indico muito! A Bianka consegue identificar o potencial da gente, nos conduz e nos dá segurança no processo de aprendizado!!"',
      author: "Nathalie",
    },
    {
      text: '"Eu recomendo demais aulas com a Bianka 💕 Ela é uma professora dinâmica, que adapta a aula às necessidades do aluno e que nos guia no aprendizado com uma aula que nos anima, sem ser aquela coisa antiquada e fechada. Ela nos estimula a praticar e pesquisar a língua espanhola como ela se aplicaria no dia a dia, e isso faz do aprendizado muito mais rápido e estimulante!!!"',
      author: "Paula",
    },
    {
      text: '"Hola. Yo me llamo Bruno. Tive a oportunidade de ter aula com a Profa. Bianka Silva, e recomendaria as aulas com ela para qualquer pessoa. Isso pelo fato de as aulas serem dinâmicas, direcionadas e vivas. Dinâmica pois parece um bate papo, o que estimula o diálogo e o treino da fala. Direcionada, pois tem muitos aspectos que direciona ao aluno, a sua particularidade (como por exemplo feeback que é feito p cada aluno, com suas dificuldades e o que ele precisa treinar mais). Viva por não estar toda fechada, os alunos constroem a aula juntos com o professor. Por tais motivos indico a experiência."',
      author: "Bruno",
    },
    {
      text: '"As aulas são muito boas e atualizadas. A prof nos incentiva a falar e o espanhol sem medo. Usa vídeos e exemplos lúdicos.. fica bem fácil aprender assim. Gosto muito das aulas e recomendo. Gracias"',
      author: "Carla",
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
                <p className="italic">{testimonial.text}</p>
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
      <div className="flex justify-center">
        <a
          href="https://wa.me/5541988162747"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-none font-barriecito text-[#242736] p-4 mt-8 rounded-lg flex items-center justify-center hover:bg-[#d99b54] transition-colors border-[#242736] border-1 text-2xl"
          aria-label="Converse no WhatsApp"
        >
          <FaWhatsapp className="text-4xl mr-4" /> Adorei! Quero começar!
        </a>
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
            href="https://wa.me/5541988162747"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white p-4 rounded-full shadow-lg flex items-center mx-auto justify-center hover:bg-[#1ebd5a] transition-colors mb-4"
            aria-label="Converse no WhatsApp"
          >
            <FaWhatsapp className="text-4xl" />
          </a>
          <p><a href="https://wa.me/5541988162747" target="_blank">(41) 98816-2747</a></p>
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
