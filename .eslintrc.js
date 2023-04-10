module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  overrides: [
    {
      files: ["src/01_fundamentals/*print*/*.ts"],
      excludedFiles: "*.test.js",
      rules: {
        "@thearenaproject/no-methods-or-properties": [
          "error",
          {
            allowed: [["process", "stdout", "write"]]
          }
        ]
      }
    },
    {
      files: ["src/02_recursive/avoid-the-warriors/*.ts"],
      excludedFiles: "*.test.js",
      rules: {
        "@thearenaproject/no-methods-or-properties": [
          "error",
          {
            allowed: [["length"]]
          }
        ]
      }
    },
    {
      files: [
        "src/02_recursive/find-path/*.ts",
        "src/02_recursive/shortest-path/*.ts"
      ],
      excludedFiles: "*.test.js",
      rules: {
        "@thearenaproject/no-methods-or-properties": [
          "error",
          {
            allowed: [["length"], ["push"]]
          }
        ]
      }
    },
    {
      files: ["src/03_binary/*/*.ts"],
      excludedFiles: "*.test.js",
      rules: {
        "@thearenaproject/no-methods-or-properties": [
          "error",
          {
            allowed: [["length"]]
          }
        ]
      }
    },
    {
      files: ["src/03_binary/*/*.ts"],
      excludedFiles: ["*.test.js", "src/03_binary/atoi/index.ts"],
      rules: {
        "@thearenaproject/no-methods-or-properties": [
          "error",
          {
            allowed: [["Math", "floor"]]
          }
        ]
      }
    },
    {
      files: ["src/04_filesystem/cp/*.ts"],
      excludedFiles: "*.test.js",
      rules: {
        "@thearenaproject/no-methods-or-properties": [
          "error",
          {
            allowed: [
              ["path", "basename"],
              ["path", "join"],
              ["fs", "openSync"],
              ["fs", "WriteSync"],
              ["fs", "readSync"],
              ["fs", "closeSync"],
              ["Buffer", "alloc"],
              ["Buffer", "copy"],
              ["fs", "statSync"],
              ["Stats", "isFile"],
              ["Stats", "isDirectory"],
              ["process", "exit"]
            ]
          }
        ]
      }
    },
    {
      files: ["src/04_filesystem/ls/*.ts", "src/04_filesystem/lsdeep/*.ts"],
      excludedFiles: "*.test.js",
      rules: {
        "@thearenaproject/no-methods-or-properties": [
          "error",
          {
            allowed: [
              ["fs", "readdirSync"],
              ["fs", "statSync"],
              ["fs", "WriteSync"],
              ["Stats", "isFile"],
              ["Stats", "isDirectory"],
              ["sort"],
              ["length"],
              ["padEnd"],
              ["localeCompare"],
              ["path", "join"],
              ["process", "exit"]
            ]
          }
        ]
      }
    },
    {
      files: ["src/04_filesystem/read-file-sync/*.ts"],
      excludedFiles: "*.test.js",
      rules: {
        "@thearenaproject/no-methods-or-properties": [
          "error",
          {
            allowed: [
              ["fs", "openSync"],
              ["fs", "readSync"],
              ["fs", "closeSync"],
              ["Buffer", "alloc"],
              ["Buffer", "copy"],
              ["Buffer", "toString"]
            ]
          }
        ]
      }
    },
    {
      files: ["src/04_filesystem/write-file-sync/*.ts"],
      excludedFiles: "*.test.js",
      rules: {
        "@thearenaproject/no-methods-or-properties": [
          "error",
          {
            allowed: [
              ["fs", "openSync"],
              ["fs", "readSync"],
              ["fs", "closeSync"]
            ]
          }
        ]
      }
    }
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest"
  },
  plugins: ["@typescript-eslint", "prettier", "@thearenaproject/eslint-plugin"],
  rules: {
    "prettier/prettier": "error",
    "@thearenaproject/no-for-loops": "error",
    "@thearenaproject/no-methods-or-properties": [
      "error",
      {
        allowed: []
      }
    ]
  }
};
