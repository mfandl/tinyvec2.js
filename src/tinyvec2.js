export const add = ([x1, y1], [x2, y2]) => [x1 + x2, y1 + y2]
export const sub = ([x1, y1], [x2, y2]) => [x1 - x2, y1 - y2]
export const mul = ([x, y], s) => [x * s, y * s]
export const div = ([x, y], s) => [x / s, y / s]
export const len = ([x, y])  => Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
export const norm = v => div(v, len(v))
export const dot = ([x1, y1], [x2, y2]) => x1 * x2 + y1 * y2
export const angle = ([x, y]) => Math.atan2(y, x)
export const rot = ([x, y], rad) => {
  const c = Math.cos(rad)
  const s = Math.sin(rad)
  return [c * x - s * y, s * x + c * y]
}
