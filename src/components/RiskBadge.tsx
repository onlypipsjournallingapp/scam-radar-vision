
import React from 'react';
import { CircleCheck, CircleAlert, OctagonAlert, TriangleAlert } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

type RiskLevel = 'low' | 'moderate' | 'high' | 'extreme';

interface RiskBadgeProps {
  level: RiskLevel;
}

const getRiskDetails = (level: RiskLevel) => {
  switch (level) {
    case 'low':
      return {
        Icon: CircleCheck,
        color: 'text-green-500',
        tooltip: 'Minimal Risk - Some concerning practices'
      };
    case 'moderate':
      return {
        Icon: TriangleAlert,
        color: 'text-yellow-500',
        tooltip: 'Moderate Risk - Multiple reported incidents'
      };
    case 'high':
      return {
        Icon: CircleAlert,
        color: 'text-red-500',
        tooltip: 'High Risk - Confirmed scam activities'
      };
    case 'extreme':
      return {
        Icon: OctagonAlert,
        color: 'text-rose-700 dark:text-rose-500',
        tooltip: 'Extreme Risk - Multiple confirmed scams'
      };
  }
};

const RiskBadge = ({ level }: RiskBadgeProps) => {
  const details = getRiskDetails(level);
  const { Icon, color, tooltip } = details;

  return (
    <TooltipProvider>
      <Tooltip delayDuration={200}>
        <TooltipTrigger asChild>
          <div className="inline-flex items-center justify-center">
            <Icon className={`h-5 w-5 ${color}`} strokeWidth={2.5} />
          </div>
        </TooltipTrigger>
        <TooltipContent 
          className="glass font-medium" 
          sideOffset={5}
        >
          {tooltip}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default RiskBadge;
