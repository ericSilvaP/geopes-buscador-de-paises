export type Country = {
  name: {
    common: string
    official: string
  }
  area: number
  population: number
  region: string
  subregion: string
  maps: {
    googleMaps: string
    openStreetMaps: string
  }
  languages?: Record<string, string>
  currencies?: Record<
    string,
    {
      name: string
      symbol: string
    }
  >
  tld?: string[]
  borders?: string[]
}
