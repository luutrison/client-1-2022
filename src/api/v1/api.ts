import { config } from "./config"


const _api_v1 = (sub:string) => {
    return config.url + sub
}

export default _api_v1