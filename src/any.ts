import axios from "axios";

export {};

axios
  .get("http://udemy-utils.herokuapp.com/api/v1/articles?token=token123")
  .then(function (response) {
    interface Article {
      id: number;
      title: string;
      description: string;
    }
    // handle success
    let data: Article[];
    data = response.data;
    console.log(data);
  });
