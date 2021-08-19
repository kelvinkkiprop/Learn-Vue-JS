<!------------------template---------------------->
<template>

    <div class="container">

        <div v-if="message.status=='success'">
            <div class="alert alert-success">  
                {{message.description}}
            </div>  
        </div>

        <div v-if="message.status=='info'">
            <div class="alert alert-info">  
                {{message.description}}
            </div>  
        </div>

        <div v-if="message.status=='warning'">
            <div class="alert alert-warning">  
                {{message.description}}
            </div>  
        </div>

        <div v-if="message.status=='danger'">
            <div class="alert alert-danger">   
                {{message.description}}
            </div>  
        </div>

    </div>

</template>
<!------------------./template---------------------->


<!-------------------------------------------------script------------------------------------------------->
<script>
    export default {
        data() {
            return {
                message:{
                    status: 'success',
                    description: 'Alert message',
                },
            };
        },
    };
</script>
<!-------------------------------------------------./script------------------------------------------------->

