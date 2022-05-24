export type PrefixedName<
  Prefix extends string | undefined = undefined,
  N extends string = string,
  Separator extends string = `-`
> = `${Prefix extends string ? `${Prefix}${Separator}` : ''}${N}`;
