/**
 *
 */
export abstract class Affix<Value extends string | undefined> extends String {
  //#region instance properties.
  //#region instance public properties.
  /**
   * Gets the primitive value of an instance.
   */
  public get get(): Value {
    return this.valueOf() as Value;
  }

  public get value(): Value {
    return super.valueOf() as Value;
  }
  //#endregion instance public properties.

  //#region instance private properties.
  /**
   * The pattern of a `RegExp` type for the affix.
   */
  #pattern: RegExp | undefined;

  //#endregion instance private properties.
  //#endregion instance properties.

  //#region static private methods.
  /**
   *
   * @param affix
   * @param pattern
   * @returns
   */
  static #defineAffix<Min extends number, Max extends number>(
    affix: string | undefined,
    pattern: RegExp
  ): string {
    return typeof affix === 'string' ? affix.replace(pattern || '', '') : '';
  }
  //#endregion static private methods.

  //#region constructor.
  /**
   * Creates an instance and initially sets the affix `length` and `pattern`.
   * @angularpackage
   */
  constructor(affix: string | undefined, pattern = /[^a-zA-Z0-9$_]/g) {
    super(Affix.#defineAffix(affix, pattern));
    this.#pattern = pattern;
  }
  //#endregion constructor.

  //#region instance methods.
  //#region instance public methods.
  /**
   * Returns `pattern` of the actual settings for the affix, which by default is set to `/[^a-zA-Z0-9$_]/g`.
   * @returns The return value is a privately stored regular expression of a `RegExp` type.
   * @angularpackage
   */
  public getPattern(): RegExp | undefined {
    return this.#pattern;
  }
  //#endregion instance public methods.
  //#endregion instance methods.
}
