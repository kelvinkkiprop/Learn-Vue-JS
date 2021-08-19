
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
                            <a class="nav-link active" href="#home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#about">About</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Topics
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Forms</a></li>
                                <li><a class="dropdown-item" href="#">Lists &amp; Conditionals</a></li>
                                <li><a class="dropdown-item" href="#">Interacting With Components</a></li>
                                <li><a class="dropdown-item" href="#">Components Communications</a></li>
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