let instance = false;

class _IdGenerator {
  #id: number | null = null;

  constructor() {
    if (instance) {
      throw new Error("A new instance cannot be created.");
    }
    instance = true;
  }

  public get lastGeneratedId() {
    return String(this.#id);
  }

  public new() {
    if (!this.#id) {
      this.#id = Number(new Date());
      return this.lastGeneratedId;
    }

    this.#id += 1;
    return this.lastGeneratedId;
  }
}

export const IdGenerator = Object.freeze(new _IdGenerator());
