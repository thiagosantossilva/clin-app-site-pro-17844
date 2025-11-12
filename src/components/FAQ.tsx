import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como faço para agendar um serviço?",
    answer: "Basta baixar o app Clin, criar sua conta, escolher o serviço desejado, selecionar a data e a profissional de sua preferência. O pagamento é feito de forma segura pelo próprio aplicativo.",
  },
  {
    question: "As profissionais são verificadas?",
    answer: "Sim! Todas as profissionais passam por um rigoroso processo de verificação e recebem treinamento contínuo. Você pode ver as avaliações de outros clientes antes de escolher.",
  },
  {
    question: "Posso cancelar o agendamento?",
    answer: "Sim, você pode cancelar com até 24 horas de antecedência sem custos adicionais. Cancelamentos com menos de 24h podem estar sujeitos a taxas conforme nossos termos de uso.",
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer: "Aceitamos cartão de crédito, débito e PIX. Todo o pagamento é feito de forma segura através do aplicativo, antes ou após o serviço conforme sua preferência.",
  },
  {
    question: "E se houver algum problema com o serviço?",
    answer: "Nossa equipe de suporte está sempre disponível. Temos garantia de qualidade e, em caso de problemas, trabalhamos para resolver rapidamente, incluindo possibilidade de reembolso ou nova visita.",
  },
  {
    question: "Como funcionam os planos de assinatura?",
    answer: "Com os planos de assinatura, você agenda serviços recorrentes (semanal, quinzenal ou mensal) com preços especiais. Você escolhe sua profissional preferida e pode cancelar quando quiser, sem multas.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ficou com Alguma Dúvida?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Confira as perguntas mais frequentes ou fale conosco
            </p>
          </div>

          <Accordion type="single" collapsible className="mb-12">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center bg-secondary p-8 rounded-2xl">
            <MessageCircle className="w-16 h-16 mx-auto mb-4 text-accent" />
            <h3 className="text-2xl font-bold mb-4">Ainda tem dúvidas?</h3>
            <p className="text-muted-foreground mb-6">
              Nossa equipe está pronta para ajudar você!
            </p>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full"
            >
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
