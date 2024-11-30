import { prisma } from "@/prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const social = await prisma.socials.findMany();

    return NextResponse.json(social, {
      status: 200,
    });
  } catch (err) {
    throw new Error(err);
  }
};

// export const POST = async (req) => {
//   try {
//     const data = await req.json();

//     const authToken = req.cookies.get("api-auth")?.value;

//     if (authToken === undefined) {
//       return NextResponse.json("Not authorized to access.", {
//         status: 401,
//       });
//     }

//     const res = await prisma.socials.create({ data: data });

//     return NextResponse.json(res, {
//       status: 201,
//     });
//   } catch (err) {
//     throw new Error(err);
//   }
// };
