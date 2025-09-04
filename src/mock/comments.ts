export type Comment = {
  id: string;
  authorId: string;
  content: string;
  createdAt: string;
};

export const comments: Comment[] = [
  {
    id: "1",
    authorId: "1",
    content: "This is a great discussion! I really appreciate the insights shared here. Looking forward to more conversations like this.",
    createdAt: "2024-01-15T10:30:00Z",
  },
  {
    id: "2",
    authorId: "2",
    content: "I completely agree with the points made. The implementation approach discussed is exactly what we need for our project.",
    createdAt: "2024-01-15T11:45:00Z",
  },
  {
    id: "3",
    authorId: "3",
    content: "Has anyone tried the alternative approach mentioned in the documentation? I'd love to hear about your experiences.",
    createdAt: "2024-01-15T14:20:00Z",
  },
  {
    id: "4",
    authorId: "4",
    content: "This approach saved us hours of development time. The integration was smoother than expected, and the documentation quality is outstanding. Highly recommended!",
    createdAt: "2024-01-15T16:10:00Z",
  },
  {
    id: "5",
    authorId: "5",
    content: "Great points everyone! I think we should consider the scalability aspects as well. What are your thoughts on performance optimization?",
    createdAt: "2024-01-15T17:30:00Z",
  },
];