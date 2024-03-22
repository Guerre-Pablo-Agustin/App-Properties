import { useState } from "react";
import { GrFormDown, GrLocation, GrFormUp } from "react-icons/gr";

export function SearchLocation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative mb-2 md:mb-0 flex items-center gap-4 border-[1px] rounded-md px-3 py-2 justify-between cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
      <GrLocation />
        <div>
            <p>Locacion</p>
            <p className="text-xs">Selecciona la locacion</p>
        </div>
        {isOpen ? (
        <GrFormUp />
        ) : ( 
        <GrFormDown  />
        )}

        {isOpen && (
          <div className="absolute top-[70px] z-50 bg-white shadow-light rounded-lg p-4 w-[230px] left-0">
          <p>Barcelona</p>
          <p>Madrid</p>
          <p>Bilbao</p>
          <p>Sevilla</p>
          </div>
        )}


    </div>
  );
}
