const getUrls = require("../../utils/fetch-urls");

// "https://rheaply.com/project-sitemap.xml" (blog templates sitemap), currently would add too many pages to check.
const sitemaps = ["https://rheaply.com/page-sitemap.xml"];

async function getAllUrls() {
  let urls = [];
  await Promise.all(
    sitemaps.map(async (sitemap) => {
      const allUrls = await getUrls(sitemap);
      allUrls.forEach((url) => urls.push(url));
    })
  );
  return urls;
}

module.exports = async function () {
  return {
    name: "rheaply.com", // optional, falls back to object key
    description: "Rheaply marketing web site",
    skip: false,
    options: {
      frequency: 60 * 23, // 23 hours
      // Use "run" if the sites don’t share assets on the same origin
      //           and we can reset chrome with each run instead of
      //           each site in every run (it’s faster)
      // Use "site" if sites are all on the same origin and share assets.
      freshChrome: "site",
    },
    urls: await getAllUrls(),
  };
};

// old
// const urls = await getAllUrls();

// const urls = [
//   "https://rheaply.com/resources/",
//   "https://rheaply.com/resources/blog/circularity-gap/",
//   "https://rheaply.com/resources/blog/circularity20/",
//   "https://rheaply.com/resources/blog/rheaply-partners-with-jellyvision/",
//   "https://rheaply.com/resources/blog/rheaply-splc-award/",
//   "https://rheaply.com/resources/blog/lessons-from-ce100-closing-the-circular-economy-loop-by-redesigning-waste-production/",
//   "https://rheaply.com/resources/blog/uchicago-lab-clean-out/",
//   "https://rheaply.com/resources/webinars/verge-19/",
//   "https://rheaply.com/resources/blog/aashe-2019-recap/",
//   "https://rheaply.com/resources/blog/transitioning-to-a-global-circular-mindset/",
//   "https://rheaply.com/resources/blog/how-to-build-a-circular-lab/",
//   "https://rheaply.com/resources/blog/how-to-manage-surplus/",
//   "https://rheaply.com/resources/blog/eu-circular-economy-action-plan/",
//   "https://rheaply.com/resources/blog/swipesense-interview/",
//   "https://rheaply.com/resources/blog/how-to-transition-to-greener-lab-practices/",
//   "https://rheaply.com/resources/podcasts/rheaply-on-rethink-global-podcast/",
//
//   "https://rheaply.com/resources/event-presentations/network-effect-from-neural-circuits-to-circular-economies/",
//   "https://rheaply.com/resources/blog/rheaply-swalco-partnership/",
//   "https://rheaply.com/",
//   "https://rheaply.com/contact-old/",
//   "https://rheaply.com/contact/",
//   "https://rheaply.com/register/",
//   "https://rheaply.com/features/",
//   "https://rheaply.com/solutions/workplace-resources/",
//   "https://rheaply.com/solutions/state-and-local-government/",
//   "https://rheaply.com/solutions/construction-demolition/",
//   "https://rheaply.com/about-us/",
//   "https://rheaply.com/solutions/",
//   "https://rheaply.com/careers/",
//   "https://rheaply.com/features-2/",
//   "https://rheaply.com/solutions/public-sector/",
//   "https://rheaply.com/terms/professional-services/",
//   "https://rheaply.com/terms/terms-of-service/",
//   "https://rheaply.com/terms/privacy-statement/",
//   "https://rheaply.com/press/",
//   "https://rheaply.com/partnership/",
//   "https://rheaply.com/resources-library/chicago-ppe-market/",
//   "https://rheaply.com/blog/",
//   "https://rheaply.com/about-us/leadership/",
//   "https://rheaply.com/terms/",
//   "https://rheaply.com/terms/pre-9-11-2021-terms-of-service/",
//   "https://rheaply.com/events-old/",
//   "https://rheaply.com/circular-economy/",
//   "https://rheaply.com/resources-library/",
//   "https://rheaply.com/engagement-launch-mit/",
//   "https://rheaply.com/get-reuse-action-plan/",
//   "https://rheaply.com/events-archive/",
//   "https://rheaply.com/events/",
//   "https://rheaply.com/connected-circular-cities/",
//   "https://rheaply.com/compare/",
//   "https://rheaply.com/ambassadors/",
//   "https://rheaply.com/accessibility/",
//   "https://rheaply.com/reuse/",
//   "https://rheaply.com/resources-library/mit/",
//   "https://rheaply.com/resources-library/biopharma-case-study/",
//   "https://rheaply.com/resources-library/google-rews/",
//   "https://rheaply.com/reuse-pledge/",
// ];
// extra blog posts
// [
// "https://rheaply.com/resources/blog/production-studio/",
// "https://rheaply.com/resources/news/epa/",
// "https://rheaply.com/resources/podcasts/upstream-indisposable-podcast/",
// "https://rheaply.com/resources/news/chicago-innovation-award/",
// "https://rheaply.com/resources/blog/deconstruction/",
// "https://rheaply.com/resources/case-studies/barnard-green-sale/",
// "https://rheaply.com/resources/blog/working-in-chicago/",
// "https://rheaply.com/resources/news/intuit-climate-action-marketplace/",
// "https://rheaply.com/resources/blog/maddie-sullivan/",
// "https://rheaply.com/resources/blog/textile-waste/",
// "https://rheaply.com/resources/news/builders-innovators-summit/",
// "https://rheaply.com/resources/news/civstart/",
// "https://rheaply.com/resources/blog/greenbuild-21/",
// "https://rheaply.com/resources/news/reusies/",
// "https://rheaply.com/resources/news/city-of-san-francisco/",
// "https://rheaply.com/resources/news/eki-digital/",
// "https://rheaply.com/resources/news/connie-kim/",
// "https://rheaply.com/resources/news/board-of-directors-announcement/",
// "https://rheaply.com/resources/event-presentations/inclusive-circular-economy/",
// "https://rheaply.com/resources/news/sapio-foundry-fall-2020/",
// "https://rheaply.com/resources/news/ellen-macarthur-foundation/",
// "https://rheaply.com/resources/blog/sharing-economy/",
// "https://rheaply.com/resources/blog/stephanie-guzman/",
// "https://rheaply.com/resources/blog/circularity-21/",
// "https://rheaply.com/resources/news/climate-innovation-fund/",
// "https://rheaply.com/resources/news/welcome-daniel-kietzer/",
// "https://rheaply.com/resources/podcasts/startup-hustle/",
// "https://rheaply.com/resources/podcasts/carbotnic-podcast/",
// "https://rheaply.com/resources/blog/ivaldi/",
// "https://rheaply.com/resources/blog/cogniac-qa/",
// "https://rheaply.com/resources/blog/sustainable-development-goals/",
// "https://rheaply.com/resources/webinars/forefront/",
// "https://rheaply.com/resources/case-studies/sp-100-biopharma-case-study/",
// "https://rheaply.com/resources/case-studies/google-rews-case-study/",
// "https://rheaply.com/resources/case-studies/mit-case-study/",
// "https://rheaply.com/resources/podcasts/get-real-podcast/",
// "https://rheaply.com/resources/blog/letter/2020-holiday-message/",
// "https://rheaply.com/resources/event-presentations/demo-day/",
// "https://rheaply.com/resources/blog/chicago-small-business/",
// "https://rheaply.com/resources/podcasts/supply-chain-revolution/",
// "https://rheaply.com/resources/product-release/emergency-resource-exchange/",
// "https://rheaply.com/resources/webinars/greenbiz-discussion/",
// "https://rheaply.com/resources/webinars/sr4-partners-discussion/",
// "https://rheaply.com/resources/podcasts/gigging-podcast/",
// "https://rheaply.com/resources/podcasts/technori-podcast/",
// "https://rheaply.com/resources/webinars/circular-cities/",
// "https://rheaply.com/resources/event-presentations/rheaplys-chicago-ppe-market-featured-on-chi-hack-night/"
// ]
