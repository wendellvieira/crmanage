import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { CustomersModule } from './customers/customers.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mongodb',
            url: 'mongodb://mongo:27017/crmanage',
            entities: [],
            synchronize: true,
            autoLoadEntities: true,
            useUnifiedTopology: true
        }),
        GraphQLModule.forRoot({
            autoSchemaFile: true,
            playground: true
        }),
        // CustomersModule,
    ],
})
export class AppModule {}
