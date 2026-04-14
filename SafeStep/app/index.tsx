import { StyleSheet, View } from 'react-native';
import Navbar from './Components/Navbar';
import IntersectionDisplay from './Components/IntersectionDisplay';
import { CrossingSignalStatus } from '../utils/signalStates';

export default function HomeScreen() {
  const currentIntersectionName = 'Congress Ave & 6th St';
  const currentStatus: CrossingSignalStatus = 'STOP';

  return (
    <View style={styles.screen}>
      <Navbar/>
      <View style={styles.displayArea}>
        <IntersectionDisplay
          intersectionName={currentIntersectionName}
          currentStatus={currentStatus}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  displayArea: {
    flex: 1,
  },
});
