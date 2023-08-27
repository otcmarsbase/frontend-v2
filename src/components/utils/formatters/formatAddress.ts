export function formatAddress(
  address: `0x${string}` | string | undefined,
  takeFirst: number = 6,
  takeLast: number = 4,
): string {
  if (!address) return '';

  return `${address.substring(0, takeFirst)}...${address.substring(address.length - takeLast, takeLast)}`;
}
