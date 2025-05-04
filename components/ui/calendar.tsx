import type * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import "react-day-picker/style.css";

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
    classNames={{
      today: `border-amber-500`, // Add a border to today's date
      selected: `bg-blue-700 border-amber-500 text-white`, // Highlight the selected day
      root: `${defaultClassNames.root} shadow-lg p-5`, // Add a shadow to the root element
      chevron: `${defaultClassNames.chevron} fill-amber-500` // Change the color of the chevron
    }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4 text-black bg-blue-700" />,  // Black icon for better contrast
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4 text-black bg-blue-700" />, // Black icon for better contrast
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
