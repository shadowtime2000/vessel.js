const { expect } = require("chai");

const DependencyInjectionContainer = require("./dist/index");

let container;

describe("#DependencyInjectionContainer", () => {
  before(() => (container = new DependencyInjectionContainer()));
  after(() => (container = null));

  describe(".register()", () => {
    it("should register properly", () => {
      expect(container.register("foo", () => "bar"));
    });
    it("should throw an error", () => {
      expect(() => container.register("foo", "foobar")).to.throw(
        "Dependency 'foo' already exists!"
      );
    });
  });

  describe(".factory()", () => {
    it("should register the factory properly", () => {
      expect(container.factory("foobar", () => () => "barfoo"));
    });
    it("should throw an error", () => {
      expect(() => container.factory("foobar", () => () => "barfoo")).to.throw(
        "Factory for foobar already exists!"
      );
    });
  });

  describe(".getDependency()", () => {
    before(() => container.register("bar", "foo"));
    it("should return the correct dependency", () => {
      expect(container.getDependency("bar")).to.equal("foo");
    });
  });
});
