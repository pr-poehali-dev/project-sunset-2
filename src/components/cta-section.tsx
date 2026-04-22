import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function CTASection() {
  return (
    <section id="download" className="py-24 px-6 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="slide-up">
          <h2 className="text-5xl font-bold text-foreground mb-6 font-sans text-balance">Готов попробовать?</h2>
          <p className="text-xl text-muted-foreground mb-4 leading-relaxed max-w-2xl mx-auto">
            Скачай .bat файл, запусти — и всё готово. Никаких установок, аккаунтов и подписок.
          </p>
          <p className="text-sm text-muted-foreground mb-10">
            Бесплатно · Открытый код · Windows 7/10/11
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/batutil.bat" download>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 pulse-button text-lg px-8 py-4"
              >
                <Icon name="Download" size={20} />
                <span className="ml-2">Скачать BatUtil.bat</span>
              </Button>
            </a>
            <a href="#features">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 bg-transparent"
              >
                Узнать больше
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}