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
  export class Payment {
    @PrimaryGeneratedColumn()
    id!: number;
  
    @Column()
    email!: string;
  
    @Column()
    currencyName!: string;

    @Column({ type: "decimal", precision: 10, scale: 2, default: 0 })
    amount!: number;

    @Column()
    paidCurrency!: string;

    @Column({ type: "decimal", precision: 10, scale: 2, default: 0 })
    paidAmount!: number;
  
    @Column({
        type: "varchar",
        default:  "pending",
      })
    paymentStatus!: string;
  
    @Column("varchar", { length: 100 })
    transactionId!: string;

    @Column("varchar", { length: 100 })
    orderId!: string;
  
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