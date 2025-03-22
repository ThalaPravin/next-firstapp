"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks =[
    {name : "About" , path: "/about"},
    {name: "Blogs" , path:"/blogs"},
    {name: "Contact" , path:"/contact"},
    {name : "Docs" , path:"/docs"}
];


export default function navigation (){
    const pathName = usePathname();

    return (
        <div className="flex justify-center items-center h-screen w-full gap-3">

            
            
            {navLinks.map((links) => {
                const isActive = pathName === links.path;
                console.log(pathName )
                console.log(links.path )
                return (
                    <Link className={isActive ? "bg-red-700" : ""} href={links.path} key={links.name}>
                        {links.name}
                    </Link>
                );
            })}

        </div>
    )
}