import React from 'react';
import { SafeAreaView, FlatList, StyleSheet, Text, View } from 'react-native';
import { mockTrips } from '../data/mockTrips';

const HistoryScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={mockTrips}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.content}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.date}>{item.date}</Text>
            <Text style={styles.route}>
              {item.startAddress} → {item.endAddress}
            </Text>
            <Text style={styles.meta}>
              {item.distanceKm} km • {item.durationMin} min • Avg {item.avgSpeed} km/h
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b1220',
  },
  content: {
    padding: 16,
  },
  card: {
    backgroundColor: '#161b22',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  date: {
    color: '#fff',
    fontWeight: '700',
    marginBottom: 6,
  },
  route: {
    color: '#dbe4ee',
    marginBottom: 4,
  },
  meta: {
    color: '#9aa4b2',
  },
});

export default HistoryScreen;