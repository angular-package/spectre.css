// Class.
import { Name } from '../../name';

// Type.
import { Colors } from '../type/colors.type';
import { HSL } from '../type/hsl.type';

/**
 *
 */
export class Color<
  Prefix extends string | undefined,
  Suffix extends string | undefined,
  AvailableColor extends string = Colors,
  C extends AvailableColor = AvailableColor
> extends Name<AvailableColor, C, Prefix, Suffix> {
  /**
   * The method `colorToHex` converts a decimal value to hexadecimal.
   * @param color The color in decimal of the number type.
   * @returns The return value is a string hexadecimal color.
   * @angularpackage
   */
  public static colorToHex(color: number): string {
    const hexadecimal = color.toString(16);
    return hexadecimal.length === 1 ? '0' + hexadecimal : hexadecimal;
  }

  /**
   *
   * @param hex
   * @returns
   * @angularpackage
   */
  public static hexToRgb(
    hex: string
  ): { red: number; green: number; blue: number } | undefined {
    const getHex = hex.replace('#', '').match(/.{1,2}/g);
    if (getHex !== null) {
      return {
        red: parseInt(getHex[0], 16),
        green: parseInt(getHex[1], 16),
        blue: parseInt(getHex[2], 16),
      };
    }
    return;
  }

  public static hexToHsl(hex: string): HSL | undefined {
    const rgb = Color.hexToRgb(hex);
    return typeof rgb === 'object'
      ? this.rgbToHsl(rgb.red, rgb.green, rgb.blue)
      : undefined;
  }

  /**
   *
   * @param hue
   * @param saturation
   * @param lightness
   * @returns
   * @angularpackage
   */
  public static hslToRgb(
    hue: number,
    saturation: number,
    lightness: number
  ): { red: number; green: number; blue: number } {
    const HSLToRGB = (h: number, s: number, l: number) => {
      s /= 100;
      l /= 100;
      const k = (n: any) => (n + h / 30) % 12;
      const a = s * Math.min(l, 1 - l);
      const f = (n: any) =>
        l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
      return {
        red: 255 * f(0),
        green: 255 * f(8),
        blue: 255 * f(4),
      };
    };
    return HSLToRGB(hue, saturation, lightness);
  }

  /**
   *
   * @param red
   * @param green
   * @param blue
   * @returns
   * @angularpackage
   */
  public static rgbToHex(red: number, green: number, blue: number): string {
    return (
      '#' +
      this.colorToHex(red) +
      this.colorToHex(green) +
      this.colorToHex(blue)
    );
  }

  /**
   *
   * @param red
   * @param green
   * @param blue
   * @returns
   * @angularpackage
   */
  public static rgbToHsl(red: number, green: number, blue: number): HSL {
    (red /= 255), (green /= 255), (blue /= 255);
    const max = Math.max(red, green, blue),
      min = Math.min(red, green, blue);
    let hue = 0,
      saturation,
      lightness = (max + min) / 2;

    if (max === min) {
      hue = saturation = 0; // achromatic
    } else {
      const d = max - min;
      saturation = lightness > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case red:
          hue = (green - blue) / d + (green < blue ? 6 : 0);
          break;
        case green:
          hue = (blue - red) / d + 2;
          break;
        case blue:
          hue = (red - green) / d + 4;
          break;
      }
      hue && (hue /= 6);
    }
    hue && (hue *= 360);
    saturation *= 100;
    lightness *= 100;
    return {
      hue,
      saturation,
      lightness,
    };
  }

  /**
   *
   * @param color
   * @param prefix
   * @param suffix
   * @param availableColor
   * @angularpackage
   */
  constructor(
    color: C,
    prefix?: Prefix,
    suffix?: Suffix,
    availableColor: AvailableColor[] = [
      'accent',
      'basic',
      'dark',
      'default',
      'disabled',
      'error',
      'gray',
      'gray-dark',
      'gray-light',
      'info',
      'light',
      'primary',
      'secondary',
      'success',
      'warning',
    ] as AvailableColor[]
  ) {
    super(color, prefix, suffix, availableColor);
  }
}
