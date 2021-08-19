<template>
    <div class="card-body">
        <h5 class="card-title">{{hero.firstName}}&nbsp;{{hero.lastName}}</h5>
        <p class="card-text">{{hero.description}}</p>
        <p>Date:&nbsp;<small class="text-muted">{{hero.originDate | myDate }}</small></p>
    </div>
</template>