import { db } from "~/server/db";
import { posts } from "~/server/db/schema";

export async function POST(request: Request) {
  console.log("WWWWW");
  const body = (await request.json()) as { key: string };
  let data;
  if (body.key !== "haslo") {
    return Response.json({ code: 1, message: "Nieprawidłowe hasło." });
  }
  try {
    // data = await db.query.posts.findMany();
    data = await db
      .select({
        firstName: posts.firstName,
        lastName: posts.lastName,
        date: posts.createdAt,
        birthDate: posts.birthDate,
        email: posts.email,
        distance: posts.distance,
        locale: posts.locale,
      })
      .from(posts);
  } catch (error) {
    console.log("ERROR", error);
  }

  return Response.json({ code: 2, message: "Sukces!", data });
}
