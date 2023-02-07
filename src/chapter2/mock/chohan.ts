import { seed } from './seed'

// 丁か半を返す、内部的にseed関数を呼び出す
export const chohan = () => (seed() % 2 === 0 ? '丁' : '半')
