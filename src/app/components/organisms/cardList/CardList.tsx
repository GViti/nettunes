"use client";

import React, {useState, useEffect} from "react";
import Card from "../../molecules/card/Card";
// import Countries from "../../../assets/data/countries.json";



const CardList: React.FC = () => {

    const regions = ["africa", "americas", "antarctic", "asia", "europe", "oceania"];

    const [regionData, setRegionData] = useState<{ [key: string]: any[] }>({});
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
                const regionDataMap: { [key: string]: any[] } = {};
                regions.forEach((region, index) => {
                    regionDataMap[region] = data[index];
                });

                setRegionData(regionDataMap);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Caricamento dei dati in corso...</div>;
    }

    if (error) {
        return <div>Errore nel caricamento dei dati: {error}</div>;
    }

    return (

        <div>
            {regions.map((region) => (
                <div key={region} className="mb-10 mx-6">
                    <div className="flex items-baseline gap-7">
                        <h2 className="text-2xl capitalize mb-8">{region}</h2>
                        <a href="#"><p className="text-xl text-[#089F95]">See all +</p></a>
                    </div>
                    <div className="flex gap-6 overflow-x-auto whitespace-nowrap cursor-grab active:cursor-grabbing">
                        {regionData[region]?.map((country) => (
                            <Card 
                                key={country.cca3}
                                title={country.name.common}
                                image={country.flags.svg}
                                alt={country.flags.alt}
                            />
                        ))}
                    </div>
            </div>
            ))}
        </div>
        
    )
}

export default CardList;