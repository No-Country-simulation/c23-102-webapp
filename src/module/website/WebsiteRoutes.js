import React from "react";
import { Route, Routes } from "react-router-dom";

import { Homepage } from "./pages";

const WebsiteRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Homepage />} exact />
		</Routes>
	);
};

export default WebsiteRoutes;
