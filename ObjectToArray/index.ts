interface personObject {
    name: string;
    age: number;
}

const personTo: personObject[] = [
    { name: "Jim5", age: 5 },
    { name: "tim3", age: 3 },
    { name: "tim7", age: 7 },
    { name: "kim8", age: 8 },
    { name: "nim2", age: 2 }
];

const objectToArray = (personsObject: personObject[]): string[] => {
    return personsObject
        .filter((person: personObject) => person.age >= 5)  // Filter people with age >= 5
        .map((person) => person.name);  // Map to extract names
}

console.log(`The array of names is: ${objectToArray(personTo)}`);
