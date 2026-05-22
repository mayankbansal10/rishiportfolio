declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined

let initialized = false

/** Load Google Analytics 4 when VITE_GA_MEASUREMENT_ID is set (e.g. G-XXXXXXXXXX). */
export function initGoogleAnalytics(): void {
  if (initialized || !MEASUREMENT_ID?.startsWith('G-')) return

  initialized = true

  window.dataLayer = window.dataLayer ?? []
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer?.push(args)
  }
  window.gtag('js', new Date())
  window.gtag('config', MEASUREMENT_ID, {
    send_page_view: true,
    anonymize_ip: true,
  })

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`
  document.head.appendChild(script)
}

/** Send a custom GA4 event (optional). */
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>,
): void {
  if (!initialized || !window.gtag) return
  window.gtag('event', eventName, params)
}
