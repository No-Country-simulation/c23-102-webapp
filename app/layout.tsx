import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
	subsets: ['latin'],
	weight: ['400', '700'], // 400 for regular, 700 for bold
	display: 'swap',
  });
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
			<body className={plusJakartaSans.className}>{children}</body>
		</html>
	);
}
