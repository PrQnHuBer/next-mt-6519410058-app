import Mycard from "../../component/Mycard";
import Slidemenu from "../../component/Slidemenu";
import { Code, Globe, PenTool } from "lucide-react"; //

export default function SpecPage() {
  const specs = [
    {
      title: "Front end-developer",
      desc: "Front-end is where I weave code and creativity to shape captivating and user-centric digital experiences.",
      icon: Code,
    },
    {
      title: "UI/UX Designer",
      desc: "UI/UX design is my palette for blending art and user psychology into seamless and delightful interactions.",
      icon: Globe,
    },
    {
      title: "Graphic designer",
      desc: "As a graphic designer, I transform ideas into visually striking and impactful designs.",
      icon: PenTool,
    },
  ];

  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-[#1a1a1a] font-['Libre_Franklin']">
      <div className="relative w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-12 text-white">
        <Mycard />

        <div className="flex-grow max-w-2xl space-y-8 lg:ml-12">
          <h2 className="text-4xl font-light italic">
            My{" "}
            <span className="text-orange-500 font-bold not-italic">
              Specializations
            </span>
          </h2>

          <div className="space-y-4">
            {specs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group p-8 border border-gray-800 rounded-3xl hover:border-orange-500 transition-all duration-300 relative flex justify-between items-start"
                >
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                      {item.desc}
                    </p>
                  </div>
                  <Icon size={24} className="text-orange-500" />
                </div>
              );
            })}
          </div>
        </div>

         <div className="fixed bottom-10 right-10 xl:right-10 xl:top-1/2 xl:-translate-y-1/2 xl:left-auto xl:bottom-auto z-50">
          <Slidemenu />
        </div>
      </div>
    </main>
  );
}
