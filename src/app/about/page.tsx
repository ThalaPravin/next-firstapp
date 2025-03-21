import Link from "next/link"


export default function AboutPage(){
    return (
        <div className="bg-black w-full h-screen text-white flex justify-center items-center">
            <h1> About page</h1>
           <div className="m-5 border shadow-xl p-1 rounded">
           <Link href="/contact">
                Contact
            </Link>
           </div>
        </div>
    )
}