
<!-------------------------------------------------Template------------------------------------------------->
<template>
    <div class="container">
        <div class="mt-3 mb-3">
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title">Accessing Data</h4>
                </div>
                <div class="card-body"> 

                    <div v-if="posts.length>0">
                        <ul v-for="post in posts" :key="post.id">
                            <li>{{post.title}}</li>
                        </ul>                            
                    </div> 

                    <div v-else>
                        <p class="text-muted p-5">No posts</p>
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

    import axios from 'axios';

    export default {
        //Data
        data() {
            return {
                posts: {},
            };
        },

        //Methods
        methods: {
            //Load
            loadPosts(){
                axios.get("https://my-json-server.typicode.com/typicode/demo/posts")
                .then(response => {
                    this.posts = response.data;
                });
            },
        },
        
        created(){//DOM created
           this.loadPosts();
        },


    };
</script>
<!-------------------------------------------------./Script------------------------------------------------->

