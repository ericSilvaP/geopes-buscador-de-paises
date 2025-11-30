function formatNumber(n: number | string): string {
  n = n.toLocaleString('pt-BR')
  if (n.length <= 7) return n
  let slicedN = n.slice(0, -6).replace('.', ',')
  let sufix = slicedN.startsWith('1') && n.length <= 9 ? ' milhão' : ' milhões'
  if (n.length <= 11) return slicedN + sufix
  slicedN = n.slice(0, -10)
  sufix = slicedN.startsWith('1') && n.length <= 13 ? ' bilhão' : ' bilhões'
  return n.slice(0, -10) + sufix
}

export default formatNumber
