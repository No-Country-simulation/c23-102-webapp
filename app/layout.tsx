import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Container from "@/components/global/Container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Take Away",
	description: "Delicous food at your doorstep",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<Container className="py-6">{children}</Container>
			</body>
		</html>
	);
}
