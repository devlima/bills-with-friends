const  { path, templatePath } = require('./path.plop');

module.exports = {
  component:{
    index:  {
      path: `${path.component}{{pascalCase name}}/index.tsx`,
      template: `${templatePath}index.tsx.hbs`
    },
    style: {
      path: `${path.component}{{pascalCase name}}/{{pascalCase name}}.styled.ts`,
      template : `${templatePath}styled.ts.hbs`
    },
    spec: {
      path: `${path.component}{{pascalCase name}}/{{pascalCase name}}.spec.tsx`,
      template: `${templatePath}spec.tsx.hbs`
    }
  },
  page: {
    index:  {
      path: `${path.page}{{pascalCase name}}/index.tsx`,
      template: `${templatePath}index.tsx.hbs`
    },
    style: {
      path: `${path.page}{{pascalCase name}}/{{pascalCase name}}.styled.ts`,
      template : `${templatePath}styled.ts.hbs`
    },
    spec: {
      path: `${path.page}{{pascalCase name}}/{{pascalCase name}}.spec.tsx`,
      template: `${templatePath}spec.tsx.hbs`
    }
  }
}