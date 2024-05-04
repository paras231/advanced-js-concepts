import cheerio from "cheerio";
import axios from "axios";

export async function cheerioScrapper(url) {
  try {
    const res = await axios.get(url);
    
    const $ = cheerio.load(res.data);
    
    const images = [];
    $("img").each((index,elm) => {
      const src = $(elm).attr("src");
      images.push(src);
    });
    return images;
  } catch (error) {
    console.log(error);
    console.log("Error getting images: " + error.message);
    return [];
  }
}
