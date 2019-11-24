import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    user_id: number;

    @Column({ length: 10 })
    phone: string;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    address: string;

    @Column({ type: 'date' })
    birthday: Date;
}
