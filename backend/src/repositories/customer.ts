import { Column, Entity, ObjectIdColumn, ObjectID } from "typeorm";

@Entity("custumers")
export default class Customer {

    @ObjectIdColumn()
    id?: ObjectID;

    @Column()
    nome?: string;

    @Column()
    email?: string;

    @Column()
    telefone?: string;

    @Column()
    celular?: string;

    @Column()
    cpf?: string;


    @Column()
    bairro?: string;

    @Column()
    cep?: string;

    @Column()
    complemento?: string;

    @Column()
    localidade?: string;

    @Column()
    logradouro?: string;

    @Column()
    numero?: string;

    @Column()
    referencia?: string;

    @Column()
    uf?: string;
}
