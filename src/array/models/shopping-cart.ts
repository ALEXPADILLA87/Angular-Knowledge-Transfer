import { Item } from './item';
import { LineItem } from './line-item';

export interface ShoppingCart {
  lineItems: LineItem[];
}
