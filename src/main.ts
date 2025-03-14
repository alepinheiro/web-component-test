import { createApp, defineCustomElement } from 'vue'
import '@/assets/main.css'
import App from '@/NoPaymentBanner.ce.vue'

const NoPaymentBanner = defineCustomElement(App)
customElements.define('no-payment-banner', NoPaymentBanner)

export { NoPaymentBanner }

customElements.define('no-payment-banner', NoPaymentBanner)
// export function register() {
//   customElements.define('no-payment-banner', NoPaymentBanner)
// }

// createApp(App).mount('#app')
