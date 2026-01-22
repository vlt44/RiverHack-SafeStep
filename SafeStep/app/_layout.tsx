import { View } from 'react-native';
import mockData from "./MockData/mock.json";
import Navbar from './Components/Navbar';
import IntersectionDisplay from './Components/IntersectionDisplay';

export default function HomeScreen() {
  return (
    <View>
      <Navbar />
      <IntersectionDisplay data={mockData} />
    </View>
  )
}
