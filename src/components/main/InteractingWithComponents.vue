
<!-------------------------------------------------Template------------------------------------------------->
<template>
    <div class="container">
        <div class="mt-5 mb-3">
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title">Interacting with Components</h4>
                </div>
                <div class="card-body p-5"> 

                    <h6>Heroes</h6>
                    <div v-if="heroes.length > 0">
                        <div class="mb-3" v-for="hero in heroes" :key="hero.id">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title"><i class="fa fa-user-circle" aria-hidden="true"></i> 
                                    {{hero.firstName}}&nbsp;{{hero.lastName}}</h5>
                                    <p class="card-text">{{hero.description}}</p>
                                    <p>Date:&nbsp;<small class="text-muted">{{hero.originDate | myDate }}</small></p>
                                    <!-- Pass data via props -->
                                    <router-link :to="{name:'HeroDetails', params:{id: hero.id} }" class="btn btn-primary btn-sm">Details</router-link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div v-else>
                        <p class="text-muted text-center p-5">No hereos found</p>
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

    const ourHeroes = [
        {
            id: 10,
            firstName: 'Tom',
            lastName: 'Mboya',
            capeCounter: 1,
            originDate: new Date(1970, 5, 1),
            description: 'Trade worker',
        },
        {
            id: 20,
            firstName: 'Fred',
            lastName: 'Kubai',
            capeCounter: 3,
            originDate: new Date(1960, 7, 1),
            description: 'Mau-mau fighter',
        },
        {
            id: 30,
            firstName: 'Dadan',
            lastName: 'Kimathi',
            capeCounter: 2,
            originDate: new Date(1958, 8, 1),
            description: 'Mau-mau fighter',
        },
        {
            id: 40,
            firstName: 'Achieng',
            lastName: 'Oneko',
            capeCounter: 0,
            originDate: new Date(1956, 9, 1),
            description: 'Trade worker',
        },
    ];

    export default {
        name: 'Heroes',
        data() {
            return {
            message: '',
            heroes: ourHeroes,
            };
        },

    };
</script>
<!-------------------------------------------------./Script------------------------------------------------->

