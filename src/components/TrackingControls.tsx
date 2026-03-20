import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

type Props = {
  isTracking: boolean;
  onToggle: () => void;
};

const TrackingControls = ({ isTracking, onToggle }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onToggle}>
        <Text style={styles.buttonText}>
          {isTracking ? 'Stop Tracking' : 'Start Tracking'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
  },
  button: {
    backgroundColor: '#2563eb',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 15,
  },
});

export default TrackingControls;