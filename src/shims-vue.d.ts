declare module '*.vue' {
    import { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
  }

declare global {
  interface Window {
    turnstile: {
      render: (
        elementId: string,
        options: {
          sitekey: string,
          callback: (token: string) => void;
        }
      ) => void;
    };
  }
}
