const { component } = require('./config.plop');

module.exports = {
  componentConfig:{
    description: "Create a component",
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: "input",
        // Variable name for this input
        name: "name",
        // Prompt to display on command line
        message: "What is your component name?",
      },
      {
        // Raw text input
        type: "list",
        // Variable name for this input
        name: "type",
        // Prompt to display on command line
        message: "Which component type?",
        choices: ['complete', 'only style']
      },
    ],
    actions: (data) => {
      let actions = data.type === 'complete'
        ? [
            {
              // Add a new file
              type: "add",
              // Path for the new file
              path: component.index.path,
              // Handlebars template used to generate content of new file
              templateFile: component.index.template,
            },
            {
              type: "add",
              path: component.style.path,
              templateFile: component.style.template,
            },
          ]
        : [
            {
              type: "add",
              path: component.style.path,
              templateFile: component.style.template,
            },
          ];
      return actions;
    },
  }
}