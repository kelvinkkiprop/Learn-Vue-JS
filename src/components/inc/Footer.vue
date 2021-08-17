
<!-------------------------------------------------template------------------------------------------------->
<template>
    <footer class="text-white">
        <div class="bg-secondary p-2">
            <div class="container">
                <div class="row">
                    <div class="col-md">
                        <h6>Team</h6>
                        <ul style="list-style-type:square;">
                            <li>{{team.member1}}</li>
                            <li>{{team.member2}}</li>
                        </ul>
                    </div>
                    <div class="col-md">
                        <h6>Team Locations</h6>
                        <ol type="i">
                            <li>{{team_location.location1}}</li>
                            <li>{{team_location.location2}}</li>
                        </ol>
                    </div>
                    <div class="col-md">
                        <h6>Social Media</h6>
                        <p class="text-nowrap">
                            <a v-bind:href="social_media.twitter" target="_blank"><b-icon-twitter></b-icon-twitter></a>&nbsp;
                            <a v-bind:href="social_media.facebook" target="_blank"><b-icon-facebook></b-icon-facebook></a>&nbsp;
                            <a v-bind:href="social_media.github" target="_blank"><b-icon-github></b-icon-github></a>&nbsp;
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <p class="bg-dark text-center p-3">Learn Vue JS 2021</p>
    </footer>
</template>
<!-------------------------------------------------./template------------------------------------------------->


<!-------------------------------------------------script------------------------------------------------->
<script>
    export default {
        data() {
            return {
                social_media:{
                    twitter: 'https://twitter.com/kelvinkkiprop',
                    github: 'https://github.com/kelvinkkiprop',
                    facebook: 'https://www.facebook.com/profile.php?id=100002918520822',
                },
                team:{
                    member1: 'Kelvin Kiprop',
                    member2: 'PrudenceKelly Jepchumba',
                },
                team_location:{
                    location1: 'Sfax, Tunisia',
                    location2: 'Meru, Kenya',
                },
            };
        },
    };
</script>
<!-------------------------------------------------./script------------------------------------------------->


<!-------------------------------------------------style------------------------------------------------->
<style scoped lang="scss">

    $white: #ffffff;
    $black: #000000;

    footer {
        a{
            color: $white;
            border-radius: 45px;
            padding: 0 2px 0 2px;
        }
        a:hover{
            background-color: $white;
            color: $black;
        }
    }
</style>
<!-------------------------------------------------./style------------------------------------------------->