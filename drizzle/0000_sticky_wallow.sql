CREATE TABLE IF NOT EXISTS "next-krecdlahospicjum_post" (
	"id" serial PRIMARY KEY NOT NULL,
	"firstName" varchar(256),
	"lastName" varchar(256),
	"email" varchar(256),
	"birthDate" varchar(256),
	"distance" text,
	"boolean" boolean,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp with time zone
);
