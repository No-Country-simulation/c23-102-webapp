import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
	title: "Take Away",
	description: "Delicous food at your doorstep",
	openGraph: {
		images: "https://imgur.com/eFuA5de",
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
			<body className={plusJakartaSans.className}>{children}</body>
		</html>
	);
}
