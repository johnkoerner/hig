gemini.suite("Dropdown", () => {
  gemini.suite("default", suite => {
    suite
      .setUrl("iframe.html?selectedKind=Dropdown&selectedStory=default")
      .setCaptureElements(".storybook-component")
      .capture("default")
      .capture("default - focused", actions => {
        actions.focus("input");
      })
      .capture("default - clicked", actions => {
        actions.click("input");
      });
  });
  gemini.suite("format option", suite => {
    suite
      .setUrl("iframe.html?selectedKind=Dropdown&selectedStory=format%20option")
      .setCaptureElements(".storybook-component")
      .capture("format option")
      .capture("format option - clicked", actions => {
        actions.click("input");
      });
  });
});
