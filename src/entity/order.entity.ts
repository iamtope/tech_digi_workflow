import {
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  email!: string;

  @Column()
  withdrawAddress!: string;

  @Column("varchar", { length: 100 })
  transactionId!: string;

  @Column()
  rate!: number;

  @Column({ type: "decimal", precision: 10, scale: 2, default: 0 })
  usdAmount!: number;

  @Column({ type: "decimal", precision: 10, scale: 2, default: 0 })
  usdtAmount!: number;

  @Column({ type: "decimal", precision: 10, scale: 2, default: 0 })
  paymentAmount!: number;

  @Column()
  paymentStatus!: string;

  @Column()
  sentStatus!: string;

  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
  })
  public created_at!: Date;

  @UpdateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
    onUpdate: "CURRENT_TIMESTAMP(6)",
  })
  public updated_at!: Date;
}