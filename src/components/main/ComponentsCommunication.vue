
<!-------------------------------------------------Template------------------------------------------------->
<template>
    <div class="container">
        <div class="mt-5 mb-3">
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title">Components Communication</h4>
                </div>
                <div class="card-body p-5"> 

                    <h6>Movie Series</h6>
                    <div v-if="movieseries.length > 0">
                        <div class="card mb-3" v-for="series in movieseries" :key="series.id">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src="@/assets/images/money_heist.jpg" class="img-fluid rounded-start h-100" alt="Image">
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">{{series.title}}</h5>
                                        <p class="card-text">{{series.description}}</p>
                                        <!-- pass data using props -->
                                        <MovieSeriesDetails v-bind:seriesDetail="series"/>                                    
                                        <button type="button" class="btn btn-danger btn-sm">Read More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <p class="text-muted text-center p-5">No series found</p>
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
    import MovieSeriesDetails from '@/./components/others/MovieSeriesDetails.vue'
    

    //Exports
    export default {
        name: 'MovieSeries',
        data() {
            return {
            movieseries: [
                    {
                        id: 10,
                        title: 'Game of Thrones',
                        image: '@/assets/images/money_heist.jpg',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sapien mauris, commodo at pretium pellentesque, malesuada ut nisl. Donec venenatis vulputate mauris sit amet ornare. ',
                        origin: 'USA',
                    },
                    {
                        id: 20,
                        title: 'Money Heist',
                        image: '@/assets/images/money_heist.jpg',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sapien mauris, commodo at pretium pellentesque, malesuada ut nisl. Donec venenatis vulputate mauris sit amet ornare. ',
                        origin: 'Spain',
                    },
                    {
                        id: 30,
                        title: 'The Walking Death',
                        image: '@/assets/images/money_heist.jpg',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sapien mauris, commodo at pretium pellentesque, malesuada ut nisl. Donec venenatis vulputate mauris sit amet ornare. ',
                        origin: 'UK',
                    },
                ],
            };
        },

        //Components
        components: {MovieSeriesDetails},

        //Methods
        methods: {

        },


    };
</script>
<!-------------------------------------------------./Script------------------------------------------------->

