export interface Industry {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  challenges: string[];
  solutions: string[];
}

export const industries: Industry[] = [
  {
    id: "healthcare",
    slug: "healthcare",
    title: "Health Care",
    description:
      "HIPAA-compliant database solutions for healthcare organizations.",
    longDescription:
      "Healthcare organizations require secure, compliant, and highly available database systems to manage patient data, medical records, and critical healthcare information. We provide HIPAA-compliant database management services that ensure data security, privacy, and regulatory compliance while maintaining optimal performance.",
    image: "/assets/image1.png",
    challenges: [
      "HIPAA compliance requirements",
      "Patient data security",
      "High availability needs",
      "Regulatory reporting",
    ],
    solutions: [
      "HIPAA-compliant infrastructure",
      "Encrypted data storage",
      "Audit trail management",
      "Disaster recovery planning",
      "24/7 monitoring",
      "Compliance reporting",
    ],
  },
  {
    id: "edtech",
    slug: "edtech",
    title: "EdTech",
    description:
      "Scalable database solutions for educational technology platforms.",
    longDescription:
      "EdTech platforms require databases that can handle large numbers of concurrent users, store educational content efficiently, and scale with growing student populations. We provide database solutions optimized for educational platforms, ensuring fast performance and reliable access to learning resources.",
    image: "/assets/image2.png",
    challenges: [
      "High concurrent user loads",
      "Content management",
      "Scalability requirements",
      "Performance optimization",
    ],
    solutions: [
      "Scalable architecture",
      "Performance optimization",
      "Content delivery optimization",
      "Load balancing",
      "Caching strategies",
      "Growth planning",
    ],
  },
  {
    id: "fintech",
    slug: "fintech",
    title: "FinTech",
    description:
      "Secure, compliant database solutions for financial technology companies.",
    longDescription:
      "FinTech companies need databases that meet strict security and compliance requirements while handling high transaction volumes. We provide secure, compliant database management services that ensure data integrity, transaction reliability, and regulatory compliance for financial applications.",
    image: "/assets/image3.png",
    challenges: [
      "Financial data security",
      "Regulatory compliance",
      "Transaction integrity",
      "High availability",
    ],
    solutions: [
      "PCI DSS compliance",
      "Encrypted transactions",
      "Audit logging",
      "Disaster recovery",
      "Real-time monitoring",
      "Compliance reporting",
    ],
  },
  {
    id: "legaltech",
    slug: "legaltech",
    title: "LegalTech",
    description: "Secure database management for legal technology platforms.",
    longDescription:
      "LegalTech platforms require secure, compliant databases to manage sensitive legal documents, case files, and client information. We provide database solutions that ensure data security, confidentiality, and compliance with legal industry standards while maintaining high performance and availability.",
    image: "/assets/image1.png",
    challenges: [
      "Data confidentiality",
      "Document management",
      "Compliance requirements",
      "Secure access control",
    ],
    solutions: [
      "Secure document storage",
      "Access control management",
      "Compliance support",
      "Encrypted backups",
      "Audit trails",
      "Client data protection",
    ],
  },
  {
    id: "retail",
    slug: "retail",
    title: "Retail",
    description:
      "High-performance database solutions for retail and e-commerce.",
    longDescription:
      "Retail and e-commerce businesses need databases that can handle high traffic, manage inventory, process transactions, and analyze customer data. We provide database solutions optimized for retail operations, ensuring fast performance during peak shopping periods and reliable inventory management.",
    image: "/assets/image2.png",
    challenges: [
      "High traffic volumes",
      "Inventory management",
      "Transaction processing",
      "Customer data analysis",
    ],
    solutions: [
      "Performance optimization",
      "Inventory database design",
      "Transaction processing",
      "Analytics support",
      "Peak load handling",
      "Customer data management",
    ],
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((industry) => industry.slug === slug);
}

export function getAllIndustries(): Industry[] {
  return industries;
}
