import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersResolver } from './customers.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import Customer from 'src/repositories/customer';

@Module({
    imports: [
        TypeOrmModule.forFeature([ Customer ])
    ],
    providers: [CustomersResolver, CustomersService]
})
export class CustomersModule {}
