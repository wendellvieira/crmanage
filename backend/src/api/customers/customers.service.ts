import { Injectable } from '@nestjs/common';

import Customer from 'src/repositories/customer';
import { getMongoRepository, getMongoManager } from 'typeorm';

import { CustomerEntity } from './costumers.entity';



@Injectable()
export class CustomersService {


    async findAll() {
        const repository = getMongoRepository(Customer)
        return await repository.find()
    }

    async create(data: CustomerEntity){
        const manager = getMongoManager()

        const customer = new Customer()
        Object.assign(customer,  data)

        await manager.save(customer)

        return customer
    }

    async delete(id: string): Promise<boolean>{
        try {  
            console.log( id )          
            const repository = getMongoRepository(Customer)
            const resp = await repository.findOneAndDelete({id})
            console.log(resp)
            return true
        } catch (error) {
            return false
        }
    }

}
