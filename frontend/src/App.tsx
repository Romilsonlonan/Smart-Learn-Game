import { Volume2, Users } from 'lucide-react';

function App() {
  const menuItems = [
    { label: 'JOGAR', color: 'bg-red-600', hover: 'hover:bg-red-500' },
    { label: 'NOVO JOGO', color: 'bg-red-600', hover: 'hover:bg-red-500' },
    { label: 'CONTINUE', color: 'bg-red-600', hover: 'hover:bg-red-500' },
    { label: 'VER MISSÕES', color: 'bg-yellow-400', hover: 'hover:bg-yellow-300', text: 'text-gray-900' },
    { label: 'SAIR', color: 'bg-gray-800', hover: 'hover:bg-gray-700' }
  ];

  return (
    <div 
      className="min-h-screen w-full flex items-center justify-between p-12 bg-cover bg-center overflow-hidden font-sans select-none"
      style={{ backgroundImage: 'url("/bg.png")' }}
    >
      {/* Overlay just in case the background is too bright */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>

      {/* Left Column: Title and Bottom Controls */}
      <div className="flex flex-col justify-between h-full w-1/2 z-10 relative mt-16 min-h-[70vh]">
        
        {/* Title Section */}
        <div className="ml-12 drop-shadow-xl transform -skew-y-3">
          <h2 className="text-red-600 text-6xl font-bold tracking-tighter italic m-0 p-0 leading-none" style={{ WebkitTextStroke: '2px white' }}>
            Tech Frio
          </h2>
          <h1 className="text-black text-8xl font-extrabold tracking-tighter italic m-0 p-0 leading-none -mt-2">
            Games
          </h1>
        </div>

        {/* Bottom Left Controls */}
        <div className="flex items-end gap-6 ml-12 pb-4">
          <button className="bg-red-600 p-4 rounded-xl shadow-lg hover:bg-red-500 transition-colors transform hover:scale-105 active:scale-95 border-2 border-white/20">
            <Volume2 className="w-8 h-8 text-white" />
          </button>
          
          <button className="flex flex-col items-center justify-center gap-1 group">
            <div className="text-red-600 group-hover:text-red-500 transition-colors drop-shadow-md">
              <Users className="w-12 h-12" fill="currentColor" />
            </div>
            <span className="text-black font-bold text-lg italic tracking-wider drop-shadow-sm group-hover:text-gray-800">CRÉDITOS</span>
          </button>
        </div>
      </div>

      {/* Right Column: Menu */}
      <div className="w-1/2 flex justify-end z-10 relative pr-12">
        <div className="bg-white/20 backdrop-blur-md border border-white/50 p-12 rounded-3xl shadow-2xl flex flex-col gap-4 w-[400px]">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`${item.color} ${item.hover} transition-all duration-300 transform -skew-x-12 py-3 px-8 shadow-[4px_4px_0px_rgba(0,0,0,0.3)] hover:translate-y-1 hover:shadow-[2px_2px_0px_rgba(0,0,0,0.3)] active:translate-y-2 active:shadow-none`}
            >
              <div className="skew-x-12">
                <span className={`font-bold italic text-xl tracking-wider ${item.text || 'text-white'}`}>
                  {item.label}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
