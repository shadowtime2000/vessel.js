# vesseljs
A simple and lightweight yet powerful Dependency Injection Container package

## Installation
`npm i vessel.js`

### Usage
```javascript
const DependencyInjectionContainer = require("vesseljs");

const vessel = new DependencyInjectionContainer();

vessel.register("foo", () => "foobar");
```