import { defineType, defineArrayMember } from "sanity";
import { ImageIcon } from "@sanity/icons";

export const worksType = defineType({
  name: "works",
  title: "Featured Works",
  type: "document",
  icon: ImageIcon,
  fields: [
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: "title",
      title: "Title",
      type: "object",
      fields: [
        {
          name: "main",
          title: "Main Title",
          type: "string",
        },
        {
          name: "italic",
          title: "Italic Title",
          type: "string",
        },
      ],
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "details",
      title: "Details",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            {
              name: "label",
              title: "Label",
              type: "string",
            },
            {
              name: "value",
              title: "Value",
              type: "string",
            },
          ],
        }),
      ],
    },
    {
      name: "team",
      title: "Team",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            {
              name: "role",
              title: "Role",
              type: "string",
            },
            {
              name: "name",
              title: "Name",
              type: "string",
            },
          ],
        }),
      ],
    },
  ],
  preview: {
    select: {
      title: "title.main",
      subtitle: "title.italic",
      media: "images.0",
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle,
        media,
      };
    },
  },
});
