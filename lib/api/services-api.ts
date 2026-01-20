import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_BASE_URL = "https://asapdb.vercel.app";

// API Response Types
export interface ServiceAPI {
  id: number;
  name: string;
  description: string;
  image: string;
  key_features: string;
  benefits: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface ServiceListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: ServiceAPI[];
}

export interface ChallengeAPI {
  id: number;
  title: string;
  created_at: string;
}

export interface SolutionAPI {
  id: number;
  title: string;
  created_at: string;
}

export interface IndustryAPI {
  id: number;
  name: string;
  description: string;
  image: string;
  common_challenges: ChallengeAPI[];
  solutions_list: SolutionAPI[];
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface IndustryListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IndustryAPI[];
}

export interface ProjectAPI {
  id: number;
  name: string;
  banner_image: string;
  description: string;
  subtitle1: string;
  subtitle1_description: string;
  subtitle2: string;
  subtitle2_description: string;
  subtitle3: string;
  subtitle3_description: string;
  subtitle4: string;
  subtitle4_description: string;
  subtitle5: string;
  subtitle5_description: string;
  subtitle6: string;
  subtitle6_description: string;
  call_to_action: string;
  supporting_image1: string;
  supporting_image2: string;
  created_at: string;
  updated_at: string;
}

export interface ProjectListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: ProjectAPI[];
}

