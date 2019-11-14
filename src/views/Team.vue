<template>
  <div class="team">
    <div class="card" :key="index" v-for="(person, index) in teams">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="person.photo" alt="Placeholder image" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img :src="person.thumbs" alt="Placeholder image" />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{{ person.name | cap }}</p>
            <p class="subtitle is-6">{{ person.mail }}</p>
          </div>
        </div>

        <div class="content">
          {{ person.description }}
          <a href="" :key="index" v-for="(hastag, index) in person.hastags">
           #{{ hastag }}
          </a>
          <br />
          <span class="salary">Salary : {{ person.salary | price(2, '€') }} </span>
          <br />
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Capitalize from '@/filters/Capitalize'
import PriceFormat from '@/filters/PriceFormat'

export default {
  name: "team",
  data() {
    return {
      teams: [
        {
          name: "aurore",
          mail: "aurore@google.com",
          photo: "https://picsum.photos/id/866/200/300",
          thumbs: "https://picsum.photos/id/215/200/300",
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris.`,
          hastags: ["test", "ok", "vuejs"],
          salary: 1600.9187,
        },
        {
          name: "richard",
          mail: "richard@google.com",
          photo: "https://picsum.photos/id/869/200/300",
          thumbs: "https://picsum.photos/id/214/200/300",
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris.`,
          hastags: ["test", "react", "angular"],
          salary: "1342.9187",
        },
        {
          name: "george",
          mail: "george@google.com",
          photo: "https://picsum.photos/id/868/200/300",
          thumbs: "https://picsum.photos/id/212/200/300",
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris.`,
          hastags: ["test", "python", "php"],
          salary: "1690.9187",
        }
      ]
    };
  },
  filters: {
    cap: Capitalize,
    price: PriceFormat,
  },
};
</script>
<style lang="scss">
.team{
    display: flex;
    flex-wrap: wrap;
        justify-content: space-around;
    .card{
      width: 30%;
    }
    .media-left figure.image img{
      border-radius: 50%;
      height: 100%;
    }
}
</style>
