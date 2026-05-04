export const ANGULAR_PDF = {
  id: 204,
  title: "Angular Architecture Overview",
  url: "https://www.dcpehvpm.org/E-Content/BCA/BCA-II/Web%20Technology/angularjs_tutorial.pdf",
  chunks: [
    {
      id: 1,
      page: 1,
      text: "LEARN ANGULARJS\nweb application framework\ntutorialspoint\nSIMPLY EASY LEARNING\://tutorialspoint.com",
    },
    {
      id: 2,
      page: 2,
      text: "About the Tutorial\nAngularJS is a very powerful JavaScript library. It is used in Single Page Application (SPA) projects. It extends HTML DOM with additional attributes and makes it more responsive to user actions. AngularJS is open source, completely free, and used by thousands of developers around the world. It is licensed under the Apache license version 2.0.\nThis tutorial teaches you basics of AngularJS and its programming concepts. It describes the components of AngularJS with suitable examples.\nAudience\nThis tutorial is designed for software professionals who are willing to learn AngularJS programming in simple and easy steps. After completing this tutorial, you will be at intermediate level of expertise from where you can take yourself to higher level of expertise.\nPrerequisites\nYou should have basic understanding of scripting language such as JavaScript, and any text editor. You should also know the basic web technologies such as HTML, CSS, AJAX etc. for learning to develop web applications using Angular JS.\nDisclaimer & Copyright\n© Copyright 2014 by Tutorials Point (I) Pvt. Ltd. All the content and graphics published in this e-book are the property of Tutorials Point (I) Pvt. Ltd.",
    },
    {
      id: 3,
      page: 3,
      text: "Contents\n1. Overview ................... 1\nGeneral Features .............. 1\nCore Features ................. 1\nConcepts ...................... 2\nAdvantages of AngularJS ........ 3\nDisadvantages of AngularJS ..... 4\nAngularJS Directives .......... 4\n2. Environment ................ 5\nExample ....................... 6\n3. MVC architecture ........... 10\n4. First Application .......... 12\n5. Directives ................. 15",
    },
    {
      id: 4,
      page: 7,
      text: "1. OVERVIEW\nAngularJS is an open source, JavaScript based web application development framework. It was originally developed in 2009 by Misko Hevery and Adam Abrons. It is now maintained by Google.\nGeneral Features\n- Efficient framework for Rich Internet Applications (RIA).\n- Client side applications using JavaScript in a clean MVC way.\n- Cross-browser compliant.\nCore Features\n- Data-binding: Automatic synchronization of data between model and view components.\n- Scope: Objects that refer to the model acting as glue between controller and view.",
    },
    {
      id: 5,
      page: 10,
      text: "Disadvantages of AngularJS\n- Not Secure: Being JavaScript only framework, applications are not safe. Server side authentication and authorization is must.\n- Not degradable: If the user disables JavaScript, nothing would be visible except the basic page.\nAngularJS Directives\n- ng-app: Defines and links an AngularJS application to HTML.\n- ng-model: Binds the values of AngularJS application data to HTML input controls.\n- ng-bind: Binds the AngularJS application data to HTML tags.",
    },
    {
      id: 6,
      page: 16,
      text: "3. MVC ARCHITECTURE\nModel View Controller (MVC) is a software design pattern for developing web applications.\n- Model: Lowest level of the pattern responsible for maintaining data.\n- View: Responsible for displaying all or a portion of the data to the user.\n- Controller: Software code that controls the interactions between the Model and View.\nMVC isolates application logic from the user interface layer and supports separation of concerns.",
    },
    {
      id: 7,
      page: 21,
      text: "5. DIRECTIVES\nAngularJS directives are used to extend HTML. They are special attributes starting with ng-prefix.\n- ng-app: Starts an AngularJS Application.\n- ng-init: Initializes application data.\n- ng-model: Defines the model/variable to be used in AngularJS.\n- ng-repeat: Repeats HTML elements for each item in a collection.",
    },
    {
      id: 8,
      page: 25,
      text: '6. EXPRESSIONS\nExpressions are used to bind application data to HTML. Written inside double curly braces {{ expression }}.\n- Using numbers: {{cost * quantity}}\n- Using String: {{student.firstname + " " + student.lastname}}\n- Using Object: {{student.rollno}}\n- Using Array: {{marks[3]}}',
    },
    {
      id: 9,
      page: 31,
      text: "8. FILTERS\nFilters are used to modify the data. Clubbed in expression or directives using pipe (|) character.\n1. uppercase: converts text to upper case.\n2. lowercase: converts text to lower case.\n3. currency: formats text in a currency format.\n4. filter: filter the array to a subset based on criteria.\n5. orderby: orders the array based on criteria.",
    },
    {
      id: 10,
      page: 41,
      text: "10. HTML DOM\nDirectives used to bind application data to attributes of HTML DOM elements:\n- ng-disabled: Disables a given control.\n- ng-show: Shows a given control.\n- ng-hide: Hides a given control.\n- ng-click: Represents an AngularJS click event.",
    },
  ],

  extractedText:
    "Angular applications are built using modules, components, and services.",
};
