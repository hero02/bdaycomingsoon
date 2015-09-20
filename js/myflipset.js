var finalTime = new Date('October 20, 2015 12:00:00');
var currentDate = new Date();

var dm = finalTime.getTime() - currentDate.getTime();
var ds = (dm/1000);

var clock = $('.countdown').FlipClock({
// ... your options here
    clockFace: 'DailyCounter' 
});

clock.setTime(ds);
clock.setCountdown(true);