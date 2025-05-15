
import {
  AppBar,
  Box,
  Divider,
  IconButton,
  List,

} from '@mui/material';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import MuiDrawer from '@mui/material/Drawer';
import { DrawerHeader } from './navigation.styled';


const MobileDrawer = ({ sidebar, toggleDrawer, open, }) => {
  return (
    <AppBar position="fixed">
      <MuiDrawer
        anchor="top"
        open={open}
        onClose={toggleDrawer}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <Box>
          <DrawerHeader open={open}>
            <IconButton onClick={toggleDrawer}>
              <CloseTwoToneIcon />
            </IconButton>
          </DrawerHeader>
        </Box>
        <Divider />
        <List component={'nav'}>
       
        </List>
      </MuiDrawer>
    </AppBar>
  );
};

export default MobileDrawer;
