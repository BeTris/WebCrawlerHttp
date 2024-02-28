function normalizeURL(urlString) {
    const urlObj = new URL(urlString)
    console.log(urlObj.hostname+urlObj.pathname)
    return `${urlObj.hostname}${urlObj.pathname}`
}

module.exports = {
    normalizeURL, expect
}