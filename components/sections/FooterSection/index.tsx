import Link from "next/link";

export function FooterSection() {
  return (
    <footer id="footer" className="border-t border-border bg-bg-secondary/50 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-xl font-bold text-text-primary">Vibe Coding Showcase</p>
            <p className="mt-3 max-w-md text-text-secondary">
              Демонстрационный сайт современной веб-разработки: анимации, эффекты и
              интерактивность. Создано за 1 день с помощью AI.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-medium text-text-primary">Ссылки</p>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-primary"
            >
              GitHub
            </Link>
            <Link
              href="https://cursor.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-primary"
            >
              Cursor
            </Link>
            <Link href="/docs" className="text-text-secondary hover:text-accent-primary">
              Документация
            </Link>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-bg-elevated p-6 text-center">
          <p className="text-lg font-semibold text-text-primary">
            Хочешь научиться создавать такое?
          </p>
          <p className="mt-2 text-text-secondary">→ Курс по Vibe Coding</p>
          <a
            href="#"
            className="mt-4 inline-block rounded-full bg-accent-primary px-6 py-3 text-sm font-semibold text-white"
          >
            Узнать больше
          </a>
        </div>

        <p className="mt-10 text-center text-sm text-text-muted">
          © {new Date().getFullYear()} Vibe Coding Showcase. Все права защищены.
        </p>
      </div>
    </footer>
  );
}
