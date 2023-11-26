function domainName(url){
    url = url.replace("https://", ''); //del start url
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0]; //return domain
  };
  console.log(domainName('www.yandex.ru'))