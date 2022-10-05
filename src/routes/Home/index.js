import {
  Activities,
  ContactUs,
  Introduction,
  TechFoundation,
  VocationAssistance,
} from "@pages/index";

export const homeRoutes = [
  {
    path: "/technology-foundation",
    element: TechFoundation,
  },
  {
    path: "/introduction",
    element: Introduction,
  },
  {
    path: "/vocation-assistance",
    element: VocationAssistance,
  },
  {
    path: "/activities",
    element: Activities,
  },
  {
    path: "/contact-us",
    element: ContactUs,
  },
];
