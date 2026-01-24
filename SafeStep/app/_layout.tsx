import { View } from 'react-native';
import Navbar from './Components/Navbar';
import IntersectionDisplay from './Components/IntersectionDisplay';

export default function HomeScreen() {
  return (
    <View>
      <Navbar/>
      <IntersectionDisplay/>
    </View>
  )
}
