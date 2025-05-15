import { observer } from "mobx-react-lite";
import { useInstance } from "react-ioc";
import { useTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useMediaQuery, IconButton, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import InfoIcon from "@mui/icons-material/Info";
import RightHelpDrawer from "@/components/CommonPageLayout/NavigationParentLayout/RightHelpDrawer/RightHelpDrawer";
import LeftNavigationDrawer from "@/components/CommonPageLayout/NavigationParentLayout/LeftNavigationDrawer/LeftNavigationDrawer";

import UIConfigurationStore from "@/store/ui-configuration-store";
import { toolbarTheme } from "@/themes/toolbar.theme";

const NavigationParentLayout = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const uiConfigStore = useInstance(UIConfigurationStore);

  const toggleLeftDrawer = () => {
    uiConfigStore.toggleLeftSidebar();
  };

  const toggleRightDrawer = () => {
    uiConfigStore.toggleRightSidebar();
  };

  return (
    <>
      {isMobile && (
        <>
          <AppBar position="fixed" sx={{ marginTop: "40px", zIndex: 20 }}>
            <ThemeProvider theme={toolbarTheme}>
              <Toolbar
                variant="dense"
                sx={{ minHeight: "40px", backgroundColor: "#fff", zIndex: 20 }}
              >
                <Box sx={{ flexGrow: 1 }}>
                  <IconButton
                    edge="start"
                    aria-label="menu"
                    onClick={toggleLeftDrawer}
                  >
                    <MenuIcon />
                  </IconButton>
                </Box>
                {/* Add more toolbar content if needed */}
                <Box sx={{ display: { xs: "flex", md: "none" } }}>
                  <IconButton
                    size="large"
                    aria-label="show more"
                    aria-haspopup="true"
                    onClick={toggleRightDrawer}
                  >
                    <InfoIcon />
                  </IconButton>
                </Box>
              </Toolbar>
            </ThemeProvider>
          </AppBar>
        </>
      )}
      <>
        <LeftNavigationDrawer isMobile={isMobile} onClose={toggleLeftDrawer} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            pl: 1,
            pt: 3,
            pr: 1,
            marginTop: isMobile ? "100px" : "60px",
          }}
        >
          {props.children}
        </Box>
        <RightHelpDrawer isMobile={isMobile} />
      </>
    </>
  );
};

export default observer(NavigationParentLayout);
