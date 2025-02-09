'use client'; // Dichiarare il componente come Client Component

import { useParams } from 'next/navigation';

export default function SubRegion() {
  const params = useParams();
  const subRegionName = params?.subregion as string || 'Unknown';
  const continentName = params?.continent as string || 'Unknown';

  return (
    <div className="flex flex-col gap-5">
      <h1>SubRegion: {subRegionName}</h1>
      <h2>Continent: {continentName}</h2>
      {/* Aggiungi qui altre informazioni sul continente */}
    </div>
  );
}