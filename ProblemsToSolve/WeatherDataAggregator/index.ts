interface WeatherData {
    city: string;
    temperature: number;
    humidity: number;
    windSpeed: number;
}

function fetchWeatherFromAPI1(city: string): Promise<WeatherData> {
    return new Promise((resolve, reject) => {
        if (city === "reject") {
            reject(new Error("API 1 failed")); // ✅ Reject with an error
        } else {
            setTimeout(() => {
                resolve({
                    city,
                    temperature: Math.random() * 30,
                    humidity: Math.random() * 69,
                    windSpeed: Math.random() * 20,
                });
            }, Math.random() * 2000);
        }
    });
}

function fetchWeatherFromAPI2(city: string): Promise<WeatherData> {
    return new Promise((resolve, reject) => {
        if (city === "reject") {
            reject(new Error("API 2 failed")); // ✅ Reject with an error
        } else {
            setTimeout(() => {
                resolve({
                    city,
                    temperature: Math.random() * 30,
                    humidity: Math.random() * 69,
                    windSpeed: Math.random() * 20,
                });
            }, Math.random() * 2000);
        }
    });
}

async function aggregateWeatherData(city: string): Promise<WeatherData> {
    const responses = await Promise.allSettled([fetchWeatherFromAPI1(city), fetchWeatherFromAPI2(city)]);

    // Filter and map successful responses
    const successfulResults = responses
        .filter((result): result is PromiseFulfilledResult<WeatherData> => result.status === "fulfilled")
        .map((result) => result.value);

    if (successfulResults.length === 0) {
        throw new Error("Both APIs failed");
    }

    if (successfulResults.length === 1) {
        return successfulResults[0];
    }

    // Calculate averages
    const aggregatedData: WeatherData = {
        city,
        temperature: (successfulResults[0].temperature + successfulResults[1].temperature) / 2,
        humidity: (successfulResults[0].humidity + successfulResults[1].humidity) / 2,
        windSpeed: (successfulResults[0].windSpeed + successfulResults[1].windSpeed) / 2,
    };

    return aggregatedData;
}

// Example usage
async function main() {
    try {
        const aggregatedData = await aggregateWeatherData("Lahore");
        console.log("Aggregated Weather Data:", aggregatedData);
    } catch (error) {
        console.error("Failed to fetch weather data:", error);
    }
}

main();








export{}