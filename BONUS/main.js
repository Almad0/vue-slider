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

  methods: {

    next(){
      this.counter++;
      if(this.counter== this.images.length){
        this.counter = 0;
      }
    },

    prev(){
      if(this.counter > 0){
        this.counter--;
      } else {
        this.counter = this.images.length-1;
      }
    },

  }

});





















// fine
