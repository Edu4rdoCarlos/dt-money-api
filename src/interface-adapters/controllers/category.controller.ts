import { Body, Controller, Get, Post } from "@nestjs/common";
import { Category } from "src/domain/category.entity";
import { CategoryService } from "../service/category.service";
import { IGetCategoryDTO } from "src/application/dto/category/get-category.dto";

@Controller("api/categories")
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async findAll(): Promise<Category[]> {
    console.log("foi");
    return this.categoryService.getAllCategories();
  }

  @Get()
  async findById(@Body() getCategoryDTO: IGetCategoryDTO): Promise<Category> {
    return this.categoryService.getCategory(getCategoryDTO);
  }
}
