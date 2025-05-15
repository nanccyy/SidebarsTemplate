import { observer } from "mobx-react-lite";
import { useInstance } from "react-ioc";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import { Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer, { DrawerProps } from "@mui/material/Drawer";
import DragHandleSharpIcon from "@mui/icons-material/DragHandleSharp";
import UIConfigurationStore from "@/store/ui-configuration-store";
import useResize from "./useResize.hook";
import styles from "./RightHelpDrawer.module.css";
import InfoIcon from "@mui/icons-material/Info";

const DRAWER_WIDTH = 500;

const openedMixin = (theme: Theme, width): CSSObject => ({
  width,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(5)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(5)} + 1px)`,
  },
});
interface AppDrawerProps extends DrawerProps {
  isMobile?: boolean;
  open?: boolean;
  width?: number;
}
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "isMobile",
})<AppDrawerProps>(({ theme, open, isMobile, width }) => {
  return !isMobile
    ? {
        height: "100%",
        width: width,
        flexShrink: 0,
        boxSizing: "border-box",

        // border: 'none',
        boxShadow: "-4px 0px 10px rgba(0, 0, 0, 0.1)" /* Right-side shadow */,
        zIndex: 10,
        "& .MuiPaper-root": {
          height: "calc(100% - 40px)",
          marginTop: "40px",
        },
        ...(open && {
          ...openedMixin(theme, width),
          "& .MuiDrawer-paper": openedMixin(theme, width),
        }),
        ...(!open && {
          ...closedMixin(theme),
          "& .MuiDrawer-paper": closedMixin(theme),
        }),
      }
    : {};
});

const DrawerHeader = styled("div")(({ theme }) => ({
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 0),
}));

const RightHelpDrawer = observer(({ isMobile }: { isMobile: boolean }) => {
  const uiConfigStore = useInstance(UIConfigurationStore);

  const open = uiConfigStore.rightSidebar.open;

  const { width, enableResize, disableResize } = useResize({
    minWidth: DRAWER_WIDTH,
  });

  const closeDrawer = () => {
    uiConfigStore.toggleRightSidebar(false);
  };

  const openDrawer = () => {
    uiConfigStore.toggleRightSidebar(true);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        onMouseUp={disableResize}
        variant={isMobile ? "temporary" : "permanent"}
        anchor={isMobile ? "top" : "right"}
        isMobile={isMobile}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        PaperProps={{
          id: "right-drawer",
        }}
        open={open}
        width={width}
      >
        <Box>
          {open && !isMobile && (
            <IconButton
              className={styles.dragger}
              sx={{ position: "absolute", cursor: "col-resize", zIndex: 1 }}
              onMouseDown={enableResize}
              onMouseUp={disableResize}
            >
              <DragHandleSharpIcon />
            </IconButton>
          )}
        </Box>

        <Box display={"flex"} height={"100%"}>
          {open ? (
            <Box flexGrow={1}>
              <DrawerHeader>
                <Box>
                  <IconButton onClick={closeDrawer}>
                    <CloseTwoToneIcon />
                  </IconButton>
                </Box>
              </DrawerHeader>
              <Divider />

              {/* Add content */}
            </Box>
          ) : (
            <Box flexGrow={1}>
              <DrawerHeader>
                <Box>
                  <IconButton onClick={openDrawer}>
                    <InfoIcon />
                  </IconButton>
                </Box>
              </DrawerHeader>
              <Divider />
            </Box>
          )}
        </Box>
      </Drawer>
    </Box>
  );
});

export default RightHelpDrawer;
