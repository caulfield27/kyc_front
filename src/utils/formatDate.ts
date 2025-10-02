export function formatDateString(date: string): string {
  const [dateFormat, time] = date.split('T');
  return `${dateFormat} ${time.split('.')[0]}`;
}
