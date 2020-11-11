import { ObjectType, Field, InputType } from '@nestjs/graphql';

@ObjectType()
@InputType("PaymentMethodInput")
export class PaymentMethodEntity {

    @Field(() => String, { nullable: true, description: 'Id' })
    id?: string;

    @Field(() => String, { description: 'Payment Method Title' })
    title: string;

    @Field(() => Number, { description: 'Payment Method type ( 0 => "cash" or 1 => "installment" )' })
    type: number;

    @Field(() => Number, { description: 'Payment Method Rate' })
    rate: number;
}
