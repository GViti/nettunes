'use client'; // Dichiarare il componente come Client Component

import React, { useState, useEffect } from "react";
import { useParams } from 'next/navigation';
import Card from '../../components/molecules/card/Card'

interface Country {
  name: { common: string };
  flags: { png: string; svg: string; alt?: string };
  cca3: string;
}

export default function Continent() {
  const params = useParams();
  const continentName = params?.continent as string || 'Unknown';

  const [regionData, setRegionData] = useState<Country[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/region/${continentName}`);

        if (!response.ok) {
          throw new Error("Errore nel caricamento dei dati");
        }

        const data = await response.json();
        setRegionData(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Unknown error");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [continentName]);

  if (loading) {
    return <div>Caricamento dei dati in corso...</div>;
  }

  if (error) {
    return <div>Errore nel caricamento dei dati: {error}</div>;
  }

  return (
    <div className="flex flex-col gap-5 px-4 md:px-6">
      <h1>Continent: {continentName}</h1>
      <div>
        {regionData && regionData.length > 0 ? (
          <div className="flex flex-wrap gap-6">
            {regionData.map((country) => (
              <Card 
                key={country.cca3}
                title={country.name.common}
                image={country.flags.svg}
                alt={country.flags.alt || `Flag of ${country.name.common}`}
              />
            ))}
          </div>
        ) : (
          <p>Nessun dato disponibile per questo continente.</p>
        )}
      </div>
    </div>
  );
}


