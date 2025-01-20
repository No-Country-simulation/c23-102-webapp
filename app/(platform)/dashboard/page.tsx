"use client";
import { useUser } from "@/context/UserContext";

const DashboardPage = () => {
	const { user } = useUser();
	return (
		<div className="h-full flex items-center justify-around flex-col">
			<div className="flex items-center justify-around flex-col">
				<h1 className="text-3xl">TakeAway Dashboard</h1>
				{user && <h2 className="text-xl">Welcome, {user.username}</h2>}
			</div>
		</div>
	);
};

export default DashboardPage;
