type Item = {
    id: string;
    name: string;
    price: number;
    quantity: number;
    category: string;
  };
  
  type PartialItems = Partial<Item>;
  
  const inventory: Item[] = [
    { id: "1", name: "Laptop", price: 1000, quantity: 10, category: "electronics" },
    { id: "2", name: "Shirt", price: 20, quantity: 50, category: "clothing" },
  ];
  
  const newItem: Item = { id: "9", name: "Headphones", price: 100, quantity: 15, category: "electronics" };
  
  const addItem = (inventory: Item[], newItem: Item): Item[] => {
    const checkIn = inventory.some((item) => item.id === newItem.id);
    if (!checkIn) {
      return [...inventory, newItem]; // Add the new item to the array
    } else {
      console.log("Item already exists in the inventory");
      return inventory; // Return the original array if duplicate
    }
  };
  
  // Add a new item
  const updatedInventory = addItem(inventory, newItem);
  console.log("After Adding New Item:", updatedInventory);
  
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
  
  // Update an existing item
  const itemToUpdate: PartialItems = { price: 25, quantity: 40 };
  const modifiedInventory = updateItem(updatedInventory, "2", itemToUpdate);
  
  console.log("After Updating Item:", modifiedInventory);
  
  const calculateInventoryValue = (modifiedInventory: Item[]): number => {
    return modifiedInventory.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };
  
  // Calculate total inventory value
  const totalValue = calculateInventoryValue(modifiedInventory);
  console.log("Total Inventory Value:", totalValue);
  
  // Export to avoid TypeScript errors
  export {};
  