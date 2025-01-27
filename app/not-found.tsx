import { Topbar } from "./(website)/_components/Topbar";
import Container from "@/components/global/Container";
import Image from "next/image";
import errorImg from "@/public/images/404.png";

export default function NotFound() {
	return (
		<div className="w-full bg-yellow-500">
			<Topbar></Topbar>
			<div className="min-h-dvh escape-navbar flex flex-col items-center justify-center">
				<Container size="center-container" className="flex flex-col items-center justify-center gap-4 lg:gap-8">
					<Image
						src={errorImg}
						alt="Not Found Page"
						className="w-[70%] m-auto max-w-[700px]"
						style={{
							objectFit: "cover",
						}}
					></Image>
					<div className="flex flex-col gap-1 items-center text-black font-medium text-center text-sm lg:text-lg">
						<span>¡Vaya!</span>
						<span>Tu pedido se ha esfumado en la cocina digital.</span>
						<span> ¡Prueba a hornear de nuevo!</span>
					</div>
				</Container>
			</div>
		</div>
	);
}
