"use client"
import { usePathname } from "next/navigation"

export default function NotFound(){
    const pathname = usePathname();
    const routeId = pathname.split('/') [2];
    const reviewId = pathname.split('/') [4];
    return (
        <div className="bg-black text-white w-full h-screen flex justify-center items-center">
            This Review Not Found On {routeId} Route for ReviewId {reviewId}
        </div>

    )
}