// jshint esversion:6

const express = require("express");

const bodyParser = require("body-parser");

const request = require("request");

const https = require("https");
// const { MemoryCookieStore } = require("tough-cookie");
// const { log, Console } = require("console");

const app = express();

app.use(express.static("public"));
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/css/civil', express.static(__dirname + 'public/css/civil'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/html', express.static(__dirname + 'public/html'))
app.use(bodyParser.urlencoded({extended: true}));

// views
app.set('views', './views');
app.set('view engine', 'ejs');



app.get("/", function(req, res){
    res.render("index")
});

app.get("/index", function(req, res){
    res.render("index")
});

app.get("/success", function(req, res){
    res.render("success")
});

app.get("/failure", function(req, res){
    res.render("failure")
});

app.get("/about", function(req, res){
    res.render("about")
});

app.get("/contact", function(req, res){
    res.render("contact")
});

app.get("/profile", function(req, res){
    res.render("profile")
});

app.get("/background", function(req, res){
    res.render("background")
});
app.get("/civil", function(req, res){
    res.render("civil")
});
app.get("/mech", function(req, res){
    res.render("mech")
});
app.get("/ece", function(req, res){
    res.render("ece")
});
app.get("/ece/", function(req, res){
    res.render("ece")
});
app.get("/eee", function(req, res){
    res.render("eee")
});
app.get("/cse", function(req, res){
    res.render("cse")
});
// rendering civil from views to publuc/
app.get("/civil/civil-01", function(req, res){
    res.render("civil/civil-01")
});
app.get("/civil/civil-02", function(req, res){
    res.render("civil/civil-02")
});
app.get("/civil/civil-03", function(req, res){
    res.render("civil/civil-03")
});
app.get("/civil/civil-04", function(req, res){
    res.render("civil/civil-04")
});
app.get("/civil/civil-05", function(req, res){
    res.render("civil/civil-05")
});
app.get("/civil/civil-06", function(req, res){
    res.render("civil/civil-06")
});
app.get("/civil/civil-07", function(req, res){
    res.render("civil/civil-07")
});
app.get("/civil/civil-08", function(req, res){
    res.render("civil/civil-08")
});



// ece docs
app.get("/ece/ece-01", function(req, res){
    res.render("ece/ece-01")
});
app.get("/ece/ece-02", function(req, res){
    res.render("ece/ece-02")
});
app.get("/ece/ece-03", function(req, res){
    res.render("ece/ece-03")
});
app.get("/ece/ece-04", function(req, res){
    res.render("ece/ece-04")
});
app.get("/ece/ece-05", function(req, res){
    res.render("ece/ece-05")
});
app.get("/ece/ece-06", function(req, res){
    res.render("ece/ece-06")
});
app.get("/ece/ece-07", function(req, res){
    res.render("ece/ece-07")
});
app.get("/ece/ece-08", function(req, res){
    res.render("ece/ece-08")
});

// eee docs
app.get("/eee/eee-01", function(req, res){
    res.render("eee/eee-01")
});
app.get("/eee/eee-02", function(req, res){
    res.render("eee/eee-02")
});
app.get("/eee/eee-03", function(req, res){
    res.render("eee/eee-03")
});
app.get("/eee/eee-04", function(req, res){
    res.render("eee/eee-04")
});
app.get("/eee/eee-05", function(req, res){
    res.render("eee/eee-05")
});
app.get("/eee/eee-06", function(req, res){
    res.render("eee/eee-06")
});
app.get("/eee/eee-07", function(req, res){
    res.render("eee/eee-07")
});
app.get("/eee/eee-08", function(req, res){
    res.render("eee/eee-08")
});

// mech docs
app.get("/mech/mech-01", function(req, res){
    res.render("mech/mech-01")
});
app.get("/mech/mech-02", function(req, res){
    res.render("mech/mech-02")
});
app.get("/mech/mech-03", function(req, res){
    res.render("mech/mech-03")
});
app.get("/mech/mech-04", function(req, res){
    res.render("mech/mech-04")
});
app.get("/mech/mech-05", function(req, res){
    res.render("mech/mech-05")
});
app.get("/mech/mech-06", function(req, res){
    res.render("mech/mech-06")
});
app.get("/mech/mech-07", function(req, res){
    res.render("mech/mech-07")
});
app.get("/mech/mech-08", function(req, res){
    res.render("mech/mech-08")
});


// cse docs
app.get("/cse/cse-01", function(req, res){
    res.render("cse/cse-01")
});
app.get("/cse/cse-02", function(req, res){
    res.render("cse/cse-02")
});
app.get("/cse/cse-03", function(req, res){
    res.render("cse/cse-03")
});
app.get("/cse/cse-04", function(req, res){
    res.render("cse/cse-04")
});
app.get("/cse/cse-05", function(req, res){
    res.render("cse/cse-05")
});
app.get("/cse/cse-06", function(req, res){
    res.render("cse/cse-06")
});
app.get("/cse/cse-07", function(req, res){
    res.render("cse/cse-07")
});
app.get("/cse/cse-08", function(req, res){
    res.render("cse/cse-08")
});


app.post("/", function(req, res) {

    var firstName = req.body.name;
    // var lastName = req.body.lname;
    var eMail = req.body.email;
    var comment = req.body.message;

    var data = {
        members: [

            {   
                email_address: eMail,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    // LNAME: lastName,
                    MMERGE6: comment
                }

            }
        ]
    };

         var jsonData = JSON.stringify(data);

         var url = "https://us21.api.mailchimp.com/3.0/lists/5b870f8782";

    var options = {
        method: "POST",
        auth: "KalaiVanan:b490c1113f57715416a54966b07c4cbe-us21"

    }

    const request =  https.request(url, options, function(response){

        if(response.statusCode==200) {
            res.sendFile(__dirname+ '/success.html');
          } else {
            res.sendFile(__dirname+ '/failure.html');
        }
        response.on("data", function(data){
            console.log(JSON.parse(data));
        })
     })

     request.write(jsonData);
     request.end();

    
});


app.post("/contact", function(req, res) {

    var firstName = req.body.name;
    // var lastName = req.body.lname;
    var eMail = req.body.email;
    var comment = req.body.message;

    var data = {
        members: [

            {   
                email_address: eMail,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    // LNAME: lastName,
                    MMERGE6: comment
                }

            }
        ]
    };

         var jsonData = JSON.stringify(data);

         var url = "https://us21.api.mailchimp.com/3.0/lists/5b870f8782";

    var options = {
        method: "POST",
        auth: "KalaiVanan:b490c1113f57715416a54966b07c4cbe-us21"

    }

    const request =  https.request(url, options, function(response){

        if(response.statusCode==200) {
            res.sendFile(__dirname+ '/success.html');
          } else {
            res.sendFile(__dirname+ '/failure.html');
        }
        response.on("data", function(data){
            console.log(JSON.parse(data));
        })
     })

     request.write(jsonData);
     request.end();

    
});


app.listen(process.env.PORT || 5050, function(){
    console.log("Server is Started on port 5050");
});


// b490c1113f57715416a54966b07c4cbe-us21

// 5b870f8782