import axios from "axios";

const findBooks = async (searchData) => {
  const result = await axios(
    `https://hn.algolia.com/api/v1/search?query=${searchData}`
  );
  return result.data.hits.filter((i) => i.relevancy_score > 8000);
};

export default findBooks;
