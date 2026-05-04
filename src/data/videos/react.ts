export const REACT_VIDEO = {
  id: 101,
  title: "What is React and Why Use It?",
  duration: "10:45",
  url: "https://www.youtube.com/embed/N3AkSS5hXMA?si=WmQNIZCOzJPDfnyl",
  transcript: [
    {
      id: 1,
      duration: "0:04",
      text: "I'm going to show you how to build fast and interactive user interfaces.",
    },
    {
      id: 2,
      duration: "0:04",
      text: "React is a JavaScript library for building fast and interactive user interfaces.",
    },
    {
      id: 3,
      duration: "0:09",
      text: "It was developed at Facebook in 2011 and currently it's the most popular JavaScript library for building user interfaces.",
    },
    {
      id: 4,
      duration: "0:18",
      text: "As you can see on Google Trends, React is dominating the space of libraries and frameworks for building user interfaces.",
    },
    {
      id: 5,
      duration: "0:24",
      text: "The other two players here are Angular and Vue.",
    },
    {
      id: 6,
      duration: "0:27",
      text: "So if you want to expand your job opportunities as a front-end developer, you should have React on your resume.",
    },
    {
      id: 7,
      duration: "0:34",
      text: "At the heart of all React applications are components.",
    },
    {
      id: 8,
      duration: "0:38",
      text: "A component is essentially a piece of the user interface.",
    },
    {
      id: 9,
      duration: "0:41",
      text: "So when building applications with React, we build a bunch of independent, isolated, and reusable components.",
    },
    {
      id: 10,
      duration: "0:48",
      text: "And then compose them to build complex user interfaces.",
    },
    {
      id: 11,
      duration: "0:51",
      text: "Every React application has at least one component, which we refer to as the root component.",
    },
    {
      id: 12,
      duration: "0:57",
      text: "This component represents the entire application and contains other child components.",
    },
    {
      id: 13,
      duration: "1:02",
      text: "So every React application is essentially a tree of components.",
    },
    {
      id: 14,
      duration: "1:06",
      text: "If you have worked with Angular 2 or higher, this should sound familiar.",
    },
    {
      id: 15,
      duration: "1:10",
      text: "Here's an example. Let's imagine we want to build an application like Twitter.",
    },
    {
      id: 16,
      duration: "1:14",
      text: "We can split this page into components like navbar, profile, trends, and feed.",
    },
    {
      id: 17,
      duration: "1:22",
      text: "Here's a representation of these components in a tree.",
    },
    {
      id: 18,
      duration: "1:25",
      text: "So on the top we have app, and below that we have navbar, profile, trends, and feed.",
    },
    {
      id: 19,
      duration: "1:32",
      text: "Now feed includes several tweet components.",
    },
    {
      id: 20,
      duration: "1:35",
      text: "Each tweet component can include a like component, which we can reuse on other pages or even in different applications.",
    },
    {
      id: 21,
      duration: "1:43",
      text: "So as you see, each component is a piece of UI.",
    },
    {
      id: 22,
      duration: "1:46",
      text: "We can build these components in isolation and then put them together to build complex UIs.",
    },
    {
      id: 23,
      duration: "1:52",
      text: "In terms of implementation, a component is typically implemented as a JavaScript class that has some state and a render method.",
    },
    {
      id: 24,
      duration: "2:01",
      text: "The state here is the data that we want to display when the component is rendered.",
    },
    {
      id: 25,
      duration: "2:06",
      text: "And the render method is responsible for describing what the UI should look like.",
    },
    {
      id: 26,
      duration: "2:12",
      text: "The output of this render method is a React element, which is a simple JavaScript object that maps to a DOM element.",
    },
    {
      id: 27,
      duration: "2:20",
      text: "It's not a real DOM element, it's just a plain JavaScript object that represents that DOM element in memory.",
    },
    {
      id: 28,
      duration: "2:28",
      text: "So React keeps a lightweight representation of the DOM in memory, which we refer to as the virtual DOM.",
    },
    {
      id: 29,
      duration: "2:36",
      text: "Unlike the browser or the real DOM, this virtual DOM is cheap to create.",
    },
    {
      id: 30,
      duration: "2:41",
      text: "When we change the state of a component, we get a new React element.",
    },
    {
      id: 31,
      duration: "2:45",
      text: "React will then compare this element and its children with the previous one.",
    },
    {
      id: 32,
      duration: "2:49",
      text: "It figures out what has changed and updates part of the real DOM.",
    },
    {
      id: 33,
      duration: "2:58",
      text: "So we no longer have to work directly with the DOM API like in vanilla JavaScript or jQuery.",
    },
    {
      id: 34,
      duration: "3:07",
      text: "We no longer have to query and manipulate the DOM manually.",
    },
    {
      id: 35,
      duration: "3:15",
      text: "We simply change the state of components and React updates the DOM automatically.",
    },
    {
      id: 36,
      duration: "3:22",
      text: "That's why it's called React — it reacts to state changes.",
    },
    {
      id: 37,
      duration: "3:32",
      text: "React and Angular both use component-based architecture.",
    },
    {
      id: 38,
      duration: "3:37",
      text: "However, Angular is a framework, while React is a library.",
    },
    {
      id: 39,
      duration: "3:48",
      text: "React only handles rendering the view and syncing it with state.",
    },
    { id: 40, duration: "3:54", text: "It has a small API to learn." },
    {
      id: 41,
      duration: "4:01",
      text: "You need additional libraries for routing and HTTP requests.",
    },
    {
      id: 42,
      duration: "4:09",
      text: "This flexibility lets you choose your own tools instead of being locked in.",
    },
    {
      id: 43,
      duration: "4:20",
      text: "That's all about React. Next, we'll set up the development environment.",
    },
  ],
};
