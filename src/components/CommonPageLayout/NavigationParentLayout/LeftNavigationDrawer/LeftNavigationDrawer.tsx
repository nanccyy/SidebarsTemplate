import { observer } from 'mobx-react-lite';
import { IconButton, List, Divider, Paper, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import { useInstance } from 'react-ioc';
import UIConfigurationStore from '@/store/ui-configuration-store';
import MobileDrawer from './MobileDrawer';
import { Drawer, DrawerHeader } from './navigation.styled';

const LeftNavigationDrawer = ({ isMobile, onClose }) => {
  const uiConfigStore = useInstance(UIConfigurationStore);

  const open = uiConfigStore.leftSidebar.open;
  const drawerWidth = uiConfigStore.leftSidebarWidth;

  const toggleDrawer = () => {
    if (isMobile) onClose(false);
    else uiConfigStore.toggleLeftSidebar();
  };

  return (
    <>
      {isMobile ? (
        <MobileDrawer sidebar={[]} toggleDrawer={toggleDrawer} open={open}/>
      ) : (
        <Drawer
          variant="permanent"
          anchor="left"
          open={open}
          width={drawerWidth}
        >
          <DrawerHeader open={open}>
            <Box ml={1}>
            <IconButton onClick={toggleDrawer}>{open ? <CloseTwoToneIcon /> : <MenuIcon />}</IconButton>
            </Box>
          </DrawerHeader>
          <Divider />
          <List component={'nav'} disablePadding>
        
          </List>
        </Drawer>
      )}
    </>
  );
};

export default observer(LeftNavigationDrawer);
