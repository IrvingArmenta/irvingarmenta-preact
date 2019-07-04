/**
 * Get object value based off the key name as a string; function to avoid [key: string]: string setup for Objects
 * @param {S} obj - Object to get the value from
 * @param {T} key - String that matches a key of the object to get the value
 * @return {string} the value of the matched key
 */
export const getByBracket = <S, T extends keyof S>(obj: S, key: T) => {
    return obj[key];
  };
  