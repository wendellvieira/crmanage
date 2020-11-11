import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentResolver } from './payment.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import PaymentMethods from 'src/repositories/payment_methods';

@Module({
    imports: [
        TypeOrmModule.forFeature([ PaymentMethods ])
    ],
    providers: [PaymentResolver, PaymentService]
})
export class PaymentModule {}
