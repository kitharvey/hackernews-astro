import {
	ItemType as Item,
	ListType as List,
	CategoryType as Category,
} from "./types";

declare global {
	type ItemType = Item;
	type ListType = List;
	type CategoryType = Category;
}
