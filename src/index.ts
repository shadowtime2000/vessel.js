class DependencyInjectionContainer {
  private dependencies: any;
  private factories: any;

  constructor() {
    this.dependencies = {};
    this.factories = {};
  }

  getDependency(id: string): any {
    if (!this.dependencies[id] && this.factories[id]) {
      this.dependencies[id] = this.factories[id](Object.assign({}, this.dependencies))
      this.factories[id] = null
    }
    return this.dependencies[id]
  }

  register<T>(id: string, dependency: (deps: any) => T) {
    if (this.factories[id] || this.dependencies[id]) {
      throw new Error(`Dependency '${id}' already exists!`);
    } else {
      this.factories[id] = dependency;
    }
  }
}

export = DependencyInjectionContainer;
