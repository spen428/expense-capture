export function randomInt(max: number = Number.MAX_SAFE_INTEGER): number {
  return Math.floor(Math.random() * Math.floor(max));
}

export function randomDate(): Date {
  return new Date(randomInt(250000000000)); // Max date of 9892-08-03
}
