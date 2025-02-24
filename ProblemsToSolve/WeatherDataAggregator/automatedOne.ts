interface WeatherData {
    city: string;
    temperature: number;
    humidity: number;
    windSpeed: number;
}

// Example API functions
function fetchWeatherFromAPI1(city: string): Promise<WeatherData> {
    return new Promise((resolve, reject) => {
        if (city === "reject") {
            reject(new Error("API 1 failed"));
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
            reject(new Error("API 2 failed"));
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

// Add more API functions as needed
function fetchWeatherFromAPI3(city: string): Promise<WeatherData> {
    return new Promise((resolve, reject) => {
        if (city === "reject") {
            reject(new Error("API 3 failed"));
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

// Generalized function to aggregate data from any number of APIs
async function aggregateWeatherData(
    city: string,
    apiFunctions: ((city: string) => Promise<WeatherData>)[]
): Promise<WeatherData> {
    // Call all APIs concurrently
    const responses = await Promise.allSettled(apiFunctions.map((api) => api(city)));

    // Filter and map successful responses
    const successfulResults = responses
        .filter((result): result is PromiseFulfilledResult<WeatherData> => result.status === "fulfilled")
        .map((result) => result.value);

    if (successfulResults.length === 0) {
        throw new Error("All APIs failed");
    }

    // Calculate averages
    const aggregatedData: WeatherData = {
        city,
        temperature:
            successfulResults.reduce((sum, data) => sum + data.temperature, 0) / successfulResults.length,
        humidity:
            successfulResults.reduce((sum, data) => sum + data.humidity, 0) / successfulResults.length,
        windSpeed:
            successfulResults.reduce((sum, data) => sum + data.windSpeed, 0) / successfulResults.length,
    };

    return aggregatedData;
}

// Example usage
async function main() {
    try {
        // Pass an array of API functions
        const aggregatedData = await aggregateWeatherData("rejec", [
            fetchWeatherFromAPI1,
            fetchWeatherFromAPI2,
            fetchWeatherFromAPI3, 
        ]);
        console.log("Aggregated Weather Data:", aggregatedData);
    } catch (error) {
        console.error("Failed to fetch weather data:", error);
    }
}

main();


export{}