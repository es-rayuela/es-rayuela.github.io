// Site da Rayuela com detalhamento interativo dos serviços e foco em conversão

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function RayuelaSite() {
  const [selectedService, setSelectedService] = useState("none");

  return (
    <main className="font-nunito bg-[#ffffff] text-[#242736]">
      <Header />
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
  );
}

function Header() {
  const handleSmoothScroll = (e) => {
    const href = e.currentTarget.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  return (
    <header className="bg-[#f2ad5e] p-6 flex justify-between items-center shadow-md">
      <img src="/assets/img/logo_rayuela.png" alt="Logo Rayuela" className="h-12" />
      <nav className="space-x-6 text-lg">
        <a href="#home" onClick={handleSmoothScroll} className="hover:text-[#ed4c87] transition-colors">Início</a>
        <a href="#about" onClick={handleSmoothScroll} className="hover:text-[#ed4c87] transition-colors">Sobre</a>
        <a href="#method" onClick={handleSmoothScroll} className="hover:text-[#ed4c87] transition-colors">Abordagem</a>
        <a href="#journey" onClick={handleSmoothScroll} className="hover:text-[#ed4c87] transition-colors">Sua Jornada</a>
        <a href="#services" onClick={handleSmoothScroll} className="hover:text-[#ed4c87] transition-colors">Serviços</a>
        <a href="#taster" onClick={handleSmoothScroll} className="hover:text-[#ed4c87] transition-colors">Experimente</a>
        <a href="#testimonials" onClick={handleSmoothScroll} className="hover:text-[#ed4c87] transition-colors">Depoimentos</a>
        <a href="#contact" onClick={handleSmoothScroll} className="hover:text-[#ed4c87] transition-colors">Contato</a>
      </nav>
    </header>
  );
}

function Home() {
  return (
    <section id="home" className="p-12 text-center bg-[#6ca7b7] text-white">
      <h2 className="text-4xl font-barriecito mb-4">Mais que um curso. Uma travessia.</h2>
      <p className="text-xl max-w-3xl mx-auto">
        Se você chegou aqui, provavelmente sente que precisa de algo a mais com o espanhol. Seja desbloquear a fala, retomar os estudos, ganhar autonomia, ou criar conexão com o idioma e a cultura. Na Rayuela, a gente começa pelo desejo e caminha junto.
      </p>
      <img src="/images/UNICORNIO-DECORATIVO.png" alt="Unicórnio decorativo" className="mx-auto mt-8 h-24" />
    </section>
  );
}

function About() {
  return (
    <section id="about" className="p-12 bg-white text-[#242736]">
      <h2 className="text-3xl font-barriecito text-center text-[#ed4c87] mb-8">A Rayuela</h2>
      <div className="max-w-3xl mx-auto space-y-4 text-lg">
        <p>A Rayuela nasceu da certeza de que aprender espanhol pode ser uma experiência afetiva, artística e transformadora. Inspirada na amarelinha, que brincamos na infância e que dá nome a um romance de Cortázar, a Rayuela é um caminho em espiral, com pulos, fases, descobertas e renascimentos.</p>
        <p>A cada passo da jornada, você se aproxima de uma versão mais conectada de si. A cada aula, você se reconstrói um pouco mais. O espanhol aqui não é fim — é ponte. É voz, identidade e sentido.</p>
        <p>Quem ensina é Bianka: professora licenciada em Letras Espanhol pela UFSC com mérito acadêmico, tradutora, artista e viajante de mundos latinos. Ela traz para as aulas sua experiência na Argentina, na Espanha e em muitos outros cantinhos da língua espanhola. Ensina com beleza, escuta, humor e sensibilidade.</p>
      </div>
    </section>
  );
}

function Method() {
  return (
    <section id="method" className="p-12 bg-[#fef9f5] text-[#242736]">
      <h2 className="text-3xl font-barriecito text-center text-[#ed4c87] mb-8">Como ensinamos</h2>
      <div className="max-w-3xl mx-auto space-y-4 text-lg">
        <p>Ensinamos com presença e escuta. Usamos a metodologia comunicativa, que valoriza a comunicação real desde o primeiro dia. Trabalhamos as quatro habilidades (fala, escuta, leitura e escrita), sempre de forma integrada, personalizada e significativa.</p>
        <p>Todo o conteúdo nasce de dois pilares: o livro de apoio (<em>Gente Hoy</em>) e propostas autorais construídas com base em materiais autênticos — músicas, memes, filmes, redes sociais, notícias, jogos e cultura pop. A gramática aparece quando faz sentido, e o foco é a fluidez, a compreensão, o prazer.</p>
        <p>O resultado? Aulas envolventes, memoráveis e que te transformam por dentro.</p>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section id="journey" className="p-12 bg-white text-[#242736]">
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

function Services({ setSelectedService }) {
  return (
    <section id="services" className="p-12 bg-[#f2ad5e] text-[#242736] text-center">
      <h2 className="text-3xl font-barriecito mb-6">Serviços Rayuela</h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
        <ServiceCard
          title="Curso Regular"
          description="Para quem busca estrutura e consistência nas aulas, com o livro Gente Hoy e material personalizado."
          onClick={() => setSelectedService("Curso Regular")}
        />
        <ServiceCard
          title="Projeto Personalizado"
          description="Curso sob medida com base no seu objetivo específico, como viagem, entrevista, ou projeto de trabalho."
          onClick={() => setSelectedService("Projeto Personalizado")}
        />
        <ServiceCard
          title="Mentoria para Autodidatas"
          description="Estude com autonomia com um plano estruturado por mim e encontros mensais para dúvidas e conversação."
          onClick={() => setSelectedService("Mentoria para Autodidatas")}
        />
      </div>
    </section>
  );
}

function ServiceCard({ title, description, onClick }) {
  return (
    <Card className="shadow-md bg-white text-left hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-[#ed4c87] mb-2">{title}</h3>
        <p className="mb-4">{description}</p>
        <Button onClick={onClick} className="bg-[#ed4c87] text-white hover:bg-[#c83b72] transition-colors">
          Ver mais
        </Button>
      </CardContent>
    </Card>
  );
}

function CourseRegular() {
  return (
    <section className="p-12 bg-white text-[#242736]">
      <h2 className="text-3xl font-barriecito text-center text-[#ed4c87] mb-6">Curso Regular</h2>
      <div className="max-w-3xl mx-auto space-y-4 text-lg">
        <p>Ideal para quem deseja aprender com consistência e estrutura. O curso regular segue o Quadro Comum Europeu de Referência para Línguas (CEFR), com aulas ao vivo que combinam o livro <strong>Gente Hoy</strong>, propostas autorais e muito conteúdo cultural.</p>
        <p>Está disponível em formato individual, dupla ou grupo.</p>
        <ul className="list-disc pl-5">
          <li><strong>Individual:</strong> R$400 (4 aulas/mês) ou R$800 (8 aulas/mês)</li>
          <li><strong>Dupla:</strong> R$650/mês</li>
          <li><strong>Grupo:</strong> R$350/mês por pessoa (4 aulas ao vivo + 4 videoaulas gravadas)</li>
        </ul>
      </div>
    </section>
  );
}

function ProjectPersonal() {
  return (
    <section className="p-12 bg-[#fef9f5] text-[#242736]">
      <h2 className="text-3xl font-barriecito text-center text-[#6ca7b7] mb-6">Projeto Personalizado</h2>
      <div className="max-w-3xl mx-auto space-y-4 text-lg">
        <p>Ideal para quem tem um objetivo tangível com o espanhol: uma viagem, um projeto de trabalho, uma apresentação, uma entrevista ou outra demanda pontual. Aqui, o curso é 100% desenhado por mim com foco na sua necessidade.</p>
        <p>Você aprende o que precisa, no tempo certo, com leveza, profundidade e beleza.</p>
        <ul className="list-disc pl-5">
          <li><strong>Individual:</strong> R$600 (4 aulas/mês) ou R$1200 (8 aulas/mês)</li>
          <li><strong>Dupla:</strong> R$950/mês</li>
        </ul>
      </div>
    </section>
  );
}

function Mentorship() {
  return (
    <section className="p-12 bg-white text-[#242736]">
      <h2 className="text-3xl font-barriecito text-center text-[#ed4c87] mb-6">Mentoria para Autodidatas</h2>
      <div className="max-w-3xl mx-auto space-y-4 text-lg">
        <p>Você prefere estudar por conta própria, mas sente falta de direção, consistência e apoio? A mentoria Rayuela é pra você. Eu preparo um plano de estudos semanal com materiais selecionados, além de encontros mensais ao vivo para prática e dúvidas.</p>
        <p>Ideal para quem quer liberdade, mas não quer estar só.</p>
        <ul className="list-disc pl-5">
          <li>Inclui: 3 planos de estudo + 1 encontro ao vivo por mês</li>
          <li><strong>Valor:</strong> R$400/mês</li>
        </ul>
      </div>
    </section>
  );
}

function Taster() {
  return (
    <section id="taster" className="p-12 bg-[#ed4c87] text-white text-center">
      <h2 className="text-3xl font-barriecito mb-6">Sinta um gostinho da Rayuela ✨</h2>
      <p className="text-lg max-w-2xl mx-auto mb-6">Quer sentir como é estudar espanhol de um jeito único, afetivo e criativo? Explore nossos materiais gratuitos:</p>
      <ul className="list-disc list-inside text-left max-w-xl mx-auto space-y-2">
        <li>🎧 Playlist no YouTube com músicas latinas incríveis</li>
        <li>📕 Ebook gratuito com dicas, atividades e inspiração Rayuelística</li>
        <li>🖼️ Materiais visuais com expressões, cultura e beleza</li>
      </ul>
      <p className="mt-4">É só clicar, baixar, dançar e aprender. 💃🏻</p>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="p-12 bg-[#fef9f5] text-[#242736] text-center">
      <h2 className="text-3xl font-barriecito mb-6">O que dizem os alunos</h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 text-left">
        <Card><CardContent className="p-6"><p>Bianka é uma professora incrível, seus materiais e a organização da aula conseguem mesclar prática e teoria muito bem. Além de sempre passar feedbacks necessários e incentivar o contato com o espanhol por outros meios.</p><p className="mt-2 font-semibold">— Isabela</p></CardContent></Card>
        <Card><CardContent className="p-6"><p>Uma didática excelente, uma profissional super dedicada, competente e atenta. A Bianka consegue identificar o potencial da gente e nos conduz com segurança.</p><p className="mt-2 font-semibold">— Nathalie</p></CardContent></Card>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="p-12 bg-white text-[#242736] text-center">
      <h2 className="text-3xl font-barriecito mb-6">Fale com a Rayuela</h2>
      <p className="text-lg mb-2">📱 WhatsApp: <a href="https://wa.me/5548998091771" className="text-[#ed4c87]">+55 48 99809-1771</a></p>
      <p className="text-lg mb-2">📧 Email: <a href="mailto:rayuela.escuela@gmail.com" className="text-[#ed4c87]">rayuela.escuela@gmail.com</a></p>
      <p className="text-lg">📸 Instagram: <a href="https://instagram.com/es.rayuela" className="text-[#ed4c87]" target="_blank">@es.rayuela</a></p>
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
