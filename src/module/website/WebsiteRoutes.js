import React from "react";
import { Route, Routes } from "react-router-dom";

import { Homepage, RegisterPage } from "./pages";

const WebsiteRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<RegisterPage />} exact />
			<Route path="/registerpage" element={<RegisterPage />} />
		</Routes>
	);
};

export default WebsiteRoutes;
