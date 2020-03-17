/**
 * Wait for it...
 */
export default function delay(ms = 1000) {
  return new Promise(res => setTimeout(res, ms));
}
