"use client";

import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { DataTableViewOptions } from "./ViewOptions";

import { DataTableFacetedFilter } from "./FacetedFilter";
import { FilterOption } from "@/types";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  filterTarget: string;
  filters?: {
    name: string;
    options: FilterOption[];
  }[];
}

export function DataTableToolbar<TData>({
  table,
  filters,
  filterTarget,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder={`Filter ${filterTarget}...`}
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {filters?.map(({ name, options }) => {
          if (table.getColumn(name)) {
            return (
              <DataTableFacetedFilter
                key={name}
                column={table.getColumn(name)}
                title={name}
                options={options}
              />
            );
          }
        })}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
