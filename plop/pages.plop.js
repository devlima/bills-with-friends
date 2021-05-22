const { page } = require('./config.plop');

module.exports = {
  pageConfig:{
    description: "Create a page",
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: "input",
        // Variable name for this input
        name: "name",
        // Prompt to display on command line
        message: "What is your page name?",
      },
    ],
    actions: () => {
      return [
        {
          // Add a new file
          type: "add",
          // Path for the new file
          path: page.index.path,
          // Handlebars template used to generate content of new file
          templateFile: page.index.template,
        },
        {
          type: "add",
          path: page.style.path,
          templateFile: page.style.template,
        },
      ]
    },
  }
}