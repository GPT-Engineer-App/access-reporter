import { Home, PlusCircle } from "lucide-react";
import HomePage from "./pages/Home.jsx";
import SubmitReportPage from "./pages/SubmitReport.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <HomePage />,
  },
  {
    title: "Submit Report",
    to: "/submit",
    icon: <PlusCircle className="h-4 w-4" />,
    page: <SubmitReportPage />,
  },
];