export function changeRGBtoHSL(rgb: number[] | undefined) {
  if (!rgb || rgb.length < 3) return;
  const r = rgb[0] / 255;
  const g = rgb[1] / 255;
  const b = rgb[2] / 255;

  // R, G, B 값 중에서 최소값과 최대값을 찾음
  const cMax = Math.max(r, g, b);
  const cMin = Math.min(r, g, b);
  const delta = cMax - cMin;
  let h = 0,
    s = 0;
  const l = (cMax + cMin) / 2;

  if (delta !== 0) {
    s = delta / (1 - Math.abs(2 * l - 1));
    switch (cMax) {
      case r:
        h = ((g - b) / delta + (g < b ? 6 : 0)) * 60;
        break;
      case g:
        h = ((b - r) / delta + 2) * 60;
        break;
      case b:
        h = ((r - g) / delta + 4) * 60;
        break;
    }
  }

  return [h.toFixed(3), (s * 100).toFixed(3), (l * 100).toFixed(3)];
}

export function changeHEXtoRGB(hex: string) {
  if (!hex) return;
  if (hex.length > 7 || hex.length < 6) {
    return;
  }
  const aRgbHex = hex.replace('#', '').match(/.{1,2}/g);
  if (aRgbHex != undefined) {
    return [
      parseInt(aRgbHex[0], 16),
      parseInt(aRgbHex[1], 16),
      parseInt(aRgbHex[2], 16),
    ];
  }
  return;
}
