<template>
  <v-container id="main" fill-height class="x-ctn primary-element">
    <v-row align="center" justify="center">
      <v-row justify="space-around" class="mb-2">
        <v-avatar size="150">
          <img src="../assets/profile_akari_circle.png" alt="WindSekirun" />
        </v-avatar>
      </v-row>
      <v-row class="text-center">
        <v-col class="mb-1" id="name">
          <h1 class="display-2 font-weight-bold mb-2">
            WindSekirun (wind.seo)
          </h1>
          <h3 class="display-1 font-weight-light mb-1">
            <font-awesome-icon
              :icon="['fab', 'android']"
              size="1x"
              v-bind="attrs"
              v-on="on"
              id="primary"
            /> 
            Android Developer
          </h3>
          <h3 class="font-weight-light">
            Current working on
            <a href="https://github.com/kakaobank" id="primary-element">@kakaobank</a>
          </h3>
        </v-col>
        <v-col cols="12">
          <h2 class="headline font-weight-bold mb-3">
            Contact Me
          </h2>
        </v-col>
        <v-col class="mb-3" cols="12">
          <v-row justify="center">
            <a
              v-for="(contact, i) in contact"
              :key="i"
              :href="contact.link"
              class="subheading mx-3"
            >
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <font-awesome-icon
                    :icon="[contact.iconkind || 'fab', contact.icon]"
                    size="3x"
                    v-bind="attrs"
                    v-on="on"
                    class="platform-icon"
                  />
                </template>
                <span>{{ contact.tooltip }}</span>
              </v-tooltip>
              <p class="platform-text">{{ contact.platform }}</p>
            </a>
          </v-row>
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Main",

  data: () => ({
    contact: [
      {
        platform: "Github",
        link: "https://github.com/WindSekirun/",
        icon: "github",
        tooltip: "@WindSekirun",
      },
      {
        platform: "StackOverflow",
        link: "https://stackoverflow.com/users/1882568/windsekirun",
        icon: "stack-overflow",
        tooltip: "WindSekirun",
      },
      {
        platform: "KakaoTalk",
        link: "http://qr.kakao.com/talk/jlG8wooqfn3tOVgum_4jJamsMhc-",
        icon: "comment",
        tooltip: "WindSekirun",
        iconkind: "fas",
      },
      {
        platform: "Telegram",
        link: "https://t.me/windsekirun",
        tooltip: "@WindSekirun",
        icon: "telegram-plane",
      },
      {
        platform: "Twitter",
        link: "https://twitter.com/WindSekirun/",
        tooltip: "@WindSekirun",
        icon: "twitter",
      },
      {
        platform: "Discord",
        link: "https://discordapp.com/users/393392699329478657",
        tooltip: "Pyxis#1324",
        icon: "discord",
      },
      {
        platform: "LinkedIn",
        link: "https://www.linkedin.com/in/windsekirun/",
        tooltip: "Seo Dong Gil",
        icon: "linkedin",
      },
      {
        platform: "Blog",
        link: "https://pyxispub.uzuki.live/",
        tooltip: "WindSekirun",
        icon: "blog",
        iconkind: "fas",
      },
    ],
  }),
};
</script>

<style>
.platform-text {
   margin-top: 0.5em;
   color: #d8dee9;
}
.platform-icon {
  color: #88c0d0;
}
.primary-element {
  color: #d8dee9;
}
#primary-element {
  color: #d8dee9;
}
a {
  text-decoration: none;
}
</style>
