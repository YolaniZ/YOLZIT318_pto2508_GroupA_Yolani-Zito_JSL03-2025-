# JSL03 Project Brief: Console-Based Task Manager

## Important Prerequisite

1. Before starting this challenge, make sure you have reviewed and corrected your JSL02 project using the provided solution. Your prompts for entering task details should be fully functional and include proper validation checks to ensure accurate user input.
2. **Check the project user stories in your student dashboard**, make sure you understand what is required for each feature.


# JSL03 – Console-Based Task Manager

## 📌 Overview
This project is a **console-based task management system** that allows a user to add **up to three (3) new tasks** to an existing task array. Tasks are stored as **objects inside an array** and each task has a **unique incremental ID**.

Users enter task details using `prompt()` dialogs, and the system prints **all tasks** and **completed tasks** (status: `"done"`) to the console for review.

---

## ✅ Features (User Story Requirements)

### 1) Tasks Stored as Objects in an Array
Each task is stored as an object with the following structure:

- `id` (number) – unique incremental identifier
- `title` (string)
- `description` (string)
- `status` (string) – one of: `"todo"`, `"doing"`, `"done"`

---

### 2) Add Up to Three New Tasks
The system allows the user to add **up to 3 new tasks** to the existing `initialTasks` array.

When the user reaches the limit, an alert is displayed:

> **"There are enough tasks on your board, please check them in the console."**

---

### 3) Unique Incremental Task IDs
Each newly created task receives a unique ID based on the **last task ID** in the array:

- If the last task has `id: 3`, the next added task will have `id: 4`, and so on.

---

### 4) Prompt-Based User Input With Validation
The system prompts the user to enter:

- **Title** (required – cannot be empty)
- **Description** (required – cannot be empty)
- **Status** (required – must be `"todo"`, `"doing"`, or `"done"`)

Invalid inputs trigger an alert and reprompt until valid input is provided.

---

### 5) Filter Completed Tasks
A `filter()` is used to extract only tasks with:

- `status === "done"`

These are logged under a clear console label.

---

## 🖥️ Console Output

### All Tasks
All tasks (including existing tasks + newly added tasks) are logged in the console using a clear label:

- **"=== All Tasks ==="**

### Completed Tasks
Only tasks with status `"done"` are logged under:

- **"=== Completed Tasks ==="**

✅ Screenshot example:

![alt text](<explainer-images/Screenshot 2026-03-01 232411.png>)

## 🚀 How to Run the Project
1. Open the project folder in **VS Code**
2. Open `index.html` with **Live Server**
3. Follow the prompts to add tasks
4. Open the browser console to view logs:
   - Right click → Inspect → Console

---

## 🧠 Technologies Used
- HTML (basic structure)
- CSS
- JavaScript (arrays, prompts, alerts, console logging)




