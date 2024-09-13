import { createI18n } from 'vue-i18n';

// Типизация для структуры переводов
interface MessageSchema {
  title: string;
  adventages: {
    one: string;
    two: string;
    three: string;
  };
  button_text: string;
}

// Тексты переводов
const messages: Record<string, MessageSchema> = {
  en: {
    title: 'Our Advantages',
    adventages: {
      one: 'High Quality',
      two: 'Fast Delivery',
      three: 'Great Support',
    },
    button_text: 'Change to Russian',
  },
  ru: {
    title: 'Наши Преимущества',
    adventages: {
      one: 'Высокое Качество',
      two: 'Быстрая Доставка',
      three: 'Отличная Поддержка',
    },
    button_text: 'Переключить на английский',
  },
};

// Создаем экземпляр i18n с типизацией
const i18n = createI18n<MessageSchema>({
  locale: 'en', // Язык по умолчанию
  fallbackLocale: 'en',
  messages, // Передаем переводы
});

export default i18n;
