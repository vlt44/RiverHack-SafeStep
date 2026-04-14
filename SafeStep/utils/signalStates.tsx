import { ReactNode } from "react";
import { TfiHandStop } from "react-icons/tfi";
import { IoMdWalk } from "react-icons/io";
import { BiSolidTrafficCone } from "react-icons/bi";

export type CrossingSignalStatus = 'STOP' | 'WALK' | 'UNKNOWN';

export interface SignalStateConfig {
  status: CrossingSignalStatus,
  description: string,
  backgroundColor: string,
  textColor: string,
  icon: ReactNode,
  accessibilityLabel: string,
}

export const WALK_STATE: SignalStateConfig = {
  status: 'WALK',
  description: 'Safe to cross',
  backgroundColor: '#2E7D32',
  textColor: '#FFFFFF',
  icon: <IoMdWalk color="#FFFFFF" />,
  accessibilityLabel: 'Walk signal. Safe to cross.'
};

export const STOP_STATE: SignalStateConfig = {
  status: 'STOP',
  description: 'Do not cross',
  backgroundColor: '#C62828',
  textColor: '#FFFFFF',
  icon: <TfiHandStop color="#FFFFFF" />,
  accessibilityLabel: 'Stop signal. Do not cross.'
};

export const UNKNOWN_STATE: SignalStateConfig = {
  status: 'UNKNOWN',
  description: 'Use caution',
  backgroundColor: '#616161',
  textColor: '#FFFFFF',
  icon: <BiSolidTrafficCone color="#FFFFFF" />,
  accessibilityLabel: 'Signal unavailable. Use caution.'
};

export const SIGNAL_STATES: Record<CrossingSignalStatus, SignalStateConfig> = {
  WALK: WALK_STATE,
  STOP: STOP_STATE,
  UNKNOWN: UNKNOWN_STATE
};