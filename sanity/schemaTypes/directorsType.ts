import { defineType, defineArrayMember } from "sanity";
import { VideoIcon } from "@sanity/icons";

export const directorsType = defineType({
  name: "directors",
  title: "Short Films",
  icon: VideoIcon,
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "video",
      title: "Video",
      type: "file",
      options: {
        accept: "video/*", // Restrict uploads to video files only
      },
    },
    {
      name: "labels",
      title: "Labels",
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
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
      media: "videoUrl",
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: subtitle ? subtitle.slice(0, 50) + "..." : "",
        media,
      };
    },
  },
});
