"use client";

import { Logo } from "@/components/global/Logo";
import { useUser } from "@/context/UserContext";

const PaymentsPage = () => {
	const { user } = useUser();

	if (user)
		return (
			<div className="min-h-dvh bg-black text-white flex items-center justify-around flex-col">
				<div className="flex items-center flex-col justify-center text-center gap-8">
					<h1 className="text-lg"> Muchas gracias por su participacion! </h1>
					<Logo width={150}></Logo>
				</div>
			</div>
		);
};

export default PaymentsPage;
