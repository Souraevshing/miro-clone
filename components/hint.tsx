import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export interface HintProps {
  label: string;
  children: React.ReactNode;
  side: "top" | "bottom" | "left" | "right";
  align: "start" | "center" | "end";
  sideOffset?: number;
  alignOffset?: number;
}

//re-usable tooltip component
export const Hint = ({
  align,
  children,
  label,
  side,
  alignOffset,
  sideOffset,
}: HintProps) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={50}>
        <TooltipTrigger asChild>
          <div>
            {children}
            <TooltipContent
              side={side}
              align={align}
              sideOffset={sideOffset}
              alignOffset={alignOffset}
              className="animate-in transition rounded-full bg-rose-200"
            >
              <p className="font-light capitalize text-orange-500">{label}</p>
            </TooltipContent>
          </div>
        </TooltipTrigger>
      </Tooltip>
    </TooltipProvider>
  );
};
