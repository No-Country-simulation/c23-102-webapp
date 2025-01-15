import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { mocked_categories } from "@/constants/mock/categories";
import { ListFilter } from "lucide-react";

export function Dropdown({ className }: { className?: string }) {
	return (
		<div className={className}>
			<DropdownMenu>
				<DropdownMenuTrigger className="border rounded-md mt-1">
					<ListFilter className="p-1" size={"30px"}></ListFilter>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuLabel>Categorias</DropdownMenuLabel>
					<DropdownMenuSeparator />
					{mocked_categories.map((category) => (
						<DropdownMenuItem key={category.id}>{category.name}</DropdownMenuItem>
					))}
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}
