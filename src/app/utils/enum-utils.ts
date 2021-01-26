export class EnumUtils {
  static enumerate(enumType: any): number[] {
    return Object.keys(enumType)
      .map(x => Number(x))
      .filter(x => !isNaN(x));
  }

  static enumerateNames(enumType: any): string[] {
    return Object.keys(enumType)
      .filter(x => isNaN(Number(x)));
  }
}
