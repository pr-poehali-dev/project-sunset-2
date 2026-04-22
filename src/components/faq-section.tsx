import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Это точно безопасно? Файл .bat не сломает систему?",
      answer:
        "Да, полностью безопасно. Исходный код открыт — вы можете открыть файл в блокноте и прочитать каждую команду перед запуском. Ничего скрытого нет.",
    },
    {
      question: "Нужны ли права администратора?",
      answer:
        "Зависит от задачи. Базовые функции работают без прав администратора. Для некоторых системных операций потребуется запустить файл от имени администратора.",
    },
    {
      question: "Почему антивирус может ругаться на .bat файл?",
      answer:
        "Некоторые антивирусы подозрительно относятся к .bat файлам по умолчанию, даже если они безопасны. Это ложное срабатывание. Откройте файл в блокноте и убедитесь сами.",
    },
    {
      question: "На каких версиях Windows работает?",
      answer:
        "Утилита работает на Windows 7, 8, 10 и 11 без каких-либо дополнительных зависимостей или установок.",
    },
    {
      question: "Как запустить .bat файл?",
      answer:
        "Просто дважды кликните на скачанный файл. Откроется командная строка и утилита выполнит свою работу. Всё.",
    },
    {
      question: "Могу ли я предложить новые функции?",
      answer:
        "Конечно! Проект открытый. Пишите в GitHub Issues или напрямую автору — буду рад обратной связи.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на популярные вопросы о BatUtil, безопасности и использовании.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}