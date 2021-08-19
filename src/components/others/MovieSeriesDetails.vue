<!-------------------------------------------------
Template------------------------------------------------->
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

        showToast(){
            let option ={
            animation: true,
            autohide: true,
            delay: 500
            };
            var toastElList = [].slice.call(document.querySelectorAll('.toast'))
            var toastList = toastElList.map(function (toastEl) {
                return new bootstrap.Toast(toastEl, option)
            });

            var toastEl = toast();
        }

    };
</script>
<!-------------------------------------------------./Script------------------------------------------------->

