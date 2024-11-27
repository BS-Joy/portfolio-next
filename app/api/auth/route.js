import { prisma } from "@/prisma";
import { NextResponse } from "next/server";
import bcrypt, { hash } from "bcrypt";
import { generateToken, verifyToken } from "@/utils/tokenUtils";
import { cookies } from "next/headers";

export const POST = async (req) => {
  try {
    const userData = await req.json();

    const user = await prisma.user.findUnique({
      where: {
        username: userData.username,
      },
    });

    if (!user) {
      return NextResponse.json("Your username is wrong!", { status: 401 });
    }

    const isPassValid = await bcrypt.compare(userData.password, user.password);

    if (!isPassValid) {
      return NextResponse.json("Your password is wrong!", { status: 401 });
    }

    const { password, email, ...restData } = user;

    const token = generateToken(restData);

    const cookieStore = await cookies();

    cookieStore.set({
      name: "user",
      value: token,
      httpOnly: true,
      maxAge: "1h",
      path: "/admin",
    });

    cookieStore.set({
      name: "user",
      value: token,
      httpOnly: true,
      maxAge: "1h",
      path: "/api",
    });

    return NextResponse.json("Log In Successfull.", {
      status: 200,
    });
  } catch (err) {
    throw new Error(err);
  }
};

// export const POST = async (req) => {
//   try {
//     const userData = await req.json();
//     const saltRound = 10;
//     const hashedPassword = await bcrypt.hash(userData.password, saltRound);
//     userData["password"] = hashedPassword;

//     const response = await prisma.user.create({ data: userData });
//     console.log(response);
//     return NextResponse.json(response);
//   } catch (err) {
//     throw new Error(err);
//   }
// };
