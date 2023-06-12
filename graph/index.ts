import { TransactionTypes } from "./constants.ts";
import { transactionsDb, usersDb } from "./database.ts";
import { AdjacenyList, ITransaction, IUserSchema } from "./interfaces.ts";

interface INewUser {
  name: string;
  email: string;
}

class Client {
  #id: string;

  constructor(id: string) {
    this.#id = id;
  }

  static async createNewClient(initialUser: INewUser) {
    const usersCollection = await usersDb.getCollection<IUserSchema>("users");
    const user = await usersCollection.insert(initialUser);
    return new Client(user.id)
  }

  public async makeTransaction(type: TransactionTypes, to: string) {
    const transactionsCollection = await transactionsDb.getCollection<ITransaction>("transactions");
    transactionsCollection.insert({
      from: this.#id,
      to,
      type,
      state: "waiting",
    })
  }

  public async getTransactions() {
    const transactionsCollection = await transactionsDb.getCollection<ITransaction>("transactions");
    return transactionsCollection.data.filter((transaction) =>
      transaction.from === this.#id
    );
  }

  public async getNodes() {
    const adjacenyList: AdjacenyList[] = [];
    const transactions = await this.getTransactions();
    const usersCollection = await usersDb.getCollection<IUserSchema>("users");

    for (const transaction of transactions) {
      adjacenyList.push({
        node: usersCollection.findById(transaction.to)!,
        weight: Number(Math.random().toFixed(2)),
      });
    }

    return adjacenyList;
  }
}
