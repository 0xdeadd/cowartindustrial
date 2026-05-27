import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    // SEO/a11y enforcement: every <img>, <object>, <area>, and <input type=image>
    // needs alt text. next/core-web-vitals enables jsx-a11y/alt-text as a
    // warning; elevate to error so missing alt fails lint, not just nags.
    rules: {
      "jsx-a11y/alt-text": [
        "error",
        { elements: ["img", "object", "area", "input[type='image']"] },
      ],
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
