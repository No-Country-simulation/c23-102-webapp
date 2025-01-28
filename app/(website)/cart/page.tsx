import Container from "@/components/global/Container";
import { Topbar } from "../_components/Topbar";
import { Footer } from "../_components/Footer";

const CartPage = () => {
	return (
		<>
			<Topbar></Topbar>
			<div className="escape-navbar escape-footer">
				<Container size="center-container-sm" className="flex flex-col items-center gap-8 pt-10">
					<h2>Carrito</h2>
				</Container>
			</div>
			<Footer></Footer>
		</>
	);
};

export default CartPage;
