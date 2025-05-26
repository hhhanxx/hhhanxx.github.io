var posts=["2025/05/09/CentOS更换yum源/","2025/05/09/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };