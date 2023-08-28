export function formatAddress(
  address: `0x${string}` | string | undefined,
  takeFirst: number = 5,
  takeLast: number = 4,
): string {
  if (!address) return '';

  return `${address.substr(0, takeFirst)}...${address.substr(address.length - takeLast, takeLast)}`;
}
