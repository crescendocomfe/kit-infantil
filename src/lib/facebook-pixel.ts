// Facebook Pixel event tracking utilities

declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}

export const trackEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, params);
  }
};

export const trackCustomEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', eventName, params);
  }
};

// Eventos específicos da landing page
export const trackCTAClick = (location: string) => {
  trackEvent('InitiateCheckout', { content_name: 'Kit Crescendo com Fé', location });
};

export const trackViewContent = () => {
  trackEvent('ViewContent', { 
    content_name: 'Kit Crescendo com Fé',
    content_type: 'product',
    value: 37.00,
    currency: 'BRL'
  });
};

export const trackLead = () => {
  trackEvent('Lead', { content_name: 'Kit Crescendo com Fé' });
};
