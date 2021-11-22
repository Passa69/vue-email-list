var Email = new Vue ({
    el: "#app",
    data: {
        EmailUno: "",
    },
    mounted() {
        const self = this;

        // Ajax asincrono

        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(function(result) {
            self.EmailUno = result.data.response;
        });
    }
})