// Transformed Types
export interface Service {
  id: number;
  name: string;
  description: string;
  image: string;
  keyFeatures: string;
  benefits: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Challenge {
  id: number;
  title: string;
  createdAt: string;
}

export interface Solution {
  id: number;
  title: string;
  createdAt: string;
}

export interface Industry {
  id: number;
  name: string;
  description: string;
  image: string;
  commonChallenges: Challenge[];
  solutionsList: Solution[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Project {
  id: number;
  name: string;
  bannerImage: string;
  description: string;
  subtitle1: string;
  subtitle1Description: string;
  subtitle2: string;
  subtitle2Description: string;
  subtitle3: string;
  subtitle3Description: string;
  subtitle4: string;
  subtitle4Description: string;
  subtitle5: string;
  subtitle5Description: string;
  subtitle6: string;
  subtitle6Description: string;
  callToAction: string;
  supportingImage1: string;
  supportingImage2: string;
  createdAt: string;
  updatedAt: string;
}

// Helper functions
function normalizeApiImagePath(image: string): string {
  if (!image) return "";

  // If the API already returns a full URL, use it as-is
  if (image.startsWith("http://") || image.startsWith("https://")) {
    return image;
  }

  // Ensure we have a leading slash before joining with the API base URL host
  const normalizedPath = image.startsWith("/") ? image : `/${image}`;
  return `${API_BASE_URL}${normalizedPath}`;
}

function transformService(apiService: ServiceAPI): Service {
  return {
    id: apiService.id,
    name: apiService.name,
    description: apiService.description,
    image: normalizeApiImagePath(apiService.image),
    keyFeatures: apiService.key_features,
    benefits: apiService.benefits,
    isActive: apiService.is_active,
    createdAt: apiService.created_at,
    updatedAt: apiService.updated_at,
  };
}

function transformIndustry(apiIndustry: IndustryAPI): Industry {
  return {
    id: apiIndustry.id,
    name: apiIndustry.name,
    description: apiIndustry.description,
    image: normalizeApiImagePath(apiIndustry.image),
    commonChallenges: apiIndustry.common_challenges.map((challenge) => ({
      id: challenge.id,
      title: challenge.title,
      createdAt: challenge.created_at,
    })),
    solutionsList: apiIndustry.solutions_list.map((solution) => ({
      id: solution.id,
      title: solution.title,
      createdAt: solution.created_at,
    })),
    isActive: apiIndustry.is_active,
    createdAt: apiIndustry.created_at,
    updatedAt: apiIndustry.updated_at,
  };
}

function transformProject(apiProject: ProjectAPI): Project {
  return {
    id: apiProject.id,
    name: apiProject.name,
    bannerImage: normalizeApiImagePath(apiProject.banner_image),
    description: apiProject.description,
    subtitle1: apiProject.subtitle1,
    subtitle1Description: apiProject.subtitle1_description,
    subtitle2: apiProject.subtitle2,
    subtitle2Description: apiProject.subtitle2_description,
    subtitle3: apiProject.subtitle3,
    subtitle3Description: apiProject.subtitle3_description,
    subtitle4: apiProject.subtitle4,
    subtitle4Description: apiProject.subtitle4_description,
    subtitle5: apiProject.subtitle5,
    subtitle5Description: apiProject.subtitle5_description,
    subtitle6: apiProject.subtitle6,
    subtitle6Description: apiProject.subtitle6_description,
    callToAction: apiProject.call_to_action,
    supportingImage1: normalizeApiImagePath(apiProject.supporting_image1),
    supportingImage2: normalizeApiImagePath(apiProject.supporting_image2),
    createdAt: apiProject.created_at,
    updatedAt: apiProject.updated_at,
  };
}

// RTK Query API
export const servicesApi = createApi({
  reducerPath: "servicesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  tagTypes: ["Service", "Industry", "Project"],
  endpoints: (builder) => ({
    getServices: builder.query<
      {
        services: Service[];
        total: number;
        hasNext: boolean;
        hasPrevious: boolean;
      },
      { page?: number }
    >({
      query: ({ page = 1 }) => `/api/services/?page=${page}`,
      transformResponse: (response: ServiceListResponse) => {
        const services = response.results.map(transformService);
        return {
          services,
          total: response.count,
          hasNext: !!response.next,
          hasPrevious: !!response.previous,
        };
      },
      providesTags: ["Service"],
    }),

    getIndustries: builder.query<
      {
        industries: Industry[];
        total: number;
        hasNext: boolean;
        hasPrevious: boolean;
      },
      { page?: number }
    >({
      query: ({ page = 1 }) => `/api/services/industries/?page=${page}`,
      transformResponse: (response: IndustryListResponse) => {
        const industries = response.results.map(transformIndustry);
        return {
          industries,
          total: response.count,
          hasNext: !!response.next,
          hasPrevious: !!response.previous,
        };
      },
      providesTags: ["Industry"],
    }),

    getProjects: builder.query<
      {
        projects: Project[];
        total: number;
        hasNext: boolean;
        hasPrevious: boolean;
      },
      { page?: number }
    >({
      query: ({ page = 1 }) => `/api/services/projects/?page=${page}`,
      transformResponse: (response: ProjectListResponse) => {
        const projects = response.results.map(transformProject);
        return {
          projects,
          total: response.count,
          hasNext: !!response.next,
          hasPrevious: !!response.previous,
        };
      },
      providesTags: ["Project"],
    }),

    getServiceById: builder.query<Service, number>({
      queryFn: async (id) => {
        // Fetch all services across all pages and filter by ID
        let allServices: ServiceAPI[] = [];
        let page = 1;
        let hasMore = true;

        while (hasMore) {
          const response = await fetch(
            `${API_BASE_URL}/api/services/?page=${page}`
          );
          if (!response.ok) {
            return {
              error: {
                status: response.status,
                data: "Failed to fetch services",
              },
            };
          }
          const data: ServiceListResponse = await response.json();
          allServices = [...allServices, ...data.results];

          // Check if we found the service
          const service = allServices.find((s) => s.id === id);
          if (service) {
            return { data: transformService(service) };
          }

          hasMore = !!data.next;
          if (!hasMore) break;
          page++;
        }

        return { error: { status: 404, data: "Service not found" } };
      },
      providesTags: (result, _error, id) => [{ type: "Service", id }],
    }),

    getIndustryById: builder.query<Industry, number>({
      query: (id) => `/api/services/api/industries/${id}/`,
      transformResponse: (response: IndustryAPI) => transformIndustry(response),
      providesTags: (result, _error, id) => [{ type: "Industry", id }],
    }),

    getProjectById: builder.query<Project, number>({
      query: (id) => `/api/services/project/${id}/`,
      transformResponse: (response: ProjectAPI) => transformProject(response),
      providesTags: (result, _error, id) => [{ type: "Project", id }],
    }),
  }),
});

export const {
  useGetServicesQuery,
  useGetServiceByIdQuery,
  useGetIndustriesQuery,
  useGetIndustryByIdQuery,
  useGetProjectsQuery,
  useGetProjectByIdQuery,
} = servicesApi;
