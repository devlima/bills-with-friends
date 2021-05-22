module.exports = (plop) => {
  plop.setGenerator("component", {
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
        type: "confirm",
        // Variable name for this input
        name: "isCommon",
        // Prompt to display on command line
        message: "Is it common component?",
      },
    ],
    actions: (data) => {
      const path = data.isCommon
        ? "src/common/"
        : "src/pages/" + data.container + "/";

      let actions = data.isCommon
        ? [
            {
              // Add a new file
              type: "add",
              // Path for the new file
              path: path + "{{pascalCase name}}/{{pascalCase name}}.tsx",
              // Handlebars template used to generate content of new file
              templateFile: "plop-templates/Component/index.tsx.hbs",
            },
            {
              type: "add",
              path: path + "{{pascalCase name}}/{{pascalCase name}}.styled.ts",
              templateFile: "plop-templates/Component/styled.ts.hbs",
            },
          ]
        : [
            {
              // Add a new file
              type: "add",
              // Path for the new file
              path: path + "{{pascalCase name}}/{{pascalCase name}}.js",
              // Handlebars template used to generate content of new file
              templateFile: "plop-templates/Component/index.tsx.hbs",
            },
            {
              type: "add",
              path: path + "{{pascalCase name}}/index.js",
              templateFile: "plop-templates/Component/index.js.hbs",
            },
            {
              type: "add",
              path: path + "{{pascalCase name}}/{{pascalCase name}}.styled.js",
              templateFile: "plop-templates/Component/styled.js.hbs",
            },
          ];
      return actions;
    },
  });
};
