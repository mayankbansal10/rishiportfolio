declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

export const GA_MEASUREMENT_ID = 'G-661KNYB1K3'

/** Send a custom GA4 event (gtag loaded from index.html). */
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>,
): void {
  if (typeof window.gtag !== 'function') return
  window.gtag('event', eventName, params)
}
