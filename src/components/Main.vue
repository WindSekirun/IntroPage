<template>
  <v-container id="main">
    <v-row justify="space-around">
      <v-avatar size="175">
        <img
          src="../assets/profile_akari_square.png"
          alt="WindSekirun"
        />
      </v-avatar>
    </v-row>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          WindSekirun (wind.seo)
        </h1>
        <h3 class="display-1 font-weight-light mb-3">
          Kotlin Lover, Android Devloper
        </h3>
      </v-col>
      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">
          Contact Me
        </h2>
        <br>
        <v-row justify="center">
          <a
            v-for="(contact, i) in contact"
            :key="i"
            :href="contact.link"
            class="subheading mx-3"
            target="_blank"
          >
            <font-awesome-icon :icon="[contact.iconkind || 'fab', contact.icon]" size="3x" />
            <p id="platform">{{ contact.platform }}</p>
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Main",

  data: () => ({
    contact: [
      {
        platform: "Telegram",
        link: "https://t.me/windsekirun",
        icon: "telegram-plane",
      },
      {
        platform: "Twitter",
        link: "https://twitter.com/WindSekirun/",
        icon: "twitter",
      },
      {
        platform: "Discord",
        link: "https://discordapp.com/users/393392699329478657",
        icon: "discord",
      },
      {
        platform: "LinkedIn",
        link: "https://www.linkedin.com/in/windsekirun/",
        icon: "linkedin",
      },
      {
        platform: "Blog",
        link: "https://pyxispub.uzuki.live/",
        icon: "blog",
        iconkind: "fas",
      },
    ],
  }),
};
</script>

<style>
#main {
  margin-top: 60px;
}
a {
  text-decoration: none;
  color: #252525;
}
</style>
