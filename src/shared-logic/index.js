import images from "../back-end/images-meta-data.json";
import collections from "../back-end/collections.json";

const BASE_URL =
  "https://res.cloudinary.com/dj9h13qsc/image/upload/wallpapers-wave/";
const BASE_URL_50 =
  "https://res.cloudinary.com/dj9h13qsc/image/upload/q_50/wallpapers-wave/";
const BASE_URL_small =
  "https://res.cloudinary.com/dj9h13qsc/image/upload/w_500/q_auto/f_auto/wallpapers-wave/";
const BASE_URL_download =
  "https://res.cloudinary.com/dj9h13qsc/image/upload/q_auto/fl_attachment/wallpapers-wave/";

export default {
  BASE_URL,
  BASE_URL_small,
  BASE_URL_50,
  BASE_URL_download,
  images,
  collections,
};
