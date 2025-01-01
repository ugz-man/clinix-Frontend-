"use server";

import { cookies } from "next/headers";
import { signIn as signInMethod, signUp as signUpMethod } from "./auth/auth";
import { redirect } from "next/navigation";
import { BACKEND_URL } from "./backend";
import { revalidatePath } from "next/cache";

// Authentication
export const signIn = signInMethod;
export const signUp = signUpMethod;

// User Profile
export const updateMe = async function (data: FormData) {
  const token = cookies().get("jwt")?.value;

  if (!token) return redirect("/login");

  //   const newData = {
  //     firstName: data.get("firstName") || undefined,
  //     lastName: data.get("lastName") || undefined,
  //     email: data.get("email") || undefined,
  //     phone: data.get("phone") || undefined,
  //     DOB: data.get("DOB") || undefined,
  //     gender: data.get("gender") || undefined,
  //     address: data.get("address") || undefined,
  //   };

  const form = new FormData();
  form.append("firstName", data.get("firstName") as string);
  form.append("lastName", data.get("lastName") as string);
  form.append("email", data.get("email") as string);
  form.append("phone", data.get("phone") as string);
  form.append("DOB", data.get("DOB") as string);
  form.append("gender", data.get("gender") as string);
  form.append("address", data.get("address") as string);

  if (data.get("imageInput")?.name !== "undefined")
    form.append("profilePicture", data.get("imageInput") as Blob);

  const res = await fetch(`${BACKEND_URL}/api/v1/users/updateMe`, {
    method: "PATCH",
    body: form,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) return console.log(await res?.json());

  revalidatePath("/my-profile");
};
