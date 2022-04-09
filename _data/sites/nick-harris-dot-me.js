module.exports = {
  name: "nickharris.me", // optional, falls back to object key
  description: "Nick’s personal website",
  skip: false,
  options: {
    frequency: 60 * 23, // 23 hours
    // Use "run" if the sites don’t share assets on the same origin
    //           and we can reset chrome with each run instead of
    //           each site in every run (it’s faster)
    // Use "site" if sites are all on the same origin and share assets.
    freshChrome: "site",
  },
  urls: [
    "https://www.nickharris.me/",
    "https://www.nickharris.me/weekly-jams",
    "https://www.nickharris.me/discography",
    "https://www.nickharris.me/colophon",
    "https://www.nickharris.me/shows",
    "https://www.nickharris.me/jams/dont-drop-me", // one of the daily jams
  ],
};
// last deployed 4/9/2022
