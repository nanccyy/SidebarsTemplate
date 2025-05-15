import { makeAutoObservable } from "mobx";

class UIConfigurationStore {
  leftSidebar = {
    open: false,
  };
  rightSidebar: {
    open: boolean;
  } = {
    open: false,
  };

  get leftSidebarWidth() {
    return this.leftSidebar.open ? 240 : 64;
  }

  constructor() {
    makeAutoObservable(this);
  }

  toggleLeftSidebar(open = !this.leftSidebar.open) {
    this.leftSidebar.open = open;
    this.leftSidebar = { ...this.leftSidebar };
  }

  toggleRightSidebar(open = !this.rightSidebar.open) {
    this.rightSidebar.open = open;
  }
}

export default UIConfigurationStore;
