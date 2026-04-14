import React from 'react';
import { Text, useWindowDimensions, View } from 'react-native';
import {
  SIGNAL_STATES,
  type CrossingSignalStatus,
} from '../../utils/signalStates';
import createStyles, { getIconSize } from './DisplayStyling';

interface IntersectionDisplayProps {
  intersectionName?: string;
  currentStatus?: CrossingSignalStatus | string;
  countdown?: number | null;
}

export default function IntersectionDisplay({
  intersectionName = '',
  currentStatus = '',
  countdown = 30,
}: IntersectionDisplayProps) {
  const { width, height } = useWindowDimensions();
  const panelWidth = Math.min(width * 0.88, 420);
  const styles = createStyles({ width, height, panelWidth });
  const iconSize = getIconSize(width);

  const resolvedStatus: CrossingSignalStatus =
    currentStatus in SIGNAL_STATES
      ? (currentStatus as CrossingSignalStatus)
      : 'UNKNOWN';

  const currentState = SIGNAL_STATES[resolvedStatus];

  return (
    <View
      style={[styles.display, { backgroundColor: currentState.backgroundColor }]}
      accessible
      accessibilityLabel={`Intersection ${intersectionName}. ${currentState.accessibilityLabel}`}
    >
      <View style={styles.content}>
        <Text style={[styles.intersectionName, { color: currentState.textColor }]}>
          {intersectionName}
        </Text>

        <View accessible={false}>
          {React.isValidElement<{ size?: number; color?: string }>(currentState.icon)
            ? React.cloneElement(currentState.icon, {
                size: iconSize,
                color: currentState.textColor,
              })
            : currentState.icon}
        </View>

        {countdown !== null && (
          <View style={styles.timerContainer}>
            <Text style={[styles.timerText, { color: currentState.textColor }]}>
              {countdown}
            </Text>
          </View>
        )}

        <Text style={[styles.status, { color: currentState.textColor }]}>
          {currentState.status}
        </Text>

        <Text style={[styles.subStatus, { color: currentState.textColor }]}>
          {currentState.description}
        </Text>
      </View>
    </View>
  );
}