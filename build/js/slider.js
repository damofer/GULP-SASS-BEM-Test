window.onload=function(){function e(e){for(var n=0;n<s.length;n++)s[n].className="banner__img hidden",i[n].className="banner__content hidden";m?m=!m:s[e].style.opacity=0,s[e].className="banner__img unhidden ",i[e].className="banner__content unhidden ",setTimeout(function(){s[e].style.opacity=1},1e3)}function n(){s[o].style.opacity=0,o<s.length-1?o+=1:o=0,setTimeout(function(){e(o),setTimeout(function(){s[o].style.opacity=1},1e3)},1e3)}function t(){s[o].style.opacity=0,o>0?o-=1:o=s.length-1,setTimeout(function(){e(o),setTimeout(function(){s[o].style.opacity=1},1e3)},1e3)}var a=document.getElementsByClassName("slider")[0],s=a.getElementsByClassName("banner__img"),i=a.getElementsByClassName("banner__content"),o=0,l=a.getElementsByClassName("banner__arrow__right")[0],c=a.getElementsByClassName("banner__arrow__left")[0],m=!0;l.onclick=n,c.onclick=t,e(o)};