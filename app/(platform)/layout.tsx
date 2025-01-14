import React from "react";

const PlatformContentLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="h-dvh">
			{/* Dashboard Sidebar o Navbar iran aca, las paginas seran renderizadas dentro */}
			<main className="h-full">{children}</main>
		</div>
	);
};

export default PlatformContentLayout;
