type TTipCategory = {
     name: string;
  tipsCount: number;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type TTip = {
    _id: string;
    title: string;
    content: string;
    category?: TTipCategory;
    image: string;
    isPremium?: boolean;
}