export type SuffixedName<
  N extends string = string,
  Suffix extends string | undefined = undefined,
  Separator extends string = `-`
> = `${N}${Suffix extends string ? `${Separator}${Suffix}` : ''}`;
