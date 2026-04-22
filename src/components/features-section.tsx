import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Автоматизация задач",
    description: "Запускает цепочки команд одним кликом — не нужно вводить вручную каждый раз.",
    icon: "zap",
    badge: "Быстро",
  },
  {
    title: "Полная безопасность",
    description: "Открытый исходный код — вы видите каждую строчку и знаете, что происходит в системе.",
    icon: "lock",
    badge: "Открытый код",
  },
  {
    title: "Не требует установки",
    description: "Просто скачайте .bat файл и запустите. Никаких инсталляторов, реестра и лишних процессов.",
    icon: "globe",
    badge: "Просто",
  },
  {
    title: "Работает офлайн",
    description: "Не нужен интернет — утилита работает полностью локально на вашем компьютере.",
    icon: "target",
    badge: "Офлайн",
  },
  {
    title: "Лёгкий вес",
    description: "Файл весит килобайты, не гигабайты. Никаких тяжёлых зависимостей и фреймворков.",
    icon: "link",
    badge: "< 1 КБ",
  },
  {
    title: "Windows совместимость",
    description: "Работает на Windows 7, 10, 11 без дополнительных настроек прямо из коробки.",
    icon: "brain",
    badge: "Windows",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Почему BatUtil?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Никакого лишнего — только то, что реально нужно для работы с Windows
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "&#129504;"}
                    {feature.icon === "lock" && "&#128274;"}
                    {feature.icon === "globe" && "&#127760;"}
                    {feature.icon === "zap" && "&#9889;"}
                    {feature.icon === "link" && "&#128279;"}
                    {feature.icon === "target" && "&#127919;"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}