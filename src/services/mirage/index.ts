import { Factory, Model, createServer } from "miragejs";
import { faker } from "@faker-js/faker";

type IUser = {
  name: string;
  email: string;
  created_at: string;
};

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<IUser>>({}),
    },

    factories: {
      user: Factory.extend({
        name(i: number) {
          return faker.person.firstName();
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          return faker.date.recent({ days: 10 });
        },
      }),
    },

    seeds(server) {
      server.createList("user", 10);
    },

    routes() {
      this.namespace = "api";
      this.timing = 750;

      this.get("/users");
      this.post("/users");

      this.namespace = "";
      this.passthrough();
    },
  });

  return server;
}
