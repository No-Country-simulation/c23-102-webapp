"use client";

import LogoutButton from "@/components/global/LogoutButton";
import { useUser } from "@/context/UserContext";

const DashboardPage = () => {
	const { user } = useUser();

	if (user)
		return (
			<div className="min-h-dvh bg-black text-white flex items-center justify-around flex-col">
				<div className="flex items-center justify-around flex-col">
					<h1 className="text-3xl">TakeAway Dashboard</h1>
					<h2 className="text-xl">Welcome, {user.email}</h2>
					<LogoutButton />
				</div>
			</div>
		);
};

export default DashboardPage;
