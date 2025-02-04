import {
  getStoryContext,
  type TestRunnerConfig,
  waitForPageReady,
} from "@storybook/test-runner";
import { injectAxe, checkA11y, configureAxe } from "axe-playwright";

const config: TestRunnerConfig = {
  // Hook that is executed before the test runner starts running tests
  setup() {},
  errorMessageFormatter: (error) => {
    console.log(error);
    return error;
  },

  /* Hook to execute before a story is initially visited before being rendered in the browser.
   * The page argument is the Playwright's page object for the story.
   * The context argument is a Storybook object containing the story's id, title, and name.
   */
  async preVisit(page) {
    await injectAxe(page);

    // const storyContext = await getStoryContext(page, story);
    // const viewportName = z
    //   .enum(["Desktop", "Tablet", "Mobile"])
    //   .parse(storyContext.parameters?.viewport?.defaultViewport);

    // await page.setViewportSize({
    //   width: VIEWPORTS_DIMENSIONS[viewportName].width,
    //   height: VIEWPORTS_DIMENSIONS[viewportName].height,
    // });
  },
  /* Hook to execute after a story is visited and fully rendered.
   * The page argument is the Playwright's page object for the story
   * The context argument is a Storybook object containing the story's id, title, and name.
   */
  async postVisit(page, context) {
    await waitForPageReady(page);
    const storyContext = await getStoryContext(page, context);

    if (storyContext.parameters?.a11y?.disable) return;

    await configureAxe(page, {
      rules: storyContext.parameters?.a11y?.config?.rules,
    });

    await checkA11y(page, "#storybook-root", {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
      axeOptions: storyContext.parameters?.a11y?.options,
    });
  },
};

export default config;
