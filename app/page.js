import { Flower } from "lucide-react";
import NavigationBar from "./ui/navbar";
import ProtectedImage from "./ui/ProtectedImage";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <div className="mt-24 flex flex-col md:flex-row justify-center items-center gap-4 h-screen md:h-auto bg-[url(/backgroundimages/clouds-closeup.png)] bg-cover bg-center bg-no-repeat rounded-3xl shadow-sm">
        <div className="text-center md:text-left mt-10 md:mt-0">
          <div className="flex justify-center md:justify-start gap-2 mb-2">
            <i class="fas fa-dove text-lg text-white md:text-gray-200"></i>
            <i class="fas fa-dove text-lg text-white md:text-gray-200"></i>
            <i class="fas fa-dove text-lg text-white md:text-gray-200"></i>
          </div>
          <div className=" text-sm text-yellow-800">In Loving Memory</div>
          <div className=" text-5xl text-yellow-800 font-black md:max-w-sm mb-2">Juliana Awula Adjoa Vanderpuije</div>
          <div className=" text-sm text-yellow-800 mb-2">Aged 92</div>
          <div className="flex justify-center md:justify-start gap-2">
            <Flower size={20} className="text-gray-200" />
            <Flower size={20} className="text-gray-200" />
            <Flower size={20} className="text-gray-200" />
          </div>
        </div>
        <ProtectedImage
          src="/older-jv.png"
          alt="Protected"
          width={420}
          height={600}
          className="rounded-3xl"
        />
      </div>
    </>
  );
}
