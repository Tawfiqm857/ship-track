import type { Shipment } from '@/data/shipments';

const STORAGE_KEY = 'user_shipments_v1';

export function loadUserShipments(): Shipment[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as Shipment[]) : [];
  } catch {
    return [];
  }
}

export function saveUserShipment(shipment: Shipment): void {
  const existing = loadUserShipments();
  existing.unshift(shipment);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
}

export function generateTrackingCode(prefix: string): string {
  const rand = Math.random().toString(36).slice(2, 8).toUpperCase();
  const yr = new Date().getFullYear();
  return `${prefix}${yr}${rand}`;
}
