<script setup lang="ts">
import { ref } from 'vue'

import DropdownComponent from './components/DropdownComponent.vue'
import SingletonMainNav from './components/singletons/SingletonMainNav.vue'
import imgUrl from './assets/imgs/D16BD564-9B2A-4C62-9D7B-A1325EA2BE3B.jpeg'

const data = [
  {
    id: 0,
    city: 'Brussels',
    country: 'Belgium',
    date: '2024-01-19',
  },
  {
    id: 1,
    city: 'Prague',
    country: 'Czech Republic',
    date: '2024-01-19',
  },
  {
    id: 2,
    city: 'Agios Tychon',
    country: 'Cyprus',
    date: '2024-01-18',
  },
  {
    id: 3,
    city: 'Basel',
    country: 'Switzerland',
    date: '2024-01-17',
  },
  {
    id: 4,
    city: 'Carthage',
    country: 'Tunesia',
    date: '2024-01-16',
  },
  {
    id: 5,
    city: 'Antwerp',
    country: 'Belgium',
    date: '2019-02-17',
  },
  {
    id: 6,
    city: 'Stockholm',
    country: 'Sweden',
    date: '2019-02-17',
  },
  {
    id: 7,
    city: 'The Hague',
    country: 'The Netherlands',
    date: '2019-02-17',
  },
  {
    id: 8,
    city: 'Copenhagen',
    country: 'Denmark',
    date: '2019-02-17',
  },
  {
    id: 9,
    city: 'Breda',
    country: 'The Netherlands',
    date: '2019-02-17',
  },
  {
    id: 10,
    city: 'Turnhout',
    country: 'Belgium',
    date: '2019-02-17',
  },
]

const openId = ref<number | null>(null)
const handleToggle = (id: number): void => {
  openId.value === id ? null : id
}
</script>

<template>
  <div class="min-h-screen bg-stone-300">
    <header>
      <SingletonMainNav />
    </header>
    <main>
      <DropdownComponent
        v-for="item in data"
        :key="item.id"
        :i="item.id"
        :city="item.city"
        :country="item.country"
        :date="item.date"
        :open="openId === item.id"
        @handle-toggle="handleToggle"
      >
        <img :src="imgUrl" alt="foobar" />
      </DropdownComponent>
    </main>
    <footer class="pt-4 pb-8 bg-black text-white">
      <h6
        class="text-2xl font-bold md:text-4xl lg:text-6xl xl:text-7xl px-4 w-full"
      >
        marten <span class="italic">tries to</span> take photos
      </h6>
      <div class="px-4">
        <ul class="flex gap-4 py-4">
          <li>
            <span
              class="w-12 h-12 rounded-full bg-rose-600 inline-flex justify-center items-center text-2xl text-white"
            >
              <BaseIcon type="fab" icon="instagram" />
              <span class="sr-only">Link to Instagram</span>
            </span>
          </li>
          <li>
            <span
              class="w-12 h-12 rounded-full bg-orange-500 inline-flex justify-center items-center text-2xl text-white"
            >
              <BaseIcon type="fab" icon="github" />
              <span class="sr-only">Link to GitHub</span>
            </span>
          </li>
        </ul>

        <p class="text-white text-xs">
          <span>&copy;</span>
          2024 <span>&bull;</span> <span class="italic">Marten de Bruijn</span>
        </p>
      </div>
    </footer>
  </div>
</template>
