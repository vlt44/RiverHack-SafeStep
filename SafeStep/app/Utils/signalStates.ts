export type CrossingSignalStatus = 'STOP' | 'WALK' | 'UNKNOWN';

export interface SignalStateConfig {
  status: CrossingSignalStatus,
  description: string,
  backgroundColor: string,
  textColor: string,
  icon: string,
  accessibilityLabel: string,
}

export const WALK_STATE: SignalStateConfig = {
  status: 'WALK',
  description: 'Safe to cross',
  backgroundColor: '#2E7D32',
  textColor: '#FFFFFF',
  icon: '🚶',
  accessibilityLabel: 'Walk signal. Safe to cross.'
};

export const STOP_STATE: SignalStateConfig = {
  status: 'STOP',
  description: 'Do not cross',
  backgroundColor: '#C62828',
  textColor: '#FFFFFF',
  icon: '🛑',
  accessibilityLabel: 'Stop signal. Do not cross.'
};

export const UNKNOWN_STATE: SignalStateConfig = {
  status: 'UNKNOWN',
  description: 'Signal unavailable',
  backgroundColor: '#616161',
  textColor: '#FFFFFF',
  icon: '❓',
  accessibilityLabel: 'Signal unavailable. Use caution.'
};

export const SIGNAL_STATES: Record<CrossingSignalStatus, SignalStateConfig> = {
  WALK: WALK_STATE,
  STOP: STOP_STATE,
  UNKNOWN: UNKNOWN_STATE
};