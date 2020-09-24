class DependencyInjectionContainer {
  private dependencies: any;
  private factories: any;

  constructor() {
    this.dependencies = {};
    this.factories = {};
  }

  getDependency(id: string): any {
    if (!this.dependencies[id] && this.factories[id]) {
      this.dependencies[id] = this.factories[id]({...this.dependencies});
    }
    return this.dependencies[id];
  }

  factory(id: string, fac: Function): void {
    if (this.factories[id]) {
      throw new Error(`Factory for ${id} already exists!`);
    } else {
      this.factories[id] = fac;
    }
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
