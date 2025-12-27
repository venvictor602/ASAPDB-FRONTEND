export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  features: string[];
  benefits: string[];
}

export const services: Service[] = [
  {
    id: "cloud-services",
    slug: "cloud",
    title: "Cloud Services & Solution",
    description:
      "Comprehensive cloud database solutions across AWS, Azure, and Google Cloud.",
    longDescription:
      "Our cloud services provide end-to-end support for migrating, deploying, and managing your databases in the cloud. We help you leverage the power of cloud computing for better scalability, reliability, and cost efficiency. From initial setup to ongoing management, we ensure your cloud databases are optimized for performance and security.",
    image: "/assets/image3.png",
    features: [
      "Multi-cloud database management",
      "Automated scaling and optimization",
      "Cost optimization strategies",
      "24/7 cloud monitoring",
      "Disaster recovery planning",
      "Security compliance",
    ],
    benefits: [
      "Reduced infrastructure costs",
      "Improved scalability",
      "Enhanced reliability",
      "Global availability",
    ],
  },
  {
    id: "enterprise-software",
    slug: "enterprise",
    title: "Enterprise Software & Application",
    description:
      "Enterprise-grade database solutions for large-scale applications.",
    longDescription:
      "We provide enterprise-level database management services designed for complex, large-scale applications. Our solutions ensure high availability, performance, and security for mission-critical systems. We work with your team to design, implement, and maintain database architectures that support your business growth.",
    image: "/assets/image1.png",
    features: [
      "Enterprise architecture design",
      "High availability setups",
      "Performance optimization",
      "Security hardening",
      "Compliance management",
      "Disaster recovery",
    ],
    benefits: [
      "Mission-critical reliability",
      "Scalable architecture",
      "Enterprise security",
      "24/7 expert support",
    ],
  },
  {
    id: "low-code",
    slug: "low-code",
    title: "Low code/ No Code Development",
    description:
      "Database solutions for low-code and no-code development platforms.",
    longDescription:
      "We specialize in database management for low-code and no-code platforms, ensuring your databases are optimized and secure regardless of your development approach. Our services help you maintain data integrity, performance, and scalability while leveraging the benefits of rapid application development.",
    image: "/assets/image2.png",
    features: [
      "Platform-specific optimization",
      "Data model design",
      "Integration support",
      "Performance tuning",
      "Security implementation",
      "Migration assistance",
    ],
    benefits: [
      "Faster development cycles",
      "Reduced technical debt",
      "Better data management",
      "Scalable solutions",
    ],
  },
  {
    id: "consulting",
    slug: "consulting",
    title: "Advisory & Consulting",
    description:
      "Expert database consulting to guide your strategic decisions.",
    longDescription:
      "Our advisory and consulting services provide expert guidance on database strategy, architecture, and optimization. We help you make informed decisions about database technologies, migrations, and infrastructure investments. Our consultants work closely with your team to understand your business needs and recommend the best solutions.",
    image: "/assets/image1.png",
    features: [
      "Database strategy consulting",
      "Architecture reviews",
      "Technology selection",
      "Migration planning",
      "Performance audits",
      "Security assessments",
    ],
    benefits: [
      "Informed decision-making",
      "Reduced risks",
      "Cost optimization",
      "Best practices implementation",
    ],
  },
  {
    id: "managed-services",
    slug: "managed",
    title: "Managed Services",
    description:
      "Complete database management so you can focus on your business.",
    longDescription:
      "Our managed services provide comprehensive database administration, monitoring, and support. We handle all aspects of database management, from routine maintenance to complex optimizations, allowing you to focus on your core business. With guaranteed uptime and performance SLAs, you can trust us to keep your databases running smoothly.",
    image: "/assets/image2.png",
    features: [
      "24/7 monitoring and support",
      "Proactive maintenance",
      "Automated backups",
      "Performance optimization",
      "Security management",
      "Regular reporting",
    ],
    benefits: [
      "Reduced operational overhead",
      "Guaranteed uptime",
      "Expert management",
      "Cost-effective solutions",
    ],
  },
  {
    id: "security",
    slug: "security",
    title: "Security",
    description: "Enterprise-level security solutions to protect your data.",
    longDescription:
      "We implement comprehensive security measures to protect your databases from threats and vulnerabilities. Our security services include encryption, access control, compliance management, and regular security audits. We help you meet regulatory requirements and protect sensitive data with industry-standard security practices.",
    image: "/assets/image3.png",
    features: [
      "Data encryption",
      "Access control management",
      "Security audits",
      "Compliance support",
      "Threat monitoring",
      "Incident response",
    ],
    benefits: [
      "Enhanced data protection",
      "Regulatory compliance",
      "Reduced security risks",
      "Peace of mind",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getAllServices(): Service[] {
  return services;
}
