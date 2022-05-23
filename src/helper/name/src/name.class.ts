// Class.
import { Prefix } from './prefix.class';
import { Suffix } from './suffix.class';

// Type.
import { AffixedName } from '../type/affixed-name.type';
import { PrefixedName } from '../type/prefixed-name.type';
import { SuffixedName } from '../type/suffixed-name.type';

/**
 *
 */
export class Name<
  AvailableNames extends string = string,
  N extends AvailableNames = AvailableNames,
  PrefixValue extends string | undefined = undefined,
  SuffixValue extends string | undefined = undefined
> extends String {
  /**
   *
   */
  public get availableNames(): AvailableNames[] | undefined {
    return this.#availableNames;
  }

  /**
   *
   */
  public get name(): N {
    return this.#name;
  }

  /**
   *
   */
  public get prefix(): Prefix<PrefixValue> | undefined {
    return this.#prefix;
  }

  /**
   *
   */
  public get suffix(): Suffix<SuffixValue> | undefined {
    return this.#suffix;
  }

  /**
   *
   */
  public get value(): AffixedName<PrefixValue, N, SuffixValue> {
    return this.valueOf() as any;
  }

  /**
   *
   */
  public get withPrefix(): PrefixedName<PrefixValue, N> {
    return [this.#prefix?.value, this.name]
      .filter((v) => typeof v === 'string')
      .join('-') as any;
  }

  /**
   *
   */
  public get withSuffix(): SuffixedName<N, SuffixValue> {
    return [this.name, this.#suffix?.value]
      .filter((v) => typeof v === 'string')
      .join('-') as any;
  }

  /**
   *
   */
  #availableNames?: AvailableNames[];

  /**
   *
   */
  #name: N;

  /**
   *
   */
  #prefix?: Prefix<PrefixValue>;

  /**
   *
   */
  #suffix?: Suffix<SuffixValue>;

  /**
   *
   * @param strings
   * @param values
   * @returns
   * @angularpackage
   */
  protected static template<
    AvailableNames extends string | undefined,
    PrefixValue extends string | undefined,
    SuffixValue extends string | undefined,
    N extends string
  >(
    strings: TemplateStringsArray,
    ...values: [AvailableNames[] | undefined, PrefixValue, N, SuffixValue]
  ): string {
    let availableNames: AvailableNames[] | undefined,
      prefix: PrefixValue,
      name: N,
      suffix: SuffixValue;
    [availableNames, prefix, name, suffix] = values;
    const ingredients = [prefix, name, suffix];
    return availableNames
      ? availableNames.indexOf(name as any) > -1
        ? ingredients.filter((v) => typeof v === 'string').join('-')
        : ''
      : ingredients.filter((v) => typeof v === 'string').join('-');
  }

  /**
   *
   * @param name
   * @param prefix
   * @param availableNames
   * @angularpackage
   */
  constructor(
    name: N,
    prefix?: PrefixValue,
    suffix?: SuffixValue,
    availableNames?: AvailableNames[]
  ) {
    super(Name.template`${availableNames}${prefix}${name}${suffix}`);
    this.#availableNames = availableNames;
    this.#name = name;
    this.#prefix = new Prefix(prefix);
    this.#suffix = new Suffix(suffix);
  }

  /**
   *
   */
  public toNgClass(active = true): { [index: string]: boolean } {
    return { [this.value]: active };
  }

  /**
   *
   * @returns
   * @angularpackage
   */
  public valueOf(): AffixedName<PrefixValue, N, SuffixValue> {
    return super.valueOf() as any;
  }
}
