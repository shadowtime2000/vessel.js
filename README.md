# watercraft.js

A simple and lightweight yet powerful Dependency Injection Container package

## Installation

`npm i watercraft.js`

### Usage

```javascript
const DependencyInjectionContainer = require("watercraft.js");

const vessel = new DependencyInjectionContainer();

vessel.register("foo", () => "foobar");
```
