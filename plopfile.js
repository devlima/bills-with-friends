const { componentConfig } = require("./plop/component.plop");
const { pageConfig } = require("./plop/pages.plop");

module.exports = (plop) => {
  plop.setGenerator("component", componentConfig);
  plop.setGenerator("pages", pageConfig);
};
