import {observable, action, makeAutoObservable} from 'mobx';

class RootStore {
  // observable 表示数据可监控 表示是全局数据
  // 手机号码
  @observable mobile = '';
  // token
  @observable token = '';
  // 用户唯一id
  @observable userId = '';

  constructor() {
    makeAutoObservable(this);
  }

  // action行为 表示 changeName是个可以修改全局共享数据的方法
  @action setUserInfo(mobile, token, userId) {
    this.mobile = mobile;
    this.token = token;
    this.userId = userId;
  }

  @action setMobile(mobile) {
    this.mobile = mobile;
  }
}

export default new RootStore();
