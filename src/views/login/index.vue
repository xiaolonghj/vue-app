<template>
  <div class="login-container">
    <!-- 顶部导航 -->
    <van-nav-bar title="注册/登录" left-arrow @click-left="$router.back()" />
    <!-- 表单 -->
    <van-form>
      <van-cell-group>
        <van-field
          v-model="value1"
          label="手机号码"
          left-icon="phone-o"
          placeholder="请输入手机号码"
        />
        <van-field v-model="sms" center clearable left-icon="user-o" label="验证码" placeholder="请输入短信验证码">
          <template #button>
            <van-button size="small" round  color="#ccc">发送验证码</van-button>
          </template>
        </van-field>
      </van-cell-group>
      <van-button type="primary" size="large" block class="login-btn">登录</van-button>
    </van-form>
  </div>

</template>

<script>
export default {
  name: "LoginIndex",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="less" scoped>
  .login-btn{
    width: 90%;
    margin: .6rem auto;
    border-radius: .15rem;
    background-color: #1683f2;
    border: none;
  }

</style>   