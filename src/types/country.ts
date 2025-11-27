export type Country = {
  name: {
    common: string
    official: string
  }
  area: number
  maps: {
    googleMaps: string
    openStreetMaps: string
  }
  tld: string[]
  borders: string[]
  currencies: Record<
    string,
    {
      name: string
      symbol: string
    }
  >
  population?: number
  region?: string
  subregion?: string
  languages?: Record<string, string>
  translations?: Record<
    string,
    {
      official: string
      common: string
    }
  >
  flags?: {
    png: string
    svg: string
    alt: string
  }

  flag?: string
}
