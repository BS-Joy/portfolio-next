"use server";

import { verifyToken } from "@/utils/tokenUtils";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export const getUser = async () => {
  const cookieStore = await cookies();

  const userToken = cookieStore.get("user");

  console.log("inside get user function");

  const userDetails = verifyToken(userToken.value);

  return userDetails;
};

export const removeCookie = async () => {
  console.log("removing cookies...");

  const cookieStore = await cookies();

  (await cookies()).set("user", " ", {
    maxAge: 0,
    path: "/admin",
  });

  redirect("/login");
};
