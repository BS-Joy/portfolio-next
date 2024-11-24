"use server";

import { verifyToken } from "@/utils/tokenUtils";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const getUser = async () => {
  const cookieStore = await cookies();

  const userToken = cookieStore.get("user");

  const userDetails = verifyToken(userToken.value);

  return userDetails;
};

export const removeCookie = async () => {
  console.log("removing cookies...");
  (await cookies()).set({ name: "user", maxAge: 0 });
};
