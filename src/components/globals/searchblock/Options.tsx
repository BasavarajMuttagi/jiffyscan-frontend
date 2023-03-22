import React, { useState } from "react";

interface optionsItem {
  id: number;
  name: string;
  img: string;
}

const options: optionsItem[] = [
  { id: 79, name: "Goerli", img: "/images/ethereum.svg" },
  { id: 34, name: "Optimism", img: "/images/vector (1).svg" },
  { id: 75, name: "Ethereum", img: "/images/ethereum.svg" },
  { id: 56, name: "Matic", img: "/images/icon-container (22).svg" },
];

function Options() {
  const [open, setOpen] = useState<boolean>(false);
  const toggler = () => setOpen((v) => !v);

  const [value, setValue] = useState<number>(0);
  const handleValue = (index: number) => {
    setValue(index);
    toggler();
  };

  return (
    <div className="relative z-0">
      <div
        className="py-3 px-4 border-r border-dark-200 bg-white flex items-center gap-1 text-md"
        role="button"
        onClick={toggler}
      >
        <img src={options[value].img} alt="" />
        <span>{options[value].name}</span>
        <img
          className={`duration-100 ${open ? "rotate-180" : ""}`}
          src="/images/chevron-down.svg"
          alt=""
        />
      </div>
      {open && (
        <div className="">
          <div
            onClick={toggler}
            className="fixed inset-0 -z-20 bg-transparent"
          />
          <div className="absolute left-0 bg-white min-w-full py-1 border-dark-200 shadow-200">
            <div className="flex flex-col">
              {options.map(({ id, img, name }, index) => (
                <div
                  onClick={() => handleValue(index)}
                  className="flex items-center whitespace-no-wrap gap-2 py-2 px-3 hover:bg-dark-600/10 text-md"
                  role="button"
                  key={id}
                >
                  <img src={img} alt="" />
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Options;
