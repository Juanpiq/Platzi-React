"use client";

export default function FloatingButton() {
  return (
    <button 
      className="fixed bottom-5 right-5 bg-blue-500 text-white font-bold w-16 h-16 rounded-full shadow-lg flex items-center 
                justify-center text-5xl hover:bg-blue-600 hover:rotate-45 transition-transform duration-300"
      onClick={() => console.log("Botón flotante presionado")}
    >
      +
    </button>
  );
}
