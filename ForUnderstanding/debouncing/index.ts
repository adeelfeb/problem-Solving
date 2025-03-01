console.log("Understanding debouncing");

function updating(num: number): void {
    console.log("The square is:", num * num);
}

function debouncing(cb: (num: number) => void, delay: number = 1000) {
    let timeoutId: ReturnType<typeof setTimeout>; // Stores the timeout ID

    return (num: number) => {
        clearTimeout(timeoutId); // Clear the previous timer
        timeoutId = setTimeout(() => cb(num), delay); // Set a new timer
    };
}

// Create a debounced function
const debouncedUpdating = debouncing(updating, 2000);

console.log("Calling debouncing function...");
debouncedUpdating(3);
debouncedUpdating(4);
debouncedUpdating(5); // Only this will execute after 2000ms



function debounceFunc<T extends (...arg: any[])=>void>(cb: T, delay: number = 5000){
    let timeoutId: ReturnType<typeof setTimeout>


    return (...arg: Parameters<T>)=>{
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
            cb(...arg)
        }, delay);
    }
}

const debouncedUpdating2 = debounceFunc((message: string)=> {console.log(message)})


debouncedUpdating2("Ok then will it work")