import Mycard from "../../component/Mycard"; 
import Slidemenu from "../../component/Slidemenu";

export default function AboutMePage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-[#1a1a1a] font-['Libre_Franklin'] text-white">
      <div className="relative w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* ถอยหลัง 2 ชั้นเพื่อเรียกใช้ Component */}
        <Mycard />
        
        <div className="flex-grow max-w-2xl lg:ml-12 space-y-6">
          <h2 className="text-5xl font-light">About <span className="text-orange-500 font-medium">Me</span></h2>
          
          <h1 className="text-5xl font-bold leading-tight">
            I find fulfillment in blending visual design with the power of coding to create meaningful experiences.
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime tempora at neque a adipisci nulla voluptatem? Mollitia, officiis, architecto earum voluptates obcaecati corrupti voluptatem.
          </p>
        </div>

        <div className="fixed right-10 top-1/2 -translate-y-1/2 hidden xl:block">
          <Slidemenu />
        </div>
      </div>
    </main>
  );
}