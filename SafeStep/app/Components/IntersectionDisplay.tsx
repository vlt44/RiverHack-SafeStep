import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SIGNAL_STATES } from '../utils/signalStates';


export default function IntersectionDisplay() {
  const [currentIntersectionName] = useState("STREET 1 & AVENUE A");
  const [currentState] = useState(SIGNAL_STATES.STOP);

  return (
    <View
      style={[
        styles.display,
        { backgroundColor: currentState.backgroundColor },
      ]}
      accessibilityLabel={`Intersection ${currentIntersectionName}. ${currentState.accessibilityLabel}`}
    >
      <View style={styles.content}>
        <Text
          style={[
            styles.intersectionName,
            { color: currentState.textColor },
          ]}
        >
          {currentIntersectionName}
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