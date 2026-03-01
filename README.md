# JSL03 Project Brief: Console-Based Task Manager

## Important Prerequisite

1. Before starting this challenge, make sure you have reviewed and corrected your JSL02 project using the provided solution. Your prompts for entering task details should be fully functional and include proper validation checks to ensure accurate user input.
2. **Check the project user stories in your student dashboard**, make sure you understand what is required for each feature.

## Overview

This project is a **console-based task management system** that allows a user to add **up to three (3) new tasks** to an existing task array. Tasks are stored as **objects inside an array** and each task has a **unique incremental ID**.Users enter task details using `prompt()` dialogs, and the system prints **all tasks** and **completed tasks** (status: `"done"`) to the console for review.

## Key Objectives

### Logic & User Interaction

- Store tasks as **objects inside an array** for structured data management.
- Allow users to **add up to three new tasks** to the existing task list.
- Ensure each new task has a **unique incremental ID** based on the last task in the array.
- Prompt users to enter **task details (title, description, status)** and store them in an object.
- Alert users when they reach the task limit with the message:
  _"There are enough tasks on your board, please check them in the console."_
  Implement a **filter function** to display only tasks with the status `"done"`.
- Log **all tasks** in the console with a clear label for easy review.
- Log **only completed tasks** (status: `"done"`) in the console under a "Completed Tasks" label for quick reference.

## Code Quality & Maintainability

- Use meaningful variable and function names to ensure readability and maintainability.
- Follow consistent indentation and formatting to enhance code clarity.
- Include comments explaining key logic and functionality to support future modifications.

## Expected Outcome

A **structured and limited task management system** that enables users to add, review, and filter tasks efficiently while ensuring **clean, well-documented, and maintainable code.**

**Console Log of all and completed tasks**

![console log](./explainer-images/console%20log.png)
