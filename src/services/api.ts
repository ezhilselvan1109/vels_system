import { ProductsResponse, ProductResponse, CategoriesResponse, BrandsResponse, ProductFilters } from "../types/products";

const API_BASE_URL = 'http://localhost:8080/api';

// Generic API response handler
const handleResponse = async (response: Response) => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Network error' }));
    throw new Error(error.message || `HTTP error! status: ${response.status}`);
  }
  return response.json();
};

// Generic API request function
const apiRequest = async (endpoint: string, options: RequestInit = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  const config: RequestInit = {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  const response = await fetch(url, config);
  return handleResponse(response);
};

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

    return apiRequest(`/products/filter?${params}`);
  },

  // Get single product by ID
  getProductById: async (id: string): Promise<ProductResponse> => {
    return apiRequest(`/products/${id}`);
  },

  // Get categories hierarchy
  getCategories: async (): Promise<CategoriesResponse> => {
    return apiRequest('/categories/hierarchy');
  },

  // Get all brands
  getBrands: async (): Promise<BrandsResponse> => {
    return apiRequest('/brands');
  }
};

// Export the generic API request function for use in other services
export { apiRequest };