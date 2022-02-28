const axios = require("axios");
const cheerio = require("cheerio");
// const url = "https://rheaply.com/page-sitemap.xml";
//
// "https://rheaply.com/page-sitemap.xml"
// "https://rheaply.com/project-sitemap.xml"

module.exports = async function getUrls(siteMapUrl) {
  let urlList;
  await axios(siteMapUrl)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html, {
        xmlMode: true,
      });
      const urlsString = $("loc").text();
      const pathList = urlsString.split("https").filter((url) => {
        return url.length > 0;
      });
      urlList = pathList.map((path) => {
        return `https${path}`;
      });
      return urlList;
    })
    .catch((error) => {
      console.log(error);
    });
  return urlList;
};
