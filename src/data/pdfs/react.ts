export const REACT_PDF = {
  id: 201,
  title: "React Introduction Guide",
  url: "https://web.stanford.edu/class/cs142/lectures/ReactJS.pdf",
  extractedText:
    "React is used to build scalable front-end applications. JSX and components are core concepts.",
  chunks: [
    {
      id: 1,
      page: 2,
      text: "ReactJS is a JavaScript framework for building web applications. It is similar to AngularJS in that it enables fast response by running in the browser. React is less opinionated and focuses mainly on rendering views and handling user interactions.",
    },
    {
      id: 2,
      page: 2,
      text: "React follows a Model-View-Controller pattern where the view is constructed using reusable components. It supports modular development, testing, and is commonly used for large single-page applications.",
    },
    {
      id: 3,
      page: 3,
      text: "A React application is typically bundled into a JavaScript file that interacts with the DOM and renders content into a root div element in an HTML page.",
    },
    {
      id: 4,
      page: 4,
      text: "React toolchain includes Babel for transpiling modern JavaScript and JSX into standard JavaScript, and Webpack for bundling modules and assets like CSS and images into a single file.",
    },
    {
      id: 5,
      page: 5,
      text: "ReactDOM.render is used to render a React element tree into a specific DOM node. Typically, a root component is rendered inside a div element in the HTML document.",
    },
    {
      id: 6,
      page: 6,
      text: "React components are defined as classes or functions. Class components extend React.Component and must implement a render method that returns a tree of React elements.",
    },
    {
      id: 7,
      page: 7,
      text: "The render method creates UI elements using React.createElement or JSX syntax. These elements represent the structure of the UI and are rendered efficiently by React.",
    },
    {
      id: 8,
      page: 9,
      text: "JSX allows developers to write HTML-like syntax within JavaScript. It gets compiled into React.createElement calls and makes UI code more readable and expressive.",
    },
    {
      id: 9,
      page: 10,
      text: "React uses state to manage dynamic data. When state changes using setState, React automatically re-renders the component to reflect the updated UI.",
    },
    {
      id: 10,
      page: 11,
      text: "React implements one-way data binding. User input updates the component state, and state changes trigger re-rendering, ensuring the UI stays in sync with data.",
    },
  ],
};
