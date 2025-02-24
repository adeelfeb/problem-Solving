// Define a type for user roles
type UserRole = "admin" | "user";

// Define an interface for the User object
interface User {
  getName: () => string;
  getEmail: () => string;
  getRole: () => UserRole;
  updateEmail: (newEmail: string) => void;
  updateName: (newName: string) => void;
}

// Factory function to create a User object
function createUser(name: string, email: string, role: UserRole = "user"): User {
  // Private variables (encapsulation)
  let _name = name;
  let _email = email;
  const _role = role; // Role is read-only

  return {
    // Method to get the user's name
    getName: () => _name,

    // Method to get the user's email
    getEmail: () => _email,

    // Method to get the user's role
    getRole: () => _role,

    // Method to update the user's email
    updateEmail: (newEmail: string) => {
      if (newEmail.includes("@")) {
        _email = newEmail;
        console.log(`Email updated to: ${_email}`);
      } else {
        console.log("Invalid email format.");
      }
    },

    // Method to update the user's name
    updateName: (newName: string) => {
      if (newName.length > 2) {
        _name = newName;
        console.log(`Name updated to: ${_name}`);
      } else {
        console.log("Name must be at least 3 characters long.");
      }
    }
  };
}

// Creating a regular user
const user1 = createUser("John Doe", "john@example.com");

// Creating an admin user
const adminUser = createUser("Alice Smith", "alice@example.com", "admin");

// Accessing user details
console.log(user1.getName()); // John Doe
console.log(user1.getEmail()); // john@example.com
console.log(user1.getRole()); // user

// Updating user details
user1.updateEmail("john.doe@gmail.com"); // Email updated to: john.doe@gmail.com
user1.updateName("Johnny"); // Name updated to: Johnny

// Trying to update with invalid data
user1.updateEmail("invalid-email"); // Invalid email format.
user1.updateName("Jo"); // Name must be at least 3 characters long.

// Admin user details
console.log(adminUser.getName()); // Alice Smith
console.log(adminUser.getRole()); // admin

// The role cannot be changed since it's private
