<template>
  <div>
    <a-avatar
      :size="64"
      style="backgroundcolor: #87d068"
      icon="money-collect"
    />
    <a-descriptions
      title="缴费信息："
      v-model="fromdata"
      bordered
      style="margin-top: 10px"
    >
      <a-descriptions-item v-model="fromdata.name" label="姓名">
        name
      </a-descriptions-item>
      <a-descriptions-item v-model="fromdata.sex" label="性别">
        女
      </a-descriptions-item>
      <a-descriptions-item v-model="fromdata.age" label="年龄">
        19
      </a-descriptions-item>
      <a-descriptions-item v-model="fromdata.college" label="学院">
        会计学院
      </a-descriptions-item>
      <a-descriptions-item v-model="fromdata.loans" :span="2" label="班级">
        会计2201
      </a-descriptions-item>
      <a-descriptions-item v-model="fromdata.college" label="是否贷款">
        <a-radio-group name="radioGroup">
          <a-radio :value="1"> 是 </a-radio>
          <a-radio :value="2"> 否 </a-radio>
        </a-radio-group>
      </a-descriptions-item>
      <a-descriptions-item
        label="学费（包含课本费,住宿费以及学费）"
        v-model="fromdata.payment"
      >
        ￥12000
      </a-descriptions-item>
      <a-descriptions-item label="床褥" v-model="fromdata.daily">
        ￥300
      </a-descriptions-item>
      <a-descriptions-item label="是否需要床褥" v-model="fromdata.value">
        <a-radio-group name="radioGroup">
          <a-radio :value="1"> 是 </a-radio>
          <a-radio :value="2"> 否 </a-radio>
        </a-radio-group>
      </a-descriptions-item>
      <a-descriptions-item label="总计" v-model="fromdata.payAll">
        ￥12300.00
      </a-descriptions-item>
    </a-descriptions>
    <template>
      <a-button type="primary" class="payfor" @click="showModal">
        确认缴费
      </a-button>
      <a-modal v-model="visible" title="缴费" on-ok="handleOk">
        <template slot="footer">
          <a-button key="back" @click="handleCancel"> 返回 </a-button>
          <a-button
            key="submit"
            type="primary"
            :loading="loading"
            @click="handleOk"
          >
            确认
          </a-button>
        </template>
        <img src="@/assets/payments/weixin.png" alt="" class="weixin" />
        <span class="line" />
        <img src="@/assets/payments/zhifubao.png" alt="" class="weixin" />
      </a-modal>
    </template>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fromdata: {
        name: "",
        age: "",
        sex: "",
        class: "",
        college: "",
        payment: "",
        daily: "",
        payAll: "",
        value: "",
      },
      loading: false,
      visible: false,
    };
  },
  methods: {
    // 支付弹窗
    showModal() {
      this.visible = true;
    },
    handleOk() {
      this.loading = true;
      setTimeout(() => {
        this.visible = false;
        this.loading = false;
        this.$message.success("缴费成功");
      }, 3000);
    },
    handleCancel() {
      this.visible = false;
    },
  },
};
</script>
<style>
.payfor {
  margin: 55px 480px;
}
.weixin {
  width: 206px;
  height: 206px;
}
.line {
  width: 100px;
  height: 200px;
  margin: 0 30px 0 30px;
  color: #000;
}
</style>
