Here’s a detailed and visually appealing guide for setting up your repository for a TypeScript-based problem-solving environment.

---

# 🚀 **TypeScript Problem-Solving Repository Setup Guide**  
🌟 Welcome to the **TypeScript Programming Challenges** repository! This repository is dedicated to solving programming challenges with TypeScript. Each folder contains a `.ts` file with the problem’s solution and, in some cases, a **ReadMe file** explaining the problem.

Let’s get started! 🎉  

---

## 🌐 **About This Repository**
This repo serves as a home for:
1. **🤔 Programming Problems**: Each folder represents a problem with a `.ts` file containing its solution.
2. **📖 Problem Descriptions**: Some problems have a `README.md` to explain the problem statement, input/output format, and any constraints.
3. **👨‍💻 TypeScript Goodness**: Learn and improve your TypeScript skills while solving challenges!

Example folder structure:  
```plaintext
problem-solving/
├── problem-1/
│   ├── solution.ts
│   └── README.md
├── problem-2/
│   ├── solution.ts
├── tsconfig.json
├── package.json
└── node_modules/
```

---

## 🛠 **Setup Instructions**

### 1️⃣ Clone the Repository
Use Git to clone this repository to your local machine:
```bash
git clone https://github.com/your-username/problem-solving.git
cd problem-solving
```

---

### 2️⃣ Install TypeScript 🌀
Make sure you have **Node.js** installed. Then, install TypeScript globally:
```bash
npm install -g typescript
```
Or install it locally to the project:
```bash
npm install typescript --save-dev
```

---

### 3️⃣ Understand the Key Files 📁
- **`tsconfig.json`**: Configures TypeScript for the project.
- **`package.json`**: Contains scripts for building and watching TypeScript files.
- **Folders**: Each folder has `.ts` files for solutions and sometimes a `README.md` explaining the problem.

---

### 4️⃣ Configure Your TypeScript Environment 🔧

#### Key Configuration in `tsconfig.json`:
```json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["**/*.ts"],
  "exclude": ["node_modules", "dist"]
}
```
- Ensures every `.ts` file is compiled.
- Outputs `.js` files to the `dist/` folder.

---

### 5️⃣ Add Build and Watch Scripts 📜
Update the `package.json`:
```json
"scripts": {
  "build": "tsc",
  "watch": "tsc --watch"
}
```
- **`npm run build`**: Compiles TypeScript files.
- **`npm run watch`**: Watches for changes and recompiles automatically.

---

### 6️⃣ Run the Project 🏃‍♂️
- To build the project:
  ```bash
  npm run build
  ```
- To start watch mode:
  ```bash
  npm run watch
  ```

---

## 🗂 **Folder and File Structure**
For every problem:
1. Create a folder for the problem:
   ```bash
   mkdir problem-1
   cd problem-1
   ```
2. Add the `.ts` file:
   ```bash
   touch solution.ts
   ```
3. Optional: Add a `README.md` for explanation:
   ```bash
   echo "# Problem 1" > README.md
   ```

---



## 📚 **Learning Resources**
- [Official TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [FreeCodeCamp TypeScript Tutorial](https://www.freecodecamp.org/news/learn-typescript-beginners-guide/)
- [Excalidraw](https://excalidraw.com/): Draw diagrams to visualize problems.

---

## 🚩 **Contribute**
1. Fork the repo.
2. Create a feature branch.
3. Push your changes and create a Pull Request.

---

## 🎉 Final Thoughts
This repository is not just a coding project; it’s a journey to master TypeScript! Whether you're solving classic problems or diving into advanced concepts, this setup has you covered.

---

