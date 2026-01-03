import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_BASE_URL = "https://asapdb.vercel.app/api/contact";

// API Response Types
export interface VideoAPI {
  id: number;
  title: string;
  thumbnail: string;
  video_link: string;
  caption: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export interface VideoListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: VideoAPI[];
}

export interface TestimonyAPI {
  id: number;
  client_name: string;
  company_name: string;
  designation: string;
  message: string;
  image: string;
  created_at: string;
  updated_at: string;
}

export interface TestimonyListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: TestimonyAPI[];
}

export interface SubscribeRequest {
  email: string;
}

export interface SubscribeResponse {
  id: number;
  email: string;
  created_at: string;
  updated_at: string;
}

export interface ContactRequest {
  full_name: string;
  email: string;
  address: string;
  company_name: string;
  subject: string;
  services: number[];
  message: string;
}

export interface ContactResponse {
  id: number;
  full_name: string;
  email: string;
  address: string;
  company_name: string;
  subject: string;
  services: number[];
  message: string;
  created_at: string;
  updated_at: string;
}

// Transformed Types
export interface Video {
  id: number;
  title: string;
  thumbnail: string;
  videoLink: string;
  caption: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface Testimony {
  id: number;
  clientName: string;
  companyName: string;
  designation: string;
  message: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

// Helper functions
function transformVideo(apiVideo: VideoAPI): Video {
  return {
    id: apiVideo.id,
    title: apiVideo.title,
    thumbnail: apiVideo.thumbnail,
    videoLink: apiVideo.video_link,
    caption: apiVideo.caption,
    description: apiVideo.description,
    createdAt: apiVideo.created_at,
    updatedAt: apiVideo.updated_at,
  };
}

function transformTestimony(apiTestimony: TestimonyAPI): Testimony {
  return {
    id: apiTestimony.id,
    clientName: apiTestimony.client_name,
    companyName: apiTestimony.company_name,
    designation: apiTestimony.designation,
    message: apiTestimony.message,
    image: apiTestimony.image,
    createdAt: apiTestimony.created_at,
    updatedAt: apiTestimony.updated_at,
  };
}

// RTK Query API
export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  tagTypes: ["Video", "Testimony", "Subscription", "Contact"],
  endpoints: (builder) => ({
    getVideos: builder.query<
      {
        videos: Video[];
        total: number;
        hasNext: boolean;
        hasPrevious: boolean;
      },
      { page?: number }
    >({
      query: ({ page = 1 }) => `/videos/?page=${page}`,
      transformResponse: (response: VideoListResponse) => {
        const videos = response.results.map(transformVideo);
        return {
          videos,
          total: response.count,
          hasNext: !!response.next,
          hasPrevious: !!response.previous,
        };
      },
      providesTags: ["Video"],
    }),

    getTestimonies: builder.query<
      {
        testimonies: Testimony[];
        total: number;
        hasNext: boolean;
        hasPrevious: boolean;
      },
      { page?: number }
    >({
      query: ({ page = 1 }) => `/testimonies/?page=${page}`,
      transformResponse: (response: TestimonyListResponse) => {
        const testimonies = response.results.map(transformTestimony);
        return {
          testimonies,
          total: response.count,
          hasNext: !!response.next,
          hasPrevious: !!response.previous,
        };
      },
      providesTags: ["Testimony"],
    }),

    subscribe: builder.mutation<SubscribeResponse, SubscribeRequest>({
      query: (data) => ({
        url: "/subscribe/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Subscription"],
    }),

    submitContact: builder.mutation<ContactResponse, ContactRequest>({
      query: (data) => ({
        url: "/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Contact"],
    }),
  }),
});

export const {
  useGetVideosQuery,
  useGetTestimoniesQuery,
  useSubscribeMutation,
  useSubmitContactMutation,
} = contactApi;
