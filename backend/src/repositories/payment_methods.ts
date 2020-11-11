import { Column, Entity, ObjectIdColumn, ObjectID } from "typeorm";

@Entity("payment_methods")
export default class PaymentMethods {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    title: string;

    @Column()
    type: number;

    @Column()
    rate: number;

}
