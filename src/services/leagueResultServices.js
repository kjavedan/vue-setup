import baseUrl from "./baseUrl";

const getLatestStream = () => {
    return baseUrl.get('/period/latest').then(res => res.data)
}

const getPageList = (area ,pageNum, pageSize) => {
    return baseUrl.post('/period/pageList', {
        area,
        pageNum,
        pageSize
    }).then(res => res.data)
}
const leagueResultServices = {
    getLatestStream,
    getPageList,
}

export default leagueResultServices