export default [
  {
    description: "default",
    getProps: () => ({
      label: "HIG Theme",
      instructions: "Choose one HIG theme to apply to your entire app.",
      placeholder: "Select a theme",
      options: ["HIG Light Theme", "HIG Dark Blue Theme", "Matrix Theme"]
    })
  },
  {
    description: "format options",
    getProps: () => {
      return {
        label: "HIG Theme",
        instructions: "Choose one HIG theme to apply to your entire app.",
        placeholder: "Select a theme",
        formatOption: option => {
          return option.toUpperCase();
        },
        options: ["HIG Light Theme", "HIG Dark Blue Theme", "Matrix Theme"]
      };
    }
  }
];
