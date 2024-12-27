import { composeStories, type StoryFn } from "@storybook/react";
import { type ComponentType, type ComponentProps } from "react";
import { type STORYBOOK_VIEWPORTS, allModes } from "../../.storybook/modes.ts";
import { LooseAutocomplete } from "#app/types/helpers.ts";

export const getStoriesTestCases = (stories: unknown) => {
  //@ts-expect-error No story type from Storybook
  return Object.values<StoryFn>(composeStories(stories)).map((Story) => {
    return [Story.storyName, Story] as const;
  });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const disableControls = <Component extends ComponentType<any>>(
  controls: (keyof ComponentProps<Component>)[]
) => {
  const disabledOptions = {};

  controls.forEach((control) =>
    Object.assign(disabledOptions, {
      [control]: {
        table: {
          disable: true,
        },
      },
    })
  );

  return disabledOptions;
};

type A11yRules = LooseAutocomplete<"color-contrast">;

export const disableA11yRules = (rules: A11yRules[]) => ({
  a11y: {
    config: {
      rules: rules.map((rule) => ({ id: rule, enabled: false })),
    },
  },
});

export const setViewport = (device: keyof typeof STORYBOOK_VIEWPORTS) => ({
  viewport: {
    defaultViewport: device,
  },
  chromatic: {
    modes: {
      [device]: allModes[device],
    },
  },
});

export const setDesignPreview = (url: string) => {
  // Figma design is not loading properly in Storybook https://github.com/storybookjs/addon-designs/issues/242#issuecomment-2149164843
  const finalUrl = url.replace("/design/", "/file/");

  return {
    design: {
      type: "figma",
      url: finalUrl,
    },
  };
};

export const getEnvVariables = () => {
  return Object.entries(process.env)
    .filter(([key]) => key.startsWith("PUBLIC_"))
    .reduce((prev, [key, value]) => {
      prev[`import.meta.env.${key}`] = JSON.stringify(value);
      return prev;
    }, {} as Record<string, string>);
};
