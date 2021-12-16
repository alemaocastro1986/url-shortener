export function isValidDate(date: any) {
  if (!date) return false;

  if (typeof date !== "number") {
    return false;
  }
  return true;
}

export function isBefore(date: Date, dateToCompare: Date) {
  return date.getTime() < dateToCompare.getTime();
}
