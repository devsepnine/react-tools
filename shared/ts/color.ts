export function changeRGBtoHSL(rgb: number[] | undefined) {
  if (!rgb) return
  const r = (rgb[0] /= 255)
  const g = (rgb[1] /= 255)
  const b = (rgb[2] /= 255)

  const l = Math.max(r, g, b)
  const s = l - Math.min(r, g, b)
  const h = s
    ? l === r
      ? (g - b) / s
      : l === g
      ? 2 + (b - r) / s
      : 4 + (r - g) / s
    : 0
  return [
    Math.round(60 * h < 0 ? 60 * h + 360 : 60 * h),
    Math.round(
      100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0),
    ),
    ((100 * (2 * l - s)) / 2).toFixed(2),
  ]
}

export function changeHEXtoRGB(hex: string) {
  if (!hex) return
  if (hex.length > 7 || hex.length < 6) {
    return
  }
  const aRgbHex = hex.replace('#', '').match(/.{1,2}/g)
  if (aRgbHex != undefined) {
    const aRgb = [
      parseInt(aRgbHex[0], 16),
      parseInt(aRgbHex[1], 16),
      parseInt(aRgbHex[2], 16),
    ]
    return aRgb
  }
  return
}
