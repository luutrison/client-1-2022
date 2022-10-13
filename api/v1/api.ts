const connectToServer = "https://server-1-2022.herokuapp.com/v1/"

const _api_v1 = (sub:string) => {
    return connectToServer + sub
}

export default _api_v1