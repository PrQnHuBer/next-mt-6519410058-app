import Image from 'next/image';

export default function Mycard() {
  return (
    <div className="w-[395px] h-[695px] bg-[#1e1e1e] border border-gray-800 rounded-3xl p-8 flex flex-col items-center shadow-2xl">
      <div className="w-full mb-6">
        <h2 className="text-xl font-semibold text-white"><span className="text-orange-500">C</span>hatchai</h2>
      </div>
      <div className="w-full aspect-square rounded-2xl overflow-hidden mb-6 bg-gray-700">
        <Image src="/Myprofile.png" alt="Profile" width={325} height={324} className="w-full h-full object-cover" />
      </div>
      <div className="text-center space-y-2 mb-8">
        <p className="text-sm font-light text-gray-400">STU ID: 6519410058</p>
        <p className="text-xs text-gray-500 uppercase tracking-widest">Fullstack Web Developer</p>
      </div>
      <div className="flex gap-4 mb-8">
        <Image 
        src="/Facebook.png"
        alt="Facebook"
        width={40}
        height={40}
        className="w-5 h-5 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 cursor-pointer transition-all" 
      />
        <Image 
        src="/X.png"
        alt="X"
        width={40}
        height={40}
        className="w-5 h-5 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 cursor-pointer transition-all" 
      />
        <Image 
        src="/Camera.png"
        alt="Camera"
        width={40}
        height={40}
        className="w-5 h-5 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 cursor-pointer transition-all" 
      />
         <Image 
        src="/In.png"
        alt="LinkedIn"
        width={40}
        height={40}
        className="w-5 h-5 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 cursor-pointer transition-all" 
      />
        <Image 
        src="/Google.png"
        alt="Google"
        width={40}
        height={40}
        className="w-5 h-5 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 cursor-pointer transition-all" 
      />
      </div>
      <button className="w-[312] h-[58] py-3 bg-orange-600 hover:bg-orange-500 text-black rounded-xl font-bold uppercase tracking-widest text-sm transition-all">
        Hire Me !
      </button>
    </div>
  );
}