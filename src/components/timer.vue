<template>
  <div class="counter" >
    <p>click "start" when moisture barrier bags are broken </p>
    <p>click "stop" when parts are soldered</p>
    
    <div class="cntr">
    <div class="column" id="left-column">
      <button
        id="counter-start"
        class="btn"
        :disabled="isStartDisabled"
        @click="runCountdown"
      >{{startLabel}}</button>
      <div class="datafield" id="date1"> Date: {{ new Date() | moment('DD.MM.YYYY') }}</div>
      <div class="datafield" id="time1" >Time: {{ new Date() | moment("h:mm a ") }}</div>
      <div class="datafield" id="user">By:</div>
  </div> 
  <div class="column" id="counter-timer">
      <span id="counter-counter">{{currentTime}}</span>
    </div>

<div class="column" id="right-column">
    <div class= "right-buttons"> <button
        id="counter-stop"
        class="btn"
        :disabled="isStopDisabled"
        @click="pauseCountdown"
      >{{stopLabel}}</button>
      <button
        id="counter-reset"
        class="btn"
        :disabled="isResetDisabled"
        @click="resetCountdown"
      >{{cancelLabel}}</button>
    </div>
        <div class="datafield" id="date2"> Date: {{ new Date() | moment('DD.MM.YYYY') }}</div>
      <div class="datafield" id="time2" >Time: {{ new Date() | moment("h:mm a ") }}</div>
      <div class="datafield" id="user">By:</div>
    </div>
  </div>
  </div>
</template>

<script>
import { MSLTimer } from "./lib/timer.js";



export default {
  name: "Timer",
  data() {
    return {
      hr: this.hours,
      min: this.minutes,
      timerId: 0,
      running: false,
      paused: false,
      stopped: true,
      
    };
  },
   
  props: {
    hours: {
      type: Number,
      validator: function(value) {
        return value >= 0 && value <= 60;
      },
      default: 72
    },
    minutes: {
      type: Number,
      validator: function(value) {
        return value >= 0 && value <= 59;
      },
      default: 0
    },
    
    startLabel: {
      type: String,
      default: "Start"
    },
    stopLabel: {
      type: String,
      default: "Stop"
    },
    cancelLabel: {
      type: String,
      default: "Cancel"
    },
   
   
  },
  computed: {
    currentTime: function() {
      let hours = this.hr < 10 ? "0" + this.hr : this.hr;
      let minutes = this.min < 10 ? "0" + this.min : this.min;
     // colorChanger()
      return `${hours}:${minutes}`;
    },

    isStartDisabled: function() {
      return this.running;
    },
    isStopDisabled: function() {
      return this.stopped || this.paused;
    },
    isResetDisabled: function() {
      return false;
    },
   
  },
  methods: {
   // colorChanger:function(hours,minutes){

      

  //  },
    run: function() {
      this.running = true;
      this.paused = false;
      this.stopped = false;
    },
    pause: function() {
      this.running = false;
      this.paused = true;
      this.stopped = false;
    },
    stop: function() {
      this.running = false;
      this.paused = false;
      this.stopped = true;
    },
    runCountdown: function() {
      if (this.stopped === true) {
       
        this.hr = this.hours;
        this.min = this.minutes;
      }
      this.timerId = MSLTimer.startCountdown(
        this.hr,
        this.min,
        this.updateComponentTime
      );
      this.run();
    },
    updateComponentTime: function(minutes) {
      let time = MSLTimer.remainingTime(minutes)
      ;
      this.hr = Number(time.hh);
      this.min = Number(time.mm);
      if (time.running === false) {
        this.stop();
       
      }
    },
    pauseCountdown: function() {
      MSLTimer.pauseCountdown(this.timerId);
      this.pause();
    },
    resetCountdown: function() {
      MSLTimer.stopCountdown(this.timerId);
      this.hr = this.hours;
      this.min = this.minutes;
      this.stop();
      
    },
    
  }
};
</script>

<style scoped>
.counter {
  display: block;
  width: 100%;
  margin: 0.5rem auto;
  color: black;
  
  text-align: center;
  padding: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
}
.counter, p{
  color:#c4c4c4;
}
.cntr {
  display: flex;
  align-items: center;
  justify-content: center;

}
.column{
  margin:25px;
}

.counter .btn {
  text-align: center;
  cursor: pointer;
  margin: 4px 2px;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  vertical-align: middle;
  font-weight: 600;
  color: #fefef5;
}
.datafield{
  text-align:left;
  margin:10px;
  padding: 0.175rem 0.75rem;
  border-radius: 20px;
  vertical-align: middle;
  background: #c4c4c4;
   color: black;

}
.counter #counter-label,
.counter #counter-timer {
  
  margin-bottom: 1rem;
}
.counter #counter-label {
  font-size: 1.5rem;
  color: #57749b;
  border-bottom: 1px solid #57749b;
}
.counter #counter-timer {
  font-size: 2.5rem;
  font-weight: 150;
 width: 120px;
  height: 120px;
  line-height: 120px;
  border-radius: 50%;
  color: black;
  text-align: center;
  background: #c4c4c4;
}
.counter #counter-start {
  background-color: #4a8f8f;
  border-color: #4a8f8f; /*#7adcc9;*/
}
.counter #counter-stop {
  background-color:#c4626c; 
  border-color:#c4626c /*#c17ec8;*/
}
.counter #counter-reset {
  background-color:#c99e00;
  border-color:#c99e00;
}
.counter #counter-start:disabled,
.counter #counter-stop:disabled,
.counter #counter-reset:disabled {
  background: #707070;
  border-color: #707070;
  cursor: not-allowed;
  color: #999999;
}




</style>