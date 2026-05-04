export const REACT_HOOKS_PDF = {
  id: 202,
  title: "React Hooks Cheat Sheet",
  url: "https://sites.ischool.berkeley.edu/i253af21/files/2021/10/frontend-webarch-react-hooks-1.pdf",
  chunks: [
    {
      id: 1,
      page: 1,
      text: "React Hooks I\nINFO 253A: Frontend Web Architecture\nKay Ashaolu",
    },
    {
      id: 2,
      page: 2,
      text: "What are Hooks?\nHooks are a way to be able to use the full functionality of React in a more functional programming kind of way\nYou no longer require JavaScript classes to write fully fledged React Components\nI have not taught ES6 classes nor React Class components because of this move",
    },
    {
      id: 3,
      page: 3,
      text: "Why?\nIn my opinion, React have always embraced the encapsulating properties of a function conjoined with it's simplicity.\nThe concept of having a component that does not depend on anything else marries well with the function concept of the result being dependent on the inputs of the function\nThe abstraction of a function can be elegantly used in this context",
    },
    {
      id: 4,
      page: 4,
      text: 'But why hooks?\nFunctional components already did exist in React before hooks\nHowever they were limited in what they can do\nThey can accept properties and render HTML based on their properties\nBut they couldn\'t tie into some of the more fundamental and advanced features of React\nClass based components could define special functions that had special properties that "hooked" into React functionality\nBut with hooks, functions also have the same ability',
    },
    {
      id: 5,
      page: 5,
      text: "Let's start with an example: useState\nimport React, { useState } from 'react';\nfunction Example() {\n // Declare a new state variable, which we'll call \"count\"\n const [count, setCount] = useState(0);\n return (\n <div>\n <p>You clicked {count} times</p>\n <button onClick={() => setCount(count + 1)}>\n Click me\n </button>\n </div>\n );\n}",
    },
    {
      id: 6,
      page: 6,
      text: "useState example\nuseState is a Hook\nthe useState function returns two elements: a current state value and a function that enables you to update\nuseState takes a single argument: the initial state value.",
    },
    {
      id: 7,
      page: 7,
      text: 'Now what really is an Hook?\nHooks are functions that allow you "hook into" React features like state and what\'s called "lifecycle" features from function components\nAn example of a lifecycle feature is\nExecute code when component is first created\nExecute code when component updates',
    },
    {
      id: 8,
      page: 8,
      text: 'What is state in React?\nA state variable is a single piece of data that resides within each component\nEach instance of the component "remembers" its own state\nWhen any state variable is changed, React re-renders the component, incorporating any changes',
    },
    {
      id: 9,
      page: 9,
      text: "Let's go back to our example\nimport React, { useState } from 'react';\nfunction Example() {\n // Declare a new state variable, which we'll call \"count\"\n const [count, setCount] = useState(0);\n return (\n <div>\n <p>You clicked {count} times</p>\n <button onClick={() => setCount(count + 1)}>\n Click me\n </button>\n </div>\n );\n}",
    },
    {
      id: 10,
      page: 10,
      text: 'What\'s happening here?\nIn our Example component, we set a single element of state called count\nWe have access to the current value of count using the "count" variable, and the function "setCount" that takes one parameter (future state) that can change the count variable\ncount, and setCount are declared as const to declaratively state that they cannot be changed. You cannot change count by assigning it to another value. But you must use the setCount function to change the count value\nUsing the setCount function is important: when state is changed using this function React knows to render the component again after the variable has changed',
    },
    {
      id: 11,
      page: 11,
      text: "What's happening here?\nBecause the button's onClick attribute is set to an anonymous function that increments count (using the setCount function), the component is rendered again with the new value of the button",
    },
    {
      id: 12,
      page: 12,
      text: "useEffect hook\nThe useEffect hook gives you access to what's called React's \"lifecycle features\"\nLifecycle features in this case means access to special times in the creation, operation, and removal of a componnet.\nuseEffect state takes one function that will be executed right after the component is rendered to the screen.\nIn effect, this hook gives you the ability to run code on startup, and when any state changes in the component, and when the component is removed",
    },
    {
      id: 13,
      page: 13,
      text: "useEffect Example\nuseEffect(() => {\n const subscription = props.source.subscribe();\n return () => {\n // Clean up the subscription\n subscription.unsubscribe();\n };\n});",
    },
    {
      id: 14,
      page: 14,
      text: "useEffect Example\nuseEffect here is passed a function that contains two statements:\nFirst, it is subscribing to whatever props.source.subscribe() is. This will be done any time this component is rendered to the screen\nSecond, if this component is removed, then the function that is returned will execute (the unsubscribe action)\nThis function it is returning enables you to clean up any actions that may not be needed anymore",
    },
    {
      id: 15,
      page: 15,
      text: "Grand Example\nimport React, { useState, useEffect } from 'react';\nimport ReactDOM from 'react-dom';\nfunction Weather(props) {\n const [temp, setTemp] = useState(0);\n let getWeatherData = async () => {\n let response = await fetch(`https://openweathermap.org?...\n if (!response.ok) {\n throw new Error(`HTTP error! status: ${response.status}`);\n} else {\n return response.json();\n }\n }\n useEffect(() => {\n getWeatherData().then((response) => {\n setTemp(response.main.temp);\n }).catch(e => console.log(e));;\n })\n}",
    },
    {
      id: 16,
      page: 16,
      text: 'Grand Example\nreturn (\n <div>\n <strong>The temperature of {props.location} is {temp}</strong>\n </div>\n );\n}\nfunction App(props) {\n return (\n <div>\n <Weather location="Berkeley,ca" />\n <Weather location="Concord,ca" />\n </div>\n );\n}\nReactDOM.render(\n<App />,\ndocument.getElementById(\'root\')\n);',
    },
    {
      id: 17,
      page: 17,
      text: "Grand Example\nNote we are using both useState to keep the state of the temperature and useEffect to make an API call to the weather endpoint to get the weather\nThe function in useEffect is executed on every render, but since we only pass a property of the current location, it only needs to be rendered once",
    },
    {
      id: 18,
      page: 18,
      text: "Questions?",
    },
  ],
  extractedText:
    "useEffect runs after rendering and is useful for API calls, subscriptions, and DOM updates.",
};
