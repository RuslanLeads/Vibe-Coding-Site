export type AnimationCardType =
  | "fade-slide"
  | "spring"
  | "rotate"
  | "scale"
  | "path"
  | "layout";

export interface AnimationCardData {
  id: string;
  title: string;
  description: string;
  type: AnimationCardType;
}

export const animationCards: AnimationCardData[] = [
  {
    id: "fade-slide",
    title: "Fade + Slide",
    description: "Базовое появление с движением снизу",
    type: "fade-slide",
  },
  {
    id: "spring",
    title: "Spring",
    description: "Пружинистое движение с физикой",
    type: "spring",
  },
  {
    id: "rotate",
    title: "Rotate on Hover",
    description: "Вращение при наведении",
    type: "rotate",
  },
  {
    id: "scale",
    title: "Scale Pulse",
    description: "Пульсирующее масштабирование",
    type: "scale",
  },
  {
    id: "path",
    title: "Path Drawing",
    description: "Анимация SVG-линии",
    type: "path",
  },
  {
    id: "layout",
    title: "Layout Animation",
    description: "Плавное изменение размера",
    type: "layout",
  },
];
