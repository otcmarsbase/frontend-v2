export function formatAddress(
  address: `0x${string}` | string | undefined,
  takeFirst: number = 5,
  takeLast: number = 4,
): string {
  if (!address) return '';

  if (address.length <= takeFirst + takeLast) return address;

  return `${address.substr(0, takeFirst)}...${address.substr(address.length - takeLast, takeLast)}`;
}
