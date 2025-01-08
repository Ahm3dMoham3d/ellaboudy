import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface IComboBox {
  data: { label: string; value: string }[];
  searchLabel: string;
  className?: string;
}

export default function ComboBox({ data, searchLabel, className }: IComboBox) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const [filteredData, setFilteredData] = React.useState(data);

  const handleSearch = (query: string) => {
    setFilteredData(
      data.filter((item) =>
        item.label.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className={`w-full ${className}`} asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className='justify-between'
        >
          {value
            ? data.find((val) => val.value === value)?.label
            : `${searchLabel}`}
          <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-full p-0'>
        <Command>
          <CommandInput
            placeholder={searchLabel}
            onValueChange={(query) => handleSearch(query)}
          />
          <CommandList>
            <CommandEmpty>No label found.</CommandEmpty>
            <CommandGroup>
              {filteredData.map((val) => (
                <CommandItem
                  key={val.value}
                  value={val.label} // Use label for search and selection
                  onSelect={(currentLabel) => {
                    const selectedItem = data.find(
                      (item) => item.label === currentLabel
                    );
                    setValue(selectedItem?.value || "");
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === val.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {val.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
