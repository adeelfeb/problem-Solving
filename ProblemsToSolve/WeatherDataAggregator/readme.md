### **Problem Statement**  
Create a TypeScript program that fetches weather data for a given city from two different APIs. The program should:  
1. Use `fetchWeatherFromAPI1` and `fetchWeatherFromAPI2` to retrieve weather data asynchronously.  
2. Handle cases where one or both APIs fail.  
3. If both APIs succeed, compute and return the **average** weather data.  
4. If only one API succeeds, return its data.  
5. If both fail, throw an error.  

---

### **Code Explanation**  

#### **1. Defining Weather Data Structure**
```typescript
interface WeatherData {
    city: string;
    temperature: number;
    humidity: number;
    windSpeed: number;
}
```
- Defines a `WeatherData` interface to structure weather information, including **city, temperature, humidity,** and **wind speed**.

---

#### **2. Fetching Weather Data from Two APIs**
##### **Function: `fetchWeatherFromAPI1` and `fetchWeatherFromAPI2`**
```typescript
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
```
- Simulates an API call with `setTimeout()`, which randomly delays the response.  
- If the city is `"reject"`, the function **rejects** with an error.  
- Otherwise, it resolves with randomly generated **temperature, humidity,** and **wind speed** values.  
- `fetchWeatherFromAPI2` is **identical** to `fetchWeatherFromAPI1` but simulates a second API.  

---

#### **3. Aggregating Weather Data**
##### **Function: `aggregateWeatherData(city: string): Promise<WeatherData>`**
```typescript
async function aggregateWeatherData(city: string): Promise<WeatherData> {
    const responses = await Promise.allSettled([fetchWeatherFromAPI1(city), fetchWeatherFromAPI2(city)]);
```
- Uses `Promise.allSettled()` to **fetch data from both APIs simultaneously**.  
- Returns an array of results (each being either **fulfilled** or **rejected**).  

---
##### **Filtering Successful Responses**
```typescript
const successfulResults = responses
    .filter((result): result is PromiseFulfilledResult<WeatherData> => result.status === "fulfilled")
    .map((result) => result.value);
```
- Filters out only successful responses (`status === "fulfilled"`).  
- Uses **TypeScript's type guard** (`result is PromiseFulfilledResult<WeatherData>`) to help with type inference.  

---
##### **Handling API Failures**
```typescript
if (successfulResults.length === 0) {
    throw new Error("Both APIs failed");
}

if (successfulResults.length === 1) {
    return successfulResults[0];
}
```
- If **both APIs fail**, an error is thrown.  
- If **only one API succeeds**, its result is returned.  

---
##### **Calculating Average Weather Data**
```typescript
const aggregatedData: WeatherData = {
    city,
    temperature: (successfulResults[0].temperature + successfulResults[1].temperature) / 2,
    humidity: (successfulResults[0].humidity + successfulResults[1].humidity) / 2,
    windSpeed: (successfulResults[0].windSpeed + successfulResults[1].windSpeed) / 2,
};

return aggregatedData;
```
- If **both APIs succeed**, the function **averages** their temperature, humidity, and wind speed values.  
- Returns the aggregated weather data.  

---

#### **4. Running the Program**
##### **Function: `main()`**
```typescript
async function main() {
    try {
        const aggregatedData = await aggregateWeatherData("reject");
        console.log("Aggregated Weather Data:", aggregatedData);
    } catch (error) {
        console.error("Failed to fetch weather data:", error);
    }
}

main();
```
- Calls `aggregateWeatherData("reject")`.  
- Handles errors if both APIs fail.  
- Prints the aggregated weather data to the console.  

---

### **Example Scenarios**
| API 1 Result  | API 2 Result  | Output |
|--------------|--------------|--------|
| ✅ Success | ✅ Success | Returns average weather data |
| ✅ Success | ❌ Failure | Returns API 1's data |
| ❌ Failure | ✅ Success | Returns API 2's data |
| ❌ Failure | ❌ Failure | Throws error: "Both APIs failed" |

---

### **Key Takeaways**
✅ **`Promise.allSettled()` ensures both APIs are called, even if one fails.**  
✅ **Filters successful results and handles failures gracefully.**  
✅ **Averages weather data when both APIs succeed.**  
✅ **Throws an error only when both APIs fail.**  

Would you like a real-world API integration example? 🚀