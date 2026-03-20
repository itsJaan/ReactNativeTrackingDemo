import React, { useEffect, useMemo, useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import StatCard from '../components/StatCard';
import TrackingControls from '../components/TrackingControls';
import { mockRoute } from '../data/mockRoute';
import { Coordinate } from '../types/tracking';
import { getNextCoordinate } from '../utils/routeSimulator';

const MapScreen = () => {
  const [isTracking, setIsTracking] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentLocation, setCurrentLocation] = useState<Coordinate>(mockRoute[0]);
  const [visitedPoints, setVisitedPoints] = useState<Coordinate[]>([mockRoute[0]]);
  const [durationMin, setDurationMin] = useState(0);

  useEffect(() => {
    if (!isTracking) {
      return;
    }

    const interval = setInterval(() => {
      const { nextPoint, nextIndex } = getNextCoordinate(mockRoute, currentIndex);
      setCurrentIndex(nextIndex);
      setCurrentLocation(nextPoint);
      setVisitedPoints(prev => [...prev, nextPoint]);
      setDurationMin(prev => prev + 1);
    }, 1500);

    return () => clearInterval(interval);
  }, [isTracking, currentIndex]);

  const stats = useMemo(() => {
    return {
      distanceKm: (visitedPoints.length * 0.35).toFixed(1),
      durationMin: String(durationMin),
      speedKmh: isTracking ? '28' : '0',
    };
  }, [visitedPoints.length, durationMin, isTracking]);

  const toggleTracking = () => {
    if (isTracking) {
      setIsTracking(false);
      return;
    }

    setVisitedPoints([mockRoute[0]]);
    setCurrentIndex(0);
    setCurrentLocation(mockRoute[0]);
    setDurationMin(0);
    setIsTracking(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: mockRoute[0].latitude,
          longitude: mockRoute[0].longitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}
      >
        <Polyline coordinates={visitedPoints} strokeWidth={4} />
        <Marker coordinate={currentLocation} title="Current Position" />
        <Marker coordinate={mockRoute[mockRoute.length - 1]} title="Destination" />
      </MapView>

      <View style={styles.bottomPanel}>
        <View style={styles.statsRow}>
          <StatCard label="Distance" value={`${stats.distanceKm} km`} />
          <StatCard label="Duration" value={`${stats.durationMin} min`} />
          <StatCard label="Speed" value={`${stats.speedKmh} km/h`} />
        </View>

        <TrackingControls isTracking={isTracking} onToggle={toggleTracking} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b1220',
  },
  map: {
    flex: 1,
  },
  bottomPanel: {
    padding: 16,
    backgroundColor: '#0f172a',
  },
  statsRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
});

export default MapScreen;