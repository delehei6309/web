server {
    listen       8089;
  
   server_name  localhost;
    location ~* ^.+land.+\.(html)$ {  
        root  /gitHub/h5-landing-page/html;
        add_header Cache-Control 'no-store';
        allow all; 
    } 

    location ~* ^.+land.+\.(css|js|txt|xml|swf|wav|png|jpg|json|woff|ttf)$ {  
        root  /gitHub/h5-landing-page;
        access_log   off;  
        expires      30d;  
    }
}
