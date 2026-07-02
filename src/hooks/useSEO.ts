import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

interface SEOMeta {
  title: string
  description: string
  canonical?: string
}

const BASE_URL = 'https://dpowertestingservices.com'

const routeMeta: Record<string, SEOMeta> = {
  '/': {
    title: 'Electrical Testing & Engineering Services Singapore | D-Power Testing Services',
    description:
      'D-Power Testing Services Pte Ltd provides expert electrical testing, LV panel maintenance, relay testing, earthing system checks, and 24/7 emergency support across Singapore.',
    canonical: `${BASE_URL}/`,
  },
  '/about': {
    title: 'About D-Power Testing Services | LV Panel & Relay Experts Singapore',
    description:
      'Learn about D-Power Testing Services Pte Ltd — a Singapore-based electrical engineering company specialising in LV installations, switchboard maintenance, and 24/7 electrical call-outs.',
    canonical: `${BASE_URL}/#/about`,
  },
  '/services': {
    title: 'Electrical Services Singapore – LV, Relay Testing & Earthing | D-Power',
    description:
      'Comprehensive electrical services: LV panel servicing, secondary injection relay testing, earth loop impedance, lightning protection, and more across Singapore.',
    canonical: `${BASE_URL}/#/services`,
  },
  '/contact': {
    title: 'Contact D-Power Testing Services | Get a Free Electrical Quote Singapore',
    description:
      'Contact D-Power Testing Services for electrical testing, maintenance, troubleshooting, and relay testing scopes. Call +65 9057 1320 or email us today.',
    canonical: `${BASE_URL}/#/contact`,
  },
  '/quote': {
    title: 'Request an Electrical Services Quote | D-Power Testing Services Singapore',
    description:
      'Request a free quote for electrical testing, LV panel maintenance, relay testing, and engineering services in Singapore from D-Power Testing Services.',
    canonical: `${BASE_URL}/#/quote`,
  },
}

const defaultMeta: SEOMeta = {
  title: 'Electrical Testing & Engineering Services Singapore | D-Power Testing Services',
  description:
    'D-Power Testing Services Pte Ltd — expert electrical testing, LV panel maintenance, relay testing, and 24/7 emergency support across Singapore.',
}

function setMetaTag(name: string, content: string, isProperty = false) {
  const attr = isProperty ? 'property' : 'name'
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * useSEO — updates document.title, meta description, and Open Graph tags
 * on every route change so each page has unique, crawlable SEO metadata.
 */
export function useSEO() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = routeMeta[pathname] ?? defaultMeta

    // Page title
    document.title = meta.title

    // Primary description
    setMetaTag('description', meta.description)

    // Open Graph
    setMetaTag('og:title', meta.title, true)
    setMetaTag('og:description', meta.description, true)

    // Twitter Card
    setMetaTag('twitter:title', meta.title)
    setMetaTag('twitter:description', meta.description)

    // Canonical
    if (meta.canonical) setCanonical(meta.canonical)
  }, [pathname])
}
