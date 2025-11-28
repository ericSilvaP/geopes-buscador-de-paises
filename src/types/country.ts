export type Country = {
  flags: {
    png: string
    svg: string
    alt: string
  }
  capital: string[]
  population: number
  region: string
  translations: Record<
    string,
    {
      official: string
      common: string
    }
  >
  cca3: string
  name?: {
    common: string
    official: string
  }
  area?: number
  maps?: {
    googleMaps: string
    openStreetMaps: string
  }
  tld?: string[]
  borders?: string[]
  currencies?: Record<
    string,
    {
      name: string
      symbol: string
    }
  >
  subregion?: string
  languages?: Record<string, string>
  flag?: string
}
