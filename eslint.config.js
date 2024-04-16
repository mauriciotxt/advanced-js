import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    rules: {
      "prefer-const": "error",
      eqeqeq: "warn",
      "no-unused-vars": "off",
    },
  },
];
