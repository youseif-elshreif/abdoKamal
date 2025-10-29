export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  image: string;
  issueDate: string;
}

export const certificates: Certificate[] = [
  {
    id: "aws-saa",
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    image: "/images/certs/SAA.jpg",
    issueDate: "2025-08-10",
  },
  {
    id: "aws-cloud-practitioner",
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    image: "/images/certs/clf.png",
    issueDate: "2024-10-19",
  },
  {
    id: "azure-fundamentals",
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    image: "/images/certs/azure.jpeg",
    issueDate: "2025-06-30",
  },
];
