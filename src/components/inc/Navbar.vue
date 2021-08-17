
<!-------------------------------------------------Template------------------------------------------------->
<template>
    <header>

        <!-------------------------------------------------Navbar------------------------------------------------->
        <nav class="navbar navbar-expand-lg navbar-dark bg-info">
            <div class="container">
                <a class="navbar-brand" href="#">Learn Vue JS</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">

                    <!-- Left menu -->
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                            </div>
                        </li>
                    </ul>


                    <!-- Right menu -->
                    <ul class="navbar-nav ml-auto">
                        <form class="form-inline my-2 mr-2 my-lg-0">
                            <input class="form-control form-control-sm mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                            <button class="btn btn-secondary btn-sm my-2 my-sm-0" type="submit">Search</button>
                        </form>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Username
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Profile</a>
                                <a class="dropdown-item" href="#">Logout</a>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
        <!-------------------------------------------------Navbar------------------------------------------------->

    </header>
</template>
<!-------------------------------------------------./Template------------------------------------------------->


<!-------------------------------------------------Script------------------------------------------------->
<script>
    export default {
        data() {
            return {
                twitter: 'https://twitter.com/kelvinkkiprop',
                github: 'https://github.com/kelvinkkiprop',
                facebook: 'https://www.facebook.com/profile.php?id=100002918520822',
            };
        },
    };
</script>
<!-------------------------------------------------./Script------------------------------------------------->
