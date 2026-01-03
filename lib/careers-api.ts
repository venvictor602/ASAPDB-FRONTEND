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
  resume: string; // Base64 or file path
  cover_letter_text: string;
  cover_letter_file?: string; // Base64 or file path
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

// Transformed Career Type (for internal use)
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

// Helper function to transform API response to internal format
function transformCareer(apiCareer: CareerAPI): Career {
  // Parse requirements and responsibilities from string (assuming they're separated by newlines or commas)
  const parseList = (text: string): string[] => {
    if (!text) return [];
    // Try splitting by newline first, then by comma
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

// API Functions
export async function getCareers(
  page: number = 1,
  search?: string
): Promise<{
  careers: Career[];
  total: number;
  hasNext: boolean;
  hasPrevious: boolean;
}> {
  try {
    let url = `${API_BASE_URL}/?page=${page}`;
    if (search) {
      url += `&search=${encodeURIComponent(search)}`;
    }

    const response = await fetch(url, {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch careers: ${response.statusText}`);
    }

    const data: CareerListResponse = await response.json();
    const careers = data.results.map(transformCareer);

    return {
      careers,
      total: data.count,
      hasNext: !!data.next,
      hasPrevious: !!data.previous,
    };
  } catch (error) {
    console.error("Error fetching careers:", error);
    return {
      careers: [],
      total: 0,
      hasNext: false,
      hasPrevious: false,
    };
  }
}

export async function getCareerById(id: number): Promise<Career | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}/`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      return null;
    }

    const apiCareer: CareerAPI = await response.json();
    return transformCareer(apiCareer);
  } catch (error) {
    console.error("Error fetching career by id:", error);
    return null;
  }
}

export async function applyForJob(
  jobId: number,
  application: ApplicationRequest
): Promise<ApplicationResponse | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/${jobId}/apply/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(application),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Failed to submit application: ${response.statusText} - ${errorText}`
      );
    }

    const applicationResponse: ApplicationResponse = await response.json();
    return applicationResponse;
  } catch (error) {
    console.error("Error submitting application:", error);
    return null;
  }
}
