import { type Preview } from "@storybook/react";
import "../src/app/globals.css";

import { STORYBOOK_VIEWPORTS } from "./modes";

const preview: Preview = {
  parameters: {
    controls: {
      expanded: true,
    },
    viewport: {
      viewports: STORYBOOK_VIEWPORTS,
      defaultViewport: STORYBOOK_VIEWPORTS.Desktop.name,
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
