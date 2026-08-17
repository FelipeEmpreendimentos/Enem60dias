const CHECKOUT_URL = "https://hotmart.com/pt-br/marketplace/produtos/redacao-60d-pro-plano-completo-de-60-dias-para-o-enem/Q107134505Y";

const pains = [
  {
    number: "01",
    title: "Você conhece o tema, mas trava na primeira linha",
    text: "A folha fica em branco porque falta um caminho claro para transformar ideias em texto.",
  },
  {
    number: "02",
    title: "Você estuda muito e ainda não sabe o que corrigir",
    text: "Sem enxergar as cinco competências, cada treino parece uma tentativa no escuro.",
  },
  {
    number: "03",
    title: "O repertório some justamente na hora da prova",
    text: "Decorar frases prontas não resolve. Você precisa aprender a escolher e adaptar argumentos.",
  },
];

const methodSteps = [
  ["01", "Recorte do tema", "Entenda exatamente qual problema a proposta está pedindo para discutir."],
  ["02", "Projeto em cinco linhas", "Organize tese, dois argumentos e o caminho da intervenção antes de escrever."],
  ["03", "Tese objetiva", "Defina o posicionamento que vai orientar o texto inteiro."],
  ["04", "Argumentos diferentes", "Evite repetição e desenvolva duas causas, efeitos ou perspectivas complementares."],
  ["05", "Repertório com função", "Use referências para sustentar a análise — nunca apenas para enfeitar o parágrafo."],
  ["06", "Intervenção completa", "Conecte agente, ação, meio, finalidade e detalhamento ao diagnóstico apresentado."],
  ["07", "Revisão por competência", "Confira o texto com critérios claros e descubra o próximo ponto a melhorar."],
];

const modules = [
  ["01", "Comece aqui", "A rota de uso do material para iniciar sem se perder entre os arquivos."],
  ["02", "Manual completo", "Estrutura, cinco competências, planejamento, repertório, coesão e intervenção."],
  ["03", "Plano de 60 dias", "Tarefas progressivas e flexíveis para transformar estudo em rotina."],
  ["04", "Banco de repertórios", "Mais de 80 referências explicadas e 50 matrizes de argumentos para aplicar com função."],
  ["05", "40 temas e simulados", "Propostas inéditas para praticar os principais eixos sociais do ENEM."],
  ["06", "100 exercícios", "Treinos objetivos com gabarito comentado para fixar cada habilidade."],
  ["07", "12 redações comentadas", "Modelos originais analisados por estrutura, argumento e competência."],
  ["08", "Folhas imprimíveis", "Projeto de texto, folha de redação e ficha de autocorreção para seus treinos."],
  ["09", "Dashboard de evolução", "Planilha para acompanhar C1 a C5, nota total e erros prioritários."],
  ["10", "10 mapas mentais", "Revisões visuais e rápidas dos pontos que você precisa lembrar."],
  ["11", "100 estruturas adaptáveis", "Introdução, tese, desenvolvimento, repertório, coesão e intervenção por função."],
  ["12", "Método de 30 minutos", "Protocolo treinável para planejar, escrever e revisar com mais agilidade."],
  ["13", "120 planos-modelo", "Três rotas argumentativas para cada um dos 40 temas do material."],
];

const faqs = [
  ["O material é físico?", "Não. O Redação 60D PRO é 100% digital. Você recebe os arquivos para acessar no celular ou computador e pode imprimir as folhas de treino quando quiser."],
  ["Serve para quem está começando do zero?", "Sim. O conteúdo começa pelos fundamentos e avança de forma progressiva. O plano de 60 dias informa o que estudar e treinar em cada etapa."],
  ["Os 120 planos-modelo são redações prontas?", "Não. São rotas de planejamento que mostram tese, argumentos e possibilidades de intervenção. Você aprende a adaptar as decisões ao tema e escrever com suas próprias palavras."],
  ["Vou conseguir escrever em 30 minutos imediatamente?", "O tempo de 30 minutos é uma meta treinável, não uma promessa automática. O protocolo ensina a reduzir o tempo gradualmente, sem abandonar planejamento e revisão."],
  ["O produto inclui correção individual?", "Não inclui correção feita por professor. Você recebe exercícios comentados, redações analisadas, ficha de autocorreção e dashboard para acompanhar a evolução."],
  ["Como recebo o acesso?", "Depois da confirmação do pagamento, a plataforma de compra libera o acesso ao pacote digital no e-mail cadastrado."],
];

