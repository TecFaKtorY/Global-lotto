/* ============================================

   Global Lotto Sweepstakes — Activity Ticker

   ============================================ */



const CONFIG = {

    tickerInterval: 7000,       // ms between each new activity

    minAmount: 5000,

    maxAmount: 20000,

};



const names = [

    "Olivia", "Ethan", "Mia", "Alexander", "Isabella", "William", "Ava",

    "James", "Sophia", "Benjamin", "Emma", "Samuel", "Charlotte", "Noah",

    "Amelia", "Michael", "Evelyn", "Daniel", "Abigail", "Matthew", "Harper",

    "Henry", "Elizabeth", "Oliver", "Grace", "Elijah", "Sofia", "Jackson",

    "Avery", "Logan", "Victoria", "Lucas", "Ella", "David", "Chloe", "Andrew",

    "Scarlett", "Lincoln", "Eleanor", "John", "Penelope", "Isaac", "Zoey",

    "Luke", "Lillian", "Gabriel", "Hannah", "Julian", "Natalie", "Brooklyn",

    "Anthony", "Layla", "Mason", "Aiden", "Muhammad", "Leo", "Carter",

    "Joseph", "Lucy", "Lila"

];



const countries = [

    "United States", "United Kingdom", "Canada", "Australia", "Germany",

    "France", "Italy", "Spain", "Brazil", "India", "Japan", "South Korea",

    "Mexico", "Netherlands", "Sweden", "Norway", "Denmark", "Switzerland",

    "Singapore", "New Zealand", "UAE", "Saudi Arabia", "South Africa",

    "Nigeria", "Kenya", "Ghana", "Argentina", "Chile", "Colombia", "Peru",

    "Philippines", "Vietnam", "Thailand", "Malaysia", "Indonesia", "Turkey"

];



function generateActivity() {

    const name = names[Math.floor(Math.random() * names.length)];

    const country = countries[Math.floor(Math.random() * countries.length)];

    const amount = Math.floor(Math.random() * (CONFIG.maxAmount - CONFIG.minAmount + 1)) + CONFIG.minAmount;



    const templates = [

        `${name} from ${country} just withdrew \$${amount.toLocaleString()}`,

        `${name} from ${country} claimed \$${amount.toLocaleString()}`,

        `${name} from ${country} won \$${amount.toLocaleString()}`,

        `${name} from ${country} cashed out \$${amount.toLocaleString()}`,

    ];



    return templates[Math.floor(Math.random() * templates.length)] + ' \uD83C\uDF89';

}



function showActivity() {

    const el = document.getElementById('activities');

    if (!el) return;



    el.textContent = generateActivity();

    el.style.background = 'rgba(255, 215, 0, 0.18)';



    setTimeout(() => {

        el.style.background = 'rgba(255, 255, 255, 0.08)';

    }, 400);

}



// Start the ticker

const ticker = document.getElementById('activities');

if (ticker) {

    showActivity();

    setInterval(showActivity, CONFIG.tickerInterval);

}



/* ============================================

   Form Validation (next.html)

   ============================================ */

const form = document.querySelector('form');

if (form) {

    form.addEventListener('submit', function (e) {

        const name = this.querySelector('input[name="name"]');

        const email = this.querySelector('input[type="email"]');

        const phone = this.querySelector('input[type="tel"]');

        let valid = true;



        // Reset borders

        [name, email, phone].forEach(inp => {

            if (inp) inp.style.borderColor = 'rgba(255,255,255,0.1)';

        });



        if (name && name.value.trim().length < 2) {

            name.style.borderColor = '#ff4444';

            valid = false;

        }



        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {

            email.style.borderColor = '#ff4444';

            valid = false;

        }



        if (phone && phone.value.replace(/\D/g, '').length < 7) {

            phone.style.borderColor = '#ff4444';

            valid = false;

        }



        if (!valid) {

            e.preventDefault();

            const first = [name, email, phone].find(

                inp => inp && inp.style.borderColor === 'rgb(255, 68, 68)'

            );

            if (first) first.focus();

        }

    });

}
