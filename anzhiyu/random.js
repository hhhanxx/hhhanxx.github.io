var posts=["2025/05/09/hello-world/","2025/05/09/CentOS更换yum源/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };