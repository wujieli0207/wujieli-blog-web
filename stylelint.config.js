module.exports = {
  root: true,
  plugins: ["stylelint-order"],
  customSyntax: "postcss-html",
  extends: ["stylelint-config-standard", "stylelint-config-prettier"],
  ignoreFiles: ["**/*.js", "**/*.jsx", "**/*.tsx", "**/*.ts"],
  overrides: [
    {
      files: ["*.vue", "**/*.vue", "*.html", "**/*.html"],
      extends: ["stylelint-config-recommended", "stylelint-config-html"],
    },
  ],
};
