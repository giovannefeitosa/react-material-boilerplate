import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import MenuIcon from '@material-ui/icons/Menu';

export default [
  {
    menus: [
      {
        id: 'Home',
        path: '/',
        label: 'Home',
        icon: HomeIcon,
      },
      {
        id: 'About',
        path: '/about',
        label: 'Sobre Nós',
        icon: InfoIcon,
      },
      {
        id: 'LayoutColumns',
        path: '/layout-columns',
        label: 'Layout Columns',
        icon: HomeIcon,
      }
    ]
  },

  {
    menus: [
      {
        id: 'Settings',
        path: '/settings',
        label: 'Configurações',
        icon: MenuIcon,
      },
    ]
  },
];
