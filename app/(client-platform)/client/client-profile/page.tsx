"use client";

import { useUser } from "@/context/UserContext";
import { useEffect, useState } from "react";
import ClientProfileForm from "../../_components/forms/ClientProfileForm";
import { ClientProfileDetailsType } from "@/types/ClientTypes";
import { clientProfileByEmail } from "@/actions/clientActions";

const ClientEditProfilePage = () => {
	const { user } = useUser();
	const [clientDetails, setClientDetails] = useState<ClientProfileDetailsType | null>(null);

	useEffect(() => {
		if (user?.email) {
			(async () => {
				try {
					const details = await clientProfileByEmail(user.email);
					setClientDetails(details);
				} catch (error) {
					console.error("Error fetching restaurant profile:", error);
				}
			})();
		}
	}, [user?.email]);

	if (!clientDetails) {
		return <p>Error. Intenta neuvamente.</p>;
	}

	if (user)
		return (
			<div className="bg-black text-white flex items-center justify-center flex-col pt-12">
				<div className="flex items-center justify-around flex-col w-[93%] m-auto gap-10">
					<h4 className="form-title">Edita tu Perfil</h4>
					<ClientProfileForm initialData={clientDetails}></ClientProfileForm>
				</div>
			</div>
		);
};

export default ClientEditProfilePage;
