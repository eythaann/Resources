import { DbJSON } from "https://deno.land/x/dbjson@0.1.0/mod.ts";
import { IBaseDbSchema } from "./interfaces.ts";

class DataBaseConnection {
  #path: string;
  #collectionsPointers: Map<string, Collection<IBaseDbSchema>> = new Map();

  constructor(path: string) {
    this.#path = path;
  }

  public async getCollection<T extends IBaseDbSchema>(collectionName: string): T {
    if (!this.#collectionsPointers.has(collectionName)) {
      const collection = new Collection<T>(this.#path, collectionName);
      this.#collectionsPointers.set(collectionName, collection);
    }

    const collection = this.#collectionsPointers.get(collectionName)!;

    while (!collection.initialized) {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }

    return collection;
  }
}

type ReadJSONtype<T> = {
  [name: string]: Array<T>;
};

class Collection<T extends IBaseDbSchema = IBaseDbSchema> {
  #db: DbJSON;
  #data!: T[];
  #collectionName: string;
  #path: string;
  #initialized = false;

  constructor(path: string, collectionName: string) {
    this.#path = path;
    this.#collectionName = collectionName;
    this.#db = new DbJSON(path, collectionName);

    this.#db.readJSON<T>().then(({ [collectionName]: data }) => {
      console.log("init collection => ", collectionName);
      this.#data = data;
      this.#initialized = true;
    });
  }

  public get initialized() {
    return this.#initialized;
  }

  async #save() {
    await this.#db.writeJSON(this.#data);
  }

  public get data() {
    return this.#data as readonly T[];
  }

  async insert(data: Omit<T, keyof IBaseDbSchema>) {
    const dataToInsert = {
      ...data as T,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this.#data.push(dataToInsert);
    await this.#save();
    return dataToInsert;
  }

  public async update(data: T) {
    const index = this.#data.findIndex((d) => d.id === data.id);
    this.#data[index] = {
      ...data,
      updatedAt: new Date().toISOString(),
    };
    await this.#save();
  }

  public async delete(id: string) {
    this.#data = this.#data.filter((d) => d.id !== id);
    await this.#save();
  }

  public findById(id: string) {
    return this.#data.find((d) => d.id === id);
  }

  public find(cb: (value: T, index: number, obj: readonly T[]) => boolean) {
    return this.#data.find(cb);
  }

  public drop() {
    this.#data = [];
    this.#save();
  }
}

export const usersDb = new DataBaseConnection("./graph/usersDb.json");
export const transactionsDb = new DataBaseConnection("./graph/transactionsDb.json",);
