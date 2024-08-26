---
title: "How to use useDebounce in React"
date: "2024-08-24"

---

I recently learned about Debouncing in React and wanted to share how it can boost React Performance.

What I am gonna talk about specifically is "useDebounce" which is a custom React hook that delays the execution of a function until a specified time has passed since the last time it was invoked. 

### This is incredibly useful for scenarios like:

- **Search Input**: Delay the API call until the user has stopped typing.
- **Form Validation**: Prevent excessive validation checks on every keystroke.

I have shared some code down below which shows a simple implementation of the code. 

Alternatively, if you prefer a library solution, lodash provides a debounce function that simplifies this process.

![image of code](/debounce.jpeg)

If you want to understand why ISR is crucial for building fast websites, [head here.](why-ISR-is-important)