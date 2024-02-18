import db from "@/lib/db";
import { verifyJwtToken } from "@/lib/jwt";
import User from "@/models/User";

export async function GET(req) {
  await db.connect();

  const accessToken = req.headers.get("authorization");
  const token = accessToken.split(" ")[1];

  const decodedToken = verifyJwtToken(token);

  if (!accessToken || !decodedToken) {
    return new Response(JSON.stringify({ error: "unauthorized (wrong or expired token)" }), { status: 403 });
  }

  try {
    const users = await User.find({}).limit(16);
    return new Response(JSON.stringify(users), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({}), { status: 500 });
  }
}
