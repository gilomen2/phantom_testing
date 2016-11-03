var myPage = {
  "id": 393918,
  "title": "How Will the Internet of Things Be Leveraged to Ruin Your Company’s Day? Understanding IoT Security",
  "publishDate": "October 13, 2016",
  "metaTags": [
    "onespot-cat-slug:https://securityintelligence.com/ciso-corner",
    "article:published_time:2016-10-13T08:37:45-04:00",
    "article:section:CISO",
    "onespot-cat-name:CISO",
    "HandheldFriendly:True",
    "description:The Internet of Things is here to stay. Despite the market's rapid growth and the high level of risk, many companies still neglect IoT security.",
    "generator:WordPress 4.5.3",
    "title:How Will the Internet of Things Be Leveraged to Ruin Your Company's Day? Understanding IoT Security",
    "fb:pages:203142616492561",
    "article:author:https://facebook.com/prevendrainc",
    "article:tag:Connected Devices",
    "twitter:card:summary",
    "twitter:title:How Will the Internet of Things Be Leveraged to Ruin Your Company's Day? Understanding IoT Security",
    "twitter:creator:@BurgessCT",
    "twitter:description:The Internet of Things is here to stay. Despite the market's rapid growth and the high level of risk, many companies still neglect IoT security.",
    "twitter:image:https://static.securityintelligence.com/uploads/2016/10/how-will-the-internet-of-things-be-leveraged-to-ruin-your-companys-day.jpg",
    "onespot-author-name:Christopher Burgess",
    "onespot-author-slug:https://securityintelligence.com/author/chris-burgess/",
    "viewport:width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
    "apple-mobile-web-app-capable:yes",
    "og:image:https://static.securityintelligence.com/uploads/2016/10/how-will-the-internet-of-things-be-leveraged-to-ruin-your-companys-day.jpg",
    "og:image:width:938",
    "og:type:article",
    "og:site_name:Security Intelligence",
    "og:title:How Will the Internet of Things Be Leveraged to Ruin Your Company's Day? Understanding IoT Security",
    "og:image:height:580",
    "og:locale:en_US",
    "og:url:https://securityintelligence.com/will-internet-things-leveraged-ruin-companys-day-understanding-iot-security/",
    "og:description:The Internet of Things is here to stay. Despite the market's rapid growth and the high level of risk, many companies still neglect IoT security.",
    "robots:noodp",
    "msapplication-TileImage:https://static.securityintelligence.com/uploads/2016/04/SI_primary_rgb.png",
    "article:tag:Distributed Denial-of-Service (DDoS) Attacks",
    "article:tag:Internet of Things (IoT)",
    "article:tag:Risk Management"
  ],
  "isVideo": false,
  "targetUrl": "https://securityintelligence.com/will-internet-things-leveraged-ruin-companys-day-understanding-iot-security",
  "clickUrl": "http://redirect.rec-engine.com/redirect?p=393918&r=9Ci42sWwRnSSpc6RLd5WLA&u=5468848907236396235&c=46&pid=6CGhpIJKZ0-AkmtD62FJHQ&channel=onsite&pageviewId=6CGhpIJKZ0-AkmtD62FJHQ&trackerId=D9pQUo74dkm5Z3sUHsU6TQ&url=https%3A%2F%2Fsecurityintelligence.com%2Fwill-internet-things-leveraged-ruin-companys-day-understanding-iot-security",
  "absoluteTargetUrl": "https://securityintelligence.com/will-internet-things-leveraged-ruin-companys-day-understanding-iot-security",
  "absoluteClickUrl": "http://redirect.rec-engine.com/redirect?p=393918&r=9Ci42sWwRnSSpc6RLd5WLA&u=5468848907236396235&c=46&pid=6CGhpIJKZ0-AkmtD62FJHQ&channel=onsite&pageviewId=6CGhpIJKZ0-AkmtD62FJHQ&trackerId=D9pQUo74dkm5Z3sUHsU6TQ&url=https%3A%2F%2Fsecurityintelligence.com%2Fwill-internet-things-leveraged-ruin-companys-day-understanding-iot-security",
  "metaDescription": "The Internet of Things is here to stay. Despite the market's rapid growth and the high level of risk, many companies still neglect IoT security.",
  "cloudinaryImageId": "b9cfe1321865e31aebae83bc3bd84937",
  "cloudinaryImageFormat": "jpg"
}
var myArray = [];
function hasMethod() {
  return myArray.filter;
}

function parseCategory(page) {
  if (page) {
    if (!page.metaTags) {
      return;
    } else {
      let categoryMetaTags = page.metaTags.filter((metaTag) => {
        return metaTag.startsWith('onespot-cat-name');
      });
      let linkMetaTags = page.metaTags.filter((metaTag) => {
        return metaTag.startsWith('onespot-cat-slug');
      });
      let categoryMetaTag = categoryMetaTags.length > 0 ? categoryMetaTags[0] : '';
      let linkMetaTag = linkMetaTags.length > 0 ? linkMetaTags[0] : '';
      if (categoryMetaTag && linkMetaTag) {
        let categoryArray = categoryMetaTag.split(':');
        let linkArray = linkMetaTag.split(':');
        if (linkArray.length === 3) {
          linkArray.shift();
          let categoryLink = linkArray.join(':');
          return categoryArray.length === 2 && categoryLink ? {name: categoryArray[1], link: categoryLink} : '';
        } else {
          return '';
        }
      } else {
        return '';
      }
    }
  }
}

function sayHi() {
  return "Hi";
}
// console.log(parseCategory(myPage));
console.log("wtf");
