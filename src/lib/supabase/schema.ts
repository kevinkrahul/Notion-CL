import { boolean,integer,pgTable,timestamp,text,uuid, jsonb } from "drizzle-orm/pg-core";
import { prices, subscriptionStatus, users } from "../../../migrations/schema";
// import { integer } from "drizzle-orm/sqlite-core";  ----this both are taken from sqlite core so we have to use postgres core.
// import { boolean } from "drizzle-orm/mysql-core";
import { sql } from "drizzle-orm";

export const workspaces = pgTable('workspaces', {
    id: uuid('id').defaultRandom().primaryKey().notNull(),
    createdAt: timestamp('created_at', {
    withTimezone:true,
    mode: 'string',  
    }),
    workspaceOwner:uuid('workspace_owner').notNull(),
    title:text('title').notNull(),
    iconId:text('icon_id').notNull(),
    data:text('data'),
    inTrash:text('in_trash'),
    logo:text('logo'),
    bannerUrl:text('banner_url'),
});

export const folders = pgTable('folders', {
    id: uuid('id').defaultRandom().primaryKey().notNull(),
    createdAt: timestamp('created_at', {
      withTimezone: true,
      mode: 'string',
    })
      .defaultNow()
      .notNull(),
    title: text('title').notNull(),
    iconId: text('icon_id').notNull(),
    data: text('data'),
    inTrash: text('in_trash'),
    bannerUrl: text('banner_url'),
    workspaceId: uuid('workspace_id')
      .notNull()
      .references(() => workspaces.id, {
        onDelete: 'cascade',
      }),
  });
  
  export const files = pgTable('files', {
    id: uuid('id').defaultRandom().primaryKey().notNull(),
    createdAt: timestamp('created_at', {
      withTimezone: true,
      mode: 'string',
    })
      .defaultNow()
      .notNull(),
    title: text('title').notNull(),
    iconId: text('icon_id').notNull(),
    data: text('data'),
    inTrash: text('in_trash'),
    bannerUrl: text('banner_url'),
    workspaceId: uuid('workspace_id')
      .notNull()
      .references(() => workspaces.id, {
        onDelete: 'cascade',
      }),
    folderId: uuid('folder_id')
      .notNull()
      .references(() => folders.id, {
        onDelete: 'cascade',
      }),
  });
  

  export const subscriptions = pgTable("subscriptions", {
    id: text("id").primaryKey().notNull(),
    userId: uuid("user_id").notNull().references(() => users.id),
    status: subscriptionStatus("status"),
    metadata: jsonb("metadata"),
    priceId: text("price_id").references(() => prices.id),
    quantity: integer("quantity"),
    cancelAtPeriodEnd: boolean("cancel_at_period_end"),
    created: timestamp("created", { withTimezone: true, mode: 'string' }).default(sql`now()`).notNull(),
    currentPeriodStart: timestamp("current_period_start", { withTimezone: true, mode: 'string' }).default(sql`now()`).notNull(),
    currentPeriodEnd: timestamp("current_period_end", { withTimezone: true, mode: 'string' }).default(sql`now()`).notNull(),
    endedAt: timestamp("ended_at", { withTimezone: true, mode: 'string' }).default(sql`now()`),
    cancelAt: timestamp("cancel_at", { withTimezone: true, mode: 'string' }).default(sql`now()`),
    canceledAt: timestamp("canceled_at", { withTimezone: true, mode: 'string' }).default(sql`now()`),
    trialStart: timestamp("trial_start", { withTimezone: true, mode: 'string' }).default(sql`now()`),
    trialEnd: timestamp("trial_end", { withTimezone: true, mode: 'string' }).default(sql`now()`),
  });