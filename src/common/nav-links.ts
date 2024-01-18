import { AppRoutes } from './routes';
import HomeIcon from '@mui/icons-material/Home';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import StarIcon from '@mui/icons-material/Star';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const favoritesCount = 0;

export const NAV_LINKS = [
  {
    name: 'Главная',
    path: AppRoutes.HOME,
    Icon: HomeIcon,
  },
  {
    name: 'Интернет',
    path: AppRoutes.INTERNET,
    Icon: NetworkCheckIcon,
  },
  {
    name: 'Linux Astra',
    path: AppRoutes.LINUX,
    Icon: StarIcon,
  },
  {
    name: 'Питание',
    path: AppRoutes.FOOD,
    Icon: RestaurantIcon,
  },
  {
    name: 'Контакты',
    path: AppRoutes.CONTACTS,
    Icon: RecentActorsIcon,
  },
  {
    name: `Избранное (${favoritesCount})`,
    path: AppRoutes.FAVORITES,
    Icon: favoritesCount <= 0 ? BookmarkBorderIcon : BookmarkIcon,
  },
];
