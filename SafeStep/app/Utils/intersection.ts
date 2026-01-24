import { CrossingSignalStatus } from './signalStates';

export interface Intersection {
  id: string,
  name: string,
  signalStatus: CrossingSignalStatus
}