import { string } from "zod";

export type cardWithIconProps = {
	icon: React.ReactNode;
	title: string;
	subtitle: string;
	route: string;
};

export type scheduleTableRowProps = {
	day: string
	opens: string
	closes: string
}
