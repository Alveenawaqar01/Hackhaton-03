export interface Food {
    _id: string;
    name: string;
    _type: "food";
    category: string; // Category field added as per schema.
    price: number;
    originalPrice?: number; // Optional since it might not always have a value.
    tags?: string[]; // Array of strings for tags.
    image?: {
      asset: {
        _ref: string;
        _type: "image";
      };
    };
    description?: string; // Optional description field.
    available: boolean; // Availability field as per schema.
    slug: {
      _type: "slug";
      current: string; // Unique identifier for the food item.
    };
  }
  