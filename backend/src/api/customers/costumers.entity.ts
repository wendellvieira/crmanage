import { ObjectType, Field, InputType } from '@nestjs/graphql';

@ObjectType()
@InputType("CustomerInput")
export class CustomerEntity {

    @Field(() => String, { nullable: true, description: 'Id' })
    id?: string;


    @Field( () => String, { nullable: true, description: "Customer name"})
    nome?: string;

    @Field( () => String, { nullable: true, description: "Customer email"})
    email?: string;

    @Field( () => String, { nullable: true, description: "Customer phone"})
    telefone?: string;

    @Field( () => String, { nullable: true, description: "Customer cell phone"})
    celular?: string;

    @Field( () => String, { nullable: true, description: "Customer document"})
    cpf?: string;


    @Field( () => String, { nullable: true, description: "Customer bairro"})
    bairro?: string;

    @Field( () => String, { nullable: true, description: "Customer cep"})
    cep?: string;

    @Field( () => String, { nullable: true, description: "Customer complemento"})
    complemento?: string;

    @Field( () => String, { nullable: true, description: "Customer localidade"})
    localidade?: string;

    @Field( () => String, { nullable: true, description: "Customer logradouro"})
    logradouro?: string;

    @Field( () => String, { nullable: true, description: "Customer numero"})
    numero?: string;

    @Field( () => String, { nullable: true, description: "Customer referencia"})
    referencia?: string;

    @Field( () => String, { nullable: true, description: "Customer uf"})
    uf?: string;

}
