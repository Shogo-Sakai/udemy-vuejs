<template>
  <div>
    <LikeHeader>
        <h3>はじめまして</h3>
    </LikeHeader>
    <LikeNumber :total-number="number" @my-click="incrementNumber"></LikeNumber>
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
    <div style="padding:10rem;">
      <h2>イベントフォーム</h2>
      <EventTitle v-model="eventData.title"></EventTitle>
      <pre>{{ eventData.title }}</pre>
      <label for="maxNumber">最大人数</label>
      <input
        id="maxNumber"
        type="number"
        v-model.number="eventData.maxNumber"
      >
      <p>{{ typeof eventData.maxNumber }}</p>
      <label for="maxNumber">主催者</label>
      <input
        id="host"
        type="text"
        v-model.trim="eventData.host"
      >
      <pre>{{ eventData.host }}</pre>
      <label for="detail">詳細</label>
      <textarea
        id="detail"
        cols= '30'
        rows= '10'
        v-model="eventData.detail"
      ></textarea>
      <p style="white-space: pre;">{{eventData.detail}}</p>
      <input type="checkbox" id="isPrivate" v-model="eventData.isPrivate">
      <label for="isPrivate">非公開</label>
      <p>{{ eventData.isPrivate}}</p>
      <input
        type="checkbox"
        v-model="eventData.target"
        value="10代"
      >
      <label for="target">10代</label>
      <input
        type="checkbox"
        v-model="eventData.target"
        value="20代"
      >
      <label for="target">20代</label>
      <input
        type="checkbox"
        v-model="eventData.target"
        value="30代"
      >
      <label for="target">30代</label>
      <p>{{ eventData.target }}</p>
      <input
        type="radio"
        id="free"
        v-model="eventData.price"
        value="無料"
      >
      <label for="price">無料</label>
      <input
        type="radio"
        id="paid"
        v-model="eventData.price"
        value="有料"
      >
      <label for="price">有料</label>
      <p>開催場所</p>
      <select v-model="eventData.location" multiple>
        <option v-for="location in locations"
          :key="location">
          {{location}}
        </option>
      </select>
      <p>{{ eventData.location }}</p>
    </div>
  </div>
</template>

<script>
import LikeHeader from './components/LikeHeader.vue';
import Home from './components/Home.vue';
import About from './components/About.vue';
import EventTitle from './components/EventTitle.vue';
export default {
  data() {
    return {
      number: 20,
      currentComponent: 'Home',
      locations: ["東京", "大阪", "名古屋"],
      eventData: {
        title: '',
        maxNumber: 0,
        host: '',
        detail: '',
        isPrivate: false,
        target: [],
        price: '無料',
        location: []
      }
    };
  },
  components: {
    LikeHeader,
    Home,
    About,
    EventTitle,
  },
  methods: {
    incrementNumber(value){
      this.number = value;
    }
  }
}
</script>

