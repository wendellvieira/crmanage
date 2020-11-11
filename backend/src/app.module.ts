import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConnection, GqlSettings } from "./config"
import { CustomersModule } from './api/customers/customers.module';
import { PaymentModule } from './api/payment/payment.module';

@Module({
    imports: [
        TypeOrmModule.forRoot( TypeOrmConnection ),
        GraphQLModule.forRoot( GqlSettings ),
        CustomersModule,
        PaymentModule
    ],
})
export class AppModule {}
