# React To-Do List

## Introduction

This project is a simple interactive To-Do List application developed using React and Vite.

The application demonstrates React components, state management, state changes and props handling.

## Technologies Used

- React
- Vite
- JavaScript
- HTML
- CSS

## Features

- Add new todo items
- Display todo items
- Mark todos as completed
- Delete todo items
- Display total number of todos
- Display completed todo count
- Component-based architecture
- State management using useState
- Props for communication between components

## React Concepts Demonstrated

### Components

The application is divided into:

- App
- TodoForm
- TodoList
- TodoItem

### State

React's useState hook is used to manage:

- Todo list
- Todo input

### Props

Props are used to pass:

- Todo data
- Add function
- Delete function
- Complete/toggle function

from parent components to child components.

### State Changes

The application updates state when:

- A new todo is added
- A todo is completed
- A todo is deleted

## Project Structure

```text
src/
├── components/
│   ├── TodoForm.jsx
│   ├── TodoItem.jsx
│   └── TodoList.jsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx