export default function Navbar() {
  return (
    <div className="w-full h-20 bg-slate-900/80 px-8 lg:px-16 py-5 sticky top-0 backdrop-blur-md text-2xl text-center flex justify-between z-50 shadow-lg">
      <h1 className="font-bold text-cyan-400 text-3xl ">SAJJAD
       
      </h1>
      <ul className="flex gap-8 text-slate-300 text-lg font-medium">
        <li className="cursor-pointer hover:text-cyan-400 transition-all duration-300">Home</li>
        <li className="cursor-pointer hover:text-cyan-400 transition-all duration-300">About</li>
        <li className="cursor-pointer hover:text-cyan-400 transition-all duration-300">Skills</li>
        <li className="cursor-pointer hover:text-cyan-400 transition-all duration-300">Project</li>
        <li className="cursor-pointer hover:text-cyan-400 transition-all duration-300">Contact</li>
      </ul>
    </div>
  );
}
