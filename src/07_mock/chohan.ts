export const chohan = () => {
  const seed = Math.random()
  if (seed === undefined) return seed
  return Math.floor(seed * 10) % 2 === 0 ? '丁' : '半'
}
