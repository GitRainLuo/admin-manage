/**
 * Created by 10040 on 2018/10/15.
 */
import Mock from 'mockjs';
const LoginUsers = [
  {
    id:1,
    username:'admin',
    password:'123456',
    avatar:'http://47.106.248.123/upload/5a438677084c4a29b22d9c053fce8a3f_avater.gif',
    // avatar:'../assets/avater.gif',
    name:'jay'
  }
];

const Users = []
for (let i = 0; i < 86; i++) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    addr: Mock.mock('@county(true)'),
    'age|18-60': 1,
    birth: Mock.Random.date(),
    sex: Mock.Random.integer(0, 1)
  }));
}
;
export {LoginUsers,Users};
