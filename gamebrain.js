$(document).ready(function() {

    /*  $(".yourgarbage").click(function() {
        addToScore();
        alert(score);
    });
    */

    $("#TrashBin").unbind().click(function() {

        checkIfMatch("Trash");
        console.log("Trash");

    });

    $("#RecycleBin").unbind().click(function() {

        checkIfMatch("Recycle");
        console.log("Recycle");
    });


    $("#CompBin").unbind().click(function() {

        checkIfMatch("Comp");
        console.log("Comp");
    });

    var trashTypes = ["Trash", "Comp", "Recycle"];
    var throwable = "Recycle";
    var score = 0;
    var throwables = [{
            type: "Trash",
            imgs: [
                "http://www.gadgetreview.com/wp-content/uploads/2016/11/Styrofoam-e1478299673318.jpg",
                "https://www.americandisposal.com/uploads/images/Wrappers.jpg",
                "https://s-media-cache-ak0.pinimg.com/originals/a8/aa/ac/a8aaacd56227a516f542451378657f4a.png",
            ]
        },

        {
            type: "Recycle",
            imgs: [
                "http://www.atlantaintownpaper.com/wp-content/uploads/2016/05/Glass_Recycling.jpg",
                "https://thumbs.dreamstime.com/x/crumpled-garbage-paper-ready-to-throw-away-15721455.jpg",
                "http://www.atlantaintownpaper.com/wp-content/uploads/2016/05/Glass_Recycling.jpg",

            ]
        }, {
            type: "Comp",
                imgs: [
                "http://www.photl.com/images/photos/2008/11/19/2354/wm85261tt.jpg",
                "http://dn0yjthv9eg9c.cloudfront.net/wp-content/uploads/2014/07/apple_core_3_Snapseed-560x373.jpg",
                "http://ucanr.edu/sites/Postharvest_Technology_Center_/files/230282.jpg",
            ]

        }
    ];

    function addToScore() {
        score = score + 1;
    }

    function subtractFromScore() {
        score = score - 2;
    }


    function checkIfMatch(binToCheck) {
        console.log("checkIfMatch");
        if (throwable === binToCheck) {
            addToScore();
            var snd = new Audio("sms-tone.mp3");
            snd.play();
            console.log(true);
        }

        else {
            subtractFromScore();
            var nope = new Audio("Wrong-answer-sound-effect.mp3");
            nope.play();
            console.log(false);
        }

        updateScoreCounter();

        changeYourGarbage();
    }

    function changeYourGarbage() {
        $(".throwable").removeClass(throwable);
        var newObject = throwables[Math.floor(Math.random() * throwables.length)];
        throwable = newObject.type;
        $("#throwableImg").attr("src", newObject.imgs[Math.floor(Math.random() * newObject.imgs.length)]);
        $(".throwable").addClass(throwable);


    }

    function updateScoreCounter() {
        $("#scoretext").html(score);
    }

    function startTimer(duration, display) {
        var timer = duration,
            minutes, seconds;
        setInterval(function() {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.text(minutes + ":" + seconds);

            if (--timer < 0) {
                timer = duration;
                console.log("Game Over");
                $('#myModal').modal();
                $('#userscore').text(score);
            }
        }, 1000);
    }
    
    $("#playAgain").click(function() { 
        window.location.reload(true);
    });

    jQuery(function($) {
        var time = 60,
            display = $('#timer');
        startTimer(time, display);
    });
    function showModal() {
        $("#myModal").modal('show').css({
    'margin-top': function () { //vertical centering
        return -($(this).height() / 2);
    },
    'margin-left': function () { //Horizontal centering
        return -($(this).width() / 2);
    }
});
    }
    changeYourGarbage();
});

