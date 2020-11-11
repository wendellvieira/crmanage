import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PaymentMethodEntity } from './payment.entity';
import { PaymentService } from './payment.service';

@Resolver()
export class PaymentResolver {
    constructor(private readonly paymentService: PaymentService) {}

    @Query( () => [PaymentMethodEntity], { name: 'paymentMethods'})
    async findAll(){
        return await this.paymentService.findAll()
    }

    @Mutation( () => PaymentMethodEntity, { name: 'createPaymentMethod'})
    async create(
        @Args('data') data: PaymentMethodEntity
    ){
        return await this.paymentService.create( data )
    }

}
