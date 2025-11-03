import React from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const CustomSelect = ({ label, options, selected, setSelected }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-900">{label}</label>
      <div className="relative mt-2">
        <Listbox value={selected} onChange={setSelected}>
          <ListboxButton className="w-full cursor-default rounded-md bg-white py-2 pl-3 pr-10 text-left text-gray-900 shadow-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <span className="block truncate">{selected}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </ListboxButton>

          <ListboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {options.map((option, idx) => (
              <ListboxOption
                key={idx}
                value={option}
                className={({ active, selected }) =>
                  `cursor-default select-none relative py-2 pl-3 pr-9 ${
                    active ? "bg-indigo-100 text-indigo-900" : "text-gray-900"
                  } ${selected ? "font-semibold" : "font-normal"}`
                }
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-semibold" : "font-normal"
                      }`}
                    >
                      {option}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Listbox>
      </div>
    </div>
  );
};

export default CustomSelect;
