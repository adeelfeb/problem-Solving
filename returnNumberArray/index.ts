function filterNumbers(input: (number | string | boolean)[]): number[] {
    
    return input.filter((item): item is number => typeof item === "number");
}


const mixedArray = [84, "temp", true, true, ,"hey YOo", 12,5,7,3,1, "index", 6.9, false];
const result = filterNumbers(mixedArray);
console.log(result); 
