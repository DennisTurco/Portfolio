export interface WhyRow {
    title: string;
    description: string;
    image?: {
      asset?: {
        _ref?: string;
        url?: string;
      };
    };
    altText?: string;
  }

  export interface WhyData {
    title: string;
    description: string;
    data: WhyRow[];
  }