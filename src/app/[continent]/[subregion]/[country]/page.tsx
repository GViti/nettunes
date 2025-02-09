'use client'; // Dichiarare il componente come Client Component

import { useParams } from 'next/navigation';

export default function CountryRegion() {
  const params = useParams();
  const subRegionName = params?.subregion as string || 'Unknown';
  const continentName = params?.continent as string || 'Unknown';
  const countryName = params?.country as string || 'Unknown';

  return (
    <div className="flex flex-col gap-5">
      <h1>Country: {countryName}</h1>
      <h2>SubRegion: {subRegionName}</h2>
      <h2>Continent: {continentName}</h2>
      {/* Aggiungi qui altre informazioni sul continente */}
    </div>
  );
}