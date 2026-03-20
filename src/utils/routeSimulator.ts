import { Coordinate } from '../types/tracking';

export const getNextCoordinate = (
  route: Coordinate[],
  currentIndex: number,
): { nextPoint: Coordinate; nextIndex: number } => {
  const nextIndex = currentIndex >= route.length - 1 ? 0 : currentIndex + 1;

  return {
    nextPoint: route[nextIndex],
    nextIndex,
  };
};