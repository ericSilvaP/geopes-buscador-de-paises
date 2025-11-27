class CountriesAPI {
  private baseURL: string

  constructor() {
    this.baseURL = 'https://restcountries.com/v3.1'
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

  async getAll<T>(fields: string[]): Promise<T> {
    const url = this.baseURL + `/all?fields=${fields.join(',') ?? 'name'}`
    return this.fetchJSON(url, 'getAll countries error')
  }
}

export default CountriesAPI
