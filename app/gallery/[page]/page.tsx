import Image from "next/image"

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"

export default async function GalleryPage({ params }: { params: { page: string } }) {

    const pageNum = (await params).page

    return <div className="flex flex-col items-center mt-20 gap-10">
        <div className="grid grid-cols-4">
            {
                [...Array(16)].map((_, idx) => (
                    <div key={idx} className="w-40 relative h-40 m-auto">
                        <Image src={`https://picsum.photos/seed/${idx}${pageNum}/200`} fill alt="random image"></Image>
                    </div>
                ))
            }
        </div>
        <div>{pageNum}</div>
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious href={`${Math.max(1,Number(pageNum) - 1)}`} />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink className={`${pageNum == '1' ? "active" : ""} [&.active]:bg-black [&.active]:text-white`} href="/gallery/1">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink className={`${pageNum == '2' ? "active" : ""} [&.active]:bg-black [&.active]:text-white`} href="/gallery/2">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink className={`${pageNum == '3' ? "active" : ""} [&.active]:bg-black [&.active]:text-white`} href="/gallery/3">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext href={`${Math.min(3,Number(pageNum) + 1)}`} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    </div>
}
