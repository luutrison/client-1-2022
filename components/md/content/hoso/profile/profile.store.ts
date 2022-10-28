import axios from "axios";
import exp from "constants";
import _api_v1 from "~~/api/v1/api";

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
    const testid = "6356576147e428c26e3eaff0";
    const perdata: any = await axios
      .get(_api_v1("/profile/" + testid))
      .catch((err) => {
        console.error(err);
      });

    console.log(perdata.data);

    return JSON.parse(perdata.data);
  } catch (error) {
    console.error(error);
  }
};

export { profileData };
