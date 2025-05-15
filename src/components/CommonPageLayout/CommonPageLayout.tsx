import { observer } from 'mobx-react-lite';
import { Box, CssBaseline } from '@mui/material';
import MainToolbar from '@/components/CommonPageLayout/TopToolbar/TopToolbar';
import NavigationParentLayout from '@/components/CommonPageLayout/NavigationParentLayout/NavigationParentLayout';


const CommonPageLayout = observer(({ children }: { children: JSX.Element }) => {
  return (
    <>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <MainToolbar />
      <NavigationParentLayout>{children}</NavigationParentLayout>
    </Box>
    </>
  );
});

export default CommonPageLayout;
