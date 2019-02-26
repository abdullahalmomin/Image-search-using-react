import axios from "axios";
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID dd050932e3d145378a67aaffeaffbb5d5417782f7f3b43a1f35462735ebc3382"
  }
});
