<template>
  <div>
    <a-avatar :size="64" style="backgroundcolor: #87d068" icon="user" />
    <a-descriptions title="个人信息" class="info" v-model="fromData">
      <a-descriptions-item v-model="fromData.name"> 姓名：</a-descriptions-item>
      <a-descriptions-item v-model="fromData.age"> 年龄： </a-descriptions-item
      ><br />
      <a-descriptions-item v-model="fromData.sex"> 性别： </a-descriptions-item>
      <a-descriptions-item v-model="fromData.nation">
        民族： </a-descriptions-item
      ><br />
      <a-descriptions-item v-model="fromData.class">
        班级：
      </a-descriptions-item>
      <a-descriptions-item v-model="fromData.number">
        学号：
      </a-descriptions-item>
      <a-descriptions-item v-model="fromData.major"
        >专业：
      </a-descriptions-item>
      <a-descriptions-item v-model="fromData.college"
        >学院：
      </a-descriptions-item>
      <a-descriptions-item v-model="fromData.edu">学制： </a-descriptions-item>
      <a-descriptions-item v-model="fromData.data"
        >入学年份：
      </a-descriptions-item>
    </a-descriptions>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fromData: {
        name: "",
        age: "",
        sex: "",
        nation: "",
        class: "",
        number: "",
        major: "",
        college: "",
        edu: "",
        data: "",
      },
    };
  },
};
</script>
<style scoped>
.info {
  margin-top: 10px;
}
</style>
