import { Card, CardContent } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const points = [
  {
    icon: "FileCode",
    title: "Открытый исходный код",
    description:
      "Весь код открыт на GitHub. Откройте файл в блокноте и прочитайте каждую строчку — никаких скрытых команд.",
  },
  {
    icon: "ShieldCheck",
    title: "Нет вирусов и малварей",
    description:
      "Файл не содержит вредоносного кода. Если антивирус ругается — это ложное срабатывание на .bat формат.",
  },
  {
    icon: "WifiOff",
    title: "Работает офлайн",
    description:
      "Утилита не подключается к интернету, не собирает данные и не отправляет ничего на внешние серверы.",
  },
  {
    icon: "Trash2",
    title: "Лёгкое удаление",
    description:
      "Никакого реестра, никаких фоновых процессов. Удалить — просто удалите файл. Никаких следов в системе.",
  },
]

export function SafetySection() {
  return (
    <section id="safety" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Безопасность</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-space-mono">
            Мы понимаем, что запустить незнакомый .bat файл — это доверие. Вот почему это безопасно.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {points.map((point, index) => (
            <Card
              key={index}
              className="glow-border bg-card border-red-500/20 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
                  <Icon name={point.icon} size={24} className="text-red-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 font-orbitron">{point.title}</h3>
                  <p className="text-gray-400 leading-relaxed font-space-mono text-sm">{point.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors font-space-mono text-sm"
          >
            <Icon name="Github" size={16} />
            Посмотреть исходный код на GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
