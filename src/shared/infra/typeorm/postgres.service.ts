import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist';
import { Customer } from '@modules/customers/infra/typeorm/entities/customer';
import { Product } from '@modules/products/infra/typeorm/entities/product';
import { Order } from '@modules/orders/infra/typeorm/entities/order';
import { Category } from '@modules/categories/infra/typeorm/entities/category';
import { OrdersProductsAmounts } from '@modules/orders/infra/typeorm/entities/orders-products-amounts';

@Injectable()
export class PostgresConfigServiceService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
 
    const dbConfigString = this.configService.get('TYPEORM_URL');

    const dbConfig = JSON.parse(dbConfigString);

    const typeormUrl = dbConfig.typeorm;

    return {
      type: "postgres",
      url: typeormUrl,
      entities: [Customer, Product, Order, Category, OrdersProductsAmounts],
      synchronize: true,
      ssl: {
        rejectUnauthorized: false
      }
    };
  }
}