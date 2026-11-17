import type { MigrationInterface, QueryRunner } from "typeorm";

export class Init1794925908867 implements MigrationInterface {
    name = 'Init1794925908867'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "products" ("product_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "product_name" character varying(100) NOT NULL, "product_price" bigint NOT NULL, "product_image" bytea, "product_description" character varying(100) NOT NULL, CONSTRAINT "PK_a8940a4bf3b90bd7ac15c8f4dd9" PRIMARY KEY ("product_id")); COMMENT ON COLUMN "products"."product_id" IS 'product id'; COMMENT ON COLUMN "products"."product_name" IS 'nombre'; COMMENT ON COLUMN "products"."product_price" IS 'precio'; COMMENT ON COLUMN "products"."product_image" IS 'imagen'; COMMENT ON COLUMN "products"."product_description" IS 'descripcion'`);
        await queryRunner.query(`COMMENT ON TABLE "products" IS 'Tabla de productos'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON TABLE "products" IS NULL`);
        await queryRunner.query(`DROP TABLE "products"`);
    }

}
