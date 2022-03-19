<template>
  <section>
    <div class="relative w-full h-full background filter blur-2xl" :class="{'opacity-50': isFirefox}">
      <div class="absolute bg-yellow-300 rounded-full w-44 h-44 lg:w-52 lg:h-52 right-20 xl:right-1/3 top-60 custom-animate-pulse"></div>
      <div class="absolute bg-blue-600 rounded-full w-44 h-44 lg:w-80 lg:h-80 right-72 xl:right-1/3 top-60 custom-animate-pulse"></div>
      <div class="absolute bg-red-600 rounded-full w-44 h-44 lg:w-80 lg:h-80 right-20 xl:right-1/4 top-64 custom-animate-pulse"></div>
    </div>
    <div class="foreground">
      <section class="px-6 mx-auto tracking-wide max-w-7xl xl:px-0">
        <div class="h-40 xl:h-60"></div>
        <h1 class="text-5xl font-semibold lg:text-6xl xl:text-8xl">
          A developer passionate about creating useful and user friendly softwares
        </h1>
        <div class="max-w-6xl">
          <h2 class="text-lg font-light leading-10 text-gray-600 lg:text-2xl mt-9">
            currently studying at 
            Shri Ramdeobaba College of Engineering and Management <!--<a href="https://www.netlinks.af" title="@netlinks" target="_blank" class="underline">NETLINKS Inc</a>--> based in Maharashtra, India.<br>
            <!-- <div class="h-10"></div>
            <a class="text-base underline" href="https://github.com/atharva20-coder/" title="github - afgprogrmmer" target="_blank">View Work</a> -->
          </h2>
        </div>
        <div class="h-32"></div>
        <div>
          <span class="text-base font-light">
            Follow me on&nbsp;
            <!--<a href="https://youtube.com/codedamn" title="codedamn - Youtube Channel" class="text-gray-700 underline" target="_blank"><span>Youtube</span></a>,&nbsp;-->
            <a href="https://instagram.com/atharva20_coder" title="atharva20_coder - Instagram Page" class="text-gray-700 underline" target="_blank"><span>Instagram</span></a>.
          </span>
        </div>
        <div class="h-6"></div>
        <div class="flex flex-col">
          <div>
            <span class="text-base font-light text-gray-600">Like my work?</span>
            <a href="https://github.com/atharva20-coder/" title="Support me on GitHub - atharva20-coder">
              <h4 class="m-0 mt-2 text-sm font-medium text-gray-900">Support me on GitHub</h4>
            </a>
          </div>
        </div>
        <div class="h-20"></div>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isFirefox: false
    }
  },

  mounted() {
    this.checkBrowser()
  },

  methods: {
    checkBrowser() {
      if (navigator.userAgent.indexOf("Firefox") != -1)
        this.isFirefox = true
    }
  },

  head: {
    title: 'Atharva Joshi',
    meta: [
      { 
        name: 'author', 
        content: 'Atharva Joshi - atharva20_coder' 
      },
      {
        name: 'description',
        content: 'Creating videos for educational purposes regarding topics like Flutter, Laravel, VueJS, Invision Studio, mainly focused on mobile and web application development. Mohamnmd Rahmani - atharva20_coder',
      },
      {
        key: 'og:title',
        property: 'og:title',
        content: 'Atharva Joshi - atharva20_coder',
      },
      {
        key: 'og:description',
        property: 'og:description',
        content: 'Creating videos for educational purposes regarding topics like Flutter, Laravel, VueJS, Invision Studio, mainly focused on mobile and web application development. Mohamnmd Rahmani - atharva20_coder',
      },
      {
        key: 'og:url',
        property: 'og:url',
        content: 'https://atharva20_coder.com',
      },
      {
        key: 'twitter:title',
        name: 'twitter:title',
        content: 'Atharva Joshi - atharva20_coder',
      },
      {
        key: 'twitter:card',
        name: 'twitter:card',
        content: 'summary',
      },
      {
        key: 'twitter:creator',
        name: 'twitter:creator',
        content: '@atharva20_coder',
      },
      {
        key: 'twitter:description',
        name: 'twitter:description',
        content: 'Creating videos for educational purposes regarding topics like Flutter, Laravel, VueJS, Invision Studio, mainly focused on mobile and web application development. Mohamnmd Rahmani - atharva20_coder',
      },
      {
        key: 'twitter:image',
        name: 'twitter:image',
        content: 'https://atharva20_coder.com/images/atharva20_coder-logo.png',
      }
    ]
  }
}
</script>

<style>
.foreground {
  backdrop-filter: blur(100px);
} 

.custom-animate-pulse {
  animation: custom-pulse 5s infinite;
}

@keyframes custom-pulse {
  from {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(0.85);
    opacity: 0.5;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
