var gulp =require('gulp');

var webserver=require('gulp-webserver')

var url=require("url");

gulp.task("default",function(){
	gulp.src("./src")
		.pipe(webserver({
			livereload:true,
			directoryListing:true,
			port:9999,
			middleware:function(req,res,next){
				var pathName=url.parse(req.url).pathname;
				if (pathName=='/api') {
					var data=[
                      {
                      	id:1,
                      	src:"http://localhost:9999/img/1.png",
                      	size:"M",
                      	name:"后街一部",
                      	price:100,
                      	state:false,
                        num:1
                      },
                      {
                      	id:2,
                      	src:"http://localhost:9999/img/2.png",
                      	size:"M",
                      	name:"后街还好",
                      	price:200,
                      	state:false,
                        num:1
                      },
                      {
                      	id:3,
                      	src:"http://localhost:9999/img/3.png",
                      	size:"M",
                      	name:"后街三部",
                      	price:100,
                      	state:false,
                        num:1
                      }
					]
					res.writeHead(200,{
						'Content-type':"application/json;charset=UTF-8",
						"Access-Control-Allow-Origin":"*"
					})
					res.write(JSON.stringify(data))
					res.end()
				}
				next();
			},
			open: "/index.html"
		}))
})

			

