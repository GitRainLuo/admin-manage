/**
 * Created by 10040 on 2018/10/15.
 */
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {LoginUsers,Users} from './data/user';
export default {
  bootstrap(){
    let mock = new MockAdapter(axios);
    // mock success request
    mock.onGet('/success').reply(200,{
      msg:'success'
    });

    // mock error request
    mock.onGet('/error').reply(500,{
      msg:'fail'
    });

    //登录
    mock.onPost('/login').reply(config =>{
      //config.data 是一个string  用 JSON.parse()解析
      let {username,password} = JSON.parse(config.data);
      return new Promise((resolve,reject)=>{
        let user = null;
        setTimeout(()=>{
          let hasUser = LoginUsers.some(u=>{
            // alert(username+"   "+password)
            if (u.username === username&&u.password === password){
              //转换为对象
              user = JSON.parse(JSON.stringify(u));
              user.password = undefined;
              return true;
            }
          });
          if(hasUser){
            resolve([200,{code:200,msg:'请求成功',user}]);
          }else {
            resolve([200,{code:500,msg:'账号或密码错误'}]);
          }
        },1000);
      });
    });

  }

}
