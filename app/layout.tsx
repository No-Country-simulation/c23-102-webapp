import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
	title: "Take Away",
	description: "Delicous food at your doorstep",
	openGraph: {
		images: "https://images.pexels.com/photos/6671778/pexels-photo-6671778.jpeg",
	},
};

const plusJakartaSans = Plus_Jakarta_Sans({
	subsets: ["latin"],
	weight: ["400", "700"], // 400 for regular, 700 for bold
	display: "swap",
	preload: false,
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${plusJakartaSans.className} + bg-black text-white`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
