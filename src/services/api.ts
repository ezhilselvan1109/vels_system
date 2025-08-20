import { ProductsResponse, ProductResponse, CategoriesResponse, BrandsResponse, ProductFilters } from "../types/products";

const API_BASE_URL = 'http://localhost:8080/api';

export const productApi = {
  // Filter products with pagination and sorting
  filterProducts: async (filters: ProductFilters): Promise<ProductsResponse> => {
    const params = new URLSearchParams();
    
    if (filters.brandId) params.append('brandId', filters.brandId);
    if (filters.categoryId) params.append('categoryId', filters.categoryId);
    if (filters.keyword) params.append('keyword', filters.keyword);
    if (filters.status) params.append('status', filters.status);
    if (filters.page !== undefined) params.append('page', filters.page.toString());
    if (filters.size !== undefined) params.append('size', filters.size.toString());
    if (filters.sortBy) params.append('sortBy', filters.sortBy);
    if (filters.direction) params.append('direction', filters.direction);

    const response = await fetch(`${API_BASE_URL}/products/filter?${params}`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    return response.json();
  },

  // Get single product by ID
  getProductById: async (id: string): Promise<ProductResponse> => {
    const response = await fetch(`${API_BASE_URL}/products/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch product');
    }
    return response.json();
  },

  // Get categories hierarchy
  getCategories: async (): Promise<CategoriesResponse> => {
    const response = await fetch(`${API_BASE_URL}/categories/hierarchy`);
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }
    return response.json();
  },

  // Get all brands
  getBrands: async (): Promise<BrandsResponse> => {
    const response = await fetch(`${API_BASE_URL}/brands`);
    if (!response.ok) {
      throw new Error('Failed to fetch brands');
    }
    return response.json();
  }
};