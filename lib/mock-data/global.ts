import {activePolls as detailedActivePolls} from "./polls";

export const pinnedNotices = [
  {
    title: "Policy update review",
    meta: "HR • Requires acknowledgment",
  },
  {
    title: "Office maintenance schedule",
    meta: "Admin • Tomorrow",
  },
  {
    title: "Town hall attendance reminder",
    meta: "Leadership • Friday",
  },
];

export const utilityActivePolls = detailedActivePolls.slice(0, 3).map((poll) => ({
  title: poll.title,
  meta: `${poll.totalVotes} votes`,
}));

export const upcomingEvents = [
  "Leadership sync • 10:30 AM",
  "Recruitment review • 1:00 PM",
  "Wellness session • 4:00 PM",
  "Marketing launch prep • Tomorrow",
];

export const globalUtilityData = {
  pinned: pinnedNotices,
  polls: utilityActivePolls,
  events: upcomingEvents,
};
