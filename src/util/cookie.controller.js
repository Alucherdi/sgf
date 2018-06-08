class CookieController{

    static add = (key, value) =>{
        document.cookie = key+"="+value
    }

    static get = (key) =>{
        var regex = RegExp(key+"[^;]+");
        return regex.test(document.cookie) ? regex.exec(document.cookie)[0].substr(key.length+1) : null;
    }

    static remove = (key) =>{
        document.cookie = key+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }

    static exists = (key) =>{
        return document.cookie.indexOf(key+"=") != -1 ? true : false;
    }

    static modify = (key, value) =>{
        document.cookie = key+"="+value
    }
}
export default CookieController;