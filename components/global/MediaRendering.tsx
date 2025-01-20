"use client";

import useMediaQuery from "@/lib/hooks/use-media-queries";

const MediaRendering = ({
	minWidth,
	maxWidth,
	children,
}: {
	minWidth: string | null;
	maxWidth: string | null;
	children: React.ReactNode;
}) => {
	const minDeviceSize = useMediaQuery(`(min-width: ${minWidth}px)`);
	const maxDeviceSize = useMediaQuery(`(max-width: ${maxWidth}px)`);

	return <>{(maxDeviceSize || minDeviceSize) && children}</>;
};

export default MediaRendering;
