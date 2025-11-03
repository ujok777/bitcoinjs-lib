// utils/logTimestamp.ts
// Utility for debug logging with millisecond timestamps
// Author: Marta Nowak
// Date: 2025-11-01

export function logWithTimestamp(message: string): void {
  const now = new Date()
  const timestamp = now.toISOString().replace('T', ' ').replace('Z', '')
  console.log(`[DEBUG ${timestamp}] ${message}`)
}
