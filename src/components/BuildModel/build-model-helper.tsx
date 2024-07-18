import { Category } from "@/types/detailesSpecification.types";
import { DetailSpecification } from "@/types/detailesSpecification.types";

interface ApiResponse {
    data: DetailSpecification[];
}
export const extractUniqueCategories = (jsonData: ApiResponse): Category[] => {
    const categoriesSet: Set<string> = new Set();
    const categoriesArray: Category[] = [];

    jsonData.data.forEach((item) => {
        const category1 = item.attributes.Category1;
        if (category1 && !categoriesSet.has(category1)) {
            categoriesSet.add(category1);
            categoriesArray.push({ name: category1, id: item.id });
        }
    });
    return categoriesArray;
};