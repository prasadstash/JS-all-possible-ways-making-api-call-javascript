$(window).on("load", function () {

    $("#postBtn").on("click", function () {


        $.ajax({
            url: "https://reqres.in/api/users",
            type: "POST",
            data: {
                "name": $(name).val(),
                "job" : $(job).val()
            },
            headers: {
                token: "",
            },
            
            success: function (response, status) {
                console.log({ response, status });
            },
            error: function (error, status) {
                console.log({ error, status });
            }
        });
    })

});