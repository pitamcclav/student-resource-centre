      "use client"

  import * as React from "react"
  import { Check, ChevronsUpDown } from "lucide-react"

  import { cn } from "@/lib/utils"
  import { Button } from "@/components/ui/button"
  import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
  } from "@/components/ui/command"
  import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  import { useEffect, useState } from "react"
  import { getPrograms } from "@/app/auth/register/actions"


  interface Program {
      id: number;
      name: string;
      code: string;
      duration: number;
    }

  export function ProgramSelector({ onSelectAction }: { onSelectAction: (id: number) => void }) {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState<number | null>(null);
    const [programs, setPrograms] = useState<Program[]>([]);
      const [error, setError] = useState<string | null>(null);
      const [loading, setLoading] = useState(true);

      useEffect(() => {
    const fetchPrograms = async () => {
      try {
        setLoading(true);
        const fetchedPrograms = await getPrograms();
        setPrograms(fetchedPrograms);
        setError(null);
      } catch (err) {
        setError("Failed to fetch programs");
      } finally {
        setLoading(false);
      }
    };
    fetchPrograms();
  }, []);

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {value
            ? programs.find((program) => program.id === value)?.name
            : "Select program..."}
            <ChevronsUpDown className="opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
          

            <CommandInput placeholder="Select Program..." className="h-9" />
            <CommandList>
              <CommandEmpty>
              {loading ? "Loading programs..." : error || "No programs available."}
            </CommandEmpty>

            <CommandGroup>
              {programs.map((program) => (
                <CommandItem
                  key={program.id}
                  value={program.id.toString()}
                  onSelect={() => {
                    setValue(program.id);
                    setOpen(false);
                    onSelectAction(program.id); // Notify parent of the selection
                  }}
                >
                  {program.name}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === program.id ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    )
  }
