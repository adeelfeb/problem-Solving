interface Book {
    title: string;
    author: string;
    price: number;
    inStock: boolean;
  }
  
  // Mock API 1
  function fetchBooksFromAPI1(): Promise<Book[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { title: "A Great Gatsby", author: "F. Scott Fitzgerald", price: 15, inStock: true },
          { title: "1984", author: "George Orwell", price: 10, inStock: false },
        ]);
      }, Math.random() * 2000); // Random delay up to 2 seconds
    });
  }
  
  // Mock API 2
  function fetchBooksFromAPI2(): Promise<Book[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { title: "To Kill a Mockingbird", author: "Harper Lee", price: 12, inStock: true },
          { title: "1984", author: "George Orwell", price: 10, inStock: false },
        ]);
      }, Math.random() * 2000); // Random delay up to 2 seconds
    });
  }

  const removeDuplicateFromBook = (unsortedBooks: Book[]): Book[]=>{
    const seen = new Set<string>()
    const toReturnUniqueBooks:Book[] = []
    for(const book of unsortedBooks){
        const key = `${book.author}|${book.title}`
        if(!seen.has(key)){
            seen.add(key)
            toReturnUniqueBooks.push(book)
        }
    }

    return toReturnUniqueBooks
  }
  
  async function consolidateBookData(): Promise<Book[]>{
    // Implement this function
    console.log("Fetching API data...")
    const response =  await (await Promise.allSettled([fetchBooksFromAPI1(), fetchBooksFromAPI2()]))
        // console.log(response)
        const successfulResults = response.filter((result) : result is PromiseFulfilledResult<Book[]> => result.status === "fulfilled")
        .flatMap((result)=> result.value)

        if(successfulResults.length === 0 ){
            throw new Error("All Api failed")
        }
        
        const uniqueBooks: Book[] = removeDuplicateFromBook(successfulResults)
        // console.log("Before sort:", uniqueBooks)

        const sortedBooks: Book[] = uniqueBooks.sort((a, b) => a.price - b.price);
        const sortedBooks2: Book[] = uniqueBooks.sort((a, b) => a.title.localeCompare(b.title));
    
        
        return sortedBooks2

  }
  
  // Example usage
  async function main() {
    try {

        

const objectTemp = [
    {
    name: "Adeel",
    age: 23
    },
    {
    name: "Adel",
    age: 23
    },
    {
    name: "Aeel",
    age: 23
    },
    {
    name: "Aadeel",
    age: 23
    },

]


console.log(objectTemp.sort((a, b)=> a.name.localeCompare(b.name))); 


const str1 = "apple";
const str2 = "am";

console.log(str1.localeCompare(str2)); // Output: -1 (apple comes before banana)
console.log(str2.localeCompare(str1)); // Output: 1 (banana comes after apple)
console.log(str1.localeCompare("apple")); // Output: 0 (strings are equal)


      const consolidatedBooks = await consolidateBookData();
      console.log("Consolidated Book Data:", consolidatedBooks);
    } catch (error) {
      console.error("Failed to fetch book data:", error);
    }
  }
  
  main();

const arr = [1,2,3,8,16]

// console.log(arr.sort())

// Output of the above code and that is a messed up thing since js converts into string 1 will be one before sorting it so sixten is smaller than eight
// [ 1, 16, 2, 3, 8 ]



  export {}