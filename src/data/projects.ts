export interface Project {
  id: string;
  title: string;
  image?: string; // Optional for backend projects
  tech: string[];
  short: string;
  details: {
    problem: string;
    solution: string;
    results: string;
    implementation?: string[];
    repo: string;
    live?: string;
    // New fields for backend projects
    apiEndpoints?: {
      method: string;
      path: string;
      description: string;
    }[];
    features?: string[];
    architecture?: string[];
    database?: {
      type: string;
      collections?: string[];
      tables?: string[];
    };
    authentication?: string;
    deployment?: string;
  };
}

export const projects: Project[] = [
  {
    id: "xyz-pipeline",
    title: "Solar System App – Enterprise DevOps Pipeline",
    image: "/images/projects/xyz.png",
    tech: [
      "Jenkins",
      "Docker",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Kubernetes",
      "AWS (EC2, Lambda, S3)",
      "Terraform",
      "SonarQube",
      "Trivy",
      "OWASP ZAP",
      "Slack Integration",
    ],
    short:
      "End-to-end CI/CD pipeline with full security automation, GitOps workflow, and multi-environment deployments across AWS and Kubernetes.",
    details: {
      problem:
        "Manual deployments and lack of integrated security scanning caused delays, human errors, and increased production risks.",
      solution:
        "Developed a fully automated CI/CD pipeline using Jenkins, with integrated testing, code quality gates, SAST/DAST scanning, container security, and GitOps-based multi-environment deployment to AWS EC2, Kubernetes, and Lambda.",
      results:
        "Reduced deployment time by 75%, achieved 90%+ test coverage, enabled zero-downtime releases, and established continuous security validation across all environments.",
      repo: "https://github.com/mhmdmstfa2010/XYZ-pipline",
      apiEndpoints: [
        {
          method: "GET",
          path: "/api/planets",
          description: "Get all planets data",
        },
        {
          method: "POST",
          path: "/api/planets",
          description: "Create new planet",
        },
        {
          method: "GET",
          path: "/api/health",
          description: "Health check endpoint",
        },
      ],
      features: [
        "Real-time planet data updates",
        "Solar system visualization",
        "Multi-environment deployment",
        "Automated testing pipeline",
        "Security scanning integration",
      ],
      architecture: [
        "Microservices architecture",
        "Container-based deployment",
        "Load balancing with ALB",
        "Database connection pooling",
        "Event-driven notifications",
      ],
      database: {
        type: "MongoDB",
        collections: ["planets", "users", "sessions", "logs"],
      },
      authentication: "JWT with refresh tokens",
      deployment: "AWS ECS with auto-scaling",
    },
  },
  {
    id: "scalable-web-app-alb-autoscaling",
    title: "Scalable Web Application with ALB and Auto Scaling",
    image:
      "/images/projects/Scalable Web Application with ALB and Auto Scaling.png",
    tech: [
      "AWS EC2",
      "Application Load Balancer (ALB)",
      "Auto Scaling Groups",
      "RDS MySQL (Multi-AZ)",
      "VPC",
      "NAT Gateway",
      "CloudWatch",
      "SNS",
      "IAM",
      "Apache",
      "Node.js",
      "Terraform",
    ],
    short:
      "Highly available and scalable web application infrastructure deployed on AWS using Terraform with multi-tier architecture, auto-scaling, and monitoring.",
    details: {
      problem:
        "Traditional monolithic web servers struggled with availability, scalability, and fault tolerance, leading to downtime and poor performance during high traffic periods.",
      solution:
        "Designed and deployed a decoupled multi-tier AWS infrastructure using Terraform — featuring separate frontend and backend tiers, Application Load Balancers, Auto Scaling Groups, RDS MySQL in Multi-AZ configuration, and full CloudWatch monitoring with SNS alerts. Ensured network isolation and least-privilege security design through layered security groups and IAM roles.",
      results:
        "Achieved a production-ready, self-healing infrastructure that scales automatically with traffic, provides high availability across multiple Availability Zones, and maintains strong security posture with full observability and alerting. Reduced downtime and operational effort significantly while optimizing costs through autoscaling and right-sized resources.",
      repo: "https://github.com/mhmdmstfa2010/Scalable-Web-Application-with-ALB-and-Auto-Scaling",
    },
  },
  {
    id: "raffle-app",
    title: "Serverless Raffle Application",
    image: "/images/projects/raffle-app.jpg",
    tech: [
      "AWS Lambda",
      "API Gateway",
      "DynamoDB",
      "S3",
      "CloudFront",
      "Route53",
      "ACM",
      "Terraform",
      "Bootstrap 5",
      "JavaScript (ES6+)",
    ],
    short:
      "A complete AWS serverless raffle application enabling users to apply for raffles and administrators to draw winners in real time using a fully automated and scalable infrastructure.",
    details: {
      problem:
        "Traditional raffle and giveaway systems struggle with scalability, transparency, and manual management. Deploying and maintaining infrastructure manually led to inefficiencies and potential security issues.",
      solution:
        "Developed a fully serverless raffle application using AWS services — Lambda for compute, API Gateway for endpoints, DynamoDB for storage, and S3 with CloudFront for hosting. Automated deployment and provisioning using Terraform with modular IaC design.",
      results:
        "Achieved a secure, globally distributed, and cost-efficient raffle platform with zero server management. Auto-scaled to handle thousands of users, provided real-time winner draws, HTTPS encryption, and live participant tracking.",
      repo: "https://github.com/mhmdmstfa2010/Raffle-app",
      apiEndpoints: [
        {
          method: "POST",
          path: "/api/raffle/join",
          description: "Join a raffle",
        },
        {
          method: "GET",
          path: "/api/raffle/{id}",
          description: "Get raffle details",
        },
        {
          method: "POST",
          path: "/api/raffle/draw",
          description: "Draw winner (admin only)",
        },
        {
          method: "GET",
          path: "/api/participants",
          description: "List all participants",
        },
      ],
      features: [
        "Real-time raffle participation",
        "Automated winner selection",
        "Email notifications",
        "Admin dashboard",
        "Participant tracking",
      ],
      architecture: [
        "Serverless architecture",
        "Event-driven processing",
        "Auto-scaling Lambda functions",
        "CloudFront CDN distribution",
        "Route53 DNS management",
      ],
      database: {
        type: "DynamoDB",
        collections: ["raffles", "participants", "winners", "notifications"],
      },
      authentication: "API Gateway with Lambda authorizers",
      deployment: "Serverless Framework with Terraform",
    },
  },
  {
    id: "webapp-ci-cd-pipeline",
    title: "Webapp Deployment CI/CD Pipeline",
    image: "/images/projects/diagram-export-12-23-2024-4_10_00-PM.png",
    tech: ["Python", "Docker", "Jenkins", "Ansible", "Vagrant"],
    short:
      "Automated end-to-end CI/CD pipeline for building and deploying a Python web application to multiple target machines using Jenkins, Docker, and Ansible.",
    details: {
      problem:
        "Manual deployment across multiple servers was time-consuming and error-prone, especially when handling build and configuration steps repeatedly.",
      solution:
        "Developed a Jenkins pipeline that automates the entire workflow — from building and pushing Docker images to deploying containers on multiple target Vagrant machines using Ansible.",
      implementation: [
        "Containerized a Python web app using a custom Dockerfile.",
        "Configured Jenkins to pull code, build Docker images, push them to Docker Hub, and run an Ansible playbook.",
        "Used Vagrant to provision two Ubuntu machines as deployment targets.",
        "Automated setup of Docker, image pulling, and container execution through Ansible tasks.",
      ],
      results:
        "Achieved a fully automated CI/CD pipeline after 70 iterative failures and debugging sessions — demonstrating resilience, incremental improvement, and real-world CI/CD troubleshooting experience.",
      repo: "https://github.com/mhmdmstfa2010/Webapp-deployment-CI-CD-pipeline-",
    },
  },
];
