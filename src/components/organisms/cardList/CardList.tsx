"use client";

import React, {useState, useEffect} from "react";
import Card from "../../molecules/card/Card";
import CategoryLabel from "../../molecules/categoryLabel/CategoryLabel";
import CardScroller from "../../molecules/cardScroller/CardScroller";
// import Countries from "../../../assets/data/countries.json";

interface Country {
    name: { common: string };
    // capital?: string[];
    // population: number;
    // area: number;
    flags: { png: string; svg: string; alt?: string };
    cca3: string;
}

const CardList: React.FC = () => {

    const regions = React.useMemo(() => ["africa", "americas", "asia", "europe", "oceania", "antarctic"], []);

    const [regionData, setRegionData] = useState<{ [key: string]: Country[] }>({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Eseguire tutte le chiamate API contemporaneamente
                const response = await Promise.all(
                    regions.map((region) =>
                        fetch(`https://restcountries.com/v3.1/region/${region}`)
                    )
                );

                // Verificare se tutte le risposte sono OK
                const errors = response.filter((response) => !response.ok)
                if (errors.length > 0) {
                    throw new Error("Errore nel caricamento dei dati");
                }

                // Convertire le risposte in JSON
                const data = await Promise.all(response.map((response) => response.json()));

                // Memorizzare i dati in uno stato strutturato
                const regionDataMap: { [key: string]: Country[] } = {};
                regions.forEach((region, index) => {
                    regionDataMap[region] = data[index];
                });

                setRegionData(regionDataMap);
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
    }, [regions]);

    if (loading) {
        return <div>Caricamento dei dati in corso..</div>;
    }

    if (error) {
        return <div>Errore nel caricamento dei dati: {error}</div>;
    }

    return (

        <div className="px-4 md:px-6">
            {regions.map((region) => (
                <div key={region} className="mb-10">
                    <CategoryLabel
                        categoryName={region}
                        link={region}
                    />
                    <CardScroller>
                        {regionData[region]?.slice(0, 15).map((country) => (
                            <Card 
                                key={country.cca3}
                                title={country.name.common}
                                image={country.flags.svg}
                                alt={country.flags.alt || `Flag of ${country.name.common}`}
                            />
                        ))}
                    </CardScroller>
            </div>
            ))}
        </div>
        
    )
}

export default CardList;