import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen">
        <div className="col-span-3 border-r-1"></div>
        <div className="col-span-6"></div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
