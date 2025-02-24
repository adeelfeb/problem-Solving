# Inventory Management with TypeScript

## Problem Statement
You are tasked with managing an inventory system for a store. The system should support the following functionalities:

1. **Adding New Items**:
   - Add a new item to the inventory only if it does not already exist (based on its unique `id`).
   - If the item already exists, notify the user and do not add it again.

2. **Updating Existing Items**:
   - Update specific properties of an existing item in the inventory (e.g., change its `price` or `quantity`).
   - If the item to be updated does not exist, notify the user.

3. **Calculating Total Inventory Value**:
   - Compute the total value of the inventory by summing the product of `price` and `quantity` for each item.

This functionality must be implemented using TypeScript, with type safety and proper handling of optional updates.

---

## Solution
The solution involves defining a structured `Item` type and implementing the required functionalities through reusable functions. Below is a breakdown of the solution:

### Type Definitions
```typescript
type Item = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  category: string;
};

type PartialItems = Partial<Item>;
```
- **`Item`**: Represents the structure of an inventory item.
- **`PartialItems`**: Allows partial updates to an item.

### Initial Data Setup
```typescript
const inventory: Item[] = [
  { id: "1", name: "Laptop", price: 1000, quantity: 10, category: "electronics" },
  { id: "2", name: "Shirt", price: 20, quantity: 50, category: "clothing" },
];

const newItem: Item = { id: "9", name: "Headphones", price: 100, quantity: 15, category: "electronics" };
```
- An initial `inventory` array is defined with some sample items.
- A `newItem` is defined for testing purposes.

### Adding a New Item
```typescript
const addItem = (inventory: Item[], newItem: Item): Item[] => {
  const checkIn = inventory.some((item) => item.id === newItem.id);
  if (!checkIn) {
    return [...inventory, newItem]; // Add the new item to the array
  } else {
    console.log("Item already exists in the inventory");
    return inventory; // Return the original array if duplicate
  }
};
```
- **Logic**:
  - Check if the item already exists based on its `id`.
  - If not, add the item; otherwise, return the original inventory with a notification.

### Updating an Existing Item
```typescript
const updateItem = (inventory: Item[], id: string, newItem: PartialItems): Item[] => {
  const itemExists = inventory.some((item) => item.id === id);
  if (itemExists) {
    return inventory.map((item) =>
      item.id === id ? { ...item, ...newItem } : item
    ); // Update the specific item
  } else {
    console.log("No item exists with this id");
    return inventory; // Return the original array if no match is found
  }
};
```
- **Logic**:
  - Use `map` to iterate through the inventory.
  - Update the matching item by spreading its existing properties and the `newItem` properties.

### Calculating Total Inventory Value
```typescript
const calculateInventoryValue = (modifiedInventory: Item[]): number => {
  return modifiedInventory.reduce((sum, item) => sum + item.price * item.quantity, 0);
};
```
- **Logic**:
  - Use `reduce` to compute the total value by multiplying `price` and `quantity` for each item and summing the results.

### Full Example
```typescript
// Add a new item
const updatedInventory = addItem(inventory, newItem);
console.log("After Adding New Item:", updatedInventory);

// Update an existing item
const itemToUpdate: PartialItems = { price: 25, quantity: 40 };
const modifiedInventory = updateItem(updatedInventory, "2", itemToUpdate);
console.log("After Updating Item:", modifiedInventory);

// Calculate total inventory value
const totalValue = calculateInventoryValue(modifiedInventory);
console.log("Total Inventory Value:", totalValue);
```

---

## Output
### After Adding New Item
```json
[
  { "id": "1", "name": "Laptop", "price": 1000, "quantity": 10, "category": "electronics" },
  { "id": "2", "name": "Shirt", "price": 20, "quantity": 50, "category": "clothing" },
  { "id": "9", "name": "Headphones", "price": 100, "quantity": 15, "category": "electronics" }
]
```

### After Updating Item
```json
[
  { "id": "1", "name": "Laptop", "price": 1000, "quantity": 10, "category": "electronics" },
  { "id": "2", "name": "Shirt", "price": 25, "quantity": 40, "category": "clothing" },
  { "id": "9", "name": "Headphones", "price": 100, "quantity": 15, "category": "electronics" }
]
```

### Total Inventory Value
```
18750
```

---

## Key Features
- **Immutable Updates**: Ensures original data remains unchanged.
- **Type Safety**: Uses TypeScript to validate object structures.
- **Reusability**: Functions are reusable and modular.

## How to Run
1. Copy the code into a TypeScript file (e.g., `inventory.ts`).
2. Compile it to JavaScript using `tsc inventory.ts`.
3. Run the generated JavaScript file using Node.js:
   ```bash
   node inventory.js
   ```

## Conclusion
This implementation demonstrates how to handle inventory management with key operations like adding, updating, and calculating the total value while leveraging TypeScript's type safety and JavaScript's flexibility.

