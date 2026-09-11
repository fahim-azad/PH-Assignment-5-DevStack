My Project name is DevStack.

DevStack is a beautiful interactive web application that helps people pick and build their prefered technology stack for modern software projects.

## Technologies Used
- React
- TypeScript
- Tailwind CSS
- Vite
- React Toastify

## Top 3 Features
1. Interactive Tech Stack Builder: Users can browse and select different tools to easily build their personal stack.
2. Modern UI Design: Uses a clean, polished, and responsive design with sticky sidebars.
3. Smart State Management: My project tracks selected items, prevents adding same item again, and gives instant feedback with toast notifications.


## Questions asked in the PH github repository:

### 1. What is JSX, and why is it used in React?
JSX is a syntax that lets you write HTML directly inside JavaScript code. It is used because it makes writing React components much easier and more readable.

### 2. What is the difference between props and state?
Props are passed down from a parent to a child component and cannot be changed by the child.
State is data that is created and managed inside the component itself, and it can be changed.

### 3. What does the useState hook do, and where did you use it in this project?
The `useState` hook allows a component to remember and update data. In this project, I used it to store the list of all technologies and to track which ones the user added to "Your Stack".

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?
The `useEffect` hook lets you run side-effects (like fetching data) after the component renders. I used it to load the JSON data from a local file so the app can show the data properly when the page first loads.

### 5. Why does every item in a .map() list need a unique key prop?
A unique key helps React know exactly which items have changed, been added, or been removed. This makes updating the list much faster and prevents errors.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering is showing different UI on the screen based on a condition (like true/false). I used it to show "Your stack is empty" if no items are selected, but show the list of selected cards if the user adds something.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
You pass data from parent to child using props (just like passing variables). A child sends data back to the parent by calling a function that was passed down to it as a prop.
