<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo-box">
        <img v-if="collapsed" :src="getimageUrlSmall" class="logo" alt="logo" />
        <img v-else :src="getimageUrlBig" class="logo-big" alt="logo" />
        <!-- <img src="../assets/logo-big.jpg" /> -->
        <!-- <span style="color: white; font-size: 15px">新生报到管理系统</span> -->
      </div>
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item key="1">
          <a-icon type="home" />
          <span>首页</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <span slot="title"><a-icon type="mail" /><span>院系信息</span></span>
          <a-menu-item key="5">电信工程学院</a-menu-item>
          <a-menu-item key="6"> 会计学院 </a-menu-item>
          <a-menu-item key="7"> 经贸学院 </a-menu-item>
          <a-menu-item key="7"> 服装与艺术学院 </a-menu-item>
          <a-menu-item key="7"> 医药学院 </a-menu-item>
          <a-menu-item key="8"> 外国语学院 </a-menu-item>
        </a-sub-menu>
        <a-menu-item key="2">
          <a-icon type="team" />
          <span>学生信息管理</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="user" />
          <span>个人信息</span>
        </a-menu-item>
        <a-menu-item key="4">
          <a-icon type="pay-circle" />
          <span>缴费管理</span>
        </a-menu-item>
        <a-menu-item key="5">
          <a-icon type="book" />
          <span>课程查询</span>
        </a-menu-item>
        <a-menu-item key="6">
          <a-icon type="setting" />
          <span>系统管理</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        Content
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
// import homePage from "./homePage/index.vue";
export default {
  components: {
    // homePage
  },
  data() {
    return {
      collapsed: false,
    };
  },
  computed: {
    getimageUrlSmall() {
      return this.imageUrlSmall || require("../assets/logo-small.png");
    },
    getimageUrlBig() {
      return this.imageUrlBig || require("../assets/logo-big.png");
    },
  },
};
</script>
<style>
/* 用来设置页面最小的高度 */
#components-layout-demo-custom-trigger {
  min-height: 100vh;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo-box {
  height: 32px;
  /* background: rgba(255, 255, 255, 0.2); */
  margin: 18px 0 34px 13px;
}
</style>
