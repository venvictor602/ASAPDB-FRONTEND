export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  client?: string;
  year?: string;
}

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform Database Optimization",
    description:
      "Optimized database performance for a high-traffic e-commerce platform, reducing query times by 70% and improving overall system responsiveness.",
    image: "/assets/image1.png",
    technologies: ["PostgreSQL", "Redis", "AWS RDS", "Query Optimization"],
    category: "Performance Optimization",
    client: "Major E-Commerce Retailer",
    year: "2024",
  },
  {
    id: "healthcare-migration",
    title: "Healthcare System Cloud Migration",
    description:
      "Migrated critical healthcare database infrastructure to AWS with zero downtime, ensuring HIPAA compliance and improved scalability.",
    image: "/assets/image2.png",
    technologies: ["AWS", "PostgreSQL", "Docker", "Kubernetes"],
    category: "Cloud Migration",
    client: "Healthcare Provider",
    year: "2024",
  },
  {
    id: "fintech-monitoring",
    title: "FinTech 24/7 Database Monitoring",
    description:
      "Implemented comprehensive monitoring and alerting system for a financial services platform, ensuring 99.99% uptime and proactive issue resolution.",
    image: "/assets/image3.png",
    technologies: ["MySQL", "Prometheus", "Grafana", "Alerting"],
    category: "Monitoring & Support",
    client: "FinTech Startup",
    year: "2023",
  },
  {
    id: "saas-backup",
    title: "SaaS Platform Backup & Recovery",
    description:
      "Designed and implemented automated backup and disaster recovery solution for a SaaS platform, reducing recovery time from hours to minutes.",
    image: "/assets/image1.png",
    technologies: [
      "MongoDB",
      "AWS S3",
      "Automated Backups",
      "Disaster Recovery",
    ],
    category: "Backup & Recovery",
    client: "SaaS Company",
    year: "2023",
  },
  {
    id: "enterprise-security",
    title: "Enterprise Security Hardening",
    description:
      "Enhanced database security for a Fortune 500 company, implementing encryption, access controls, and compliance frameworks to meet regulatory requirements.",
    image: "/assets/image2.png",
    technologies: ["Oracle", "Encryption", "Access Control", "Compliance"],
    category: "Security & Compliance",
    client: "Fortune 500 Company",
    year: "2023",
  },
  {
    id: "startup-scalability",
    title: "Startup Database Scaling Solution",
    description:
      "Architected scalable database solution for a rapidly growing startup, enabling seamless horizontal scaling to handle 10x traffic growth.",
    image: "/assets/image3.png",
    technologies: ["PostgreSQL", "Sharding", "Load Balancing", "Auto-scaling"],
    category: "Scalability",
    client: "Tech Startup",
    year: "2024",
  },
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}
