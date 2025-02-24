const object2 = Object.create(Object.prototype, {
    age: { value: 432, enumerable: true },
    name: { value: "whatever", enumerable: true }
});

console.log("Prototype of object2:", Object.getPrototypeOf(object2));
console.log("Using __proto__:", object2.__proto__);
console.log("Does object2 have Object.prototype?:", Object.getPrototypeOf(object2) === Object.prototype);
