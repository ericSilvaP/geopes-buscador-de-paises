import type { Country } from '../types/country'

class CountriesAPI {
  private baseURL: string
  private fields: string[]

  constructor() {
    this.baseURL = 'https://restcountries.com/v3.1'
    this.fields = [
      'name',
      'area',
      'population',
      'region',
      'subregion',
      'maps',
      'languages',
      'currencies',
      'tld',
      'borders',
    ]
  }

  private async fetchJSON(url: string, errorMessage: string) {
    try {
      const response = await fetch(url)
      if (!response.ok)
        throw new Error(`${errorMessage} (status: ${response.status})`)
      return await response.json()
    } catch (e) {
      if (e instanceof Error) {
        console.error(`API request error: ${e.message}`)
      } else {
        console.error('Unknown error', e)
      }
      throw e
    }
  }

  private fieldsURL(fields?: string[]) {
    fields = fields ?? this.fields
    return `fields=${fields.join(',')}`
  }

  async getAll(fields?: string[]): Promise<Country[]> {
    const url = this.baseURL + `/all?` + this.fieldsURL(fields)
    return this.fetchJSON(url, 'getAll countries error')
  }

  async getByName(name: string, fields?: string[]): Promise<Country[]> {
    const url =
      this.baseURL +
      `/name/${encodeURIComponent(name)}?` +
      this.fieldsURL(fields)
    return this.fetchJSON(url, 'getByName country error. Country name: ' + name)
  }

  async getByFullName(name: string, fields?: string[]): Promise<Country[]> {
    const url =
      this.baseURL +
      `/name/${encodeURIComponent(name)}?` +
      this.fieldsURL(fields) +
      '&fullText=true'
    return this.fetchJSON(
      url,
      'getByFullName country error. Country name: ' + name
    )
  }

  async getByAlphaCode(
    code: string | number,
    fields?: string[]
  ): Promise<Country> {
    const url =
      this.baseURL +
      `/alpha/${encodeURIComponent(code)}?` +
      this.fieldsURL(fields)
    return this.fetchJSON(
      url,
      "Can't find country by code. Country code: " + code
    )
  }

  async getByAlphaCodes(
    codes: Array<string | number>,
    fields?: string[]
  ): Promise<Country[]> {
    const codesStr = codes.join(',')
    const url =
      this.baseURL + `/alpha?codes=${codesStr}&` + this.fieldsURL(fields)
    console.log(url)
    return this.fetchJSON(
      url,
      "Can't find countries by codes. Country code: " + codesStr
    )
  }

  async getByLanguage(language: string, fields?: string[]): Promise<Country[]> {
    const url =
      this.baseURL +
      `/lang/${encodeURIComponent(language)}?` +
      this.fieldsURL(fields)
    return this.fetchJSON(
      url,
      "Can't find countries by language. Country language: " + language
    )
  }

  async getByRegion(region: string, fields?: string[]): Promise<Country[]> {
    const url =
      this.baseURL +
      `/region/${encodeURIComponent(region)}?` +
      this.fieldsURL(fields)
    return this.fetchJSON(
      url,
      "Can't find countries by region. Country region: " + region
    )
  }

  async getBySubRegion(
    subRegion: string,
    fields?: string[]
  ): Promise<Country[]> {
    const url =
      this.baseURL +
      `/subregion/${encodeURIComponent(subRegion)}?` +
      this.fieldsURL(fields)
    return this.fetchJSON(
      url,
      "Can't find countries by region. Country region: " + subRegion
    )
  }
}

export default CountriesAPI
