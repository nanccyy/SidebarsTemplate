import { styled, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';

const openedMixin = (theme: Theme, width: number): CSSObject => ({
  width,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  // border: 'none',
  // backgroundColor: '#eee',
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

type DrawerHeaderProps = {
  open?: boolean;
};

export const DrawerHeader = styled('div')<DrawerHeaderProps>(({ open }) => ({
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: open ? 'flex-end' : 'flex-start',
  // boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
  // overflow: "hidden",
  // padding: theme.spacing(0, 1),
}));

export const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' && prop !== 'width' })<{
  open?: boolean;
  width: number;
}>(({ theme, open, width }) => {
  return {
    width,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxShadow: '4px 0 10px rgba(0, 0, 0, 0.1)',
    zIndex: 1101,
    // boxSizing: 'border-box',
    '& .MuiPaper-root': {
      height: 'calc(100% - 40px)',
      marginTop: '40px',
    },
    ...(open && {
      ...openedMixin(theme, width),
      '& .MuiDrawer-paper': openedMixin(theme, width),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  };
});
