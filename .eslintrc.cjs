/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  root: true, // 此项是用来告诉eslint找当前配置文件不能往父级查找
  env: {
    // 预定义的全局变量，这里是浏览器环境
    amd: true,
    es6: true,
    commonjs: true,
    node: true,
    jquery: true,
    browser: true,
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/eslint-config-prettier/skip-formatting"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "array-bracket-spacing": ["error", "never"], // 是否允许非空数组里面有多余的空格
    camelcase: "error", // 强制驼峰法命名
    "comma-style": ["error", "last"], // 逗号风格，换行时在行首还是行尾
    curly: ["error", "all"], // 必须使用 if(){} 中的{}
    "default-case": "error", // switch语句最后必须有default
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        jsxBracketSameLine: false,
        bracketSpacing: true,
        semi: false,
        trailingComma: "all",
        endOfLine: "auto",
        printWidth: 150,
        tabWidth: 2,
      },
    ],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off", // 是否使用 console
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off", // 是否使用 debugger
    "no-empty": "error", // 块语句中的内容不能为空
    "no-control-regex": "error", // 禁止在正则表达式中使用控制字符
    "no-irregular-whitespace": "error", // 不能有不规则的空格
    "no-extra-semi": "error", // 禁止多余的冒号
    "no-func-assign": "error", // 禁止重复的函数声明
    "vue/multi-word-component-names": 0,
    "vetur.validation.template": 0,
    // "vue/no-v-html": "off",
    indent: "off",
    quotes: [2, "double"],
    "global-require": 0,
    "vue/html-self-closing": 0,
  },
  overrides: [
    {
      files: ["src/views/**/*.vue"],
      rules: {
        "vue/multi-word-component-names": 0, //不再强制要求组件名
      },
    },
  ],
}
