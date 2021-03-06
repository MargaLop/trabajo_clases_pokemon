{
  "env": {
      "browser": true,
      "commonjs": true,
      "es2021": true
  },
  "extends": ["airbnb-base", "prettier"],
  "plugins": ["prettier"],
  "parserOptions": {
      "ecmaVersion": "latest"
  },
  "rules": {
      "prettier/prettier": ["warn", {
          "endOfLine": "crlf"
      }],
      "camelcase": "off",
      "no-unused-vars": "warn",
      "object-shorthand": "off",
      "no-console": "off"
    }
}
