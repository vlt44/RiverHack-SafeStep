import { CrossingSignalStatus } from './signalStates';

export default interface Intersection {
  id: string,
  name: string,
  signalStatus: CrossingSignalStatus
}