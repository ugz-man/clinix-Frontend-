import { cookies } from "next/headers";

export const getDoctors = async function (
  filters: Array<{ [key: string]: string }> = [],
) {
  const cookie: string = cookies()?.get("jwt")?.value ?? "";

  const url = new URL(`${process.env.BACKEND_URL}/api/v1/doctors`);

  if (filters.length > 0) {
    filters.forEach((filter) =>
      url.searchParams.append(Object.keys(filter)[0], Object.values(filter)[0]),
    );
  }

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${cookie}`,
    },
  });

  //   await new Promise((res) => setTimeout(res, 5000));

  if (!res.ok) {
    console.log(await res.json());
    return;
  }

  return await res.json();
};

export async function getDoctor(doctorId: string) {
  const cookie = cookies()?.get("jwt")?.value;

  const url = new URL(`${process.env.BACKEND_URL}/api/v1/doctors/${doctorId}`);

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${cookie}`,
    },
  });

  return await res.json();
}

export async function getDoctorsCount() {
  const cookie: string = cookies()?.get("jwt")?.value ?? "";

  const res = await fetch(
    `${process.env.BACKEND_URL}/api/v1/doctors/total-count`,
    {
      headers: {
        Authorization: `Bearer ${cookie}`,
      },
    },
  );

  return await res.json();
}

export async function getMe() {
  const cookie = cookies()?.get("jwt")?.value ?? "";

  const res = await fetch(
    `${process.env.BACKEND_URL}/api/v1/users/isloggedin`,
    {
      headers: {
        Authorization: `Bearer ${cookie}`,
      },
    },
  );

  if (!res.ok) throw new Error("Please try again later");

  return await res.json();
}