function CheckIcon() {
  return <span className="check-icon" aria-hidden="true">✓</span>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Redação 60D PRO — início">
          <span className="brand-mark">60</span>
          <span>REDAÇÃO <strong>60D PRO</strong></span>
        </a>
        <a className="header-cta" href={CHECKOUT_URL}>Quero começar</a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <div className="hero-content page-shell">
          <div className="hero-copy">
            <div className="eyebrow"><span /> Preparação completa para o ENEM 2026</div>
            <h1>
              Pare de travar na redação e aprenda a construir um texto <em>competitivo em 60 dias.</em>
            </h1>
            <p className="hero-lead">
              Um plano guiado, do zero à revisão final, para você dominar estrutura, argumentação,
              repertório e proposta de intervenção — mesmo que hoje não saiba por onde começar.
            </p>
            <ul className="hero-benefits">
              <li><CheckIcon /> Método prático e progressivo</li>
              <li><CheckIcon /> Acesso imediato ao material</li>
              <li><CheckIcon /> Estude no seu ritmo</li>
            </ul>
            <div className="hero-actions">
              <a className="primary-button" href={CHECKOUT_URL}>
                Quero dominar a redação <span>→</span>
              </a>
              <div className="price-note">
                <span>Preço de lançamento</span>
                <strong>R$ 19,90</strong>
              </div>
            </div>
            <p className="microcopy">Compra única • acesso imediato • material digital</p>
          </div>

          <div className="hero-visual" aria-label="Apresentação do material Redação 60D PRO">
            <div className="cover-shadow" />
            <div className="cover-card">
              <img src="/redacao-60d-pro-cover.png" alt="Capa do Redação 60D PRO" />
              <span className="cover-edge" />
            </div>
            <div className="floating-card floating-card-top">
              <span className="floating-icon">✦</span>
              <span><strong>13 módulos</strong>Material completo</span>
            </div>
            <div className="floating-card floating-card-bottom">
              <span className="floating-icon">✓</span>
              <span><strong>60 dias</strong>Plano passo a passo</span>
            </div>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Principais conteúdos">
        <div className="page-shell proof-grid">
          <div><strong>100</strong><span>estruturas adaptáveis</span></div>
          <div><strong>120</strong><span>planos-modelo</span></div>
          <div><strong>40</strong><span>temas de treino</span></div>
          <div><strong>100</strong><span>exercícios práticos</span></div>
        </div>
      </section>

      <section className="problem-section section-pad">
        <div className="page-shell">
          <div className="section-heading centered">
            <span className="section-kicker">Você não precisa de mais conteúdo solto</span>
            <h2>O que falta é um <em>caminho claro</em> para evoluir.</h2>
            <p>Se a redação parece difícil demais, provavelmente você está tentando aprender tudo ao mesmo tempo.</p>
          </div>
          <div className="pain-grid">
            {pains.map((pain) => (
              <article className="pain-card" key={pain.number}>
                <span className="pain-number">{pain.number}</span>
                <h3>{pain.title}</h3>
                <p>{pain.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="method-section section-pad">
        <div className="page-shell method-layout">
          <div className="section-heading method-heading">
            <span className="section-kicker light">O método por trás do material</span>
            <h2>Transforme qualquer tema em uma sequência de <em>decisões treináveis.</em></h2>
            <p>
              Em vez de depender de inspiração ou textos decorados, você aprende um processo repetível
              para pensar, escrever e revisar.
            </p>
            <a className="text-link" href="#conteudo">Ver tudo o que vou receber <span>↓</span></a>
          </div>
          <div className="method-list">
            {methodSteps.map(([number, title, text]) => (
              <article className="method-step" key={number}>
                <span>{number}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section section-pad" id="conteudo">
        <div className="page-shell">
          <div className="section-heading centered">
            <span className="section-kicker">Por dentro do Redação 60D PRO</span>
            <h2>Todo o conteúdo que você precisa, <em>organizado em 13 módulos.</em></h2>
            <p>Do primeiro contato com a estrutura até o acompanhamento da sua evolução.</p>
          </div>
          <div className="module-grid">
            {modules.map(([number, title, text], index) => (
              <article className={`module-card ${index >= 9 ? "module-card-featured" : ""}`} key={number}>
                <div className="module-top"><span>Módulo {number}</span>{index >= 9 && <b>NOVO</b>}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>

          <div className="authorship-callout">
            <div className="callout-symbol">A</div>
            <div>
              <span>Estrutura não é texto decorado</span>
              <h3>Você aprende a adaptar — não a copiar.</h3>
              <p>
                As 100 estruturas e os 120 planos-modelo mostram a função de cada decisão. O objetivo é
                reduzir o bloqueio e fortalecer sua autoria, mantendo o texto pertinente ao recorte proposto.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="numbers-section">
        <div className="page-shell numbers-layout">
          <div>
            <span className="section-kicker light">Uma biblioteca que vira prática</span>
            <h2>Não é só para ler.<br />É para usar em cada treino.</h2>
          </div>
          <div className="numbers-grid">
            <article><strong>80+</strong><span>repertórios explicados</span></article>
            <article><strong>50</strong><span>matrizes de argumentos</span></article>
            <article><strong>12</strong><span>redações comentadas</span></article>
            <article><strong>5</strong><span>competências acompanhadas</span></article>
          </div>
        </div>
      </section>

      <section className="audience-section section-pad">
        <div className="page-shell audience-grid">
          <div className="audience-card audience-card-yes">
            <span className="audience-label">É para você se...</span>
            <h2>Você quer estudar com direção.</h2>
            <ul>
              <li><CheckIcon /> Vai fazer o ENEM 2026 e ainda trava ao receber um tema.</li>
              <li><CheckIcon /> Está começando ou sente que seus argumentos ficam genéricos.</li>
              <li><CheckIcon /> Precisa organizar a preparação em uma rotina possível.</li>
              <li><CheckIcon /> Quer entender as cinco competências e medir sua evolução.</li>
            </ul>
          </div>
          <div className="audience-card audience-card-no">
            <span className="audience-label">Não é uma solução mágica</span>
            <h2>O resultado depende da prática.</h2>
            <ul>
              <li><span className="x-icon">×</span> Não entrega tema secreto ou previsão da prova.</li>
              <li><span className="x-icon">×</span> Não promete nota 1000 ou aprovação garantida.</li>
              <li><span className="x-icon">×</span> Não substitui treino, revisão e correção de qualidade.</li>
              <li><span className="x-icon">×</span> Não oferece redações para memorizar e copiar.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="offer-section section-pad" id="oferta">
        <div className="offer-glow" />
        <div className="page-shell offer-layout">
          <div className="offer-copy">
            <span className="section-kicker light">Oferta de lançamento</span>
            <h2>Comece hoje sua preparação para a redação do ENEM 2026.</h2>
            <p>
              Receba os 13 módulos em um único pacote digital e siga um plano claro pelos próximos 60 dias.
            </p>
            <div className="offer-summary">
              <div><CheckIcon /><span><strong>Método</strong>Manual, plano de 60 dias e protocolo de 30 minutos</span></div>
              <div><CheckIcon /><span><strong>Execução</strong>100 estruturas e 120 planos-modelo</span></div>
              <div><CheckIcon /><span><strong>Conteúdo</strong>Repertórios, argumentos, temas e simulados</span></div>
              <div><CheckIcon /><span><strong>Prática</strong>Exercícios, redações, folhas e dashboard</span></div>
            </div>
          </div>

          <div className="checkout-card" id="checkout-pendente">
            <span className="offer-badge">ACESSO COMPLETO</span>
            <p className="checkout-product">Redação 60D PRO</p>
            <div className="checkout-price">
              <span>por apenas</span>
              <strong><small>R$</small> 19,90</strong>
              <b>pagamento único</b>
            </div>
            <ul>
              <li><CheckIcon /> 13 módulos digitais</li>
              <li><CheckIcon /> Acesso liberado após o pagamento</li>
              <li><CheckIcon /> Arquivos para celular e computador</li>
              <li><CheckIcon /> Folhas prontas para impressão</li>
            </ul>
            <a className="primary-button checkout-button" href={CHECKOUT_URL}>
              Quero o Redação 60D PRO <span>→</span>
            </a>
            <p className="secure-note">Compra processada em ambiente seguro</p>
          </div>
        </div>
      </section>

      <section className="faq-section section-pad">
        <div className="page-shell faq-layout">
          <div className="section-heading">
            <span className="section-kicker">Antes de começar</span>
            <h2>Perguntas frequentes</h2>
            <p>As respostas mais importantes sobre acesso, formato e utilização do material.</p>
          </div>
          <div className="faq-list">
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}<span>+</span></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="page-shell final-cta-inner">
          <span>ENEM 2026</span>
          <h2>Sua próxima redação pode começar com um plano — não com uma folha em branco.</h2>
          <a className="primary-button" href={CHECKOUT_URL}>Começar por R$ 19,90 <span>→</span></a>
        </div>
      </section>

      <footer>
        <div className="page-shell footer-inner">
          <div className="brand footer-brand"><span className="brand-mark">60</span><span>REDAÇÃO <strong>60D PRO</strong></span></div>
          <p>Material educacional independente, sem vínculo com Inep, MEC ou Governo Federal. Resultados variam conforme nível inicial, prática, correção e aplicação.</p>
          <small>© 2026 Redação 60D PRO. Todos os direitos reservados.</small>
        </div>
      </footer>

      <div className="mobile-buy-bar">
        <div><span>Oferta de lançamento</span><strong>R$ 19,90</strong></div>
        <a href={CHECKOUT_URL}>Quero começar</a>
      </div>
    </main>
  );
}
