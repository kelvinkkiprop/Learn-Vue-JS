<!-------------------------------------------------Template------------------------------------------------->
<template>
    <!-- bind data from props -->
    <p>Origin:&nbsp;<span class="text-muted">{{seriesDetail.origin}}</span></p>
</template>
<!-------------------------------------------------./Template------------------------------------------------->


<!-------------------------------------------------Script------------------------------------------------->
<script>

    //Exports
    export default {
        name: 'MovieSeriesDetails',
        props: {
            seriesDetail: {
                type: Object,
                default: () => {

                },         
                
            },
        },

    };
</script>
<!-------------------------------------------------./Script------------------------------------------------->

