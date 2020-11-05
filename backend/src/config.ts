
import { GqlModuleOptions } from "@nestjs/graphql";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const TypeOrmConnection: TypeOrmModuleOptions = {
    type: 'mongodb',
    host: "mongo",
    port: 27017,
    database: 'crmanage',
    entities: [],
    synchronize: true,
    autoLoadEntities: true,
    useUnifiedTopology: true
}

export const GqlSettings: GqlModuleOptions = {
    autoSchemaFile: true,
    playground: true
}

