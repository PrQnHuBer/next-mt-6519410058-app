import Mycard from "../../component/Mycard";
import Slidemenu from "../../component/Slidemenu";

export default function ContactMePage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-[#1a1a1a] font-['Libre_Franklin'] text-white">
      <div className="relative w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* ดึงคอมโพเนนต์การ์ดส่วนตัว */}
        <Mycard />

        <div className="flex-grow max-w-2xl lg:ml-12 space-y-8">
          <div className="space-y-2">
            <h2 className="text-5xl font-bold">
              Contact <span className="text-orange-500">Me</span>
            </h2>
            <p className="text-gray-400 text-lg">Let’s get in touch!</p>
          </div>

          {/* Form Section ตามดีไซน์ */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 pt-4">
            <div className="flex flex-col gap-2">
              <label className="text-orange-500 text-sm uppercase tracking-widest">
                Email
              </label>
              <input
                type="email"
                className="bg-transparent border-b border-gray-800 py-2 focus:border-orange-500 outline-none transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-orange-500 text-sm uppercase tracking-widest">
                Phone
              </label>
              <input
                type="text"
                className="bg-transparent border-b border-gray-800 py-2 focus:border-orange-500 outline-none transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-orange-500 text-sm uppercase tracking-widest">
                Name
              </label>
              <input
                type="text"
                className="bg-transparent border-b border-gray-800 py-2 focus:border-orange-500 outline-none transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-orange-500 text-sm uppercase tracking-widest">
                Adress
              </label>
              <input
                type="text"
                className="bg-transparent border-b border-gray-800 py-2 focus:border-orange-500 outline-none transition-all"
              />
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-orange-500 text-sm uppercase tracking-widest">
                Content
              </label>
              <textarea
                rows={3}
                className="bg-transparent border-b border-gray-800 py-2 focus:border-orange-500 outline-none transition-all resize-none"
              ></textarea>
            </div>

            <div className="flex items-center gap-3 md:col-span-2">
              <input
                type="checkbox"
                className="w-4 h-4 rounded accent-orange-500"
              />
              <p className="text-xs text-gray-500">
                I would like to receive the newsletter.
              </p>
            </div>

            <div className="md:col-span-2 pt-4">
              <button
                type="submit"
                className="w-full md:w-auto px-16 py-4 bg-orange-600 hover:bg-orange-500 text-white rounded-xl font-bold uppercase tracking-widest transition-all shadow-lg shadow-orange-900/20"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* แถบเมนูด้านขวา */}
         <div className="fixed bottom-10 right-10 xl:right-10 xl:top-1/2 xl:-translate-y-1/2 xl:left-auto xl:bottom-auto z-50">
          <Slidemenu />
        </div>
      </div>
    </main>
  );
}
