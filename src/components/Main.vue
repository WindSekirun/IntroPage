<template>
  <v-container id="main" fill-height class="x-ctn">
    <v-row align="center" justify="center">
      <v-row justify="space-around">
        <v-avatar size="150">
          <img src="../assets/profile_akari_square.png" alt="WindSekirun" />
        </v-avatar>
      </v-row>
      <v-row class="text-center">
        <v-col class="mb-1" id="name">
          <h1 class="display-2 font-weight-bold mb-2">
            WindSekirun (wind.seo)
          </h1>
          <h3 class="display-1 font-weight-light mb-1">
            Kotlin Lover, Android Devloper
          </h3>
          <h3 class="font-weight-light">
            Current working on
            <a href="https://github.com/kakaobank">@kakaobank</a>
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
                  />
                </template>
                <span>{{ contact.tooltip }}</span>
              </v-tooltip>
              <p id="platform">{{ contact.platform }}</p>
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
        link: "/",
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
a {
  text-decoration: none;
  color: #252525;
}
</style>
