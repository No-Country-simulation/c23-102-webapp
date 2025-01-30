import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { ListFilter } from "lucide-react";

export function Dropdown({
	className,
	items,
	onSelectItem,
	selected,
}: {
	className?: string;
	items: Array<string>;
	onSelectItem: (item: string) => void;
	selected: string | null;
}) {
	return (
		<div className={className}>
			<DropdownMenu>
				<DropdownMenuTrigger className="border rounded-md mt-1">
					<ListFilter className="p-1" size={"30px"}></ListFilter>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="bg-black text-white ml-4">
					<DropdownMenuLabel className="font-medium">Tipo de Negocio</DropdownMenuLabel>
					<DropdownMenuSeparator />
					{items.map((item, index) => (
						<DropdownMenuItem
							key={index}
							onClick={() => {
								onSelectItem(item);
							}}
							className={cn("font-thin", selected === item ? "bg-white text-black" : "bg-black")}
						>
							{item}
						</DropdownMenuItem>
					))}
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}
