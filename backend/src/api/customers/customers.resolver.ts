import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CustomerEntity } from './costumers.entity';
import { CustomersService } from './customers.service';

@Resolver( () => CustomerEntity )
export class CustomersResolver {
    constructor(
        private readonly customersService: CustomersService
    ) {}

    @Query(() => [CustomerEntity], { name: 'customers' })
    async findAll(){
        return await this.customersService.findAll()
    }

    @Mutation(() => CustomerEntity, { name: "createCustomer"})
    async createCustomer( @Args('data') data: CustomerEntity ){
        return await this.customersService.create(data)
    }

    @Mutation(() => Boolean, { name: 'deleteCustomer'})
    async deleteCustomer( @Args('id') id: string ){
        return await this.customersService.delete(id)
    }

}
