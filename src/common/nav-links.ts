import { APP_ROUTES } from './routes';
import HomeIcon from '@mui/icons-material/Home';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import StarIcon from '@mui/icons-material/Star';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { SETTINGS_ROUTES } from '@/common/routes';

const favoritesCount = 0;

export const NAV_LINKS = [
  {
    name: 'Главная',
    path: APP_ROUTES.HOME,
    Icon: HomeIcon,
  },
  {
    name: 'Настройки',
    path: SETTINGS_ROUTES[0].path,
    Icon: NetworkCheckIcon,
  },
  {
    name: 'Linux Astra',
    path: APP_ROUTES.LINUX,
    Icon: StarIcon,
  },
  {
    name: 'Питание',
    path: APP_ROUTES.FOOD,
    Icon: RestaurantIcon,
  },
  {
    name: 'Контакты',
    path: APP_ROUTES.CONTACTS,
    Icon: RecentActorsIcon,
  },
  {
    name: `Избранное (${favoritesCount})`,
    path: APP_ROUTES.FAVORITES,
    Icon: favoritesCount <= 0 ? BookmarkBorderIcon : BookmarkIcon,
  },
];
