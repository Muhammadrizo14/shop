import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { PrismaModule } from './prisma/prisma.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [ProductsModule, PrismaModule, CategoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
