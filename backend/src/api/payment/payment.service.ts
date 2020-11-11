import { Injectable } from '@nestjs/common';
import PaymentMethods from 'src/repositories/payment_methods';
import { getMongoManager, getMongoRepository } from 'typeorm';
import { PaymentMethodEntity } from './payment.entity';

@Injectable()
export class PaymentService {

    async findAll() {
        const repo = getMongoRepository( PaymentMethods )
        return await repo.find()
    }

    async create( data: PaymentMethodEntity ) {
        const manage = getMongoManager()

        const payment_method = new PaymentMethods
        Object.assign(payment_method, data)

        await manage.save( payment_method )

        return payment_method
    }
}
