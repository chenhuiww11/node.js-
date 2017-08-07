/**
 * http get网络请求封装
 * @param {string} 域名 
 * @param {obj} 参数 
 * @param {string} 接口路径 
 * @param {bool} true http 请求 false 是否为https
 * @returns 
 */
function httpGet(GET方式请求)(host, data, path, status) {
    var options = {
        host: host,
        port: 80,
        path: path + querystring.stringify(data),
        method: 'GET',
        encoding: null,
        headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.96 Safari/537.36'
        }
    };
    //判断是否为https请求
    if (status) {
        http = require('https');
        options.port = 443
    }

    return new Promise(function(resolve, reject) {
        let body = "";
        var get_req = http.request(options, function(response) {
            //response.setEncoding('utf8');
            response.on("data", function(chunk) {
                body += chunk;
            })

            response.on('end', () => {
                resolve(body)
            })

            response.on('error', err => {
                reject(err)
            })
        })
        get_req.end();
    });
}