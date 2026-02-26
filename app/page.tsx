import Mycard from "../component/Mycard";
import Slidemenu from "../component/Slidemenu";
import SlideMenu from "../component/Slidemenu";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-[#1a1a1a] font-['Libre_Franklin']">
      {/* Container หลักที่คุม Layout ทั้งหมด */}
      <div className="relative w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* 1. ส่วน Card ด้านซ้าย (Component กลาง) */}
        <div className="flex-shrink-0 animate-in fade-in slide-in-from-left duration-700">
          <Mycard />
        </div>

        {/* 2. ส่วนเนื้อหาตรงกลาง (Hero Content) */}
        <div className="flex-grow max-w-2xl text-white space-y-6 lg:ml-12">
          <h3 className="text-xl font-light">
            Lets Work{" "}
            <span className="text-orange-500 font-medium">Together !</span>
          </h3>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Hi From <span className="text-orange-500">Chatchai</span> ,<br />
            Interactive Designer & Fullstack Web Developer
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            maxime tempora at neque a adipisci nulla voluptatem? Mollitia,
            officiis, architecto earum voluptates obcaecati corrupti voluptatem.
          </p>

          {/* Stats Section */}
          <div className="flex gap-16 pt-8">
            <div>
              <h2 className="text-5xl text-orange-500 font-light">3 +</h2>
              <p className="text-gray-500 uppercase text-[10px] tracking-[0.2em] mt-3 leading-tight">
                Years of
                <br />
                Experience
              </p>
            </div>
            <div>
              <h2 className="text-5xl text-orange-500 font-light">10 +</h2>
              <p className="text-gray-500 uppercase text-[10px] tracking-[0.2em] mt-3 leading-tight">
                Projects
                <br />
                Completed
              </p>
            </div>
          </div>
        </div>

        {/* 3. ส่วนเมนูด้านขวา (Component กลาง) */}
        <div className="fixed bottom-10 right-10 xl:right-10 xl:top-1/2 xl:-translate-y-1/2 xl:left-auto xl:bottom-auto z-50">
          <Slidemenu />
        </div>
      </div>
    </main>
  );
}
