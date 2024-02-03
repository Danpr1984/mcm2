import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

import { COLORS } from "./AssignedSongs";

export default function EditColor({ color }) {
  const handleColorReAssign = async (color) => {
    console.log(color);
  };

  return (
    <div className="text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button
            className={`${color} flex aspect-square h-12 items-center justify-center rounded-full border border-slate-950 bg-opacity-80 bg-clip-padding backdrop-blur-md backdrop-filter`}
          ></Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute -right-1 z-10 mt-1 grid w-28 origin-top-right grid-cols-4 gap-1 overflow-hidden rounded-md bg-gray-300 p-1">
            {COLORS.map((color, index) => {
              return (
                <Menu.Item key={index} className="aspect-square h-6 w-6">
                  {({ active }) => (
                    <button
                      className={`${color}`}
                      onClick={() => handleColorReAssign(color)}
                    />
                  )}
                </Menu.Item>
              );
            })}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
