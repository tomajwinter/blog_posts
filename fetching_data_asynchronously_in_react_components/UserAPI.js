import HTTPWrapper from "../utils/HTTPWrapper";

class UserAPI {
  getDataForUser = id =>
    HTTPWrapper.get({
      url: `my/external/service/v1/users/${id}`
    });
}

export default new UserAPI();
