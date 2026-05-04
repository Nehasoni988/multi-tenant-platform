export const VUE_PDF = {
  id: 203,
  title: "Vue Quick Start Guide",
  url: "https://indico.cern.ch/event/829641/contributions/3473411/attachments/1866652/3069724/JTech_vue.pdf",
  chunks: [
    {
      id: 1,
      page: 1,
      text: "Vue.js\nA BRIEF INTRODUCTION\nE.MATLI BE/ICS-TI",
    },
    {
      id: 2,
      page: 2,
      text: "VUE COMPONENT\nVue applications are built as a tree of nested components\nComponents are reusable Vue instances with a name\nVue Components are defined as Single File Components\nTemplate\nScript\nStyle (Scoped)\nHello.vue\n<template>\n<p>{{ greeting }} World!</p>\n</template>\n<script>\nmodule.exports = {\ndata: function () {\nreturn {\ngreeting: 'Hello'\n}\n}\n}\n</script>\n<style scoped>\np {\nfont-size: 2em;\ntext-align: center;\n}\n</style>",
    },
    {
      id: 3,
      page: 3,
      text: "VUE COMPONENT\nTemplate\nText interpolation {{ Mustache syntax }}\nStyle/Class binding\nDirectives (data binding, conditional rendering, loops...)\nCustom elements\nScript\nModules/Component import\nProps (custom attributes to pass data from parent to child element)\nData\nMethods\nComputed properties (cached based on their reactive dependencies)\nWatches\nLifecycle Hooks\nRouter Navigation Guards",
    },
    {
      id: 4,
      page: 4,
      text: 'VUE COMPONENT LIFECYCLE\nnew Vue()\nInit Events & Lifecycle\nbeforeCreate\nInit injections & reactivity\ncreated\nHas "el" option?\nYES: when vm.$mount(el) is called\nHas "template" option?\nYES: Compile template into render function\nNO: Compile el\'s outerHTML as template\nbeforeMount\nCreate vm.$el and replace "el" with it\nmounted\nMounted\nWhen data changes: beforeUpdate -> Virtual DOM re-render and patch -> updated\nWhen vm.$destroy() is called: beforeDestroy -> Teardown watchers, child components and event listeners -> destroyed',
    },
    {
      id: 5,
      page: 5,
      text: "VUE ROUTER\nComponent-based router configuration\nNested route mapping\nRoute & query parameters\nLazy-load route components\nWebpack code splitting\nProgrammatic navigation\nrouter.push({ name: 'alarm', params: { alarmId: 12345 } })\nRouter-Link Component\n<router-link :to='{name: \"list\", query: { search: `${rsql}` }}'>Search</router-link>\nNavigation control\nRouter Navigation Guards: beforeEach, afterEach, beforeEnter\nIn component Navigation Guards: beforeRouteEnter, beforeRouteUpdate, beforeRouteLeave",
    },
    {
      id: 6,
      page: 6,
      text: "VUE COMPONENT COMMUNICATION\nParent-Child communication:\nProps (attr) DOWN - Events UP\nDispatch actions to a central Store\nStore manages Shared State\nTrigger Updates\nComponent Notify Action",
    },
    {
      id: 7,
      page: 7,
      text: "VUEX\nCentralised store for all the components in an application\nSingle State Tree\nMaintain independence between views and states\nEnsure one-way data flow\nThe only way to change a store's state is by committing mutations\nActions can be Asynchronous\nMutations Must Be Synchronous\nBackend API -> Actions -> Mutations -> State -> Vue Components",
    },
    {
      id: 8,
      page: 8,
      text: "DEVTOOLS\nComponents Tree Navigation\nState Inspector\nData Editor\nStore Mutations\nTime Travel\nAvailable as Browser extension or Electron App",
    },
    {
      id: 9,
      page: 9,
      text: "VUE CLI\nVue CLI is a full system for rapid development, providing:\nInteractive project scaffolding\nDev server with Hot-Module-Replacement\nBuild a production-ready bundle with minification for JS/CSS/HTML and auto vendor chunk splitting\nConfigurable via in-project config file;\nExtensible via plugins (collection of official plugins like Babel, Typescript...)\nA full graphical user interface to Create, Configure and Analyse Vue.js projects",
    },
    {
      id: 10,
      page: 10,
      text: "VUE RESOURCES AND DOCUMENTATION\nhttps://vuejs.org\nhttps://vuejs.org\nhttps://vuejs.org\nhttps://vuejs.org\nhttps://vuejs.org\nhttps://github.io (VSCode Plugin)\nhttps://vuetifyjs.com (material components)\nhttps://nuxtjs.org",
    },
  ],

  extractedText:
    "Vue uses a reactive system to automatically update the DOM when data changes.",
};
