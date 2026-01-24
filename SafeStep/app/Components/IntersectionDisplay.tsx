import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SIGNAL_STATES } from '../Utils/signalStates';

export default function IntersectionDisplay() {  
  const [currentIntersectionName] = useState("STREET 1 & AVENUE A");
  const [currentState] = useState(SIGNAL_STATES.STOP);

  return (
    <View
      style={[styles.display, { backgroundColor: currentState.backgroundColor }]}
      accessibilityLabel={`Intersection ${currentIntersectionName}. ${currentState.accessibilityLabel}`}
    >
      <div>
        <div>
          <Text style={[styles.intersectionName, { color: currentState.textColor }]}>
            {currentIntersectionName}
          </Text>
        </div>
        <div>
          <Text style={[styles.status, { color: currentState.textColor }]}>
            {currentState.icon}
          </Text>
        </div>
        <div>
          <Text style={[styles.status, { color: currentState.textColor }]}>
            {currentState.status}
          </Text>
        </div>
        <div>
          <Text style={[styles.status, { color: currentState.textColor }]}>
            {currentState.description}
          </Text>
        </div>
      </div>
    </View>
  );
}

const styles = StyleSheet.create({
  display: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '100%',
  },
  intersectionName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  status: {
    fontSize: 18,
    marginVertical: 5,
  }
});