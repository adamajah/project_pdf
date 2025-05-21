import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "Is KentCV free to use?",
      answer: "KentCV offers a free tier that allows you to create and download basic CVs. Premium features like AI review and multiple templates require a subscription."
    },
    {
      question: "Can I export my CV as a PDF?",
      answer: "Yes, all CVs created with KentCV can be exported as high-quality PDFs that maintain their formatting."
    },
    {
      question: "Are the templates ATS-friendly?",
      answer: "Absolutely! All our templates are designed to be ATS-friendly, ensuring your CV gets past automated screening systems."
    },
    {
      question: "How does the AI review system work?",
      answer: "Our AI review system analyzes your CV content for grammar issues, weak phrasing, and content gaps. It provides actionable suggestions to improve your CV's impact."
    },
    {
      question: "Can I use KentCV on my mobile device?",
      answer: "Yes, KentCV is fully responsive and works on desktop, tablet, and mobile devices."
    },
    {
      question: "How many CVs can I create and save?",
      answer: "Free users can create and save up to 2 CVs. Premium users have unlimited CV creation and storage."
    }
  ];

  return (
    <section id="faq" className="py-24">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Frequently asked questions</h2>
          <p className="text-muted-foreground">
            Find answers to common questions about KentCV
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}