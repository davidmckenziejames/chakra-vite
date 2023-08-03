import type { Preview } from "@storybook/react";

const theme = require("./src/theme.tsx");

export const parameters = {
  chakra: {
    theme,
  },
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
