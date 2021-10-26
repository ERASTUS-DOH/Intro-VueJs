const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.$refs.input.value;
    },
  },
});

app.mount('#app');

//leave the world of js.
let name = "Erastus";
let fullName = name + " Doh";
console.log(fullName);
name = "Erastus Elinam";
console.log(fullName);

const data = {
  details: "turtabl.io",
  newWorkPlace: " ,Goldman Sachs"

};

const handler = {
  set(target, key, value){
    if(key === target.details){
     console.log("Wow");
    }
    target.details = target.newWorkPlace;
  }
};

const proxy = new Proxy(data, handler);
proxy.details = "Google";
console.log(proxy.details);