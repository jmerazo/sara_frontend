<template>
    <div>
        <hr class="separator">
        <a href="http://catalogoplantasdecolombia.unal.edu.co/es/"><img src="../assets/catalogoplantascolombiamin.png" class="log-catalogoplantascolombiamin fixed-between"></a>
        <a href="https://tropicos.org/home"><img src="../assets/tropicosorgmin.png" class="log-tropicosorgmin fixed-between"></a>
        <a href="https://powo.science.kew.org/"><img src="../assets/powo.png" class="log-powo fixed-between"></a>
    </div>
</template>

<script>
export default {
name: "PagesQueries"
}
</script>

<style scoped>
.separator {
    height: 0;
    border: none;
    border-top: 2px solid #7d8f69;
    margin: 0;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
}
.log-catalogoplantascolombiamin {
    width: 28vw;
    height: auto;
}

.log-tropicosorgmin {
    width: 18vw;
    height: auto;
}

.log-powo {
    width: 6vw;
    height: auto;
    border-radius: 20px;
}

.fixed-between {
    margin-left: 50px;
    margin-top: 30px;
    margin-bottom: 30px;
}

</style>