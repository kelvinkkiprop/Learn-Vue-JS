
<!-------------------------------------------------Template------------------------------------------------->
<template>
    <header>

        <!-------------------------------------------------Navbar------------------------------------------------->
        <nav class="navbar navbar-expand-lg navbar-dark bg-info fixed-top">
            <div class="container">
                <a class="navbar-brand" href="#">LearnVueJS</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">

                    <!-- Left menu -->
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link to="/" class="nav-link active">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/about" class="nav-link">About</router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Topics
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><router-link to="/forms" class="dropdown-item" href="#">Forms</router-link></li>
                                <li><router-link to="/listsandconditionals" class="dropdown-item" href="#">Lists &amp; Conditionals</router-link></li>
                                <li><router-link to="/interactingwithcomponents" class="dropdown-item" href="#">Interacting With Components</router-link></li>
                                <li><router-link to="/componentscommunication" class="dropdown-item" href="#">Components Communications</router-link></li>
                                <li><router-link to="/accessingdata" class="dropdown-item" href="#">Accessing Data</router-link></li>
                                <li><router-link to="/managingdatastatewithvuex" class="dropdown-item" href="#">Managing Data State with Vuex</router-link></li>
                            </ul>
                        </li>
                    </ul>

                    <!-- Right menu -->
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Username
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">
                                    <i class="fas fa-user-circle fa-fw" aria-hidden="true"></i>Profile</a></li>
                                <li><a class="dropdown-item" href="#">
                                    <i class="fas fa-sign-out-alt fa-fw"></i>Logout</a></li>
                            </ul>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
         <!-------------------------------------------------Navbar------------------------------------------------->

    </header>
</template>
<!-------------------------------------------------./Template------------------------------------------------->