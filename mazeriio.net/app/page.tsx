import { fetchPages } from "@/lib/notion";
import Image from "next/image";

export default async function Home() {

  const post = await fetchPages();

  return (
    <main className="">
        
    </main>
  );
}
