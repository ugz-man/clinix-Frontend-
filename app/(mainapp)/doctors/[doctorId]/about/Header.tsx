import Image from "next/image";

import {
  HiMiniPhone,
  HiOutlineClock,
  HiOutlineEnvelope,
} from "@/app/_components/icons";

export default function Header({ doctor }) {
  return (
    <div className="flex flex-col gap-7 border-2 p-3 shadow lg:flex-row lg:p-7">
      <div className="relative aspect-square w-32 lg:w-60">
        <Image
          src={`https://i.pravatar.cc/100?=jfjfge/${doctor.profilePicture}`}
          alt={`${doctor.name} image`}
          fill
          quality={70}
          className="rounded-full object-cover object-top"
        />
      </div>

      <div className="flex flex-col gap-5">
        <div>
          <h2 className="text-2xl font-bold lg:text-4xl">Dr. {doctor.name}</h2>
          <p className="font-thin text-neutral-60">{doctor.specialization}</p>
        </div>

        <p className="font-semibold">
          ⭐ {doctor.ratingsAverage}{" "}
          <span className="font-thin text-neutral-60">
            ({doctor.ratingsQuantity} ratings)
          </span>
        </p>

        <p className="flex gap-2">
          <HiMiniPhone /> {doctor.contactInfo.telephone}
        </p>
        <p className="flex gap-2">
          <HiOutlineEnvelope /> {doctor.contactInfo.email}
        </p>
        <p className="flex gap-2">
          <HiOutlineClock /> {doctor.contactInfo.email}
        </p>
      </div>
    </div>
  );
}
