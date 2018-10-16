<template>
    <el-form>
      <el-form-item label="table" labelWidth="80px" style="margin: 30px 20px;width: 60%;min-width: 600px">
        <el-input></el-input>
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
            return {msg: '这个是模板页'}
        }
    }
</script>

<style>
    body {

    }
</style>
