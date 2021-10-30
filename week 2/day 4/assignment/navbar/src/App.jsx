
import { ToolBar } from "./components/ToolBar";
import { SiteName } from "./components/SiteName";
import { DrawerItem } from "./components/DrawerItem";
import ToolbarMedia from "./components/ToolbarMedia";


function App() {
  return (
    <>
      <ToolbarMedia></ToolbarMedia>
      <ToolBar>
        <SiteName>
          <DrawerItem label="Masai"></DrawerItem>
        </SiteName>
        <SiteName>
          <DrawerItem label="About Us"></DrawerItem>
          <DrawerItem label="Prices"></DrawerItem>
          <DrawerItem label="Others"></DrawerItem>
        </SiteName>
      </ToolBar>
    </>
  );
}

export default App;
