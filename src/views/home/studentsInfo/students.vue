<template>
  <div>
    <!-- 新增信息弹窗 -->
    <a-button type="primary" @click="showDrawer"> 新增信息 </a-button>
    <a-drawer
      width="720"
      :visible="visible"
      :body-style="{ paddingBottom: '80px' }"
      @close="onClose"
    >
      <div slot="title">
        <div class="titleLine" />
        新增信息
      </div>
      <a-form-model
        ref="ruleForm"
        :model="formData"
        :rules="rules"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        label-align="left"
      >
        <a-form-model-item ref="name" label="姓名" prop="name">
          <a-input v-model="formData.name" placeholder="请输入姓名" />
        </a-form-model-item>
        <a-form-model-item label="性别" prop="sex">
          <a-radio-group v-model="formData.sex">
            <a-radio value="1"> 女 </a-radio>
            <a-radio value="2"> 男 </a-radio>
          </a-radio-group>
        </a-form-model-item>
        <a-form-model-item ref="name" label="年龄" prop="age">
          <a-input v-model="formData.age" placeholder="请输入年龄" />
        </a-form-model-item>
        <a-form-model-item ref="name" label="班级" prop="class">
          <a-input v-model="formData.class" placeholder="请输入班级" />
        </a-form-model-item>
        <a-form-model-item ref="name" label="学号" prop="number">
          <a-input v-model="formData.number" placeholder="请输入学号" />
        </a-form-model-item>
        <a-form-model-item ref="name" label="身份证号" prop="id">
          <a-input v-model="formData.id" placeholder="请输入身份证号" />
        </a-form-model-item>
        <a-form-model-item label="学院" prop="college">
          <a-select v-model="formData.college" placeholder="请选择学院">
            <a-select-option value="电信工程学院">
              电信工程学院
            </a-select-option>
            <a-select-option value="会计学院"> 会计学院 </a-select-option>
            <a-select-option value="服装与艺术学院">
              服装与艺术学院
            </a-select-option>
            <a-select-option value="经贸学院"> 经贸学院 </a-select-option>
            <a-select-option value="医药学院"> 医药学院 </a-select-option>
            <a-select-option value="外国语学院"> 外国语学院 </a-select-option>
          </a-select>
        </a-form-model-item>
      </a-form-model>
      <div
        :style="{
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e9e9e9',
          background: '#fff',
          zIndex: 1,
        }"
      >
        <div class="drawerButton">
          <a-button :style="{ marginRight: '8px' }" @click="onClose">
            取消
          </a-button>
          <a-button type="primary" @click="onSubmit"> 确定 </a-button>
        </div>
      </div>
    </a-drawer>
    <!-- 搜索框 -->
    <div class="selection">
      <span>学院：</span>
      <a-select class="college" @change="changeCollege" placeholder="学院">
        <a-select-option value="电信工程学院"> 电信工程学院 </a-select-option>
        <a-select-option value="会计学院"> 会计学院 </a-select-option>
        <a-select-option value="经贸学院"> 经贸学院 </a-select-option>
        <a-select-option value="服装与艺术学院">
          服装与艺术学院
        </a-select-option>
        <a-select-option value="医药学院"> 医药学院 </a-select-option>
        <a-select-option value="外国语学院"> 外国语学院 </a-select-option>
      </a-select>
      <span>性别：</span>
      <a-select
        class="sex"
        @change="changeSex"
        placeholder="性别"
        style="width: 100px"
      >
        <a-select-option value="famle"> 女 </a-select-option>
        <a-select-option value="male"> 男 </a-select-option>
      </a-select>
      <a-input-search
        placeholder="input search text"
        style="width: 200px"
        @search="searchAll"
        class="search"
      />
    </div>
    <!-- 表格 -->
    <a-table
      class="tableList"
      :columns="columns"
      :data-source="listdata || []"
      :paganation="false"
    >
      <a slot="name" slot-scope="text">{{ text }}</a>
      <template slot="state" slot-scope="text, record">
        <span>
          <status-icons :type="text == 'successful' ? 'success' : 'error'" />
          {{ text == "successful" ? "注册成功" : "未注册" }}
        </span>
      </template>
      <template slot="handle" slot-scope="text, record">
        <a-button class="action-btn" type="link" @click="modifyInfo(record)">
          修改信息
        </a-button>
        <a-button class="delete" type="link" @click="warning(record)">
          删除信息
        </a-button>
      </template>
    </a-table>
  </div>
