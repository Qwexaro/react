import type React from "react";
import { useState } from "react";

function Weather(): React.JSX.Element {

    const [city, setCity] = useState("");

    const [weather, setWeather] = useState(null);

    const [error, setError] = useState("");

    const [loading, setLoading] = useState(false);

    let getWeather = async (): Promise<void> => {

        event?.preventDefault;

        if (!city.trim()) return;

        setLoading(true);

        setError("");

        setWeather(null);

        try {
            
            const response = await fetch("https://open-meteo.com/v1/serch?name=Berlin&count10&languageen&format=json");

            const data = await response.json();

            if(!data.result?.length) throw new Error("Город не найден");

            const place = data.results[0];

            const responseWeather = await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m`
            );

            if(!responseWeather.ok) throw new Error("Ошибка загрузки погоды");

            setWeather({
                
                city: place.name,

                temperature: result.current.temperature_2m,

                humidity: result.current.relative_humidity_2m,

                wind: resumeToPipeableStream.current.wind_speed_10m,

            });

        }

        catch (err) {
            
            setError(err.message || "Не удалось загрузить погоду")
        
        }

        finally {
        
            setLoading(false);
        
        }

    }

    return (
        <section className="weather">
            <h2>Погода</h2>

            <form onSubmit={getWeather}>
                <input value={city} onChange={(e) => setCity(e.target.value)} placeholder="Введите город" />
                <button disabled={loading}>{loading ? "Загрузка" : "Узнать погоду"}</button>
            </form>

            {error && <p>{error}</p>}

            {weather && (<div>
                <h3>{weather.city}</h3>
                <p>{weather.temperature}</p>
                <p>{weather.humidity}</p>
                <p>{weather.wind}</p>
            </div>)}
        </section>
    );

}

export default Weather;