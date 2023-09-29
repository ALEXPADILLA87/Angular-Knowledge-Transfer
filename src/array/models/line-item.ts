import { Item } from './item';

export interface LineItem {
  unitPrice: number;
  quantity: number;
  item: Item;
}
