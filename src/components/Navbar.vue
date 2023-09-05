<script setup>
import LanguageSwitcher from './LanguageSwitcher.vue'
import { ref } from 'vue'

const activeIndex = ref('1')

const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<template>
  <div class="header">
    <div class="top">
      <div class="logo">
        <img src="@/assets/images/logo.png" alt="" />
      </div>
      <div class="language-switcher">
        <LanguageSwitcher></LanguageSwitcher>
      </div>
    </div>
    <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1" name="first">
        <RouterLink :to="{ name: 'home' }">{{ $t('nav.home') }}</RouterLink>
      </el-menu-item>
      <el-menu-item index="2" label="Config" name="second">
        <RouterLink :to="{ name: 'result' }">{{ $t('nav.leagueResults') }}</RouterLink>
      </el-menu-item>
      <el-menu-item index="3" name="third">
        <RouterLink :to="{ name: 'faq' }">{{ $t('nav.faq') }}</RouterLink>
      </el-menu-item>
      <el-menu-item index="4" name="fourth">
        <RouterLink :to="{ name: 'about' }">{{ $t('nav.aboutUs') }}</RouterLink>
      </el-menu-item>
      <el-menu-item index="5" name="fifith">
        <RouterLink :to="{ name: 'contact' }">{{ $t('nav.contactUs') }}</RouterLink>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/global.scss';

.header {
  height: 100px;
  border: solid;

  @include tablet {
    height: 130px;
  }
  @include pc {
    height: 150px;
  }

  .top {
    @include flex-row-space-between;
    height: 40%;
    .logo {
      height: 100%;

      img {
        height: 100%;
      }
    }
    .language-switcher {
      width: 100px;
    }
  }

  .el-menu {
    background-color: $bg-nav-color;
    border-radius: 8px;
    box-shadow:
      rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    width: 100%;
    border-bottom: none;
    @include flex-row-space-around;

    @include pc {
      height: 60px;
    }
    .el-menu-item {
      // width: 100%;
      color: white;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      font-weight: $font-weight-bold;
      &:hover {
        background-color: black;
      }
    }
  }
}
</style>
