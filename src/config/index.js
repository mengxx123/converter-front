let debug = process.env.NODE_ENV !== 'production'

let imgDomain
let apiDomain
let apiDomain2
if (process.env.NODE_ENV === 'production') {
    imgDomain = 'http://120.79.29.47'
    apiDomain = 'https://nodeapi2.yunser.net'
    apiDomain2 = 'https://nodeapi.yunser.com'
} else {
    imgDomain = 'http://120.79.29.47'
    apiDomain = 'http://localhost:1028'
    // apiDomain = 'https://nodeapi2.yunser.net'
    apiDomain2 = 'http://localhost:1026'
}

module.exports = {
    imgDomain,
    apiDomain,
    apiDomain2,
    debug
}
