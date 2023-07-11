export function formatAddress(address: `0x${string}` | undefined, begin: number = 10, end: number = 10): string {
  if (!address) return ''
  return `${address.substr(0, begin)}...${address.substr(address.length - end, end)}`;
}
