import React from "react";

const AuthenticationLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="min-h-dvh">
			<main className="min-h-dvh">{children}</main>
		</div>
	);
};

export default AuthenticationLayout;
