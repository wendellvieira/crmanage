import { Document } from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export default class Customer {

    @Prop()
    nome?: string;

    @Prop()
    email?: string;

    @Prop()
    telefone?: string;

    @Prop()
    celular?: string;

    @Prop()
    cpf?: string;


    @Prop()
    bairro?: string;

    @Prop()
    cep?: string;

    @Prop()
    complemento?: string;

    @Prop()
    localidade?: string;

    @Prop()
    logradouro?: string;

    @Prop()
    numero?: string;

    @Prop()
    referencia?: string;

    @Prop()
    uf?: string;
}

export type CustomerDocument = Customer & Document

export const CustomerSchema = SchemaFactory.createForClass(Customer)