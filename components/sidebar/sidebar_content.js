import React from "react";
import PropTypes from "prop-types";
import MaterialTitlePanel from "./material_title_panel";

const styles = {
  sidebar: {
    width: 256,
    height: "100%"
  },
  sidebarLink: {
    display: "block",
    padding: "16px 0px",
    color: "#757575",
    textDecoration: "none"
  },
  divider: {
    margin: "8px 0",
    height: 1,
    backgroundColor: "#757575"
  },
  content: {
    padding: "16px",
    height: "100%",
    backgroundColor: "white"
  }
};

const SidebarContent = props => {
	const style = props.style 
	  ? {...styles.sidebar, ...props.style}
	  : styles.sidebar;
	
	return (
	  <MaterialTitlePanel title="Menu" style={style}>
	    <div style={styles.content}>
		  <a href="index.html" style={styles.sidebarLink}>
		    Home
		  </a>
		  <div style={styles.divider} />
		  <a href="https://www.google.com" style = {styles.sidebarLink} target="_blank" rel="noopener noreferrer">
		    Google.com 
		  </a>
		  <a href="https://www.facebook.com" style = {styles.sidebarLink} target="_blank" rel="noopener noreferrer">
		    Facebook.com
		  </a>
		  <a href="https://simplearmory.com/#/us/dragonmaw/franknmullet" style = {styles.sidebarLink} target ="_blank" rel="noopener noreferrer">
		    Simple Armory - Franknmullet
		  </a>
		  <a href="https://store.steampowered.com/" style = {styles.sidebarLink} target ="_blank" rel="noopener noreferrer">
		    Steam
		  </a>
		</div>
	  </MaterialTitlePanel>
	);
};

SidebarContent.propTypes = {
	style: PropTypes.object
};

export default SidebarContent;