import React from "react";
import { type Preview } from "@storybook/react";
import "../src/styles/global.css";
import { roboto, robotoCondensed } from "../src/styles/font.ts";
import "../src/styles/gallery.css";
import "react-photo-album/columns.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";

import { STORYBOOK_VIEWPORTS } from "./modes";

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className={`${roboto.className} ${robotoCondensed.variable}`}>
        <Story />
      </div>
    ),
  ],
  globals: {
    a11y: {
      manual: true,
    },
  },
  parameters: {
    controls: {
      expanded: true,
    },
    viewport: {
      viewports: STORYBOOK_VIEWPORTS,
      defaultViewport: STORYBOOK_VIEWPORTS.Desktop.name,
    },
    nextjs: {
      appDirectory: true,
    },
    options: {
      storySort: {
        order: [
          "Atoms",
          "Molecules",
          "Organisms",
          "Templates",
          "Pages",
          "Tokens",
        ],
      },
    },
  },
};

export default preview;
