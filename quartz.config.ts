import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "GLADSHEIM",
    pageTitleSuffix: " — FM 7-8 Fieldbook",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "de-DE",
    baseUrl: "Vkkrs.github.io/gladsheim",
    ignorePatterns: [
      "private",
      "Templates",
      "_deploy",
      ".obsidian",
    ],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Inter",
        body: "Inter",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#faf8f5",
          lightgray: "#e8e4df",
          gray: "#9a9490",
          darkgray: "#3d3833",
          dark: "#1a1714",
          secondary: "#5c6b2f",
          tertiary: "#7a8c3f",
          highlight: "rgba(92, 107, 47, 0.1)",
          textHighlight: "#d4c9a8",
        },
        darkMode: {
          light: "#1a1e14",
          lightgray: "#2a2e24",
          gray: "#6b7a5a",
          darkgray: "#c8c4b8",
          dark: "#e8e4d8",
          secondary: "#8fa34a",
          tertiary: "#a3b85e",
          highlight: "rgba(143, 163, 74, 0.12)",
          textHighlight: "#3a4028",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSSFeed: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
