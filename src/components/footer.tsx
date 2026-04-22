import { Github, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="font-orbitron text-2xl font-bold text-white mb-4">
              Bat<span className="text-red-500">Util</span>
            </h2>
            <p className="font-space-mono text-gray-300 mb-6 max-w-md">
              Утилита для автоматизации Windows на .bat. Бесплатно, открытый код, один разработчик.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Возможности
                </a>
              </li>
              <li>
                <a href="#safety" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Безопасность
                </a>
              </li>
              <li>
                <a href="#faq" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Вопросы
                </a>
              </li>
              <li>
                <a href="#download" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Скачать
                </a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">О проекте</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  GitHub репозиторий
                </a>
              </li>
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Сообщить об ошибке
                </a>
              </li>
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Контакт с автором
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-red-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-space-mono text-gray-400 text-sm">2026 BatUtil. Сделано одним разработчиком.</p>
            <p className="font-space-mono text-gray-500 text-sm mt-2 md:mt-0">Открытый исходный код · MIT лицензия</p>
          </div>
        </div>
      </div>
    </footer>
  )
}