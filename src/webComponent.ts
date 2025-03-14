import { defineCustomElement } from 'vue'
import App from '@/NoPaymentBanner.ce.vue'

const NoPaymentBanner = defineCustomElement(App)
customElements.define('no-payment-banner', NoPaymentBanner)

export { NoPaymentBanner }

customElements.define('no-payment-banner', NoPaymentBanner)
export function register() {
  customElements.define('no-payment-banner', NoPaymentBanner)
}
