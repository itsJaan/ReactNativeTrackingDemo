import { Trip } from '../types/tracking';

export const mockTrips: Trip[] = [
  {
    id: '1',
    date: '2026-03-18',
    distanceKm: 12.4,
    durationMin: 31,
    avgSpeed: 24,
    startAddress: 'Downtown',
    endAddress: 'Industrial Zone',
  },
  {
    id: '2',
    date: '2026-03-17',
    distanceKm: 8.9,
    durationMin: 22,
    avgSpeed: 26,
    startAddress: 'North Sector',
    endAddress: 'Central Office',
  },
];