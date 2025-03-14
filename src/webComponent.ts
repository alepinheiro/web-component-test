import { defineCustomElement } from 'vue'
import App from '@/NoPaymentBanner.ce.vue'

const NoPaymentBanner = defineCustomElement(App)

export function register() {
  customElements.define('no-payment-banner', NoPaymentBanner)
}
