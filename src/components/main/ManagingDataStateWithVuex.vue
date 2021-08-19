
<!-------------------------------------------------Template------------------------------------------------->
<template>
    <div class="container">
        <div class="mt-5 mb-3">
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title">Managing Data State With Vuex</h4>
                </div>
                <div class="card-body p-5"> 

                    <h6>Players</h6>
                    <div v-if="players.length > 0">
                        <div class="card mb-3" v-for="player in players" :key="player.id">
                            <div class="row g-0">
                                <div class="col-md-4 text-center">
                                    <img src="@/assets/images/football.jpg" class="img-fluid rounded-start h-100" alt="Image">
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">{{player.name}}</h5>
                                        <p class="card-text">{{player.club}}</p>                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <p class="text-muted text-center p-5">No playes found</p>
                    </div>


                </div>

                <div class="card-footer">            
                </div>

            </div>
        </div>
    </div>
</template>
<!-------------------------------------------------./Template------------------------------------------------->


<!-------------------------------------------------Script------------------------------------------------->
<script>

    //Imports
    import {mapState} from 'vuex';

    //Exports
    export default {
        name: 'Players',
        data() {
            return {

            };
        },

        //Methods
        methods: {

            async loadPlayers(){
                //Get Vuex data from store
                //this.players = this.$store.state.players 
                await this.$store.dispatch('getPlayers');
            },

        },

        computed:{
            //METHOD 1: Get state data to our local component
            // players(){
            //     //Get hero state data
            //     return this.$store.state.players
            // }
             //METHOD 2: Get state data to our local component
            // ...mapState({players: state => state.players}),
             //METHOD 3: Get state data to our local component
            // ...mapState({players: 'players'}),
             //METHOD 4: Get state data to our local component
            ...mapState(['players']),
        },


    };
</script>
<!-------------------------------------------------./Script------------------------------------------------->

