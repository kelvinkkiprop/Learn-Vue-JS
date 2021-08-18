
<!-------------------------------------------------Template------------------------------------------------->
<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h4 class="card-title">Lists &amp; Conditionals</h4>
            </div>
            <div class="card-body p-5"> 

                <div v-if="heroes.length > 0">
                    <div class="card m-3" v-for="hero in heroes" v-bind:key="hero.id">
                        <img src="@/assets/images/kelvin.jpg" height="375" class="card-img-top" alt="Image">
                        <div class="card-body">
                            <h5 class="card-title">{{hero.firstName}}&nbsp;{{hero.lastName}}</h5>
                            <p class="card-text">{{hero.description}}</p>
                            <h6 v-show="showMore">DOB: {{hero.dob}}</h6>
                            <a class="btn btn-info" @click="changeShowMore()">Show more</a>
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
</template>
<!-------------------------------------------------./Template------------------------------------------------->


<!-------------------------------------------------Script------------------------------------------------->
<script>
    export default {
        name: 'Heroes',
        showMore: false,
        data() {
            return {
            selectedHero: undefined,
            showMore: false,
            heroes: [
                    {
                        id: 10,
                        firstName: 'Kelvin',
                        lastName: 'Kiprop',
                        dob: '11/09/1995',
                        profilePicture: '@/assets/images/kelvin.jpg',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sapien mauris, commodo at pretium pellentesque, malesuada ut nisl. Donec venenatis vulputate mauris sit amet ornare. ',
                    },
                    {
                        id: 20,
                        firstName: 'PrudenceKelly',
                        lastName: 'Jepchumba',   
                        dob: '08/08/2019',                     
                        profilePicture: '@/assets/images/kelvin.jpg',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sapien mauris, commodo at pretium pellentesque, malesuada ut nisl. Donec venenatis vulputate mauris sit amet ornare. ',
                    },
                    {
                        id: 30,
                        firstName: 'Mercy',
                        lastName: 'Karambu',  
                        dob: '23/02/1995',                      
                        profilePicture: '@/assets/images/kelvin.jpg',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sapien mauris, commodo at pretium pellentesque, malesuada ut nisl. Donec venenatis vulputate mauris sit amet ornare. ',
                    },
                ],
            };
        },

        //Methods
        methods: {
            changeShowMore(){
                this.showMore = true;
            },
        },


    };
</script>
<!-------------------------------------------------./Script------------------------------------------------->

