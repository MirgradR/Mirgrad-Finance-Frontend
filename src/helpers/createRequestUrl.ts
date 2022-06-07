export const createRequestUrl = (filters: any) => {
    let url = '?'
    for (let key in filters) {
        url += key + '=' + filters[key] + '&'
    }
    return url.slice(0, -1)
}
