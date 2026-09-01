import React from "react";
import { createRoot } from "react-dom/client";
import "@fontsource-variable/cormorant-garamond";
import "@fontsource-variable/manrope";
import "./styles.css";

type HeroContent = {
  eyebrow: string;
  title: string;
  support: string;
  button: string;
};

const heroContent: Record<string, HeroContent> = {
  "/a1": {
    eyebrow: "Workshop ao vivo para leitoras",
    title: "Você não perdeu o gosto pela leitura. Talvez só esteja procurando a história errada.",
    support:
      "Em 90 minutos, descubra o que faz uma história realmente prender você, aplique o Mapa de Imersão e saia com um jeito simples de escolher sua próxima leitura sem garimpar centenas de títulos.",
    button: "Quero participar ao vivo por R$ 29,90",
  },
  "/a2": {
    eyebrow: "Mais conexão, menos garimpo",
    title: "Milhares de livros disponíveis não significam milhares de boas experiências.",
    support:
      "No workshop A História Certa, você vai aprender o Mapa de Imersão para reconhecer os sinais que ajudam a escolher uma leitura com mais chance de prender você.",
    button: "Quero aprender o Mapa de Imersão",
  },
  "/a3": {
    eyebrow: "Reencontre o prazer de ler",
    title: "Saudade da época em que você já sentia falta dos personagens antes de terminar o livro?",
    support:
      "Talvez o prazer de ler não tenha desaparecido. Talvez você só precise reencontrar o tipo de história que faz o relógio passar sem perceber.",
    button: "Quero voltar a me envolver com uma história",
  },
};

const checkoutUrl = (import.meta.env.VITE_CHECKOUT_URL as string | undefined)?.trim();

function Brand() {
  return (
    <a className="brand" href="/a1" aria-label="Amo Livros, página inicial">
      <span className="brand-mark" aria-hidden="true">A</span>
      <span>
        <strong>AMO LIVROS</strong>
        <small>Histórias para sentir</small>
      </span>
    </a>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <span className="check" aria-hidden="true">
      <svg viewBox="0 0 24 24"><path d="m5 12 4 4L19 6" /></svg>
    </span>
  );
}

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand />
        <a className="header-link" href="#inscricao">Ver inscrição</a>
      </div>
    </header>
  );
}

