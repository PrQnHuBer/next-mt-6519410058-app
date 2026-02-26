import Mycard from "../../component/Mycard";
import Slidemenu from "../../component/Slidemenu";

export default function EduExpPage() {
  const experiences = [
    {
      year: "2022 - Present",
      title: "UI/UX Designer",
      company: "Freelance",
      active: true,
    },
    {
      year: "",
      title: "Fullstack Web Developer",
      company: "Freelance",
      active: false,
    },
    {
      year: "2022 - 2025",
      title: "Bachelor Degree in Technology Digital and Innovation",
      company: "Southeast Asia University",
      active: false,
    },
    {
      year: "2016 - 2021",
      title: "High school",
      company: "Krathumbaen Wisetsamutthakhun School",
      active: false,
    },
  ];

  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-[#1a1a1a] font-['Libre_Franklin'] text-white">
      <div className="relative w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-12">
        <Mycard />

        <div className="flex-grow max-w-2xl lg:ml-12 space-y-12">
          <h2 className="text-5xl font-bold">
            Education & <span className="text-orange-500">Experience</span>
          </h2>

          <div className="space-y-10">
            {experiences.map((item, idx) => (
              <div key={idx} className="space-y-2">
                {item.year && (
                  <p
                    className={`${item.active ? "text-3xl text-orange-500" : "text-gray-500"}  font-medium`}
                  >
                    {item.year}
                  </p>
                )}
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="text-gray-500 text-lg">{item.company}</p>
              </div>
            ))}
          </div>
        </div>

         <div className="fixed bottom-10 right-10 xl:right-10 xl:top-1/2 xl:-translate-y-1/2 xl:left-auto xl:bottom-auto z-50">
          <Slidemenu />
        </div>
      </div>
    </main>
  );
}
