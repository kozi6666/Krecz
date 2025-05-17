// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  pgTableCreator,
  serial,
  timestamp,
  varchar,
  boolean,
  text,
} from "drizzle-orm/pg-core";
// import { init } from "@paralleldrive/cuid2";

// const createUuid = init({
//   random: Math.random,
//   length: 20,
//   fingerprint: 'kzf',
// });

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator(
  (name) => `next-krecdlahospicjum_${name}`,
);

export const posts = createTable(
  "post",
  {
    id: serial("id").primaryKey(),
    firstName: varchar("firstName", { length: 256 }),
    lastName: varchar("lastName", { length: 256 }),
    email: varchar("email", { length: 256 }),
    birthDate: varchar("birthDate", { length: 256 }),
    distance: text("distance", { enum: ["przewodnik"] }),
    locale: varchar("locale", { length: 256 }),
    consent: boolean("consent"),
    consent2: boolean("consent2"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt", { withTimezone: true }),
  },
);

// export const postsWithPhotos = createTable(
//   "post",
//   {
//     id: serial("id").primaryKey(),
//     number: serial('number'),
//     uuid: text("uuid").$defaultFn(() => createUuid()),
//     firstName: varchar("firstName", { length: 256 }),
//     lastName: varchar("lastName", { length: 256 }),
//     email: varchar("email", { length: 256 }),
//     email2: varchar("email2", { length: 256 }),
//     birthDate: varchar("birthDate", { length: 256 }),
//     distance: text("distance", { enum: ["3km", "10km", "50km", "przewodnik"] }),
//     consent: boolean("consent"),
//     consent2: boolean("consent2"),
//     consent3: boolean("consent3"),
//     consent4: boolean("consent4"),
//     photo1: varchar("photo1", { length: 256 }),
//     photo2: varchar("photo2", { length: 256 }),
//     startingNumber: varchar("startingNumber", { length: 256 }),
//     createdAt: timestamp("created_at", { withTimezone: true })
//       .default(sql`CURRENT_TIMESTAMP`)
//       .notNull(),
//     updatedAt: timestamp("updatedAt", { withTimezone: true }),
//   },
// );
