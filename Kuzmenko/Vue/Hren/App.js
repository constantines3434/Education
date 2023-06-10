import { rand } from './rand.js';

const Cost = {
    props: {
        card: Object,
    },

    template: `
  <div class='card'>
    <h2> {{ card.text }} </h2>
    <img :src = "card.png" class="png" v-show="card.picture"/>
    <h3 v-if="card.count>0">Есть в наличии: {{card.count}}</h3>
    <h3 v-else>Нет в наличии</h3>
    <button v-if="card.count>0" v-on:click="card.count -= 1, changePrice()"> {{ card.price }} руб.</button>
  </div>
  `,

    methods: {
        changePrice() {
            let a = 20;
            let b = (rand(1, 5000) / 100) * a;
            let v = (Math.round(b * 100) / 100).toFixed(2);
            // v = 34;
            this.card.price = v;
             
        },
    }
};

const app = Vue.createApp({
    components: {
        'card': Cost,
    },
    data() {
        return {
            cards: [
                {
                    text: 'Бойцовские перчатки',
                    price: 2999,
                    png: 'https://images.satu.kz/65983438_w700_h500_bokserskie-perchatki-detskij.jpg',
                    picture: false,
                    count: 5
                },
                {
                    text: 'Гантель разборная',
                    price: 3499,
                    png: 'https://avatars.mds.yandex.net/get-mpic/5217165/img_id8403302521096383270.png/orig',
                    count: 9,
                    picture: true
                },
                {
                    text: 'Сноуборд женский',
                    price: 799,
                    png: 'https://cdn.sportmaster.ru/upload/resize_cache/iblock/0ce/800_800_1/70415330299.jpg',
                    count: 9,
                    picture: true
                },
                {
                    text: 'Футбольный мяч',
                    price: 4599,
                    png: 'https://www.tehno-a.ru/upload/iblock/2c8/uqhubsmfm5r6cczo84taeenb51p7q7kl.jpg',
                    count: 9,
                    picture: true
                },
            ],
        };
    },
    methods: {
        rand(min, max) {
            this.card.price = Math.floor(Math.random() * (max - min) + min);
        }
    }
});

app.mount('#app');