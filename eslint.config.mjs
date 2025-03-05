import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off", // Allow using 'any'
      "react-hooks/exhaustive-deps": "warn", // Change exhaustive deps to warning instead of error
      "react/no-unescaped-entities": "off", // Prevent errors for using unescaped characters like apostrophes
      "jsx-a11y/anchor-is-valid": "off", // Disable warnings for invalid anchor tags
      "@next/next/no-img-element": "off", // Allow using <img> instead of <Image> from Next.js
      "import/no-anonymous-default-export": "off", // Disable requirement for named exports
      "no-unused-vars": "off", // Ignore all unused variables
      "@typescript-eslint/no-unused-vars": "off", // Ignore unused variables in TypeScript
      "@typescript-eslint/no-unused-expressions": "off", // Ignore unused expressions
      "@typescript-eslint/no-this-alias": "off", // Allow aliasing 'this' in TypeScript
      "@typescript-eslint/ban-ts-comment": "off", // Allow @ts-ignore and other TypeScript comments
      "@redos-detector/no-unsafe-regex": "off", // Disable unsafe regex pattern detection
      "@next/next/no-assign-module-variable": "off", // Allow assigning module variable
      "@typescript-eslint/no-require-imports": "off", // Allow 'require' imports
      "react-hooks/rules-of-hooks": "off", // Disable React hooks rules (use with caution)
      "@next/next/no-assign-module-variable": "off", // Disable module assignment rule
      "import/no-anonymous-default-export": "off", // Disable requirement for named exports
      "redos-detector/no-unsafe-regex": "off", // Disable unsafe regex warnings
      "compat/compat": "off", // Disable compatibility warnings
      "react/no-find-dom-node": "off", // Disable findDOMNode rule
      "@typescript-eslint/ban-types": "off", // Disable 'ban-types' rule
    },
  }),
];

export default eslintConfig;
