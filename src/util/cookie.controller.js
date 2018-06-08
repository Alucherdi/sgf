class CookieController{
	static getAll() {
		var rawCookies = document.cookie.split("; ")
		var cookies = {}
		for (var rawCookie of rawCookies) {
			var cookie = rawCookie.split("=")
			cookies[cookie[0]] = cookie[1]
		}

		return cookies
	}

    static get(key) {
		return this.getAll()[key]
	}
	
	static set(key, value) {
		document.cookie(`${key}=${value}`)
	}

    static remove(key) {
        document.cookie = `${key}= ; expires=${new Date()} ;`
    }

    static exist(key) {
        return document.cookie.includes(key)
    }
}

export default CookieController