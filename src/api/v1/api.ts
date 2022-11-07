const connectToServer = "http://localhost:3211/v1"
// const connectToServer = "https://xn--lu-tr-sn-g2a61pre.vn/v1"

const _api_v1 = (sub:string) => {
    return connectToServer + sub
}

export default _api_v1