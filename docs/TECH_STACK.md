# TECH_STACK.md

## Технологический стек

---

### Итоговый выбор

| Слой | Технология | Версия |
|------|-----------|--------|
| Фреймворк | **Next.js 15 (App Router)** | 15.x |
| Язык | **TypeScript** | 5.x |
| Стили | **Tailwind CSS v4** | 4.x |
| Анимации | **Framer Motion** | 11.x |
| Конфетти | **canvas-confetti** | 1.x |
| Иконки | **Lucide React** | latest |
| Шрифты | **Geist** (Variable font) | latest |
| Деплой | **Vercel** | — |

---

### Почему именно этот стек

#### Next.js 15 (App Router)

**Зачем:** Showcase-сайт — это по сути статичная страница с интерактивом на клиенте. Next.js даёт:
- `use client` директива только там, где нужен JS — остальное статично
- Automatic image optimization
- Встроенный font optimization
- Простейший деплой на Vercel одной командой
- Удобная структура через папки, понятно новичкам

**Альтернативы:**
- Vite + React — проще, но нет оптимизаций из коробки
- Astro — лучше для чисто статичных сайтов, но Framer Motion сложнее интегрировать

#### TypeScript

**Зачем:** Пропсы компонентов задокументированы в коде, автодополнение в Cursor работает лучше, меньше ошибок при рефакторинге. Для showcase-проекта — хорошая практика.

#### Tailwind CSS v4

**Зачем для этого проекта:**
- Utility-first = быстрая разработка, легко описать в промпте AI
- CSS Variables встроены из коробки (тёмная/светлая тема)
- Responsive prefixes (`md:`, `lg:`) — адаптивность без написания медиазапросов
- Новый v4 работает через CSS `@theme` — ещё ближе к нативному CSS

**Настройка тем:** через `data-theme="dark"` на `<html>` + CSS переменные в `@theme`.

#### Framer Motion 11

**Зачем это главная библиотека анимаций:**
- `useInView` + `variants` = scroll-triggered анимации в 5 строк
- `staggerChildren` = карточки появляются по очереди автоматически
- `whileHover`, `whileTap` = интерактивные эффекты декларативно
- `AnimatePresence` = анимации появления/исчезновения компонентов
- Отличная документация, AI хорошо пишет код для неё

```tsx
// Пример stagger — 5 строк кода
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
}
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
}
```

#### canvas-confetti

**Зачем:** Самая лёгкая (< 7kb) и простая библиотека для конфетти-эффектов. Одна функция — много радости в блоке Interactivity.

#### Geist Font

**Зачем:** Шрифт от Vercel, оптимизирован для веба, Variable font (один файл для всех начертаний), отлично смотрится для tech-тематики.

---

### Структура зависимостей

```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "framer-motion": "^11.0.0",
    "canvas-confetti": "^1.9.0",
    "lucide-react": "latest",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "@types/react": "^19.0.0",
    "@types/node": "^20.0.0",
    "@types/canvas-confetti": "^1.6.0",
    "tailwindcss": "^4.0.0",
    "@tailwindcss/postcss": "^4.0.0"
  }
}
```

---

### Утилиты

#### `cn()` helper — объединение классов

```tsx
// lib/utils.ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

Использование: `className={cn("base-class", condition && "conditional-class")}`

---

### Деплой

```bash
# Локальная разработка
npm run dev          # http://localhost:3000

# Продакшн билд
npm run build
npm run start

# Деплой на Vercel (из корня проекта)
vercel               # Первый деплой
vercel --prod        # Деплой в продакшн
```

---

### Производительность

| Техника | Реализация |
|---------|-----------|
| Lazy animations | `whileInView` — анимация только при появлении в viewport |
| Dynamic imports | `dynamic(() => import(...), { ssr: false })` для heavy компонентов |
| Image optimization | `next/image` для всех изображений |
| Font optimization | `next/font` с `display: swap` |
| CSS-only эффекты | Glassmorphism, glow — чистый CSS, без JS |
