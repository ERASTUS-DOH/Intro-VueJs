const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName:''

    };
  },
  methods:{
    updateName(){
      this.name = "Welcome";
      console.log("i have been called");
    },
    setConfirmedName(){
      this.confirmedName = this.name;
    },
    subMethod(){
      alert("form-submitted");
    },
    setNameValue(event, lastName){
      this.name = event.target.value;
    },
    increaseCounter(incrementer){
      this.counter += incrementer;
    },
    decreaseCounter(decrement){
      this.counter -= decrement;
    },
    resetInput(){
      this.name = '';
    }
  },
  computed:{
    outPutFullName() {
      console.log('Running again')
      if(this.name === ''){
        return '';
      }
      return this.name + ' ' + 'Doh';
    }
  }
});

app.mount('#events');
