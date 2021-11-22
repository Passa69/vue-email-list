var Email = new Vue ({
    el: "#app",
    data: {
        Emails: [

        ],
    },
    mounted() {
        const self = this;

        // Ajax asincrono
        for (i = 0; i < 10; i++) {
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function(result) {
                self.Emails.push(result.data.response);
            });
        }
        

    }
})