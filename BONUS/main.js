let app = new Vue({

  el: "#root",

  data: {
    counter: 0,
    images: [
      "img/falcon.jpg",
      "img/jedi-starfighter.webp",
      "img/tie.webp",
      "img/y-wing.jpg",
      "img/x-wing.webp"
  ]
  },

  mounted: function nextImg() {
    this.$nextTick(function () {
      setInterval(this.next, 2000);
    })
  },

  mounted: function arrowFunc() {
    document.addEventListener("keyup", this.Arrow);
  },

  methods: {

    Arrow () {
      if (event.keyCode == 39) {
        this.next();
      } else if (event.keyCode == 37) {
        this.prev();
      };
    },

    next(){
      this.counter++;
      if(this.counter > this.images.length-1){
        this.counter = 0;
      }
    },

    prev(){
      this.counter--;
      if(this.counter < 0){
        this.counter = this.images.length-1;
      }
    }

  }

});





















// fine
