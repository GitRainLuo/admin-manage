<template>
    <el-form>
      <el-form-item label="Test">
        <el-input v-model="msg"></el-input>
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
            return {msg: ''}
        }
    }
</script>

<style>
    body {

    }
</style>
