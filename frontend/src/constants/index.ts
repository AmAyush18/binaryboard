import { Video, UserPlus, CalendarCheck, PlayCircle } from "lucide-react";

export const QUICK_ACTIONS = [
  {
    icon: Video,
    title: "New Call",
    description: "Start an instant coding session",
    color: "primary",
    gradient: "from-primary/20 via-primary/10 to-transparent",
  },
  {
    icon: UserPlus,
    title: "Join Interview",
    description: "Enter via an invite link",
    color: "purple-500",
    gradient: "from-purple-500/20 via-purple-500/10 to-transparent",
  },
  {
    icon: CalendarCheck,
    title: "Schedule",
    description: "Plan upcoming coding rounds",
    color: "blue-500",
    gradient: "from-blue-500/20 via-blue-500/10 to-transparent",
  },
  {
    icon: PlayCircle,
    title: "Recordings",
    description: "Review recorded interviews",
    color: "orange-500",
    gradient: "from-orange-500/20 via-orange-500/10 to-transparent",
  },
];

export type QuickActionType = (typeof QUICK_ACTIONS)[number];
