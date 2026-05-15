# ARCHITECTURE.md

## Архитектура проекта

---

### Структура файлов и папок

```
vibe-coding-showcase/
│
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout: шрифты, тема, метаданные
│   ├── page.tsx                  # Главная страница — собирает все секции
│   └── globals.css               # CSS переменные, @theme Tailwind, базовые стили
│
├── components/
│   ├── sections/                 # Секции страницы (каждая = один блок)
│   │   ├── HeroSection/
│   │   │   ├── index.tsx         # Компонент секции
│   │   │   └── AnimatedBackground.tsx  # Градиентная анимация фона
│   │   ├── AnimationsSection/
│   │   │   ├── index.tsx
│   │   │   ├── AnimationCard.tsx       # Одна карточка с демо
│   │   │   └── cards.ts               # Данные карточек
│   │   ├── InteractivitySection/
│   │   │   ├── index.tsx
│   │   │   ├── ConfettiButton.tsx
│   │   │   ├── MorphButton.tsx
│   │   │   └── ToggleSwitch.tsx
│   │   ├── VisualEffectsSection/
│   │   │   ├── index.tsx
│   │   │   ├── GlassCard.tsx
│   │   │   ├── GlowCard.tsx
│   │   │   └── GradientCard.tsx
│   │   ├── ResponsiveSection/
│   │   │   ├── index.tsx
│   │   │   └── DevicePreview.tsx      # Переключатель desktop/tablet/mobile
│   │   └── FooterSection/
│   │       └── index.tsx
│   │
│   ├── ui/                       # Переиспользуемые UI-компоненты
│   │   ├── SectionWrapper.tsx    # Обёртка для каждой секции (отступы, анимация появления)
│   │   ├── SectionHeader.tsx     # Заголовок + подзаголовок секции
│   │   ├── Badge.tsx             # Маленький бейдж (например "NEW", "CSS Only")
│   │   ├── ThemeToggle.tsx       # Кнопка переключения темы (dark/light)
│   │   └── NavBar.tsx            # Навигация (sticky, blur backdrop)
│   │
│   └── providers/
│       └── ThemeProvider.tsx     # Контекст темы + localStorage
│
├── lib/
│   ├── utils.ts                  # cn() helper и другие утилиты
│   └── animations.ts             # Общие Framer Motion variants
│
├── hooks/
│   ├── useTheme.ts               # Хук для работы с темой
│   └── useConfetti.ts            # Хук для конфетти-эффектов
│
├── public/
│   └── (статичные файлы)
│
├── docs/                         # Документация для Cursor
│   ├── PROJECT_OVERVIEW.md
│   ├── ARCHITECTURE.md
│   ├── TECH_STACK.md
│   └── CURRENT_STATUS.md
│
├── next.config.ts
├── tailwind.config.ts            # (если нужен для v4)
├── tsconfig.json
└── package.json
```

---

### Компоненты — детальное описание

#### `app/layout.tsx`
Root layout. Подключает шрифты (Geist через `next/font`), оборачивает в `ThemeProvider`, задаёт базовые метаданные (title, description, og:image).

```tsx
// Ответственность:
// - <html> тег с data-theme атрибутом
// - Подключение шрифтов
// - Глобальные метаданные
// - Обёртка ThemeProvider
```

#### `app/page.tsx`
Главная страница. Только импортирует и собирает секции в правильном порядке. Никакой логики здесь нет.

```tsx
// Ответственность:
// - Импорт и порядок секций
// - <main> тег
// Никакой бизнес-логики
```

#### `app/globals.css`
CSS-переменные для обеих тем, базовые стили, `@theme` для Tailwind v4.

---

#### `components/sections/HeroSection/index.tsx`
**Назначение:** Первый экран — максимальный wow-эффект.

**Содержимое:**
- Анимированный градиентный фон (медленно движущиеся пятна цвета)
- Заголовок с stagger-анимацией появления по словам
- Подзаголовок
- Две кнопки CTA: "Смотреть демо" (скролл вниз) и "GitHub"
- Скролл-индикатор внизу

**Анимации:**
- Фон: CSS `@keyframes` с `background-position` — бесконечное движение градиента
- Текст: `motion.h1` с `staggerChildren` по словам (каждое слово вылетает снизу)
- Кнопки: `initial={{ opacity: 0, y: 20 }}` с задержкой

#### `components/sections/HeroSection/AnimatedBackground.tsx`
Отдельный компонент для анимированного фона. Несколько `div` с `blur-3xl` и абсолютным позиционированием, анимированных через Framer Motion. Изолирован для переиспользования.

---

#### `components/sections/AnimationsSection/index.tsx`
**Назначение:** Showcase анимационных возможностей Framer Motion.

**Содержимое:**
- Сетка из 4-6 карточек `AnimationCard`
- Каждая карточка — отдельный тип анимации с интерактивным демо внутри
- Карточки появляются с stagger при попадании в viewport

**Типы демо в карточках:**
1. Fade + Slide (базовое появление)
2. Spring animation (пружинистое движение)
3. Rotate on hover
4. Scale pulse
5. Path drawing (SVG анимация)
6. Layout animation (изменение размера с анимацией)

#### `components/sections/AnimationsSection/AnimationCard.tsx`
Карточка с:
- Названием анимации
- Живым демо (кликабельным для reset)
- Иконкой типа
- Hover: поднимается вверх, тень усиливается

