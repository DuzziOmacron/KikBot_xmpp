const crypto = require("kik-node-api/src/cryptoUtils"),
      decode = require('unescape');

module.exports = (userJid, xmpp, isGroup) => {
    let timestamp = new Date().getTime(),
        id = crypto.generateUUID();
    let type = (isGroup ? "groupchat" : "chat");
    xmpp =  xmpp.replace(/{UUID}/g, id).replace(/{TS}/g, timestamp).replace(/{JID}/g, userJid).replace(/{TYPE}/g, type).replace(/{LONG}/g, `xmIns=\`\`SadigxH2l4YA5HCcH4jAZFG2tdQ6o3gJPKuaYDS6D62Hs8cuhLBzyoXxsqGQFkJiIyXDmebSI7l4xWQNmfvgJ29nK1wfgdLx7wWgb65osFLiK8yci2kWy2vrfiNryG1IVRaLaXELp13YFbI2WPDFf6zTVOd4JrYATkz5VdYWTLXYqvwinesH8wRFxLxZwvxkX4oKhLk5V8rUOaMrR8iafsFixbYDyYFsrW5ELDk8591TTpyTWUNsfTTcjYFrwhV3Fpo5u3AzWbZmXJEb6xslk33pS9P0W26rZ5quQ1iGRAT6SM6FrEnwunnu135D6zVRKBTjG8bxvN0RYjXNHxCKGgg8vRHiSIfEcGbabMJPcsM3fwgg92uNxro5YfD88Rj2R3CIB4ECifAAPLVlh8JLbwK84MJivvT0ukB09baieMWkiTemPP7cly1M3tcLPPnoBeDNl4MeBXD4aASTyQx19r6hon3vDeMsONI0ceaQZw992EPoCkLFZpVWFmKDU92gqFDeV0DIYuGL4abuwMVI4JJkPkcm6cJ9jZftSNgNQPjgE4amEaBqMgwic6UCsiyxfVJ30LHghccr7gL76bireZ8XTQG63hHO6EU25qej1zrkvkaofh26mumw3PIq1tmqFS2NrHSAQpsBlwOxIwdVdg39LqRyu8PuBVIMs8HCLCRBVllHRsn59QVbp1pzNZAXGXmRZlHqbhAaOofotNjJ1HBFuRfCoBNYaGqtDsQ9sP36Q9PXnTgwluON3YSv9qIAH5Z1d2K1sMpnMtvvsgQdsqQ7M23a7XC5IRQ6jqmDSseuWcXaLsHjapKO155FqDBKBnfIgmqvWt1F88zcNzlxhl1lI6guyV6pWoRKexTG1AMkgzRGyDmLz51U8W9XHAGgJotdsoudTotbYS6MUmH4l9EZN8nfiZaGn1yml6W64WxsszfbQXeAnKKwoCEdqk7oQa2I7rSEgpnHUVQG01KdlTRogTVYrL76Ej3TJte7tfkcGzKJh9OLhO2AukhwybaOQRConMl0kWsURiBsRbNuxnQwrGRtGdUY9JYRN2PYbwuOWFad7ykqh9Yy32o5vE5ac68AnvGyhioPmXUzD6pYFwtT6WDIEm2whIAMGPZXgQf2eHNSMZhT02DtcZjhcUxhDZweHkQJ7htcq3ksZVt7ZA0jbhGnOEWHEifLGvaxeZ5FpfRbm4QFfmdjZGDl1Eg1vHkdQNwwSzDmefWp7dlAhtFZHR21RTvNM3IomNWs5x3cdjOUDVorKLJUyzDgWHW1tN8qymCHh0MceI2lxR7LAv80cUCeF7jEYmp4XP2vlDFYMySsdRirf9aQHooDon1gwX0byY625442hWYJXfjCSdGPlrOL900I4I4T3AsKCPiZjE3tNcCH1NjRENc5fdWExXOd4Qk5I0LWQ0ho1vZKRZNQ4Mybhi8SrjfaMhJjKdSvsZnYa92PuuOlsM3FI7vxZeNzox2emDc6h0vxVgns9GQAbHAwOmqw2FBuHtzbVXMRTyn0ene3K6EfrN0InsuNCo81OnjwJ0XtYTZOFmLQXQwVDRLauLPcGYCHIk8pccJV7h8AER9d0ticvAb2uOxZ4PDvRZTQrGPd8Rok6DUly2VRSAk9LnfXibwWObfRkKiPxaQLJ3YADYUjdiqJ380xh1gS7hU9dYZntNCkGsxAP8XaH5AWpSbd1Zxxdp3ddb4srpB7eZWb85TKa1dDHQr2iUbiaz6YURNcRF3kQr1pGWGrMTCIRWVofEBgEit6ols3EkgsIMzPkMoiTliPDZnbbZYJlkmGVa3p2oVLiqqlIr5YLbY0I1m9TJ5lqb9eqSmFg1eDTbOSoAYPlfrmNoIDxBdswyERl88limbUXrOZp12VgZZfrItSTHLm1DStep8Za6yhoKv9amsUMZzJJvze2YTZ7nCvUyj6hXYY43BgBbWbH6AEhca3wIUU2OdMNGRL5vdKaC2c5cU6j6kCv5TyCBg9GSeGS`)

    return ({
        id: id,
        xml: xmpp
    });
};