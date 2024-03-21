import { atom } from "recoil";

export const openProfile = atom({
  key: "openProfile",
  default: false,
});

export const openTicket = atom({
  key: "openTicket",
  default: false,
});

export const activeTickets = atom({
  key: "activeTickets",
  default: 0,
});
