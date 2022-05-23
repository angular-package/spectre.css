export type AffixedName<
  Prefix extends string | undefined = undefined,
  N extends string = string,
  Suffix extends string | undefined = undefined,
  Separator extends string = `-`
> = `${Prefix extends string ? `${Prefix}${Separator}` : ''}${N}${Suffix extends string
  ? `${Separator}${Suffix}`
  : ''}`;
