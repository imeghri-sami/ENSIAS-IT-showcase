import axios from "axios";

export const fetchImages = (page) => {
  return axios
    .get(`https://picsum.photos/v2/list?page=${page}&limit=20`)
    .then((res) => {
      return res.data;
    });
};

export const fetchRandomImage = () => {
  let randomId = Math.floor(Math.random() * 700);
  console.log(randomId);
  return axios
    .get(`https://picsum.photos/id/${randomId}/info`)
    .then((res) => res.data);
};
