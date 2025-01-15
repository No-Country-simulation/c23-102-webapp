import React from "react";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="h-dvh">
			<main className="h-full font-light tracking-normal">{children}</main>
		</div>
	);
};

export default LandingLayout;
