import axios from "axios";

const API_ENDPOINT = 'https://reqres.in/api/users'

exports.handler = (event, context, callback) => {
  return axios.get(API_ENDPOINT)
    .then(response => {
      return {
        statusCode: 200,
        body: JSON.stringify(response.data)
      }
    })
    .catch(error => {
      console.log(error);
    })

};
