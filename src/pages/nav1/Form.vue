<template>
    <el-form :model="form" @submit.prevent="onSubmit">
      <el-form-item label="活动名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
    </el-form>
</template>

<script>
  import ElForm from "../../../node_modules/element-ui/packages/form/src/form";
  import ElFormItem from "../../../node_modules/element-ui/packages/form/src/form-item";
  import ElInput from "../../../node_modules/element-ui/packages/input/src/input";
    export default{
      components: {
        ElInput,
        ElFormItem,
        ElForm},
      data () {
            return {
                form:{
                    name:''
                }
            }
      },
      methods:{
          onSubmit:function () {
            console.log(123)
          }
      }
    }
</script>

<style>
    body {

    }
</style>
