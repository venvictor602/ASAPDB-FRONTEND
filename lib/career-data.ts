export interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Remote";
  description: string;
  requirements: string[];
  responsibilities: string[];
}

export const jobPositions: JobPosition[] = [
  {
    id: "senior-dba",
    title: "Senior Database Administrator",
    department: "Engineering",
    location: "Remote / Hybrid",
    type: "Full-time",
    description:
      "We're looking for an experienced Senior Database Administrator to join our team. You'll be responsible for managing, optimizing, and securing our clients' database infrastructure.",
    requirements: [
      "5+ years of experience in database administration",
      "Expert knowledge of PostgreSQL, MySQL, and MongoDB",
      "Experience with cloud platforms (AWS, Azure, GCP)",
      "Strong problem-solving and communication skills",
      "Relevant certifications preferred",
    ],
    responsibilities: [
      "Design and implement database architectures",
      "Monitor and optimize database performance",
      "Ensure data security and compliance",
      "Provide technical leadership and mentorship",
      "Collaborate with cross-functional teams",
    ],
  },
  {
    id: "cloud-engineer",
    title: "Cloud Database Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description:
      "Join our cloud team to help clients migrate and manage their databases in the cloud. You'll work with cutting-edge cloud technologies and help shape our cloud strategy.",
    requirements: [
      "3+ years of cloud database experience",
      "Proficiency in AWS RDS, Azure SQL, or Google Cloud SQL",
      "Experience with infrastructure as code (Terraform, CloudFormation)",
      "Knowledge of containerization (Docker, Kubernetes)",
      "Strong scripting skills (Python, Bash)",
    ],
    responsibilities: [
      "Design cloud database solutions",
      "Automate deployment and scaling processes",
      "Optimize cloud costs and performance",
      "Implement disaster recovery strategies",
      "Support cloud migrations",
    ],
  },
  {
    id: "database-consultant",
    title: "Database Consultant",
    department: "Consulting",
    location: "Remote / On-site",
    type: "Full-time",
    description:
      "Work directly with clients to assess their database needs, provide strategic guidance, and implement solutions that drive business value.",
    requirements: [
      "4+ years of database consulting experience",
      "Strong client-facing and presentation skills",
      "Experience with database architecture design",
      "Knowledge of multiple database technologies",
      "Business acumen and strategic thinking",
    ],
    responsibilities: [
      "Conduct database assessments and audits",
      "Develop database strategies and roadmaps",
      "Provide technical consulting to clients",
      "Create technical documentation and reports",
      "Lead workshops and training sessions",
    ],
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer - Database Focus",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description:
      "Help us build and maintain our database infrastructure automation, CI/CD pipelines, and monitoring systems.",
    requirements: [
      "3+ years of DevOps experience",
      "Experience with database automation",
      "Proficiency in CI/CD tools (Jenkins, GitLab CI, GitHub Actions)",
      "Knowledge of monitoring tools (Prometheus, Grafana)",
      "Strong Linux and networking skills",
    ],
    responsibilities: [
      "Automate database deployment processes",
      "Build and maintain CI/CD pipelines",
      "Implement monitoring and alerting",
      "Optimize infrastructure performance",
      "Ensure system reliability and uptime",
    ],
  },
];

export interface Benefit {
  icon: string;
  title: string;
  description: string;
}

export const benefits: Benefit[] = [
  {
    icon: "💰",
    title: "Competitive Salary",
    description:
      "We offer competitive compensation packages that reflect your skills and experience.",
  },
  {
    icon: "🏥",
    title: "Health Insurance",
    description:
      "Comprehensive health, dental, and vision insurance for you and your family.",
  },
  {
    icon: "🏖️",
    title: "Flexible PTO",
    description:
      "Take time off when you need it. We believe in work-life balance.",
  },
  {
    icon: "💻",
    title: "Remote Work",
    description:
      "Work from anywhere. We support fully remote and hybrid work arrangements.",
  },
  {
    icon: "📚",
    title: "Learning & Development",
    description:
      "Annual learning budget for courses, conferences, and certifications.",
  },
  {
    icon: "🎯",
    title: "Career Growth",
    description:
      "Clear career paths and opportunities for advancement within the company.",
  },
  {
    icon: "⚡",
    title: "Latest Tools",
    description:
      "Access to the latest tools, technologies, and resources you need to excel.",
  },
  {
    icon: "🤝",
    title: "Team Culture",
    description:
      "Join a supportive, collaborative team that values diversity and inclusion.",
  },
];
