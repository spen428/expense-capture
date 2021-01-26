export class EnumUtils {
  static enumerate(enumType: any): number[] {
    return Object.keys(enumType)
      .map(x => Number(x))
      .filter(x => !isNaN(x));
  }
}
