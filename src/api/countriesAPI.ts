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

  async getAll<T>(fields?: string[]): Promise<T> {
    const url = this.baseURL + `/all?` + this.fieldsURL(fields)
    return this.fetchJSON(url, 'getAll countries error')
  }

  async getByName<T>(name: string, fields?: string[]): Promise<T> {
    const url =
      this.baseURL +
      `/name/${encodeURIComponent(name)}?` +
      this.fieldsURL(fields)
    return this.fetchJSON(url, 'getByName country error. Country name: ' + name)
  }
}

export default CountriesAPI
