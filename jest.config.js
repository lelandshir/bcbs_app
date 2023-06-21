export default {
    preset: "ts-jest",
    testEnvironment: "node",
    transform: {
        "^.+\\.(ts|tsx)$": "esbuild-jest",
        "node_modules/axios/index.js": "commonjs",
      },
    globals: {
        "ts-jest": {
          tsconfig: "ui/tsconfig.json",
          isolatedModules: true,
        },
      },
  };