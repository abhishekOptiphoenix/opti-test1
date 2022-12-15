const settings = {
  "name": "f1",
  "state": {
    "frontity": {
      "url": "https://optiphoenix.com/",
      "title": "Optiphoenix",
      "description": "Get multichannel approach to customer experience by using conversion rate optimization service that includes a/b testing and experimentation approach."
    }
  },
  "packages": [
    {
      "name": "@awsmin/f1",
      "state": {
        "theme": {
          "menu": [
            ["Services", ""],
            ["Blog", "/blogs/"],
            ["About us", "/about-us/"],
            ["Careers", "/jobs/"],            
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          },
          // Whether to auto-fetch links on a page. Values can be "no" | "all" | "in-view" | "hover"
          autoPrefetch: "hover"
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://new.optiphoenix.com/wp-json",
          redirections: "404",
          "homepage": "/",
          "postsPage":"/blogs"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "frontity-contact-form-7",
    "@awsmin/frontity-wp-job-openings"
  ]
};

export default settings;
