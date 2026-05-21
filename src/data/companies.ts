export type CompanySlug =
  | 'druva'
  | 'qubole'
  | 'ey'
  | 'umd'
  | 'dayananda-sagar'
  | 'mvt'
  | 'riyash'
  | 'ngo'
  | 'merkur'

export interface CompanyBrand {
  slug: CompanySlug
  name: string
  logo: string
}

export const companyBrands: CompanyBrand[] = [
  { slug: 'druva', name: 'Druva', logo: '/logos/druva.svg' },
  { slug: 'qubole', name: 'Qubole', logo: '/logos/qubole.svg' },
  { slug: 'ey', name: 'Ernst & Young', logo: '/logos/ey.svg' },
  { slug: 'umd', name: 'University of Maryland', logo: '/logos/umd.svg' },
  { slug: 'mvt', name: 'My Vehicle Tracker', logo: '/logos/mvt.svg' },
  { slug: 'dayananda-sagar', name: 'Dayananda Sagar', logo: '/logos/dayananda-sagar.svg' },
  { slug: 'merkur', name: 'Merkur Gaming', logo: '/logos/merkur.svg' },
  { slug: 'riyash', name: 'Riyash International', logo: '/logos/riyash.svg' },
  { slug: 'ngo', name: 'Om Kothari Foundation', logo: '/logos/ngo.svg' },
]

const slugByCompany: [string, CompanySlug][] = [
  ['druva', 'druva'],
  ['qubole', 'qubole'],
  ['ernst', 'ey'],
  ['young', 'ey'],
  ['maryland', 'umd'],
  ['vehicle tracker', 'mvt'],
  ['dayananda', 'dayananda-sagar'],
  ['merkur', 'merkur'],
  ['riyash', 'riyash'],
  ['kothari', 'ngo'],
]

export function getCompanySlug(company: string): CompanySlug | null {
  const lower = company.toLowerCase()
  for (const [match, slug] of slugByCompany) {
    if (lower.includes(match)) return slug
  }
  return null
}

export function getCompanyBrand(company: string): CompanyBrand | null {
  const slug = getCompanySlug(company)
  if (!slug) return null
  return companyBrands.find((b) => b.slug === slug) ?? null
}

/** Featured employers for logo marquee (deduplicated, priority order). */
export const featuredCompanies: CompanyBrand[] = [
  companyBrands[0],
  companyBrands[1],
  companyBrands[2],
  companyBrands[3],
]
