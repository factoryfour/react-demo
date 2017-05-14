module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "indent": ["error", "tab"],
        "no-tabs": ["off"],
        "react/jsx-indent": ["error", "tab"],
        "comma-dangle": ["off"]
    },
    "globals": {
        "document": true
    }
};