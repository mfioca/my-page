import React from "react";
import ReactDOM from "react-dom";
import Sidebar from "./sidebar";
import MaterialTitlePanel from "./material_title_panel";
import SidebarContent from "./sidebar_content";

const styles = {
  contentHeaderMenuLink: {
    textDecoration: "none",
    color: "white",
    padding: 8
  },
  contentHeaderSubLink: {
	  color: "white",
	  padding: 16,
	  fontSize: ".5em"
  },
  content: {
    padding: "16px",
  }
};

class SbarMenu extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			docked: false,
			open: false,
			transitions: true
		};
		
		this.onOpen = this.onOpen.bind(this);
		this.menuButtonClick = this.menuButtonClick.bind(this);
	}
	
	onOpen(open) {
		this.setState({open});
	}
	
	menuButtonClick(ev) {
		ev.preventDefault();
		this.onOpen(!this.state.open);
	}
	
	render() {
		const sidebar = <SidebarContent />;
		const contentHeader = (
		  <span>
		  {!this.state.docked && (
		    <a
			  onClick={this.menuButtonClick}
			  href=""
			  style={styles.contentHeaderMenuLink}
			>
			=
			</a>
		  )}
		  <span>Sidebar</span>
		  </span>
		);
		
		const sidebarProps = {
			sidebar,
			docked: this.state.docked,
			SidebarClassName: "custom-sidebar-class",
			contentId: "custom-sidebar-content-id",
			open: this.state.open,
			transitions: this.state.transitions,
			onOpen: this.onOpen
		};
		
		return (
		  <Sidebar {...sidebarProps}>
		  <MaterialTitlePanel title={contentHeader}>
		  </MaterialTitlePanel>
		  </Sidebar>
		);
	}
}

export default SbarMenu;
