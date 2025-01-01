import { getDoctorsCount } from "@/app/_lib/data";
import PaginationData from "./PaginationData";

export default async function Pagination() {
  const response = await getDoctorsCount();

  if (response.staus === "fail") return null;

  const count = response.data.stats[0].count;

  return <PaginationData count={count} />;
}
