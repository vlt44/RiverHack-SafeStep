import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SIGNAL_STATES, type CrossingSignalStatus } from '../../utils/signalStates';

interface IntersectionDisplayProps {
  intersectionName?: string;
  currentStatus?: CrossingSignalStatus | string;
}

export default function IntersectionDisplay({intersectionName = '', currentStatus = '' }: IntersectionDisplayProps) {
  
  const resolvedStatus: CrossingSignalStatus = currentStatus in SIGNAL_STATES ? (currentStatus as CrossingSignalStatus) : 'UNKNOWN';
  const currentState = SIGNAL_STATES[resolvedStatus];

  return (
    <View
      style={[
        styles.display,
        { backgroundColor: currentState.backgroundColor },
      ]}
      accessibilityLabel={`Intersection ${intersectionName}. ${currentState.accessibilityLabel}`}
    >
      <View style={styles.content}>
        <Text
          style={[
            styles.intersectionName,
            { color: currentState.textColor },
          ]}
        >
          {intersectionName}
        </Text>

        <Text
          style={[styles.status, { color: currentState.textColor }]}
        >
          {currentState.icon}
        </Text>

        <Text
          style={[styles.status, { color: currentState.textColor }]}
        >
          {currentState.status}
        </Text>

        <Text
          style={[styles.status, { color: currentState.textColor }]}
        >
          {currentState.description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  display: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 16,
  },
  intersectionName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  status: {
    fontSize: 18,
    marginVertical: 5,
    textAlign: 'center',
  },
});