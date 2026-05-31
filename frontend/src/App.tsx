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
      className="min-h-screen w-full flex flex-col md:flex-row items-center justify-between p-4 md:p-12 bg-cover bg-center overflow-x-hidden font-sans select-none"
      style={{ backgroundImage: 'url("/bg.png")' }}
    >
      {/* Overlay just in case the background is too bright */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>

      {/* Left Column: Title and Bottom Controls */}
      <div className="flex flex-col justify-center md:justify-between h-full w-full md:w-1/2 z-10 relative mt-8 md:mt-16 min-h-[40vh] md:min-h-[70vh] items-center md:items-start text-center md:text-left gap-8 md:gap-0">
        
        {/* Title Section */}
        <div className="md:ml-12 drop-shadow-xl transform -skew-y-3">
          <h2 className="text-red-600 text-5xl md:text-6xl font-bold tracking-tighter italic m-0 p-0 leading-none" style={{ WebkitTextStroke: '2px white' }}>
            Tech Frio
          </h2>
          <h1 className="text-black text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter italic m-0 p-0 leading-none -mt-2">
            Games
          </h1>
        </div>

        {/* Bottom Left Controls */}
        <div className="flex items-end gap-6 md:ml-12 pb-4">
          <button className="bg-red-600 p-3 md:p-4 rounded-xl shadow-lg hover:bg-red-500 transition-colors transform hover:scale-105 active:scale-95 border-2 border-white/20">
            <Volume2 className="w-6 h-6 md:w-8 md:h-8 text-white" />
          </button>
          
          <button className="flex flex-col items-center justify-center gap-1 group">
            <div className="text-red-600 group-hover:text-red-500 transition-colors drop-shadow-md">
              <Users className="w-10 h-10 md:w-12 md:h-12" fill="currentColor" />
            </div>
            <span className="text-black font-bold text-base md:text-lg italic tracking-wider drop-shadow-sm group-hover:text-gray-800">CRÉDITOS</span>
          </button>
        </div>
      </div>

      {/* Right Column: Menu */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end z-10 relative md:pr-12 mt-8 md:mt-0 mb-8 md:mb-0">
        <div className="bg-white/20 backdrop-blur-md border border-white/50 p-6 md:p-12 rounded-3xl shadow-2xl flex flex-col gap-3 md:gap-4 w-full max-w-[320px] md:max-w-[400px]">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`${item.color} ${item.hover} transition-all duration-300 transform -skew-x-12 py-2 md:py-3 px-6 md:px-8 shadow-[4px_4px_0px_rgba(0,0,0,0.3)] hover:translate-y-1 hover:shadow-[2px_2px_0px_rgba(0,0,0,0.3)] active:translate-y-2 active:shadow-none`}
            >
              <div className="skew-x-12">
                <span className={`font-bold italic text-lg md:text-xl tracking-wider ${item.text || 'text-white'}`}>
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
