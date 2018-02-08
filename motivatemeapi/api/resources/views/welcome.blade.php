<!DOCTYPE html>
<html>
    <head>
        <title>Laravel</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <link href="https://fonts.googleapis.com/css?family=Lato:100" rel="stylesheet" type="text/css">
        <script src="{{asset('aes.js')}}"></script>

        <style>
            html, body {
                height: 100%;
            }

            body {
                margin: 0;
                padding: 0;
                width: 100%;
                display: table;
                font-weight: 100;
                font-family: 'Lato';
            }

            .container {
                text-align: center;
                display: table-cell;
                vertical-align: middle;
            }

            .content {
                text-align: center;
                display: inline-block;
            }
 
            .title {
                font-size: 96px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="content">
                <div class="title">Laravel 5</div>
                <input id="email" type="email" >
                <a class="waves-effect waves-light btn right" style="margin-right: 117px;" onclick="submitEmail();">Submit Email</a>

                <a class="waves-effect waves-light btn right submit-email-btn" style="margin-right: 117px;">here</a>
            </div>

            <a class="waves-effect waves-light btn right" style="margin-right: 117px;" onclick="checkEmail();">Check Email</a>
        </div>
    </body>
</html>

<script>
    function submitEmail(){
        var emailId = $("#email").val();
        var finalUrl = "api/user/"+emailId;
         $.ajax({
            url: finalUrl,           
            success: function(result){
            alert(result);
    }});
    }

    $(".submit-email-btn").on('click',function(){
    alert("here");
});

    function checkEmail(){
        var id = 12; // A random variable for this example

        $.ajax({
            method: 'POST', // Type of response and matches what we said in the route
            url: 'http://localhost:8000/test/', // This is the url we gave in the route
            data: {'id' : id}, // a JSON object to send back
            success: function(response){ // What to do if we succeed
                console.log(response); 
            },
            error: function(jqXHR, textStatus, errorThrown) { // What to do if we fail
                console.log(JSON.stringify(jqXHR));
                console.log("AJAX error: " + textStatus + ' : ' + errorThrown);
            }
        });
    }
</script>