#### `components/sections/AnimationsSection/cards.ts`
Массив объектов с описанием каждой карточки. Данные отделены от UI — легко добавить новую карточку без изменения компонентов.

---

#### `components/sections/InteractivitySection/index.tsx`
**Назначение:** Демонстрация "живого" сайта — всё реагирует на действия.

**Содержимое:**
- `ConfettiButton` — кнопка, при клике взрывается конфетти
- `MorphButton` — кнопка меняет форму/текст/цвет при клике (Loading → Success)
- `ToggleSwitch` — красивый переключатель с анимацией
- Слайдер с анимированным thumb
- Счётчик с анимацией цифр при изменении

#### `components/sections/InteractivitySection/ConfettiButton.tsx`
Использует `canvas-confetti`. При клике: конфетти из позиции кнопки, кнопка "подпрыгивает" через `whileTap`.

#### `components/sections/InteractivitySection/MorphButton.tsx`
Состояния: idle → loading → success → idle. `AnimatePresence` для смены текста/иконки. `layoutId` для морфинга формы.

#### `components/sections/InteractivitySection/ToggleSwitch.tsx`
Кастомный toggle с `motion.div` для ползунка. Меняет цвет фона трека при переключении.

---

#### `components/sections/VisualEffectsSection/index.tsx`
**Назначение:** Галерея визуальных эффектов 2025-2026.

**Содержимое:**
- Сетка карточек с разными визуальными эффектами
- Каждая карточка = один эффект

#### `components/sections/VisualEffectsSection/GlassCard.tsx`
Glassmorphism: `backdrop-blur`, полупрозрачный фон, тонкая граница. Hover: усиление blur и яркости.

#### `components/sections/VisualEffectsSection/GlowCard.tsx`
Neon glow: box-shadow с цветом акцента, анимированное пульсирование. Hover: glow усиливается.

#### `components/sections/VisualEffectsSection/GradientCard.tsx`
Градиентные эффекты: mesh-gradient фон, текст с `bg-clip: text`, hover-эффект смены угла градиента.

---

#### `components/sections/ResponsiveSection/index.tsx`
**Назначение:** Интерактивная демонстрация адаптивного дизайна.

**Содержимое:**
- Три кнопки-переключателя: Desktop / Tablet / Mobile
- `DevicePreview` — рамка устройства с контентом внутри
- Контент внутри рамки перестраивается при смене режима

#### `components/sections/ResponsiveSection/DevicePreview.tsx`
SVG-рамка устройства (разная для каждого типа). Внутри — мини-версия лендинга, адаптированная. Анимация смены устройства через `AnimatePresence` + `layoutId`.

---

#### `components/sections/FooterSection/index.tsx`
**Содержимое:**
- Логотип / название
- Краткое описание проекта
- Ссылки: GitHub, Cursor, документация
- **CTA блок:** "Хочешь научиться создавать такое? → Курс по Vibe Coding"
- Копирайт

---

#### `components/ui/SectionWrapper.tsx`
**Ключевой компонент.** Обёртка для каждой секции.

```tsx
// Что делает:
// - Задаёт padding (py-24 lg:py-32)
// - Ограничивает ширину контента (max-w-6xl mx-auto)
// - Горизонтальные отступы (px-4 sm:px-6)
// - Анимация появления секции при скролле (whileInView)
// - Опциональный id для якорных ссылок
// - Опциональный альтернативный фон (чередование секций)

interface SectionWrapperProps {
  id?: string
  children: React.ReactNode
  className?: string
  alternate?: boolean  // Чуть другой цвет фона для чередования
}
```

#### `components/ui/SectionHeader.tsx`
Заголовок секции: бейдж сверху + `h2` + подзаголовок. Единый стиль для всех секций.

```tsx
interface SectionHeaderProps {
  badge?: string      // "ANIMATIONS" "VISUAL EFFECTS" и т.д.
  title: string
  subtitle?: string
  centered?: boolean  // По центру или слева
}
```

#### `components/ui/NavBar.tsx`
Sticky навигация. `backdrop-blur` + полупрозрачный фон. Ссылки на секции (якоря). Справа — `ThemeToggle`. На мобиле: гамбургер-меню с `AnimatePresence`.

#### `components/ui/ThemeToggle.tsx`
Кнопка Sun/Moon с анимацией вращения при переключении.

#### `components/providers/ThemeProvider.tsx`
React Context + `localStorage` для сохранения темы. Применяет `data-theme` атрибут на `<html>`.

---

#### `lib/animations.ts`
Общие Framer Motion variants, используемые по всему проекту:

```ts
export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
}
```

---

### Поток данных и состояния

```
ThemeProvider (Context)
    └── NavBar (читает тему, показывает ThemeToggle)
    └── Все секции (CSS переменные меняются автоматически)

Локальное состояние (useState):
    ├── ResponsiveSection: activeDevice (desktop|tablet|mobile)
    ├── InteractivitySection: toggle states, counter value
    └── AnimationsSection: replay triggers для демо
```

---

### Принципы масштабируемости

1. **Новая секция** = создать папку в `components/sections/`, обернуть в `SectionWrapper`, добавить в `page.tsx`
2. **Новая карточка** = добавить объект в `cards.ts` — UI перестроится автоматически
3. **Новый эффект** = новый компонент в `VisualEffectsSection/`, добавить в сетку
4. **Изменение цветов** = только `globals.css`, всё обновится через CSS переменные
