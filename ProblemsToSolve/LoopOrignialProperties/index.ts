// Extend the Array prototype in TypeScript
interface Array<T> {
    SecondForEach(callback: (value: T, index: number, array: T[]) => void, thisContext?: any): void;
}

// Adding an extra property to the array prototype
interface Array<T>{
    ExtraProperty: (String | Number)[]
}

Array.prototype.ExtraProperty = ["new", 0];



// interface Array<T>{
//     getSquareOfArray(callback: (index: number)=> void): number[];
// }


// Array.prototype.getSquareOfArray = function<T extends number>(this: T[], callback:(index: number)=>void){
    
//     if(typeof callback !== "function"){
//         throw "Please provide a callback funtion"
//     }

//     let squaredArr = []
//     let length = this.length
//     let index = 0
//     while(index < length ){
//         let square = this[index]  * this[index]
//         squaredArr.push(square)
//         index++;
//     }
    
//     return squaredArr
// }




interface Array<T extends number> {
    getSquareOfArray(): number[];
}

Array.prototype.getSquareOfArray = function<T extends number>(this: T[]): number[] {
    return this.map(num => num * num);
};

// Testing the function
const myArr = [1, 2, 3, 4, 5];
console.log(myArr.getSquareOfArray());  // Output: [1, 4, 9, 16, 25]




// Define the method correctly
Array.prototype.SecondForEach = function<T>(this: T[], callback: (value: T, index: number, array: T[]) => void, thisContext?: any) {
    if (typeof callback !== "function") {
        throw new Error("Please provide the callback as a function");
    }

    for (let index in this) {
        if (Object.prototype.hasOwnProperty.call(this, index)) {
            callback.call(thisContext, this[index], Number(index), this);
        }
    }
};

// Define an array
const newArr = [3, 34, 5, 46, 3, 2];

// Call SecondForEach with a proper callback
newArr.SecondForEach((value, index) => {
    console.log(`Index: ${index} has Value: ${value}`);
});


// newArr.ThirdAddOnProperty((index))

for (const index in newArr) {
        const element = newArr[index];
        console.log("The original properties are:", index, " and values are:", element)
    
}