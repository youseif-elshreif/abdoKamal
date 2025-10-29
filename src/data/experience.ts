export interface Experience {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | null; // null for current position
  description: string;
  achievements: string[];
  technologies: string[];
  type: "full-time" | "part-time" | "contract" | "internship" | "training";
}

export const experiences: Experience[] = [
  {
    id: "exp-1",
    position: "DevOps Intern",
    company: "Konecta",
    location: "Cairo, Egypt",
    startDate: "2025-07",
    endDate: "present",
    description:
      "Completed an intensive 2-month DevOps internship focusing on real-world automation, infrastructure, and deployment workflows.",
    achievements: [
      "Built CI/CD pipelines integrating Git, Jenkins, Docker, and Kubernetes",
      "Collaborated in cross-functional teams delivering multi-stage automation tasks",
      "Delivered a final presentation project in a competitive internship environment",
      "Enhanced team collaboration and agile workflow adaptation",
    ],
    technologies: [
      "Git",
      "Jenkins",
      "Docker",
      "Kubernetes",
      "Ansible",
      "Terraform",
    ],
    type: "internship",
  },
  {
    id: "exp-2",
    position: "DevOps Intern",
    company: "Orange Digital Center Egypt",
    location: "Cairo, Egypt",
    startDate: "2024-11",
    endDate: "2024-12",
    description:
      "Participated in a hands-on DevOps internship focusing on deployment, monitoring, and cloud automation.",
    achievements: [
      "Deployed applications using Docker and Kubernetes",
      "Built CI/CD workflows using Jenkins and GitHub Actions",
      "Implemented monitoring dashboards using Grafana",
      "Gained AWS cloud experience managing infrastructure resources",
    ],
    technologies: [
      "Docker",
      "Kubernetes",
      "Jenkins",
      "Grafana",
      "GitHub Actions",
      "ArgoCD",
      "Ansible",
      "VMware",
      "Vagrant",
      "AWS",
    ],
    type: "internship",
  },
  {
    id: "exp-3",
    position: "DevOps Trainee",
    company: "DEPI (Digital Egypt Pioneers Initiative)",
    location: "Egypt",
    startDate: "2024-06",
    endDate: "2024-12",
    description:
      "Hands-on DevOps training focusing on cloud infrastructure and CI/CD pipeline automation.",
    achievements: [
      "Automated deployments using Jenkins and GitHub Actions",
      "Provisioned AWS EC2 instances and S3 buckets for scalable environments",
      "Improved CI/CD pipeline efficiency in collaboration with developers",
    ],
    technologies: ["AWS", "Jenkins", "GitHub Actions", "Terraform", "Docker"],
    type: "training",
  },
  {
    id: "exp-4",
    position: "Linux System Administration Trainee",
    company: "NTI (National Telecommunication Institute)",
    location: "Cairo, Egypt",
    startDate: "2021-09",
    endDate: "2026-06",
    description:
      "Comprehensive Linux system administration training with focus on RH124 and RH134 courses.",
    achievements: [
      "Configured users, permissions, and file systems for secure environments",
      "Automated system management tasks and services using systemd",
      "Built a strong foundation for server management and troubleshooting",
    ],
    technologies: ["Linux", "Red Hat", "Bash", "Systemd", "Shell Scripting"],
    type: "training",
  },
];
