import Mycard from "../../component/Mycard";
import Slidemenu from "../../component/Slidemenu";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-[#1a1a1a] font-['Libre_Franklin'] text-white">
      <div className="relative w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* คอมโพเนนต์การ์ดส่วนตัวด้านซ้าย */}
        <Mycard />
        
        <div className="flex-grow max-w-3xl lg:ml-12 space-y-8">
          <div className="space-y-4">
            <h2 className="text-5xl font-bold italic">Featured <span className="text-orange-500 not-italic">Projects</span></h2>
            
            <div className="space-y-2">
              <h3 className="text-2xl font-bold uppercase tracking-tight">Manage Task App - fullstack web development</h3>
              <p className="text-gray-500 text-lg leading-relaxed">
                Here's my latest project built with Next.js and Laravel, using TailwindCSS on the front-end. 
                Watch the video to see the responsive landing page in action!
              </p>
            </div>
          </div>

          {/* ส่วนแสดงรูปภาพโปรเจกต์ */}
          <div className="w-full rounded-3xl overflow-hidden border border-gray-800 shadow-2xl transition-transform hover:scale-[1.02] duration-500">
            {/* นำรูปภาพโปรเจกต์ไปวางในโฟลเดอร์ public/ และเรียกใช้ชื่อไฟล์ให้ตรงกันครับ */}
            <img 
              src="/inproject.png" 
              alt="Manage Task App Thumbnail" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* แถบเมนูด้านขวาสำหรับการเปลี่ยนหน้า */}
        <div className="fixed right-10 top-1/2 -translate-y-1/2 hidden xl:block">
          <Slidemenu />
        </div>
      </div>
    </main>
  );
}