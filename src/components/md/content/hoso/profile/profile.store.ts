import axios from "axios";
import _api_v1 from "~~/src/api/v1/api";

const profileData = {
  getDataAsync: async () => {
    try {
      var data = {};
      const perdata = await getPrivateDataAsync();
      console.log(perdata);

      data["profile"] = perdata;
      return data;
    } catch (error) {
      console.error(error);
    }
  },
};

const getPrivateDataAsync = async () => {
  try {
    const postData = {
      profile: "6356576147e428c26e3eaff0",
      // profile: "6356576147e428c26e3eaf23"
    };
    const perdata: any = await axios
      .post(_api_v1("/profile"), postData, {
        headers: { "Content-Type": "application/json" },
      })
      .catch((err) => {
        console.error(err);
      });

    console.log(JSON.parse(perdata.data.data), "perdata");

    const response = perdata.data;

    if (response.OK === true) {
      return JSON.parse(perdata.data.data);
    } else {
      console.error(response.message);
      return {}
    }
  } catch (error) {
    console.error(error);
  }
};

export { profileData };
