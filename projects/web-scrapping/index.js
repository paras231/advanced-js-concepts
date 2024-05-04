import { cheerioScrapper } from "./cheerioScrapper.js";
import { getDynamicImagesFromURL } from "./screentshotGetter.js";
// cheerioScrapper("https://www.linkedin.com/")
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

getDynamicImagesFromURL("https://www.seeandamans.com/")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
