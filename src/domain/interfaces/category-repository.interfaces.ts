import { IGetCategoryDTO } from "src/application/dto/category/get-category.dto";
import { Category } from "../category.entity";

export interface ICategoryRepository {
  findAll(): Promise<Category[]>;
  findById(data: IGetCategoryDTO): Promise<Category>;
}
