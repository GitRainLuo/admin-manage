<template>
    <section>
      <!--工具条-->
      <el-col :span="24" class="toolbar">
        <el-form :inline="true" style="text-align: left" :model="filters">
          <el-form-item>
            <el-input placeholder="姓名" v-model="filters.name"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="">查询</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="">新增</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </section>
</template>

<script>
  import ElForm from "../../../node_modules/element-ui/packages/form/src/form";
  import ElFormItem from "../../../node_modules/element-ui/packages/form/src/form-item";
  import ElInput from "../../../node_modules/element-ui/packages/input/src/input";
  import ElCol from "element-ui/packages/col/src/col";
  import ElButton from "../../../node_modules/element-ui/packages/button/src/button";
    export default{
      components: {
        ElButton,
        ElCol,
        ElInput,
        ElFormItem,
        ElForm},
      data () {
            return {
                filters:{
                    name:''
                },
                listLoading:false
            }
        }
    }
</script>

<style>
    body {

    }
</style>
