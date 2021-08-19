<!-------------------------------------------------Template------------------------------------------------->
<template>
    <div class="mt-5">
        <div class="container">
            <div class="p-4">
                <!-- Receive data via props -->
                <h4>Hero Details receied an id of {{id}}</h4>
                <a @click="goBack()" class="btn btn-success btn-sm">Go Back</a>
            </div>
        </div>
    </div>
</template>
<!-------------------------------------------------./Template------------------------------------------------->


<!-------------------------------------------------Script------------------------------------------------->
<script>

    //Exports
    export default {
        name: 'HeroDetails',
        props: {
            id: {
                type: Number,
                default: 0,//this.$router. params.id        
                
            },
        },

        //Methods
        methods:{
            goBack(){
                this.$router.push({name: 'InteractingWithComponents'})//Go back tot this page
            },
        },

    };
</script>
<!-------------------------------------------------./Script------------------------------------------------->

