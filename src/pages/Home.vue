<template>
    <el-row class="container">
      <el-col :span="24" class="header">
        <el-col :span="10" class="logo" >
          {{sysName}}
        </el-col>
        <el-col :span="10">
          <div class="tools" @click.prevent="collapse">
            <i class="fa fa-align-justify"></i>
          </div>
        </el-col>
        <el-col :span="4" class="userinfo">
          <el-dropdown trigger="hover">
            <span class="el-dropdown-link userinfo-inner">{{sysUserName}}</span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>我的消息</el-dropdown-item>
              <el-dropdown-item>设置</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-col>
      <el-col :span="24" class="main">
        <aside>
          <!--导航菜单-->
          <el-menu :default-active="$route.path" class="el-menu-vertical" @open="handleOpen" @close="handleClose" @select="handleSelect" unique-opened router>
            <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
              <el-submenu :index="index+''" v-if="!item.leaf">
                <template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
                <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">{{child.name}}</el-menu-item>
              </el-submenu>
              <el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i :class="item.iconCls"></i>{{item.children[0].name}}</el-menu-item>
            </template>
          </el-menu>
        </aside>
        <section class="content-container">
          <div>
            <el-col :span="24" class="breadcrumb-container">
              <strong class="title">{{$route.name}}</strong>
              <el-breadcrumb separator="/" class="breadcrumb-inner">
                <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
                  {{item.name}}
                </el-breadcrumb-item>
              </el-breadcrumb>
            </el-col>
            <el-col :span="24" class="breadcrumb-wrapper">
              <transition name="fade" mode="out-in">
                <router-view></router-view>
              </transition>
            </el-col>
          </div>
        </section>
      </el-col>
    </el-row>
</template>

<script>
  import ElRow from "element-ui/packages/row/src/row";
  import ElCol from "element-ui/packages/col/src/col";
  import ElDropdown from "../../node_modules/element-ui/packages/dropdown/src/dropdown";
  import ElDropdownMenu from "../../node_modules/element-ui/packages/dropdown/src/dropdown-menu";
  import ElDropdownItem from "../../node_modules/element-ui/packages/dropdown/src/dropdown-item";
  import ElSubmenu from "../../node_modules/element-ui/packages/menu/src/submenu";
  import ElBreadcrumb from "../../node_modules/element-ui/packages/breadcrumb/src/breadcrumb";
  import ElBreadcrumbItem from "../../node_modules/element-ui/packages/breadcrumb/src/breadcrumb-item";
    export default{
      components: {
        ElBreadcrumbItem,
        ElBreadcrumb,
        ElSubmenu,
        ElDropdownItem,
        ElDropdownMenu,
        ElDropdown,
        ElCol,
        ElRow},
      data () {
            return {
                sysName:"admin-manage",
                sysUserName:"admin"
            }
        },
      methods:{
        handleOpen(){

        },
        handleClose(){

        },
        handleSelect(){

        }

      }
    }
</script>

<style lang="scss" scoped>
  .container{
    position: absolute;
    top:0;
    left: 0;
    bottom: 0;
    width: 100%;
    .header{
      height: 60px;
      line-height: 60px;
      background: rgb(32,160,255);
      color:#fff;
      .logo{
        font-size: 22px;
      }
      .userinfo{
        text-align: right;
        padding-right: 40px;
        float: right;
        .userinfo-inner{
          cursor: pointer;
          color: #fff;
        }
      }
    }
    .main{
      display: flex;
      position: absolute;
      top:60px;
      bottom: 0px;
      overflow: hidden;
      aside{
        flex:0 0 200px;
        width: 200px;
        text-align: left;
        .el-menu{
          height: 100%;
        }
      }
      .content-container{
        flex:1;
        overflow-y: scroll;
        padding: 20px;
        .breadcrumb-container{
          .title{
            width: 100px;
            float: left;
            color: #475669;
          }
          .breadcrumb-inner{
            float: right;
          }
          .breadcrumb-wrapper{
            background-color: #fff;
            box-sizing: border-box;
          }
        }
      }
    }
  }
</style>
