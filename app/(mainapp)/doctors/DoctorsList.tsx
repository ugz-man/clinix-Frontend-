import Image from "next/image";
import ButtonLink from "@/app/_components/ButtonLink";
import { getDoctors } from "@/app/_lib/data";

export default async function DoctorsList({
  searchName,
  searchSpecialization,
  page,
}: {
  searchName: string | undefined;
  searchSpecialization: string | undefined;
  page: number;
}) {
  const filter: Array<{ [key: string]: string }> = [];

  if (searchName) filter.push({ name: searchName });
  if (searchSpecialization)
    filter.push({ specialization: searchSpecialization });

  if (page) filter.push({ page: String(page) });
  filter.push({ limit: "12" });

  const doctors = await getDoctors(filter);

  return (
    <div className="flex flex-col gap-5 px-4 lg:grid lg:grid-cols-3">
      {doctors.data.doctors.map(
        (doctor: {
          _id: string;
          profilePicture: string;
          name: string;
          specialization: string;
          ratingsAverage: string;
          yearsOfExperience: string;
          about: string;
        }) => (
          <div
            className="flex flex-col gap-y-10 border px-2 py-4 lg:px-4 lg:py-8"
            key={doctor._id}
          >
            <div className="flex items-center gap-x-5">
              <div className="relative h-14 w-14">
                <Image
                  src={`https://i.pravatar.cc/100?=jfjfgf${Math.random()}`}
                  alt="logo"
                  fill
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="text-lg font-bold lg:text-3xl">
                  Dr {doctor.name}
                </p>
                <p className="text-sm text-neutral-60">
                  {doctor.specialization}
                </p>
              </div>
            </div>

            <p>
              ⭐ {doctor.ratingsAverage} . {doctor.yearsOfExperience} years
              experience
            </p>
            <p>{doctor.about.split(" ").slice(0, 10).join(" ")}...</p>

            <ButtonLink href={`/doctors/${doctor._id}/about`} type="primary">
              View Profile & Book
            </ButtonLink>
          </div>
        ),
      )}
    </div>
  );
}
