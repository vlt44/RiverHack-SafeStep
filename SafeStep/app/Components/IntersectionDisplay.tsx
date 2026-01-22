import { useState } from "react";
import IntersectionName from '../Components/IntersectionName';
import IntersectionStatus from '../Components/IntersectionStatus';

export default function IntersectionDisplay( { data: mockData }: { data: any }) {

  interface TrafficLightData {
    timestamp: number;
    intersectionId: number;
    intersectionName: string;
    intersectionStatus: string;
  }

  const [currentTLData, setCurrentTLDData] = useState<TrafficLightData[] | null>(null);
  const [intersectionName, setIntersectionName] = useState<string>('');
  const [status, setStatus] = useState<string>('');

  useState(() => {
    const tlData = mockData as TrafficLightData[];
    setCurrentTLDData(tlData);

    if (tlData.length > 0) {
      setIntersectionName(tlData[0].intersectionName);
      setStatus(tlData[0].intersectionStatus);
    }
  });

  // if (!currentTLData || !intersectionName || !status) {
  //   return <div>Loading intersection data...</div>;
  // }
  
  return (
    <>
      <IntersectionName name={intersectionName} />
      <IntersectionStatus status={status} />
    </>
  )
}