import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { PrismaModule } from './prisma/prisma.module';
import { CategoryModule } from './category/category.module';
import { UploadModule } from './upload/upload.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ProductsModule, PrismaModule, CategoryModule, UploadModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
