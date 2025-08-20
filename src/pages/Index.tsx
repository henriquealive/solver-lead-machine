import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/solver-hero.jpg";
import resultsImage from "@/assets/solver-results.jpg";
import {
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  LineChart,
  MessageCircle,
  Users,
  Target,
  BarChart3,
  ThumbsUp,
  AlertTriangle,
  Megaphone,
} from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/+5511930861085";

const Index = () => {
  const canonicalUrl = typeof window !== "undefined" ? window.location.href : "https://solver.agency/";

  return (
    <>
      <Helmet>
        <title>Solver | Agência de Marketing que Aumenta suas Vendas</title>
        <meta
          name="description"
          content="Transformamos negócios em máquinas de vendas. Estratégia, criatividade e dados para gerar leads no WhatsApp e aumentar seu faturamento."
        />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Solver",
            url: canonicalUrl,
            slogan: "Transformamos negócios comuns em máquinas de vendas.",
            sameAs: [
              "https://instagram.com/solver",
              "https://linkedin.com/company/solver",
            ],
            contactPoint: [{
              "@type": "ContactPoint",
              contactType: "sales",
              url: WHATSAPP_LINK,
              availableLanguage: ["Portuguese", "English"],
            }],
          })}
        </script>
      </Helmet>

      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2" aria-label="Solver - Página inicial">
            <img
              src="/lovable-uploads/42a1d000-ed15-4919-b0fe-35553c2e5d5c.png"
              alt="Solver Marketing Digital - Logo"
              className="h-8 w-auto"
              loading="eager"
              decoding="async"
            />
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#solucoes" className="story-link">Soluções</a>
            <a href="#diferenciais" className="story-link">Diferenciais</a>
            <a href="#beneficios" className="story-link">Benefícios</a>
            <a href="#resultados" className="story-link">Resultados</a>
          </div>
          <Button asChild variant="hero" size="sm" aria-label="Fale conosco no WhatsApp">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover-scale">
              Fale no WhatsApp
            </a>
          </Button>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative">
          <div className="container mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h1 className="font-heading text-primary text-4xl md:text-5xl leading-tight">
                Transformamos empresas comuns em máquinas de vendas
              </h1>
              <p className="text-lg text-muted-foreground">
                Acreditamos que cada negócio tem uma história única e a nossa missão é fazer a sua ser vista, lembrada e escolhida. Combinamos estratégia, criatividade e dados para atrair as pessoas certas e transformar interesse em vendas. Enquanto você foca no que faz de melhor - atender e encantar seus clientes - nós cuidamos de tudo: do tráfego pago ao fortalecimento da sua marca.
              </p>
              <p className="text-lg text-primary font-semibold">
                👉 Mais visibilidade. Mais clientes. Mais crescimento.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="hero" size="xl" aria-label="Clique e fale agora pelo WhatsApp" className="hover-scale">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    Clique aqui e fale agora pelo WhatsApp!
                  </a>
                </Button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6">
                <div className="flex items-center gap-3">
                  <TrendingUp className="text-primary" />
                  <div>
                    <p className="font-semibold">+320%</p>
                    <p className="text-sm text-muted-foreground">ROI médio</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="text-primary" />
                  <div>
                    <p className="font-semibold">+200</p>
                    <p className="text-sm text-muted-foreground">Clientes</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-primary" />
                  <div>
                    <p className="font-semibold">Transparência</p>
                    <p className="text-sm text-muted-foreground">Relatórios claros</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="text-primary" />
                  <div>
                    <p className="font-semibold">Atendimento</p>
                    <p className="text-sm text-muted-foreground">Próximo e consultivo</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <img
                src={heroImage}
                alt="Equipe da Solver colaborando com notebooks e gráficos de crescimento"
                className="w-full rounded-lg shadow-lg ring-1 ring-border object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Prova Social */}
        <section aria-labelledby="prova-social" className="py-12 md:py-16 bg-secondary/60 border-y">
          <div className="container mx-auto px-6">
            <h2 id="prova-social" className="sr-only">Prova Social</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                "+3M em mídia gerenciada",
                "+50 nichos atendidos",
                "Satisfação 4.9/5",
                "Atuação Brasil inteiro",
              ].map((label) => (
                <div key={label} className="p-4 rounded-md bg-background shadow-sm">
                  <p className="text-sm text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Problemas que resolvemos */}
        <section id="problemas" className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mb-10">
              <h2 className="font-heading text-primary text-3xl md:text-4xl">Problemas que resolvemos</h2>
              <p className="text-muted-foreground mt-3">
                Enquanto muitos falam sobre resultados, nós os entregamos.
              </p>
            </div>
            <div className="space-y-6">
              {[
                { 
                  icon: TrendingUp, 
                  title: "🔹 Marketing que não dá retorno", 
                  desc: "Você não precisa gastar mais. Precisa investir melhor. Analisamos dados, cortamos desperdícios e criamos campanhas otimizadas em tempo real." 
                },
                { 
                  icon: AlertTriangle, 
                  title: "🔹 Falta de constância nas redes sociais", 
                  desc: "Quem não aparece, é esquecido. Mantemos sua marca ativa, estratégica e irresistível para que o público pense em você antes da concorrência." 
                },
                { 
                  icon: Megaphone, 
                  title: "🔹 Baixa geração de leads", 
                  desc: "Sem leads, não há crescimento. Criamos estratégias avançadas para capturar clientes qualificados e escalar suas vendas." 
                },
                { 
                  icon: Target, 
                  title: "🔹 Perda de mercado para concorrentes", 
                  desc: "Cada dia sem presença digital é uma fatia do mercado perdida. Reconquistamos seu espaço e posicionamos sua marca como referência no nicho." 
                },
                { 
                  icon: Users, 
                  title: "🔹 Engajamento fraco e falta de relevância", 
                  desc: "Chega de postar para o vazio. Criamos conteúdos e campanhas que geram desejo, engajam seu público e transformam seguidores em clientes fiéis." 
                },
              ].map(({ icon: Icon, title, desc }) => (
                <article key={title} className="p-6 rounded-lg border bg-card">
                  <div className="flex items-start gap-4">
                    <Icon className="text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">{title}</h3>
                      <p className="text-sm text-muted-foreground">{desc}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Solução oferecida */}
        <section id="solucoes" className="py-16 md:py-24 bg-secondary/60 border-y">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mb-10">
              <h2 className="font-heading text-primary text-3xl md:text-4xl">O que fazemos</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { 
                  icon: Megaphone, 
                  title: "✨ Tráfego Pago de Alta Performance", 
                  desc: "Não é apenas anúncio. É posicionamento estratégico no momento certo, diante do público certo. Segmentação avançada, otimização contínua e ROI positivo." 
                },
                { 
                  icon: LineChart, 
                  title: "✨ Conteúdo Inteligente", 
                  desc: "Estudamos o seu nicho, entendemos seu público e criamos conteúdos que comunicam, conectam e convertem. Sua marca será vista, lembrada e respeitada." 
                },
                { 
                  icon: BarChart3, 
                  title: "✨ Otimização Total", 
                  desc: "Cada detalhe importa. Analisamos sites, anúncios e funis para transformar visitantes em clientes reais, com testes e métricas que maximizam conversões." 
                },
              ].map(({ icon: Icon, title, desc }) => (
                <article key={title} className="p-6 rounded-lg bg-card border hover-scale">
                  <Icon className="text-primary mb-4" />
                  <h3 className="font-semibold mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section id="diferenciais" className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mb-10">
              <h2 className="font-heading text-primary text-3xl md:text-4xl">Por que escolher a Solver?</h2>
              <p className="text-muted-foreground mt-3">Na Solver, cada ação tem um propósito: gerar impacto direto no seu negócio. Existe sempre um "antes" e "depois" de trabalhar conosco.</p>
            </div>
            <div className="space-y-4">
              {[
                "🔹 Não prometemos, entregamos.",
                "🔹 Transformamos cliques em clientes e ideias em faturamento.",
                "🔹 Consultoria personalizada, estratégias únicas, resultados reais.",
              ].map((item) => (
                <div key={item} className="p-6 rounded-lg bg-card border">
                  <p className="font-semibold text-lg">{item}</p>
                </div>
              ))}
              <div className="mt-8 p-6 rounded-lg bg-primary/10 border border-primary/20">
                <p className="text-center text-lg font-semibold text-primary">
                  📌 Com a Solver, você será visto, lembrado e nunca mais esquecido.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section id="beneficios" className="py-16 md:py-24 bg-secondary/60 border-y">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mb-10">
              <h2 className="font-heading text-primary text-3xl md:text-4xl">Benefícios para o seu negócio</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Posicionamento profissional nas redes sociais",
                "Leads qualificados que ainda não conheciam sua marca",
                "Marca respeitada e lembrada",
                "Mais vendas e mais autoridade",
              ].map((b) => (
                <div key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary shrink-0 mt-0.5" />
                  <p>{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Prova de resultado */}
        <section id="resultados" className="py-16 md:py-24">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-heading text-primary text-3xl md:text-4xl">Prova de resultado</h2>
              <p className="text-muted-foreground mt-3">
                Cases reais, números concretos. Relatórios que você entende e acompanha.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  { label: "Crescimento de leads", value: "+180%" },
                  { label: "CPL reduzido", value: "-42%" },
                  { label: "Taxa de conversão", value: "+68%" },
                  { label: "Retorno em mídia", value: "+320%" },
                ].map((s) => (
                  <div key={s.label} className="p-4 rounded-md bg-secondary">
                    <p className="text-2xl font-semibold">{s.value}</p>
                    <p className="text-sm text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={resultsImage}
                alt="Gráficos de performance e KPIs em crescimento"
                className="w-full rounded-lg shadow-lg ring-1 ring-border object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Quebra de objeções */}
        <section id="objeções" className="py-16 md:py-24 bg-secondary/60 border-y">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mb-10">
              <h2 className="font-heading text-primary text-3xl md:text-4xl">Sem enrolação, respostas diretas</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { q: "Já tivemos frustração com outras agências.", a: "Nosso processo é transparente, com metas, prazos e acompanhamento semanal." },
                { q: "Não enxergamos como investimento.", a: "Mostramos o impacto no faturamento com métricas e relatórios objetivos." },
                { q: "Medo de soluções genéricas.", a: "Tudo é personalizado para o seu nicho e momento do negócio." },
                { q: "Insegurança por falta de previsibilidade.", a: "Planejamento claro, metas realistas e comunicação contínua." },
              ].map((item) => (
                <article key={item.q} className="p-6 rounded-lg bg-card border">
                  <h3 className="font-semibold">{item.q}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{item.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6 text-center max-w-3xl">
            <h2 className="font-heading text-primary text-3xl md:text-4xl">Próximos passos</h2>
            <p className="text-muted-foreground mt-3">
              Seu crescimento começa agora.
            </p>
            <p className="text-lg text-primary font-semibold mt-2">
              👉 Clique aqui e fale direto com nossa equipe no WhatsApp.
            </p>
            <div className="mt-6 flex justify-center">
              <Button asChild variant="hero" size="xl" aria-label="Falar com a Solver no WhatsApp" className="hover-scale">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  Clique aqui e fale agora pelo WhatsApp!
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 items-center">
          <div className="flex items-center gap-2">
            <img
              src="/lovable-uploads/42a1d000-ed15-4919-b0fe-35553c2e5d5c.png"
              alt="Solver Marketing Digital - Logo"
              className="h-7 w-auto"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="text-sm text-muted-foreground">© {new Date().getFullYear()} Solver. Todos os direitos reservados.</div>
          <div className="flex justify-start md:justify-end gap-4 text-sm">
            <a href="#" className="story-link">Política de Privacidade</a>
            <a href="#" className="story-link">Termos de Uso</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Index;
