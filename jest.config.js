module.exports = {
    "roots": [
        "<rootDir>/tst",
    ],
    "testMatch": [
        "**/?(*.)+(spec|test).+(ts|tsx|js)",
    ],
    "transform": {
      "^.+\\.(ts|tsx)$": "ts-jest",
    },
};
