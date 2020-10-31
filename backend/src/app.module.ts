import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerModule } from './customer/customer.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mongodb',
            url: 'mongodb://',
            entities: [],
            synchronize: true,
            autoLoadEntities: true,
            useUnifiedTopology: true
        }),
        GraphQLModule.forRoot({
            autoSchemaFile: true
        }),
        CustomerModule
    ],
})
export class AppModule {}
