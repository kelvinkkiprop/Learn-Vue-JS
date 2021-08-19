
<!-------------------------------------------------Template------------------------------------------------->
<template>
    <div class="container">
        <div class="mt-3 mb-3">
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title">Forms</h4>
                </div>
                <div class="card-body"> 

                    <div class="mb-3">
                        <label for="name" class="form-label">Name:</label>
                        <input type="text" class="form-control" id="name" v-model="user.name" placeholder="Enter Name">
                    </div>

                    <div class="mb-3">
                        <label for="email" class="form-label">Email:</label>
                        <input type="email" class="form-control" id="email" v-model="user.email" placeholder="Enter Address">
                    </div>

                    <div class="mb-3">
                        <label for="age" class="form-label">Age:</label>
                        <select class="form-select" id="age" v-model="user.age">
                            <option selected disabled>Select Age</option>
                            <option value="Under 18">Under 18</option>
                            <option value="Over 18">Over 18</option>
                        </select>
                    </div>

                    <div class="mb-3">
                        <label for="gender" class="form-label">Gender:</label>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="gender" id="male" value="Male" v-model="user.gender" checked>
                            <label class="form-check-label" for="gender">Male</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="gender" id="female" value="Female" v-model="user.gender">
                            <label class="form-check-label" for="gender">Female</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="gender" id="other" value="Other" v-model="user.gender">
                            <label class="form-check-label" for="gender">Other</label>
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="favourite_color" class="form-label">Favourite Color:</label><br>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="favourite_color" id="red" value="Red" v-model="user.favourite_color" checked>
                            <label class="form-check-label" for="favourite_color">Red</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="favourite_color" id="green" value="Green" v-model="user.favourite_color">
                            <label class="form-check-label" for="favourite_color">Green</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="favourite_color" id="blue" value="Blue" v-model="user.favourite_color">
                            <label class="form-check-label" for="favourite_color">Blue</label>
                        </div>
                        <!-- Show user selected color -->
                        <div class="spinner-grow spinner-grow-sm text-white" role="status" v-bind:style="{'background-color':user.favourite_color}"></div>
                    </div>


                    <div class="mb-3">
                        <label for="bio" class="form-label">Bio:</label>
                        <textarea class="form-control" id="bio" v-model="user.bio" placeholder="Enter Brief Bio"></textarea>
                    </div>


                </div>

                <div class="card-footer">
                    <button type="button" class="btn btn-info mx-2" @click="clearFields()"><i class="fas fa-undo fa-1x fa-fw"></i>Clear</button>
                    <button type="button" class="btn btn-secondary" @click="saveData()"><i class="fas fa-save fa-1x fa-fw"></i>Save</button>
                </div>

            </div>
        </div>
    </div>
</template>
<!-------------------------------------------------./Template------------------------------------------------->


<!-------------------------------------------------Script------------------------------------------------->
<script>
    export default {
        //Data
        data() {
            return {
                user: {
                    id:1,
                    email: '',
                    name: '',
                    gender: '',
                    age: '',
                    favourite_color: '',
                    bio: '',
                },
            };
        },

        //Methods
        methods: {
            clearFields(){
                this.user.email = "";
                this.user.name = "";
                this.user.gender = "";
                this.user.age = "";
                this.user.bio = "";
                this.user.favourite_color ="";
            },
            saveData(){
                console.log(JSON.stringify(this.user));
            }
        },

    };
</script>
<!-------------------------------------------------./Script------------------------------------------------->

