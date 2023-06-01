import prisma from "@/app/libs/prismadb";
import bcrypt from "bcrypt";


export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name, password } = body;
    if (!email || !name || !password) {
      return {
        status: 400,
        body: "Missing info",
      };
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
      },
    });
    return {
      status: 200,
      body: JSON.stringify(user),
    };
  } catch (error: any) {
    console.log(error, "Registration_error");
    return {
      status: 500,
      body: "Internal Error",
    };
  }
}
