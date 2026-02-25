import Mycard from "../../component/Mycard"; 
import Slidemenu from "../../component/Slidemenu";
import { FaReact, FaFigma, FaHtml5, FaJs, FaGithub } from 'react-icons/fa'; //
import { SiNextdotjs } from 'react-icons/si';

export default function SkillsPage() {
  const skills = [
    { name: "React", percent: "60%", icon: FaReact, active: true },
    { name: "Figma", percent: "85%", icon: FaFigma, active: false },
    { name: "HTML/CSS", percent: "80%", icon: FaHtml5, active: false },
    { name: "Next.js", percent: "80%", icon: SiNextdotjs, active: false },
    { name: "Java Script", percent: "60%", icon: FaJs, active: false },
    { name: "GitHub", percent: "90%", icon: FaGithub, active: false },
  ];

  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-[#1a1a1a] font-['Libre_Franklin']">
      <div className="relative w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-12 text-white">
        <Mycard />

        <div className="flex-grow max-w-2xl lg:ml-12 space-y-10">
          <h2 className="text-4xl font-light">My <span className="text-orange-500 font-bold">Skills</span></h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {skills.map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <div key={idx} className="flex flex-col items-center gap-4">
                  {/* วงกลมล้อมรอบไอคอนตาม Mockup */}
                  <div className={`w-[158] h-[218] rounded-full border-2 flex flex-col items-center justify-center gap-4 transition-colors ${skill.active ? 'border-orange-500' : 'border-gray-800'}`}>
                    <Icon size={80} className={skill.active ? 'text-blue-400' : 'text-white'} />
                    <span className="text-orange-500 font-bold text-lg">{skill.percent}</span>
                  </div>
                  <p className="text-whilte text-xs font-medium uppercase tracking-widest">{skill.name}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="fixed right-10 top-1/2 -translate-y-1/2 hidden xl:block">
          <Slidemenu />
        </div>
      </div>
    </main>
  );
}