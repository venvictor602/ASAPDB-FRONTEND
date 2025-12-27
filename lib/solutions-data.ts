export interface Solution {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  icon: "grid" | "cross" | "zigzag" | "diamonds" | "shield" | "rocket";
  features: string[];
  benefits: string[];
  useCases: string[];
}

export const solutions: Solution[] = [
  {
    id: "performance-optimization",
    slug: "performance-optimization",
    title: "Performance Optimization",
    description:
      "Identify slow queries, fix bottlenecks, and fine-tune your database for maximum speed and stability.",
    longDescription:
      "Our performance optimization solutions help you identify and resolve database performance issues before they impact your users. We analyze query patterns, optimize indexes, tune configurations, and implement caching strategies to ensure your database runs at peak efficiency. With our expertise, you'll see significant improvements in response times and overall system performance.",
    image: "/assets/image1.png",
    icon: "grid",
    features: [
      "Query performance analysis",
      "Index optimization",
      "Configuration tuning",
      "Caching strategies",
      "Connection pooling",
      "Resource monitoring",
    ],
    benefits: [
      "Faster response times",
      "Reduced server load",
      "Better user experience",
      "Lower infrastructure costs",
    ],
    useCases: [
      "Slow query identification and optimization",
      "Database configuration tuning",
      "Index strategy development",
      "Performance bottleneck resolution",
    ],
  },
  {
    id: "monitoring-support",
    slug: "monitoring-support",
    title: "24/7 Monitoring & Support",
    description:
      "Real-time health checks, alerts, and expert intervention the moment an issue arises.",
    longDescription:
      "Never worry about database issues again. Our 24/7 monitoring and support service provides round-the-clock surveillance of your database infrastructure. We use advanced monitoring tools to track performance metrics, detect anomalies, and proactively address issues before they become critical. Our expert team is always ready to intervene and resolve problems quickly.",
    image: "/assets/image2.png",
    icon: "cross",
    features: [
      "Real-time monitoring",
      "Automated alerts",
      "Proactive issue detection",
      "Expert intervention",
      "Performance dashboards",
      "Incident response",
    ],
    benefits: [
      "Zero-downtime operations",
      "Proactive problem resolution",
      "Peace of mind",
      "Reduced operational overhead",
    ],
    useCases: [
      "24/7 database health monitoring",
      "Automated alerting and notifications",
      "Proactive issue resolution",
      "Performance trend analysis",
    ],
  },
  {
    id: "backups-recovery",
    slug: "backups-recovery",
    title: "Automated Backups & Recovery",
    description:
      "Scheduled backups, disaster recovery planning, and rapid restoration to keep your business running.",
    longDescription:
      "Protect your data with our comprehensive backup and recovery solutions. We implement automated backup strategies tailored to your business needs, ensuring your data is always protected. Our disaster recovery planning and rapid restoration capabilities mean you can recover from any incident quickly, minimizing downtime and data loss.",
    image: "/assets/image3.png",
    icon: "zigzag",
    features: [
      "Automated backups",
      "Point-in-time recovery",
      "Disaster recovery planning",
      "Backup testing",
      "Cross-region replication",
      "Rapid restoration",
    ],
    benefits: [
      "Data protection",
      "Minimal downtime",
      "Business continuity",
      "Compliance readiness",
    ],
    useCases: [
      "Automated backup scheduling",
      "Disaster recovery planning",
      "Data restoration services",
      "Backup strategy development",
    ],
  },
  {
    id: "cloud-management",
    slug: "cloud-management",
    title: "Cloud Database Management",
    description:
      "Full support for AWS, Azure, and Google Cloud — including migrations, setup, and daily operations.",
    longDescription:
      "Leverage the power of cloud computing with our comprehensive cloud database management services. We help you migrate to the cloud, set up cloud-native databases, and manage your cloud infrastructure efficiently. Our expertise spans all major cloud platforms, ensuring you get the best performance, security, and cost optimization for your cloud databases.",
    image: "/assets/image1.png",
    icon: "diamonds",
    features: [
      "Multi-cloud support",
      "Cloud migration services",
      "Cost optimization",
      "Auto-scaling configuration",
      "Cloud security",
      "Performance tuning",
    ],
    benefits: [
      "Scalable infrastructure",
      "Cost efficiency",
      "Global availability",
      "Reduced maintenance",
    ],
    useCases: [
      "Cloud database migration",
      "Multi-cloud database management",
      "Cloud cost optimization",
      "Cloud-native database setup",
    ],
  },
  {
    id: "security-compliance",
    slug: "security-compliance",
    title: "Security & Compliance",
    description:
      "Enterprise-grade security measures and compliance management to protect your sensitive data.",
    longDescription:
      "Keep your data secure with our comprehensive security and compliance solutions. We implement industry-standard security measures, encryption, access controls, and compliance frameworks to protect your databases from threats. Our security audits and compliance assessments ensure you meet regulatory requirements and industry standards.",
    image: "/assets/image2.png",
    icon: "shield",
    features: [
      "Data encryption",
      "Access control management",
      "Security audits",
      "Compliance support",
      "Threat detection",
      "Vulnerability assessments",
    ],
    benefits: [
      "Enhanced security",
      "Regulatory compliance",
      "Risk mitigation",
      "Data protection",
    ],
    useCases: [
      "Security hardening",
      "Compliance audits",
      "Access control implementation",
      "Threat monitoring and response",
    ],
  },
  {
    id: "scalability-growth",
    slug: "scalability-growth",
    title: "Scalability & Growth",
    description:
      "Database architectures designed to scale with your business, handling growth seamlessly.",
    longDescription:
      "Plan for growth with our scalability solutions. We design database architectures that can scale horizontally and vertically to accommodate your business growth. Whether you're experiencing rapid user growth or data expansion, our solutions ensure your database infrastructure can handle increased load without performance degradation.",
    image: "/assets/image3.png",
    icon: "rocket",
    features: [
      "Horizontal scaling",
      "Vertical scaling",
      "Load balancing",
      "Sharding strategies",
      "Capacity planning",
      "Growth forecasting",
    ],
    benefits: [
      "Future-proof architecture",
      "Seamless growth",
      "Performance at scale",
      "Cost-effective scaling",
    ],
    useCases: [
      "Database architecture design",
      "Scaling strategy development",
      "Capacity planning",
      "Performance optimization at scale",
    ],
  },
];

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((solution) => solution.slug === slug);
}

export function getAllSolutions(): Solution[] {
  return solutions;
}
