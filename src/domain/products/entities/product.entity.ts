import { CategoryEntity } from 'src/domain/categories/entities/category.entity';

export class ProductEntity {
  id: string;
  name: string;
  description: string;
  category: CategoryEntity;
  price: number;
  quantity: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(
    name: string,
    description: string,
    price: number,
    quantity: number,
    status: string,
    category?: CategoryEntity,
  ) {
    this.name = name;
    this.description = description;
    this.category = category;
    this.price = price;
    this.quantity = quantity;
    this.status = status;
  }
}
