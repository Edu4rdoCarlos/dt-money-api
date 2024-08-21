import { Injectable } from "@nestjs/common";
import { IGetCategoryDTO } from "src/application/dto/category/get-category.dto";
import { Category } from "src/domain/category.entity";
import { CategoryRepository } from "src/infrastructure/repositories/category.repository";

@Injectable()
export class CategoryService {
  constructor(private categoryRepository: CategoryRepository) {}

  async getAllCategories(): Promise<Category[]> {
    return this.categoryRepository.findAll();
  }

  async getCategory(getCategoryDTO: IGetCategoryDTO): Promise<Category> {
    return this.categoryRepository.findById(getCategoryDTO);
  }
}
