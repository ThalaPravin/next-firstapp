import { Metadata } from "next";

export const metadata : Metadata = {
    title: "ThalaPravin",
};


export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <div className="font-extrabold flex justify-center items-center h-screen">
  
        <h1> ThalaPravin </h1>
    </div>
  );
}
