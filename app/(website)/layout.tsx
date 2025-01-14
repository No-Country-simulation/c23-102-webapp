import React from "react";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="h-dvh">
			<main className="h-full">{children}</main>
		</div>
	);
};

export default LandingLayout;
