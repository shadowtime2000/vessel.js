class DependencyInjectionContainer {
  private dependencies: any;

  constructor() {
    this.dependencies = {};
  }

  register<T>(id: string, dependency: T) {
    if (this.dependencies[id]) {
      throw new Error(`Dependency '${id}' already exists!`);
    } else {
      this.dependencies[id] = dependency;
    }
  }
}

export = DependencyInjectionContainer;
