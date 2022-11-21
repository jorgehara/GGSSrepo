// import React, { useState } from "react";
// import "./SideNavBar.css";

// const SideNavBar = () => {
// 	const [isExpanded, setExpendState] = useState(false);
// 	const menuItems = [
		
// 		{
// 			text: "Ficha Empleados",
// 			icon: "icons/user.svg",
// 		}
// 	];
// 	return (
// 		<div
// 			className={
// 				isExpanded
// 					? "side-nav-container"
// 					: "side-nav-container side-nav-container-NX"
// 			}
// 		>
// 			<div className="nav-upper">
// 				<div className="nav-heading">
// 					{isExpanded && (
// 						<div className="nav-brand">
// 						</div>
// 					)}
// 					<button
// 						className={
// 							isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
// 						}
// 						onClick={() => setExpendState(!isExpanded)}
// 					>
// 						<span></span>
// 						<span></span>
// 						<span></span>
// 					</button>
// 				</div>
// 				<div className="nav-menu">
// 					{menuItems.map(({ text, icon }) => (
// 						<a
// 							className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
// 							href="/"
// 						>
// 							<img className="menu-item-icon" src={icon} alt="" srcset="" />
// 							{isExpanded && <p>{text}</p>}
// 						</a>
// 					))}
// 				</div>
// 			</div>
// 			</div>
// 			);
// 		};
// export default SideNavBar;