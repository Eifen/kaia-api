import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ comment: "Tabla de productos" })
export class Products {
    @PrimaryGeneratedColumn('uuid', { comment: 'product id' })
    private readonly product_id!: string;
    @Column({ type: 'varchar', length: 100, comment: 'nombre' })
    product_name!: string;
    @Column({ type: 'bigint', comment: 'precio' })
    product_price!: bigint
    @Column({ type: 'bytea', nullable: true, comment: 'imagen' })
    product_image!: Buffer
    @Column({ type: 'varchar', length: 100, comment: 'descripcion' })
    product_description!: string;
}