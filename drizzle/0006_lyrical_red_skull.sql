ALTER TABLE "next-krecdlahospicjum_post" DROP CONSTRAINT "next-krecdlahospicjum_post_number_unique";--> statement-breakpoint
ALTER TABLE "next-krecdlahospicjum_post" ALTER COLUMN "number" SET DATA TYPE serial;--> statement-breakpoint
ALTER TABLE "next-krecdlahospicjum_post" ALTER COLUMN "number" SET NOT NULL;