function Hero({ content }: { content: HeroContent }) {
  return (
    <section className="hero">
      <div className="hero-orbit hero-orbit-one" />
      <div className="hero-orbit hero-orbit-two" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow"><span />{content.eyebrow}</p>
          <h1>{content.title}</h1>
          <p className="hero-support">{content.support}</p>
          <a className="button button-primary" href="#inscricao">
            <span>{content.button}</span><ArrowIcon />
          </a>
          <div className="hero-meta" aria-label="Informações do workshop">
            <span>90 minutos ao vivo</span>
            <span>Google Meet</span>
            <span>Replay por 48 horas</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-photo-wrap">
            <img src="/silvania-hero.webp" alt="Silvania, autora e fundadora do Amo Livros" width="1024" height="1536" fetchPriority="high" />
            <div className="photo-caption">
              <strong>Silvania</strong>
              <span>Autora e fundadora do Amo Livros</span>
            </div>
          </div>
          <div className="live-card">
            <span className="live-dot" />
            <div><strong>Encontro ao vivo</strong><span>Experiência guiada</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionIntro({ label, title, text }: { label: string; title: React.ReactNode; text?: string }) {
  return (
    <div className="section-intro">
      <p className="section-label">{label}</p>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

const commonAttempts = [
  "Comprar porque está entre os mais vendidos.",
  "Escolher apenas pela capa ou pelo título.",
  "Seguir listas enormes sem saber o que combina com o seu momento.",
  "Assinar um catálogo gigante e continuar sem saber por onde começar.",
  "Se obrigar a terminar uma história que não despertou vontade de continuar.",
];

const outcomes = [
  "Clareza sobre o que costuma fazer você se conectar com uma história.",
  "Um critério simples para não depender apenas de hype, capa ou quantidade de opções.",
  "Uma aplicação prática do Mapa de Imersão durante a sessão.",
  "Uma experiência guiada para perceber os sinais na prática.",
  "Um jeito mais leve de escolher a próxima leitura sem transformar o hábito em cobrança.",
];

const program = [
  ["Acolhimento", "Por que voltar a ler não precisa começar por meta de páginas."],
  ["Conexão", "O que separa uma história interessante de uma história que cria vínculo."],
  ["O mapa", "Os sinais do Mapa de Imersão: emoção, vínculo e movimento da narrativa."],
  ["Aplicação", "Como observar esses sinais sem precisar terminar o livro para decidir se vale continuar."],
  ["Próxima leitura", "Como escolher com menos garimpo e mais intenção."],
  ["Continuidade", "Os próximos caminhos para quem quiser viver novas histórias com o Amo Livros."],
];

const faqs = [
  ["Preciso ter hábito de leitura?", "Não. O workshop também foi pensado para quem já gostou de ler mais e quer retomar de um jeito leve."],
  ["É uma aula de escrita?", "Não. O foco é a experiência da leitora: entender o que aumenta sua conexão com uma história e escolher melhor o que ler."],
  ["Vou precisar ler um livro inteiro durante o workshop?", "Não. A aplicação usa sinais e trechos suficientes para você entender o método sem transformar a sessão em uma maratona."],
  ["Onde será o encontro?", "No Google Meet. As orientações de acesso serão enviadas no grupo oficial de participantes no WhatsApp."],
  ["Vai ter replay?", "Sim. A gravação será disponibilizada por 48 horas após a liberação."],
  ["O Amo Livros será apresentado no final?", "Sim. Silvania mostrará a proposta de continuidade para quem quiser conhecer novas histórias depois do workshop. A compra é opcional."],
  ["O valor do workshop é recorrente?", "Não. Os R$ 29,90 correspondem à inscrição desta sessão ao vivo."],
  ["Posso pedir cancelamento?", "Nas contratações online, aplica-se o prazo legal de 7 dias para o exercício do direito de arrependimento, conforme as condições aplicáveis ao caso."],
];

function CheckoutButton() {
  if (checkoutUrl) {
    return (
      <a className="button button-light button-wide" href={checkoutUrl} target="_blank" rel="noreferrer">
        <span>Quero descobrir a história certa para mim</span><ArrowIcon />
      </a>
    );
  }

  return (
    <button
      className="button button-light button-wide"
      type="button"
      onClick={() => document.getElementById("pendencia-checkout")?.scrollIntoView({ behavior: "smooth", block: "center" })}
    >
      <span>Quero descobrir a história certa para mim</span><ArrowIcon />
    </button>
  );
}

function SalesPage({ content }: { content: HeroContent }) {
  return (
    <>
      <Header />
      <main>
        <Hero content={content} />

        <section className="section section-ivory">
          <div className="container two-column lead-section">
            <SectionIntro
              label="Para quem sente falta de uma boa história"
              title={<>Se você já amou ler, mas hoje a leitura ficou mais difícil de <em>encaixar</em></>}
            />
            <div className="lead-card">
              <p>Você finalmente encontra um tempo para ler, mas passa mais tempo escolhendo do que lendo.</p>
              <ul className="plain-list">
                <li><CheckIcon />Já comprou livros por indicação, capa ou hype e abandonou no meio.</li>
                <li><CheckIcon />Sente falta daquela história que fazia você pensar: só mais um capítulo.</li>
                <li><CheckIcon />Quer voltar a ler por prazer, sem transformar isso em mais uma obrigação.</li>
                <li><CheckIcon />Gosta de romances, fantasia, drama e personagens que ficam na memória.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section problem-section">
          <div className="container">
            <SectionIntro
              label="O problema não é falta de livros"
              title={<>Nunca houve tanta opção. E escolher ainda pode ser <em>cansativo.</em></>}
              text="Você abre listas, vê dezenas de capas, rankings, recomendações e resenhas. Escolhe com expectativa, mas a conexão não vem e o livro fica de lado."
            />
            <div className="attempts-grid">
              {commonAttempts.map((item, index) => (
                <article className="attempt-card" key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </article>
              ))}
            </div>
            <p className="pull-quote">Mais opções não substituem encaixe. O objetivo não é descobrir o melhor livro do mundo. É reconhecer os sinais de uma história que combina com aquilo que você gosta de sentir.</p>
          </div>
        </section>

        <section className="section map-section">
          <div className="container">
            <SectionIntro
              label="Conheça o Mapa de Imersão"
              title={<>Três fases para sair do garimpo e chegar mais rápido a uma leitura com potencial de <em>envolver você.</em></>}
            />
            <div className="map-grid">
              <article className="map-card">
                <span className="map-number">01</span>
                <h3>Sentir</h3>
                <p>Reconheça a emoção que você procura: romance, escape, tensão, acolhimento, descoberta ou encantamento.</p>
              </article>
              <article className="map-card featured">
                <span className="map-number">02</span>
                <h3>Encaixar</h3>
                <p>Observe ritmo, vínculo com personagens e conflito para entender se a história conversa com o seu jeito de ler.</p>
              </article>
              <article className="map-card">
                <span className="map-number">03</span>
                <h3>Mergulhar</h3>
                <p>Aplique o mapa numa experiência guiada e decida sua próxima leitura com mais clareza.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section outcomes-section">
          <div className="container two-column outcomes-grid">
            <SectionIntro
              label="O que você vai levar"
              title={<>Critérios próprios para escolher melhor o que merece o seu <em>tempo.</em></>}
              text="Não é uma lista genérica de livros para dar conta. É um jeito mais consciente e leve de perceber o que pode prender você."
            />
            <ol className="outcomes-list">
              {outcomes.map((item, index) => (
                <li key={item}><span>{index + 1}</span><p>{item}</p></li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section program-section">
          <div className="container">
            <div className="program-heading">
              <SectionIntro label="90 minutos ao vivo" title={<>O que acontece durante o <em>workshop</em></>} />
              <p>Conteúdo, observação e aplicação prática pelo Google Meet.</p>
            </div>
            <div className="timeline">
              {program.map(([title, text], index) => (
                <article className="timeline-item" key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div><h3>{title}</h3><p>{text}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section guided-section">
          <div className="container guided-card">
            <div className="guided-symbol" aria-hidden="true">“</div>
            <div>
              <p className="section-label">Você não vai ficar apenas ouvindo</p>
              <h2>Uma experiência para perceber, comparar e escolher com os seus próprios critérios.</h2>
              <p>Silvania conduzirá uma aplicação simples do Mapa de Imersão. Você poderá comparar o que sente diante de diferentes sinais narrativos e perceber quais elementos aumentam a sua vontade de continuar.</p>
              <p>Não é prova, teste de personalidade ou obrigação de gostar de um gênero.</p>
            </div>
          </div>
        </section>

        <section className="section fit-section">
          <div className="container">
            <SectionIntro label="Uma escolha honesta" title={<>Este encontro faz sentido para <em>você?</em></>} />
            <div className="fit-grid">
              <article className="fit-card yes-card">
                <h3>É para você se...</h3>
                <ul>
                  <li><CheckIcon />Gosta de ficção emocional, romance, fantasia ou drama.</li>
                  <li><CheckIcon />Sente falta de se envolver com personagens.</li>
                  <li><CheckIcon />Quer voltar a ler por prazer.</li>
                  <li><CheckIcon />Está cansada de começar livros que não seguram sua atenção.</li>
                </ul>
              </article>
              <article className="fit-card no-card">
                <h3>Não é para você se...</h3>
                <ul>
                  <li>Busca conteúdo técnico ou acadêmico.</li>
                  <li>Quer uma fórmula para ler dezenas de livros por mês.</li>
                  <li>Espera que alguém escolha tudo por você sem considerar o seu gosto.</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="section authority-section">
          <div className="container authority-grid">
            <div className="authority-photo">
              <img src="/silvania-autora.webp" alt="Silvania sentada em um espaço de leitura com um livro nas mãos" width="1024" height="1402" loading="lazy" />
              <span>Histórias que permanecem</span>
            </div>
            <div className="authority-copy">
              <p className="section-label">Quem vai conduzir</p>
              <h2>Silvania transformou uma paixão antiga em um projeto dedicado a <em>histórias emocionantes.</em></h2>
              <p>Autora e fundadora do Amo Livros, ela começou a amar histórias ainda na adolescência, quando devorava romances de banca e passava horas desenhando personagens e inventando narrativas em cadernos.</p>
              <p>Depois de seguir outros caminhos profissionais, retomou esse sonho e começou a escrever os próprios livros há cerca de três anos.</p>
              <p>O Amo Livros nasceu dessa combinação: amor por narrativas, vontade de criar personagens que permaneçam na memória e o desejo de construir uma coleção que cresça com o tempo, sem confundir quantidade com uma boa experiência.</p>
              <div className="signature">Silvania</div>
            </div>
          </div>
        </section>

        <section className="section offer-section" id="inscricao">
          <div className="container offer-grid">
            <div className="offer-copy">
              <p className="section-label">Sua inscrição inclui</p>
              <h2>Um encontro para sair com clareza, não com mais uma lista.</h2>
              <ul className="offer-list">
                <li><CheckIcon /><span><strong>Workshop A História Certa</strong> ao vivo pelo Google Meet.</span></li>
                <li><CheckIcon /><span><strong>90 minutos</strong> de conteúdo e aplicação prática com Silvania.</span></li>
                <li><CheckIcon /><span>Entrada no <strong>grupo oficial de participantes no WhatsApp</strong> para avisos e orientações.</span></li>
                <li><CheckIcon /><span>Acesso ao <strong>replay por 48 horas</strong> após a liberação da gravação.</span></li>
                <li><CheckIcon /><span>Apresentação transparente do Amo Livros ao final, sem obrigação de compra.</span></li>
              </ul>
            </div>
            <aside className="price-card">
              <p>Investimento único</p>
              <div className="price"><span>R$</span><strong>29,90</strong></div>
              <p className="price-note">Para participar de uma sessão de 90 minutos ao vivo no Google Meet.</p>
              <CheckoutButton />
              <p className="checkout-pending" id="pendencia-checkout">
                {checkoutUrl ? "Você será direcionada ao checkout oficial." : "O endereço oficial do checkout será adicionado assim que for disponibilizado."}
              </p>
              <div className="date-note">A data e o horário da próxima turma devem ser confirmados no checkout antes da compra.</div>
            </aside>
          </div>
        </section>

        <section className="section legal-section">
          <div className="container legal-card">
            <span className="legal-number">7</span>
            <div>
              <p className="section-label">Direito de arrependimento</p>
              <h2>Você pode solicitar o cancelamento dentro do prazo legal.</h2>
              <p>Como a inscrição é realizada online, você poderá solicitar o cancelamento dentro do prazo legal de 7 dias contado da contratação, observadas as regras aplicáveis ao direito de arrependimento em compras realizadas fora do estabelecimento comercial.</p>
            </div>
          </div>
        </section>

        <section className="section faq-section">
          <div className="container faq-grid">
            <SectionIntro label="Perguntas frequentes" title={<>Antes de escolher, tire suas <em>dúvidas.</em></>} />
            <div className="faq-list">
              {faqs.map(([question, answer], index) => (
                <details key={question} open={index === 0}>
                  <summary>{question}<span aria-hidden="true">+</span></summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="final-section">
          <div className="container final-content">
            <p className="section-label">Seu tempo de leitura é precioso</p>
            <h2>Curto demais para ser gasto no garimpo.</h2>
            <p>Você não precisa prometer que vai ler todos os dias. Comece descobrindo o que faz você querer continuar quando finalmente encontra alguns minutos só seus.</p>
            <a className="button button-primary" href="#inscricao"><span>Participar do workshop por R$ 29,90</span><ArrowIcon /></a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function ThankYouPage() {
  return (
    <div className="thank-page">
      <Header />
      <main className="thank-main">
        <div className="thank-orbit" />
        <div className="container thank-grid">
          <section className="thank-copy">
            <p className="eyebrow"><span />Próximos passos</p>
            <h1>Sua próxima história começa com uma escolha mais consciente.</h1>
            <p>Se você chegou aqui após concluir a inscrição, acompanhe as instruções exibidas no processo de compra. Elas indicarão o próximo passo oficial.</p>
            <a className="button button-primary" href="/a1"><span>Voltar para a página do workshop</span><ArrowIcon /></a>
          </section>
          <section className="steps-card">
            <p className="section-label">O que fazer agora</p>
            <ol>
              <li><span>01</span><div><h2>Confirme a conclusão</h2><p>Verifique a confirmação apresentada pela plataforma utilizada na inscrição.</p></div></li>
              <li><span>02</span><div><h2>Acesse o canal indicado</h2><p>Quando o grupo oficial de participantes no WhatsApp for disponibilizado no processo, entre nele para receber avisos e orientações.</p></div></li>
              <li><span>03</span><div><h2>Aguarde as instruções</h2><p>O acesso ao encontro no Google Meet será orientado pelo canal oficial dos participantes.</p></div></li>
              <li><span>04</span><div><h2>Reserve o seu momento</h2><p>Confirme a data e o horário informados no checkout e prepare um lugar tranquilo para a experiência.</p></div></li>
            </ol>
            <p className="safe-note">Caso a inscrição ainda não tenha sido concluída ou nenhuma orientação tenha sido exibida, retorne à página oficial antes de seguir.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <Brand />
        <p>Workshop A História Certa com Silvania.</p>
        <p>Conteúdo destinado à experiência de leitura.</p>
      </div>
    </footer>
  );
}

function NotFound() {
  return (
    <div className="not-found">
      <Brand />
      <h1>Esta página não foi encontrada.</h1>
      <a className="button button-primary" href="/a1"><span>Conhecer o workshop</span><ArrowIcon /></a>
    </div>
  );
}

const normalizedPath = window.location.pathname.replace(/\/$/, "") || "/a1";
const page = normalizedPath === "/obrigado"
  ? <ThankYouPage />
  : heroContent[normalizedPath]
    ? <SalesPage content={heroContent[normalizedPath]} />
    : <NotFound />;

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>{page}</React.StrictMode>,
);

