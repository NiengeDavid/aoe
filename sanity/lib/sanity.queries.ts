import { groq } from "next-sanity";

//All featured works query
export const getAllWorksQuery = groq`
*[_type == "works"]{
  _id,
  images[]{
    "url": asset->url,
    "alt": _key
  },
  title{
    main,
    italic
  },
  description,
  details[]{
    label,
    value
  },
  team[]{
    role,
    name
  }
}
`;

export interface SanityImage {
  url: string;
  alt?: string;
}

export interface Work {
  _id: string;
  images: SanityImage[];
  title: {
    main: string;
    italic: string;
  };
  description: string;
  details: {
    label: string;
    value: string;
  }[];
  team: {
    role: string;
    name: string;
  }[];
}
