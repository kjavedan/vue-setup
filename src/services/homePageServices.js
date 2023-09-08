import baseUrl from "./baseUrl";

const getLiveStreams = (area) => {
    return baseUrl.get('/live/channel/getChannelByArea?area=' + area).then(res => res.data)
}
const getStreamToken = (data) => {
    return baseUrl.post('/shengwang/getToken', data).then(res => res.data)
}

const homePageServices = {
    getLiveStreams,
    getStreamToken
}

export default homePageServices