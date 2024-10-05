"use client";

import { Dialog, IconButton } from "terra-design-system/react";
import { SearchIcon, XIcon } from "lucide-react";
import { SearchView } from "./SearchView";

export function SearchButton() {
  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <IconButton size="md" variant="ghost">
            <SearchIcon />
          </IconButton>
        </Dialog.Trigger>
        <Dialog.Content className="relative w-full h-full bg-transparent p-8 flex flex-col items-center">
          <header className="relative flex flex-row justify-center mb-16 w-full max-w-screen-md text-white">
            <h2 className="text-2xl h-11 leading-[44px]">Search</h2>
            <Dialog.CloseTrigger asChild className="absolute right-0">
              <IconButton size="lg" variant="ghost" theme="whiteAlpha">
                <XIcon size={36} strokeWidth="1" />
              </IconButton>
            </Dialog.CloseTrigger>
          </header>
          <SearchView className="w-full max-w-[1200px]" />
        </Dialog.Content>
      </Dialog.Root>
    </>
  );
}