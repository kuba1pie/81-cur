<template>
  <TheHeader />
  <main>
    <router-view> </router-view>
  </main>
  <TheFooter />
</template>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Italianno&family=Raleway:wght@100;200;300;400&display=swap')

html, h1
  font-family: 'Raleway', sans-serif
  display: flex
  justify-content: center
body
  max-width: 1500px
  margin: 0 auto
</style>
