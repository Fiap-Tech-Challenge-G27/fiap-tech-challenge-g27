import { Customer } from 'src/domain/customers/entities/customer.entity';
import { ProductEntity } from 'src/domain/products/entities/product.entity';

export enum OrderState {
  PendingPayment = 'PendingPayment',
  Received = 'Received',
  InPreparation = 'InPreparation',
  Ready = 'Ready',
  Finishe = 'Finished',
}
export class Order {
  customer: Customer;
  productAmounts: Array<[ProductEntity, number]>;
  state: OrderState;

  id: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(
    customer: Customer,
    productAmounts: Array<[ProductEntity, number]>,
    state: OrderState = OrderState.Received,
  ) {
    this.customer = customer;
    this.productAmounts = productAmounts;
    this.state = state;
  }
}
