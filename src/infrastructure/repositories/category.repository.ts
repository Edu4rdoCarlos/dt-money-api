import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Category } from "src/domain/category.entity";
import { IGetCategoryDTO } from "src/application/dto/category/get-category.dto";
import { ICategoryRepository } from "src/domain/interfaces/category-repository.interfaces";

@Injectable()
export class CategoryRepository implements ICategoryRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Category[]> {
    const categories = await this.prisma.category.findMany();

    return categories.map(
      (category) => new Category(category.id, category.name)
    );
  }

  async findById(data: IGetCategoryDTO): Promise<Category> {
    const category = await this.prisma.category.findUnique({
      where: {
        id: data.id,
      },
    });

    return new Category(category.id, category.name);
  }
}
