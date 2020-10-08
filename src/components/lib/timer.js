export const MSLTimer = {
    startCountdown: (hours, minutes, callback) => {
     hours = hours || 0;
     minutes = minutes || 0;
     minutes = minutes + (hours * 60);

     let interval = 1000;

     function countdown() {

         if (minutes === 0) {
             clearInterval(interval);
         } else {
             minutes--;
         }
         callback(minutes);
     }

     interval = setInterval(function () {
         countdown();
     }, 60000);

     countdown();
     return interval;
    },

    pauseCountdown: (intervalId) => {
        clearInterval(intervalId);
    },

    stopCountdown: (intervalId) => {
        clearInterval(intervalId);
    },

    remainingTime: (minutes) => {
        return {
            'hh': minutes / 60 | 0,
            'mm': (minutes % 60 | 0),
            'running': (minutes > 0)
        };
    }
}