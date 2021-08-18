
<!-------------------------------------------------Template------------------------------------------------->
<template>
    <section id="index">
        <div class="container">
            <div class="mt-3 mb-3">

                <div id="carouselCaptions1" class="carousel slide carousel-fade " data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselCaptions1" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselCaptions1" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselCaptions1" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">                    
                        <div class="carousel-item active">
                            <img src="@/assets/images/background1.jpg" class="d-block w-100" alt="Img">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Fun</h5>
                                <p>Isn't Vue JS if fun?</p>
                            </div>
                        </div>                  
                        <div class="carousel-item">
                            <img src="@/assets/images/background2.jpg" class="d-block w-100" alt="Img">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Enjoyable</h5>
                                <p>Isn't Vue JS if enjoyable?</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/images/background3.jpg" class="d-block w-100" alt="Img">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Easy</h5>
                                <p>Isn't Vue JS if easy?</p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

            </div>
        </div>
    </section>
</template>
<!-------------------------------------------------./Template------------------------------------------------->


<!-------------------------------------------------Script------------------------------------------------->
<script>
    export default {
        data() {
            return {
                hero: {
                    id:1,
                    title: 'Hello, Welcome to VueJS',
                    description: 'Learning Vue JS is easy, enjoyable, and full of fun',
                },
            };
        },
    };
</script>
<!-------------------------------------------------./Script------------------------------------------------->

<!-------------------------------------------------style------------------------------------------------->
<style scoped lang="scss">

    $opaque: rgba(0,0,0,0.5) ;
    $white: #ffffff;

    .carousel-item{
        img{
            height: 75vh;
        }
        .carousel-caption{
            background-color: $opaque !important;
            color: $white;
        }
        
    }
</style>
<!-------------------------------------------------./style------------------------------------------------->