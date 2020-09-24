# vessel.js
A simple and lightweight yet powerful Dependency Injection Container package

## Installation
`npm i vessel.js`

### Usage
```javascript
const DependencyInjectionContainer = require("vessel.js");

const vessel = new DependencyInjectionContainer();

vessel.register("foo", () => "foobar");
```