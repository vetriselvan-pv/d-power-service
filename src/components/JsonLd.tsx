/**
 * JsonLd — Injects structured data (JSON-LD) into <head> for Google rich results.
 *
 * Provides:
 *  - LocalBusiness schema  → Business name, address, phone, hours, coordinates
 *  - Service schema        → Each electrical service offered
 *  - BreadcrumbList        → Route-aware breadcrumb for SERP display
 */

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const BASE_URL = 'https://dpowertestingservices.com'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ElectricalContractor',
  '@id': `${BASE_URL}/#business`,
  name: 'D-Power Testing Services Pte Ltd',
  alternateName: 'D-Power Testing Services',
  description:
    'D-Power Testing Services Pte Ltd provides comprehensive electrical testing, LV panel maintenance, relay testing, earthing system checks, lightning protection testing, and 24/7 emergency electrical support across Singapore.',
  url: BASE_URL,
  telephone: '+6590571320',
  email: 'dpowertestingservices@gmail.com',
  priceRange: '$$',
  currenciesAccepted: 'SGD',
  paymentAccepted: 'Cash, Bank Transfer',
  areaServed: {
    '@type': 'Country',
    name: 'Singapore',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '42 Cuff Road, #02-E1',
    addressLocality: 'Singapore',
    postalCode: '209752',
    addressCountry: 'SG',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 1.3067167,
    longitude: 103.8504068,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '17:00',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Electrical Testing & Engineering Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '24/7 Emergency Electrical Call-Up Services',
          description: 'Around-the-clock emergency electrical call-outs and replacements across Singapore.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'LV Switchboard Preventive Maintenance',
          description: 'Routine servicing and maintenance support for LV panels to improve operational reliability.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Secondary Injection Testing (Relay Testing)',
          description: 'Focused relay testing services to verify protection performance and system response.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Earth Loop Impedance Testing',
          description: 'Assessment of loop impedance to support system safety, compliance, and effective protection operation.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Lightning Protection System Testing',
          description: 'Inspection and testing of lightning protection arrangements to confirm system integrity.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Earth Resistance & Earthing System Testing',
          description: 'Measurement and validation of earthing performance for reliable grounding and electrical safety.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Infrared Scanning',
          description: 'Thermal infrared scanning of electrical systems to detect hotspots and prevent failures.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Electrical & Lightning Audit',
          description: 'Comprehensive audit of electrical installations and lightning protection systems for compliance.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Commercial & Industrial Installation Work',
          description: 'On-site electrical works and modifications for commercial and industrial facilities in Singapore.',
        },
      },
    ],
  },
  sameAs: [],
}

const breadcrumbMap: Record<string, Array<{ name: string; item: string }>> = {
  '/': [{ name: 'Home', item: `${BASE_URL}/` }],
  '/about': [
    { name: 'Home', item: `${BASE_URL}/` },
    { name: 'About', item: `${BASE_URL}/#/about` },
  ],
  '/services': [
    { name: 'Home', item: `${BASE_URL}/` },
    { name: 'Services', item: `${BASE_URL}/#/services` },
  ],
  '/contact': [
    { name: 'Home', item: `${BASE_URL}/` },
    { name: 'Contact', item: `${BASE_URL}/#/contact` },
  ],
  '/quote': [
    { name: 'Home', item: `${BASE_URL}/` },
    { name: 'Get a Quote', item: `${BASE_URL}/#/quote` },
  ],
}

function buildBreadcrumbSchema(pathname: string) {
  const items = breadcrumbMap[pathname] ?? breadcrumbMap['/']
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  }
}

function injectSchema(id: string, data: object) {
  let el = document.getElementById(id) as HTMLScriptElement | null
  if (!el) {
    el = document.createElement('script')
    el.id = id
    el.type = 'application/ld+json'
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data, null, 2)
}

export function JsonLd() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Inject LocalBusiness schema (once, persists)
    injectSchema('schema-local-business', localBusinessSchema)
  }, [])

  useEffect(() => {
    // Update breadcrumb schema on route change
    injectSchema('schema-breadcrumb', buildBreadcrumbSchema(pathname))
  }, [pathname])

  return null
}

export default JsonLd
