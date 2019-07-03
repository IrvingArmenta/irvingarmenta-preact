export const getByBracket = <S, T extends keyof S>(obj: S, key: T) => {
    return obj[key];
  };
  