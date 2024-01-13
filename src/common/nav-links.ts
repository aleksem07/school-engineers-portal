import { AppRoutes } from "./routes";
import HomeIcon from "@mui/icons-material/Home";
import NetworkCheckIcon from "@mui/icons-material/NetworkCheck";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import RestaurantIcon from "@mui/icons-material/Restaurant";

export const NAV_LINKS = [
  {
    name: "Главная",
    path: AppRoutes.HOME,
    Icon: HomeIcon,
  },
  {
    name: "Интернет",
    path: AppRoutes.INTERNET,
    Icon: NetworkCheckIcon,
  },
  {
    name: "Питание",
    path: AppRoutes.NUTRITION,
    Icon: RestaurantIcon,
  },
  {
    name: "Контакты",
    path: AppRoutes.CONTACTS,
    Icon: RecentActorsIcon,
  },
];
