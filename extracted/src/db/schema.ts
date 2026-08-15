import {
  pgTable,
  serial,
  varchar,
  text,
  timestamp,
  boolean,
  integer,
} from "drizzle-orm/pg-core";

export const brands = pgTable("brands", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  tagline: varchar("tagline", { length: 500 }).notNull(),
  description: text("description").notNull(),
  longDescription: text("long_description"),
  industry: varchar("industry", { length: 255 }).notNull(),
  founded: varchar("founded", { length: 10 }).notNull(),
  website: varchar("website", { length: 500 }),
  color: varchar("color", { length: 7 }).notNull().default("#ffffff"),
  iconEmoji: varchar("icon_emoji", { length: 10 }).notNull().default("🏢"),
  imageUrl: text("image_url"),
  featured: boolean("featured").notNull().default(false),
  sortOrder: integer("sort_order").notNull().default(0),
  employees: varchar("employees", { length: 50 }),
  headquarters: varchar("headquarters", { length: 255 }),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export type Brand = typeof brands.$inferSelect;
export type NewBrand = typeof brands.$inferInsert;
