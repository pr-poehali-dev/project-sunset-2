import Icon from "@/components/ui/icon"

const steps = [
  {
    number: "01",
    icon: "Download",
    title: "Скачайте файл",
    description:
      'Нажмите кнопку "Скачать BatUtil.bat" ниже. Файл весит меньше 10 КБ — загрузится мгновенно.',
  },
  {
    number: "02",
    icon: "FileCode",
    title: "Проверьте код (опционально)",
    description:
      "Откройте файл в блокноте: правая кнопка мыши → «Изменить». Убедитесь, что всё прозрачно.",
  },
  {
    number: "03",
    icon: "Play",
    title: "Запустите",
    description:
      "Дважды кликните на файл или запустите от имени администратора для системных функций.",
  },
  {
    number: "04",
    icon: "CheckCircle",
    title: "Готово",
    description:
      "Утилита выполнит задачу и закроется. Никакой установки, никаких следов в системе.",
  },
]

export function ApplicationsTimeline() {
  return (
    <section id="how-to" className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-orbitron">Как запустить</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Четыре простых шага — никакой установки и технических знаний не требуется
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-red-500/20 md:-translate-x-px" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex items-start gap-8 slide-up ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-red-500 rounded-full -translate-x-1.5 md:-translate-x-2 mt-1 ring-4 ring-background" />

                <div className={`pl-16 md:pl-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <div
                    className={`inline-flex items-center gap-3 mb-3 ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                      <Icon name={step.icon} size={20} className="text-red-500" />
                    </div>
                    <span className="font-orbitron text-red-500 text-sm font-bold">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 font-orbitron">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>

                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
