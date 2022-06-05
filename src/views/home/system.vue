<template>
  <a-table :columns="columns" :data-source="data">
    <a slot="name" slot-scope="text">{{ text }}</a>
    <template slot="status" slot-scope="text, record">
      <span @click="changeEdit">
        <a-icon type="edit" />
      </span>
    </template>
  </a-table>
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          UseName: "admin",
          Password: "123456",
          status: 1,
        },
        {
          UseName: "root",
          Password: "123456",
          status: 1,
        },
        {
          UseName: "636462748384838483",
          Password: "000730",
          status: 0,
        },
      ],
    };
  },
  computed: {
    columns() {
      return [
        {
          title: "UseName",
          dataIndex: "UseName",
          key: "UseName",
          scopedSlots: { customRender: "UseName" },
          ellipsis: true,
        },
        {
          title: "Password",
          dataIndex: "Password",
          key: "Password",
          scopedSlots: { customRender: "Password" },
        },
        {
          title: "status",
          dataIndex: "status",
          key: "status",
          scopedSlots: { customRender: "status" },
        },
      ];
    },
  },
  methods: {
    changeEdit(record) {},
  },
};
</script>
<style></style>
