"use client";

import { Button } from "@/app/_components/Button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const PAGE_SIZE: number = 12;

export default function PaginationData({ count }: { count: number }) {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  const currentPage = searchParams?.get("page")
    ? Number(searchParams?.get("page"))
    : 1;
  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    const params = new URLSearchParams(searchParams);
    params.set("page", String(next));
    router.replace(`${pathName}?${params.toString()}`);
  }

  function previousPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    const params = new URLSearchParams(searchParams);
    params.set("page", String(prev));
    router.replace(`${pathName}?${params.toString()}`);
  }

  if (pageCount <= 1) return null;

  return (
    <div className="flex items-center justify-between px-4 py-5">
      <p>
        Showing <span>{(currentPage - 1) * PAGE_SIZE + 1}</span> to{" "}
        <span>
          {currentPage * PAGE_SIZE > count ? count : currentPage * PAGE_SIZE}
        </span>{" "}
        of <span>{count} </span>
        results
      </p>

      <div className="flex gap-4">
        <Button
          type="primary"
          onClick={previousPage}
          disabled={currentPage <= 1}
        >
          previous
        </Button>
        <Button
          type="primary"
          onClick={nextPage}
          disabled={currentPage >= pageCount}
        >
          next
        </Button>
      </div>
    </div>
  );
}
