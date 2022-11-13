import axios from "axios";
import _api_v1 from "~~/src/api/v1/api";

const profileData = {
  getDataAsync: async () => {
    try {
      var data = {};
      const perdata = await getPrivateDataAsync();
      data["profile"] = perdata;
      return data;
    } catch (error) {
      console.error(error);
    }
  },
};

const getPrivateDataAsync = async () => {
  try {
    const requestData = {
      profile: "6356576147e428c26e3eaff0",
      // profile: "6356576147e428c26e3eaf23"
    };

    const perdata: any = await axios
      .get(_api_v1("/profile"), {
        headers: {
          "request-params": JSON.stringify(requestData),
        },
      })
      .catch((err) => {
        console.error(err);
      });

    const response: any = perdata.data;

    if (response?.OK === true) {
      return JSON.parse(response.data);
    } else {
      console.error(response?.message);
      return {};
    }
  } catch (error) {
    console.error(error);
  }
};

export { profileData };
