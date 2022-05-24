// Class.
import { Color } from './color.class';

// Type.
import { AffixedName } from '../../name';
import { Colors } from '../type/colors.type';
import { HSL } from '../type/hsl.type';
import { Shade } from '../type/shade.type';

/**
 *
 */
export class CssPropertyColor<
  Prefix extends string | undefined,
  AvailableColor extends string = Colors,
  C extends AvailableColor = AvailableColor
> extends Color<Prefix, 'color', AvailableColor, C> {
  public static rootStyle = (document.querySelector(':root') as HTMLElement)
    .style;

  public get hue(): number {
    return CssPropertyColor.getHueOfVar(this.valueOf());
  }

  public get hex(): string {
    return CssPropertyColor.getHexOfVar(this.valueOf());
  }

  public get hsl(): HSL {
    return {
      hue: this.hue,
      lightness: this.lightness,
      saturation: this.saturation,
    };
  }

  public get lightness(): number {
    return CssPropertyColor.getLightnessOfVar(this.valueOf());
  }

  public get saturation(): number {
    return CssPropertyColor.getSaturationOfVar(this.valueOf());
  }

  /**
   *
   * @param name
   * @returns
   * @angularpackage
   */
  public static getHueOfVar(name: string): number {
    return this.#getPropertyValue(`--${name}-h`);
  }

  /**
   *
   * @param name
   * @returns
   * @angularpackage
   */
  public static getLightnessOfVar(name: string): number {
    return this.#getPropertyValue(`--${name}-l`);
  }

  /**
   *
   * @param name
   * @returns
   * @angularpackage
   */
  public static getSaturationOfVar(name: string): number {
    return this.#getPropertyValue(`--${name}-s`);
  }

  /**
   *
   * @param name
   * @returns
   * @angularpackage
   */
  public static getHexOfVar(name: string): string {
    const rgbColor = Color.hslToRgb(
      this.getHueOfVar(name),
      this.getSaturationOfVar(name),
      this.getLightnessOfVar(name)
    );
    return this.rgbToHex(
      Math.round(rgbColor.red),
      Math.round(rgbColor.green),
      Math.round(rgbColor.blue)
    );
  }

  public static removeHueOfVar(name: string): typeof CssPropertyColor {
    this.rootStyle.removeProperty(`--${name}-h`);
    return this;
  }

  public static removeLightnessOfVar(name: string): typeof CssPropertyColor {
    this.rootStyle.removeProperty(`--${name}-l`);
    return this;
  }

  public static removeSaturationOfVar(name: string): typeof CssPropertyColor {
    this.rootStyle.removeProperty(`--${name}-s`);
    return this;
  }

  public static removeColorOfVar(name: string): typeof CssPropertyColor {
    this.removeHueOfVar(name)
      .removeLightnessOfVar(name)
      .removeSaturationOfVar(name);
    return this;
  }

  /**
   *
   * @param name
   * @param value
   * @param priority
   * @returns
   * @angularpackage
   */
  public static setHueOfVar(
    name: string,
    value: number | null,
    priority?: 'important' | ''
  ): typeof CssPropertyColor {
    (document.querySelector(':root') as HTMLElement).style.setProperty(
      `--${name}-h`,
      `${String(value)}deg`,
      priority
    );
    return this;
  }

  /**
   *
   * @param name
   * @param value
   * @param priority
   * @returns
   * @angularpackage
   */
  public static setLightnessOfVar(
    name: string,
    value: number | null,
    priority?: 'important' | ''
  ): typeof CssPropertyColor {
    (document.querySelector(':root') as HTMLElement).style.setProperty(
      `--${name}-l`,
      `${String(value)}%`,
      priority
    );
    return this;
  }

  /**
   *
   * @param name
   * @param value
   * @param priority
   * @returns
   * @angularpackage
   */
  public static setSaturationOfVar(
    name: string,
    value: number | null,
    priority?: 'important' | ''
  ): typeof CssPropertyColor {
    (document.querySelector(':root') as HTMLElement).style.setProperty(
      `--${name}-s`,
      `${String(value)}%`,
      priority
    );
    return this;
  }

  static #calcLightness(lightness: string): any {
    let l = 0;
    lightness
      .match(/[+-]?\d+(\.\d+)?/g)
      ?.forEach((value) => (l += Number(value)));
    return l;
  }

  static #getPropertyValue(name: string): number {
    const value = getComputedStyle(document.body)
      .getPropertyValue(name)
      .replace('deg', '')
      .replace('%', '');

    return value.indexOf('calc') ? this.#calcLightness(value) : Number(value);
  }

  /**
   *
   * @param color
   * @param prefix
   * @param availableColor
   * @angularpackage
   */
  constructor(
    color: C,
    prefix?: Prefix,
    availableColor: AvailableColor[] = [
      'accent',
      'basic',
      'bg',
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
    super(color, prefix, 'color', availableColor);
  }

  public getHex(shade?: Shade): string {
    return CssPropertyColor.getHexOfVar(this.getValue(shade));
  }

  public getHSL(shade?: Shade): HSL {
    return {
      hue: this.getHue(shade),
      lightness: this.getLightness(shade),
      saturation: this.getSaturation(shade),
    };
  }

  public getHue(shade?: Shade): number {
    return CssPropertyColor.getHueOfVar(this.getValue(shade));
  }

  public getLightness(shade?: Shade): number {
    return CssPropertyColor.getLightnessOfVar(this.getValue(shade));
  }

  public getSaturation(shade?: Shade): number {
    return CssPropertyColor.getSaturationOfVar(this.getValue(shade));
  }

  public getValue<S extends Shade>(
    shade?: S
  ):
    | AffixedName<Prefix, C, 'color'>
    | `${AffixedName<Prefix, C, 'color'>}-${S}` {
    return shade ? this.valueOfShade(shade) : this.valueOf();
  }

  public removeColor(shade?: Shade): this {
    CssPropertyColor.removeColorOfVar(this.getValue(shade));
    return this;
  }

  public setHex(hex: string, shade?: Shade): this {
    const hsl = CssPropertyColor.hexToHsl(hex);

    if (hsl) {
      this.setHue(hsl.hue, shade)
        .setLightnessOfVar(hsl.lightness, shade)
        .setSaturationOfVar(hsl.saturation, shade);
    }
    return this;
  }

  public setHsl(hue: number, saturation: number, lightness: number): this {
    this.setHue(hue)
      .setSaturationOfVar(saturation)
      .setLightnessOfVar(lightness);

    return this;
  }

  public setHue(
    value: number,
    shade?: Shade,
    priority?: 'important' | ''
  ): this {
    CssPropertyColor.setHueOfVar(this.getValue(shade), value, priority);
    return this;
  }

  public setLightnessOfVar(
    value: number,
    shade?: Shade,
    priority?: 'important' | ''
  ): this {
    CssPropertyColor.setLightnessOfVar(this.getValue(shade), value, priority);
    return this;
  }

  public setSaturationOfVar(
    value: number,
    shade?: Shade,
    priority?: 'important' | ''
  ): this {
    CssPropertyColor.setSaturationOfVar(this.getValue(shade), value, priority);
    return this;
  }

  public valueOfShade<S extends Shade>(
    shade: S
  ): `${AffixedName<Prefix, C, 'color'>}-${S}` {
    return `${this.valueOf()}-${shade}`;
  }
}
