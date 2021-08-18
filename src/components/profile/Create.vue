
<!-------------------------------------------------Template------------------------------------------------->
<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h4 class="card-title">Create Profile</h4>
            </div>
            <div class="card-body"> 

                <div class="mb-3">
                    <label for="email" class="form-label">Email:</label>
                    <input type="email" class="form-control" id="email" v-model="user.email" placeholder="Enter Address">
                </div>

                <div class="mb-3">
                    <label for="age" class="form-label">Age:</label>
                    <select class="form-select" id="age" v-model="user.age">
                        <option selected>Open this select menu</option>
                        <option value="Under 18">Under 18</option>
                        <option value="Over 18">Over 18</option>
                    </select>
                </div>

                <div class="mb-3">
                    <label for="gender" class="form-label">Gender:</label>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="gender" id="gender" v-model="user.gender" checked>
                        <label class="form-check-label" for="gender">Male</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="gender" id="gender" v-model="user.gender">
                        <label class="form-check-label" for="gender">Female</label>
                    </div>
                </div>


                <div class="mb-3">
                    <label for="bio" class="form-label">Bio:</label>
                    <textarea class="form-control" id="bio" v-model="user.bio" placeholder="Enter Brief Bio"></textarea>
                </div>


            </div>

            <div class="card-footer">
                <button type="button" class="btn btn-info mx-2" @click="clearFields()"><i class="fas fa-undo fa-1x fa-fw"></i>Clear</button>
                <button type="button" class="btn btn-secondary" @click="saveProfile()"><i class="fas fa-save fa-1x fa-fw"></i>Save</button>
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
                    email: 'joedoe@mail.com',
                    name: 'Joe Doe',
                    gender: 'Male',
                    age: 'Over 18',
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
            },
            saveProfile(){
                console.log(JSON.stringify(this.user));
            }
        },

    };
</script>
<!-------------------------------------------------./Script------------------------------------------------->

