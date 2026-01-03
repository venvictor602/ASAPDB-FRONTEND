import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_BASE_URL = "https://asapdb.vercel.app/api/careers/careers";

// API Response Types
export interface CareerAPI {
  id: number;
  title: string;
  department: string;
  location: string;
  description: string;
  requirements: string;
  responsibilities: string;
  benefits: string;
  salary_range: string;
  deadline: string;
  created_at: string;
  updated_at: string;
}

export interface CareerListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: CareerAPI[];
}

export interface ApplicationRequest {
  full_name: string;
  email: string;
  phone_number: string;
  resume: string;
  cover_letter_text: string;
  cover_letter_file?: string;
}

export interface ApplicationResponse {
  id: number;
  job: number;
  full_name: string;
  email: string;
  phone_number: string;
  resume: string;
  cover_letter_text: string;
  cover_letter_file: string;
  status: string;
  created_at: string;
  updated_at: string;
}

// Transformed Career Type
export interface Career {
  id: number;
  title: string;
  department: string;
  location: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string;
  salaryRange: string;
  deadline: string;
  createdAt: string;
  updatedAt: string;
}

// Helper function to transform API response
function transformCareer(apiCareer: CareerAPI): Career {
  const parseList = (text: string): string[] => {
    if (!text) return [];
    const lines = text.split("\n").filter((line) => line.trim() !== "");
    if (lines.length > 1) return lines.map((line) => line.trim());
    return text
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item !== "");
  };

  return {
    id: apiCareer.id,
    title: apiCareer.title,
    department: apiCareer.department,
    location: apiCareer.location,
    description: apiCareer.description,
    requirements: parseList(apiCareer.requirements),
    responsibilities: parseList(apiCareer.responsibilities),
    benefits: apiCareer.benefits,
    salaryRange: apiCareer.salary_range,
    deadline: apiCareer.deadline,
    createdAt: apiCareer.created_at,
    updatedAt: apiCareer.updated_at,
  };
}

// RTK Query API
export const careersApi = createApi({
  reducerPath: "careersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  tagTypes: ["Career", "Application"],
  endpoints: (builder) => ({
    getCareers: builder.query<
      {
        careers: Career[];
        total: number;
        hasNext: boolean;
        hasPrevious: boolean;
      },
      { page?: number; search?: string }
    >({
      query: ({ page = 1, search }) => {
        const params = new URLSearchParams({ page: page.toString() });
        if (search) params.append("search", search);
        return `/?${params.toString()}`;
      },
      transformResponse: (response: CareerListResponse) => {
        const careers = response.results.map(transformCareer);
        return {
          careers,
          total: response.count,
          hasNext: !!response.next,
          hasPrevious: !!response.previous,
        };
      },
      providesTags: ["Career"],
    }),

    getCareerById: builder.query<Career, number>({
      query: (id) => `/${id}/`,
      transformResponse: (response: CareerAPI) => transformCareer(response),
      providesTags: (result, _error, id) => [{ type: "Career", id }],
    }),

    applyForJob: builder.mutation<
      ApplicationResponse,
      { jobId: number; application: ApplicationRequest }
    >({
      query: ({ jobId, application }) => ({
        url: `/${jobId}/apply/`,
        method: "POST",
        body: application,
      }),
      invalidatesTags: (result, _error, { jobId }) => [
        { type: "Application", id: jobId },
      ],
    }),
  }),
});

export const {
  useGetCareersQuery,
  useGetCareerByIdQuery,
  useApplyForJobMutation,
} = careersApi;
