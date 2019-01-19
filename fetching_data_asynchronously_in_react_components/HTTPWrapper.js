import axios from "axios";

class HTTPWrapper {
  get = ({ url, config } = {}) =>
    new Promise((resolve, reject) => {
      axios
        .get(url, config)
        .then(response => {
          resolve(response);
        })
        .catch(errors => {
          reject(errors);
        });
    });
}

export default new HTTPWrapper();
