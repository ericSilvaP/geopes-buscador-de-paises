class FavoriteHandler {
  private key = 'favoriteCountries'

  getAll(): string[] {
    return JSON.parse(localStorage.getItem(this.key) || '[]')
  }

  add(code: string) {
    const list = this.getAll()
    if (!list.includes(code)) {
      list.push(code)
      localStorage.setItem(this.key, JSON.stringify(list))
    }
  }

  remove(code: string) {
    const list = this.getAll().filter((c) => c !== code)
    localStorage.setItem(this.key, JSON.stringify(list))
  }

  isFavorite(code: string): boolean {
    return this.getAll().includes(code)
  }
}

export default FavoriteHandler
