export type RegionSlug = 'south' | 'midwest' | 'northeast' | 'west'

export interface Region {
  slug: RegionSlug
  label: string
}

export const regions: Region[] = [
  { slug: 'south', label: 'South' },
  { slug: 'midwest', label: 'Midwest' },
  { slug: 'northeast', label: 'Northeast' },
  { slug: 'west', label: 'West' },
]

export function getRegionBySlug(slug: RegionSlug): Region | undefined {
  return regions.find((r) => r.slug === slug)
}
