
<!-------------------------------------------------Template------------------------------------------------->
<template>
    <div class="container">
        <div class="mt-3 mb-3">
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title">Lists &amp; Conditionals</h4>
                </div>
                <div class="card-body p-5"> 

                    <h6>Family members</h6>
                    <div v-if="familyMembers.length > 0">
                        <div class="row row-cols-2 row-cols-md-3 row-cols-sm-4 ">
                            <div class="col" v-for="member in familyMembers" :key="member.id">
                                <div class="card mb-3">  
                                    <img src="@/assets/images/kelvin.jpg" class="img-fluid rounded-start" alt="Image">
                                    <div class="card-body">
                                        <h5 class="card-title">{{member.firstName}}&nbsp;{{member.lastName}}</h5>
                                        <p class="card-text">{{member.description}}</p>
                                        <p class="card-text"><small class="text-muted">DOB: {{member.dob}}</small></p>
                                        <a class="btn btn-secondary" @click="changeShowMore()">Show more</a>
                                    </div>                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <p class="text-muted text-center p-5">No family members found</p>
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
    export default {
        name: 'Family Members',
        showMore: false,
        data() {
            return {
            selectedMember: undefined,
            showMore: false,
            familyMembers: [
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

