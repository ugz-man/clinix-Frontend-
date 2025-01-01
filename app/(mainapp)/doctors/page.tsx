import Spinner from "@/app/_components/Spinner";
import { Suspense } from "react";
import DoctorFilter from "./DoctorFilter";
import DoctorsList from "./DoctorsList";
import Pagination from "./Pagination";

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const searchName = searchParams?.name ?? "";
  const searchSpecialization = searchParams?.specialization ?? "";
  const page = searchParams?.page ? Number(searchParams.page) : 1;

  return (
    <>
      <h1 className="text-3xl font-semibold">Find a Doctor</h1>

      <DoctorFilter />

      <Suspense fallback={<Spinner />} key={page}>
        <DoctorsList
          searchName={searchName}
          searchSpecialization={searchSpecialization}
          page={page}
        />
      </Suspense>

      <Pagination />
    </>
  );
}
