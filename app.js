const app = Vue.createApp({
    data() {
        return{
            friends: [
                {
                    id: 'Elinam',
                    name: 'Erastus Doh',
                    telephone: '0241406244',
                    email: 'mawumelina41@gmail.com'
                }
            ],
        };
    }
});

app.component('friend-contact', {
    template:`
        <li>
           <h2>{{ friend.name }}</h2>
             <button @click="toggleVisibility()"> {{  detailAreVisible ? 'Hide' : 'Show'}} Details</button>
             <ul v-if="detailsAreVisible">
               <li><strong>Phone:</strong> {{friend.telephone}}</li>
               <li><strong>Email:</strong> {{friend.email}}</li>
             </ul>
        </li>`,

    data(){
        return{
            detailsAreVisible: false,
            friend: {
                id: 'manuel',
                name: 'Manuel Lorenz',
                telephone: '0241406244',
                email: 'erastusdoh@gmail.com'
            },
        };
    },
    methods:{
        toggleVisibility() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }

});
app.mount('#app');