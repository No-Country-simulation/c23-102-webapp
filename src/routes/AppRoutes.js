import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import WebsiteRoutes from "../module/website/WebsiteRoutes";

const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<WebsiteRoutes />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