</template>
<script>
import { Modal } from "ant-design-vue";
export default {
  components: {},
  data() {
    return {
      // stu_class: "",
      // stu_name: "",
      // stu_sex: "",
      // stu_age: "",
      // stu_number: "",
      // stu_id: "",
      // stu_college: "",
      form: this.$form.createForm(this),
      infomation: "",
      visible: false,
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      formData: {
        class: "",
        name: "",
        sex: "",
        age: "",
        number: "",
        id: "",
        college: "",
        state: "",
      },
      listdata: [
        {
          key: "1",
          class: "会计2201",
          name: "王一",
          sex: "男",
          age: "19",
          number: "201010101",
          id: "121223200304201343",
          college: "会计学院",
          state: "successful",
        },
        {
          key: "2",
          class: "会计2201",
          name: "季彤",
          sex: "女",
          age: "19",
          number: "201010139",
          id: "121223200404131253",
          college: "会计学院",
        },
        {
          key: "3",
          class: "会计2202",
          name: "樊沐",
          sex: "女",
          age: "19",
          number: "201010204",
          id: "121322200309011523",
          college: "会计学院",
        },
        {
          key: "4",
          class: "经贸2201",
          name: "王萌",
          sex: "女",
          age: "19",
          number: "202010130",
          id: "122213200312121568",
          college: "经贸学院",
        },
        {
          key: "5",
          class: "经贸2202",
          name: "韩科",
          sex: "男",
          age: "19",
          number: "202010213",
          id: "121223200306281273",
          college: "经贸学院",
        },
        {
          key: "6",
          class: "电信2201",
          name: "李工",
          sex: "男",
          age: "19",
          number: "203010101",
          id: "121223200305301652",
          college: "电信工程学院",
        },
        {
          key: "7",
          class: "电信2202",
          name: "张强",
          sex: "男",
          age: "19",
          number: "203010237",
          id: "121223200208191573",
          college: "电信工程学院",
        },
      ],
      rules: {
        class: [
          {
            required: true,
            message: "请输入班级",
            trigger: "blur",
          },
          {
            pattern: /^[\u4e00-\u9fa50-9a-zA-Z_-]+$/,
            message: "只允许包含中文、字母、数字、短划线-和下划线_",
            trigger: "blur",
          },
        ],
        name: [
          {
            required: true,
            message: "请输入姓名",
            trigger: "blur",
          },
          {
            pattern: /^[\u4e00-\u9fa5]/,
            message: "只允许包含中文",
            trigger: "blur",
          },
        ],
        sex: [
          {
            required: true,
            message: "请选择性别",
            trigger: "change",
          },
        ],
        age: [
          {
            required: true,
            message: "请输入年龄",
            trigger: "blur",
          },
          {
            pattern: /^[0-9]*$/,
            message: "只允许输入数字",
            trigger: "blur",
          },
        ],
        number: [
          {
            required: true,
            message: "请输入学号",
            trigger: "blur",
          },
          {
            pattern: /^[0-9]*$/,
            message: "只允许输入数字",
            trigger: "blur",
          },
          {
            len: 9,
            message: "Length should be 9",
            trigger: "blur",
          },
        ],
        id: [
          {
            required: true,
            message: "请输入身份证号",
            trigger: "blur",
          },
          {
            pattern: /^[0-9]*$/,
            message: "只允许输入数字",
            trigger: "blur",
          },
          {
            len: 18,
            message: "Length should be 18",
            trigger: "blur",
          },
        ],
        college: [
          {
            required: true,
            message: "请选择学院",
            trigger: "blur",
          },
        ],
      },
      // pagination: {
      //   current: 1,
      //   pageSize: 5,
      //   total: 0,
      //   showQuickJumper: true,
      //   showSizeChanger: true,
      //   showTotal: (total) =>
      //     _this.lang === "en-US" ? `A total of ${total}` : `共${total}条`,
      //   size: "small",
      // },
    };
  },
  computed: {
    columns() {
      return [
        {
          title: "班级",
          dataIndex: "class",
          key: "stu_class",
          scopedSlots: { customRender: "class" },
        },
        {
          title: "姓名",
          dataIndex: "name",
          key: "stu_name",
          scopedSlots: { customRender: "name" },
        },
        {
          title: "性别",
          dataIndex: "sex",
          key: "stu_sex",
          scopedSlots: { customRender: "sex" },
        },
        {
          title: "年龄",
          dataIndex: "age",
          key: "stu_age",
          scopedSlots: { customRender: "age" },
        },
        {
          title: "学号",
          dataIndex: "number",
          key: "stu_number",
          scopedSlots: { customRender: "number" },
        },
        {
          title: "身份证号",
          dataIndex: "id",
          key: "stu_id",
          scopedSlots: { customRender: "id" },
        },
        {
          title: "学院",
          dataIndex: "college",
          key: "stu_college",
          scopedSlots: { customRender: "college" },
        },
        {
          title: "状态",
          dataIndex: "status",
          key: "stu_status",
          scopedSlots: { customRender: "status" },
        },
        {
          title: "操作",
          dataIndex: "handle",
          key: "stu_handle",
          scopedSlots: { customRender: "handle" },
        },
      ];
    },
  },
  mounted() {},
  methods: {
    // 筛选学院
    changeCollege(value) {
      this.college = value;
    },
    // 筛选性别
    changeSex(value) {
      this.sex = value;
    },
    // 输入筛选条件
    searchAll(value) {
      this.infomation = value;
    },
    // 整体条件筛选
    onSearch(college = "", sex = "") {
      this.college = college;
      this.sex = sex;
      this.listdata(); // 调接口动态显示
    },
    // 删除信息
    warning(record) {
      this.record = record;
      Modal.confirm({
        title: "删除信息",
        // content: "确定删除信息:' + this.record.name + '吗？",
        content: "确定删除信息吗？",
        okText: "确认",
        cancelText: "取消",
        icon: "info-circle",
        onOk() {
          alert("ok");
          // console.log("OK");
          // this._deleteQuota(record);
          // this.$message.success("删除成功");
        },
        onCancel() {},
      });
    },
    // 弹窗
    showDrawer() {
      this.visible = true;
    },
    modifyInfo() {
      this.visible = true;
    },
    onClose() {
      this.resetForm();
      this.visible = false;
    },
    onSubmit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          // this.getGrouplistNews();
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    },
    // getdata() {
    //   this.$axios.get("http://localhost:8080/api/info.json").then((res) => {
    //     console.log(res);
    //     if (res.code === 0) {
    //       this.listdata = res.data.data.list;
    //     } else {
    //       this.$message.error("请求数据失败");
    //     }
    //   });
    // },
  },
};
</script>
<style scoped>
.selection {
  float: right;
}
.college {
  width: 150px;
  margin: 0 10px 10px 0;
}
.search {
  margin-left: 10px;
  width: 300px;
}
.drawerButton {
  margin: 10px 0 20px 0;
  text-align: center;
}
</style>
