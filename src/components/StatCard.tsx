import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  label: string;
  value: string;
};

const StatCard = ({ label, value }: Props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#161b22',
    padding: 14,
    borderRadius: 12,
    marginHorizontal: 4,
  },
  value: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  label: {
    color: '#9aa4b2',
    marginTop: 4,
    fontSize: 12,
  },
});

export default StatCard;