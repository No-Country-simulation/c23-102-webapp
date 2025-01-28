import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { CategoryType } from "@/types/RestaurantTypes";
import { ListFilter } from "lucide-react";

export function Dropdown({
	className,
	items,
	onSelectItem,
	selected,
}: {
	className?: string;
	items: Array<CategoryType>;
	onSelectItem: (item: CategoryType) => void;
	selected: CategoryType | null;
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
					{items.map((item) => (
						<DropdownMenuItem
							key={item.id}
							onClick={() => {
								onSelectItem(item);
							}}
							className={cn("font-thin", selected?.id === item.id ? "bg-white text-black" : "bg-black")}
						>
							{item.category}
						</DropdownMenuItem>
					))}
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}
