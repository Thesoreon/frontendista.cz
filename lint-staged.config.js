module.exports = {
  "src/**/*.{ts,tsx}": [
    "yarn lint:fix",
    "yarn prettier:fix",
    "yarn lint:style:fix",
  ],
};