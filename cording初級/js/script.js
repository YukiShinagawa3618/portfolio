document.addEventListener('DOMContentLoaded', function(){

    document.getElementById('btn').addEventListener('click', function() {
        if (this.classList.contains('open')) {
            this.classList.remove('open');
            document.getElementById('slide-menu').classList.remove('open');
        } else {
            this.classList.add('open');
            document.getElementById('slide-menu').classList.add('open');
        }

    });

    document.getElementById('slide-menu').addEventListener('click', function() {
        this.classList.remove('open');
        document.getElementById('btn').classList.remove('open');
    });
});