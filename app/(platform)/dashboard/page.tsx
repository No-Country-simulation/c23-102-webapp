"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@/context/UserContext";

const DashboardPage = () => {
	const { user, logoutUser } = useUser();
	return (
		<div className="min-h-dvh bg-black text-white flex items-center justify-around flex-col">
			<div className="flex items-center justify-around flex-col">
				<h1 className="text-3xl">TakeAway Dashboard</h1>
				{user && <h2 className="text-xl">Welcome, {user.username}</h2>}
				<Button
					onClick={() => {
						logoutUser();
					}}
				>
					Logout
				</Button>
			</div>
		</div>
	);
};

export default DashboardPage;
