import { provider } from "react-ioc";
import "./App.css";
import CommonPageLayout from "./components/CommonPageLayout/CommonPageLayout";
import UIConfigurationStore from "./store/ui-configuration-store";
import { HomePage } from "./pages/HomePage";


const App = provider(UIConfigurationStore)(() => {
  return (
    <>
      <CommonPageLayout>
        <HomePage />
      </CommonPageLayout>
    </>
  );
});

export default App;
