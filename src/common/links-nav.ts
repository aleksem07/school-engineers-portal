import { APP_ROUTES } from './routes';
import HomeIcon from '@mui/icons-material/Home';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import StarIcon from '@mui/icons-material/Star';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { useAppSelector } from '@/redux/hooks';

const NAV_LINKS = () => {
  const favoritesCount = 0;
  const lastSettingsPath = useAppSelector((state) => state.path.settings);

  return [
    {
      name: 'Главная',
      path: APP_ROUTES.HOME,
      Icon: HomeIcon,
    },
    {
      name: 'Настройки',
      path: lastSettingsPath,
      Icon: NetworkCheckIcon,
    },
    {
      name: 'Linux Astra',
      path: APP_ROUTES.LINUX,
      Icon: StarIcon,
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
};

export default NAV_LINKS;
