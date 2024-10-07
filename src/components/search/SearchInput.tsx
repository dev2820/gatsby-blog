"use client";

import { useMount } from "@/hooks/use-mount";
import { cx } from "@/utils/cx";
import { delayFn } from "@/utils/delay";
import { SearchIcon, XIcon } from "lucide-react";
import {
  type ChangeEvent,
  type ComponentPropsWithoutRef,
  forwardRef,
  useState,
} from "react";

export type SearchInputProps = ComponentPropsWithoutRef<"label"> & {
  onChangeSearch?: (keyword: string) => void;
  placeholder?: string;
  debounce?: boolean;
  defaultValue?: string;
  initialFocus?: boolean;
};
export const SearchInput = forwardRef<HTMLLabelElement, SearchInputProps>(
  (props, ref) => {
    const {
      onChangeSearch,
      placeholder,
      defaultValue,
      initialFocus,
      className,
      ...rest
    } = props;
    const [value, setValue] = useState<string>(defaultValue ?? "");

    const handleTypingSearch = (e: ChangeEvent<HTMLInputElement>) => {
      const newKeyword = e.currentTarget.value;

      setValue(newKeyword);
      onChangeSearch?.(newKeyword);
    };

    const handleClearSearch = () => {
      setValue("");
      onChangeSearch?.("");
    };

    return (
      <>
        <label className={cx("relative", className)} {...rest} ref={ref}>
          <SearchIcon
            size={20}
            className="absolute left-3 top-1/2 -translate-y-1/2"
          />
          <input
            type="search"
            placeholder={placeholder}
            className={cx(
              "peer",
              "h-full w-full rounded-lg text-md bg-white/15 caret-white pl-11 pr-11 shadow-xl",
              "duration-200",
              "border-2 focus:outline-none border-transparent focus:border-primary",
              "focus-visible:outline-none focus-visible:border-primary"
            )}
            value={value}
            autoFocus={initialFocus}
            onChange={handleTypingSearch}
          />
          <button
            id="search-cancel-btn"
            className="peer-placeholder-shown:hidden absolute right-0 top-1/2 -translate-y-1/2 h-11 w-11 inline-flex justify-center place-items-center"
            type="button"
            onClick={handleClearSearch}
          >
            <XIcon size={20} />
          </button>
        </label>
      </>
    );
  }
);

SearchInput.displayName = "SearchInput";
