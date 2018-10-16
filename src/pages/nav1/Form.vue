<template>
    <el-form :model="form" @submit.prevent="onSubmit" labelWidth="80px" style="margin: 30px 10px;width: 60%;min-width: 650px">
      <el-form-item label="活动名称:">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域:" style="float:left;">
        <el-select v-model="form.area" placeholder="请选择活动区域">
          <el-option value="shanghai" label="区域一"></el-option>
          <el-option value="beijing"  label="区域二"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间:" style="clear: both">
        <el-col :span="10">
          <el-date-picker type="date" placeholder="请选择开始日期" v-model="form.dateStart" style="width: 100%"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-date-picker type="date" placeholder="请选择结束日期" v-model="form.dateEnd" style="width: 100%"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="及时配送:"  style="float: left">
        <el-switch v-model="form.switch"></el-switch>
      </el-form-item>
      <el-form-item label="活动性质:" style="clear: both">
       <el-checkbox-group v-model="form.type" >
         <el-checkbox label="美食/餐厅线上活动" style="margin-left: -27px"></el-checkbox>
         <el-checkbox label="地推活动"></el-checkbox>
         <el-checkbox label="线下主题活动"></el-checkbox>
         <el-checkbox label="单纯品牌曝光"></el-checkbox>
       </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源:">
        <el-radio-group v-model="form.resource" style="margin-left: -302px">
          <el-radio label="线上品牌赞助商"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式:" >
        <el-input type="textarea" v-model="form.des"></el-input>
      </el-form-item>
      <el-form-item style="float: left">
        <el-button type="primary">立即创建</el-button>
        <el-button @click.native.prevent>取消</el-button>
      </el-form-item>
    </el-form>
</template>

<script>
  import ElForm from "../../../node_modules/element-ui/packages/form/src/form";
  import ElFormItem from "../../../node_modules/element-ui/packages/form/src/form-item";
  import ElInput from "../../../node_modules/element-ui/packages/input/src/input";
  import ElDropdownMenu from "../../../node_modules/element-ui/packages/dropdown/src/dropdown-menu";
  import ElOption from "../../../node_modules/element-ui/packages/select/src/option";
  import ElCol from "element-ui/packages/col/src/col";
  import ElSwitch from "../../../node_modules/element-ui/packages/switch/src/component";
  import ElCheckbox from "../../../node_modules/element-ui/packages/checkbox/src/checkbox";
  import ElButton from "../../../node_modules/element-ui/packages/button/src/button";
  import ElRadio from "../../../node_modules/element-ui/packages/radio/src/radio";
  import ElCheckboxGroup from "../../../node_modules/element-ui/packages/checkbox/src/checkbox-group";
  import ElRadioGroup from "../../../node_modules/element-ui/packages/radio/src/radio-group";
    export default{
      components: {
        ElRadioGroup,
        ElCheckboxGroup,
        ElRadio,
        ElButton,
        ElCheckbox,
        ElSwitch,
        ElCol,
        ElOption,
        ElDropdownMenu,
        ElInput,
        ElFormItem,
        ElForm},
      data () {
            return {
                form:{
                  name:'',
                  area:'',
                  dateStart:'',
                  dateEnd:'',
                  switch:false,
                  type:[],
                  resource:'',
                  des:''
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
