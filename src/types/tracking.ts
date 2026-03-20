export type Coordinate = {
  latitude: number;
  longitude: number;
};

export type Trip = {
  id: string;
  date: string;
  distanceKm: number;
  durationMin: number;
  avgSpeed: number;
  startAddress: string;
  endAddress: string;
};

export type TrackingStats = {
  distanceKm: number;
  durationMin: number;
  speedKmh: number;
};