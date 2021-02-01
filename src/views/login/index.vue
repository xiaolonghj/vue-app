<template>
  <div class="login-container">
    <!-- 顶部导航 -->
    <van-nav-bar title="注册/登录" left-arrow @click-left="$router.back()" />
    <!-- 表单 -->
    <van-form
      @submit="onLogin"
      ref="loginForm"
      @failed="onFailed"
      :show-error="false"
      :show-error-message="false"
    >
      <van-cell-group>
        <van-field
          v-model="user.mobile"
          label="手机号码"
          left-icon="phone-o"
          placeholder="手机号码"
          name="mobile"
          :rules="formRules.mobile"
        />
        <van-field
          v-model="user.code"
          center
          clearable
          left-icon="user-o"
          label="验证码"
          placeholder="短信验证码"
          name="code"
          :rules="formRules.code"
        >
          <template #button>
            <van-button size="small" round color="#ccc" @click.prevent="sendSms">发送验证码</van-button>
          </template>
        </van-field>
      </van-cell-group>
      <van-button type="primary" size="large" block class="login-btn" native-type="submit">登录</van-button>
    </van-form>
  </div>
</template>

<script>
import { getLogin } from "@/api/user.js";
export default {
  name: "LoginIndex",
  components: {},
  props: {},
  data() {
    return {
      user: {
        mobile: "13911111111",
        code: "246810",
      },
      formRules: {
        mobile: [
          { required: true, message: "请输入手机号码" },
          {
            pattern: /^1[3|4|5|6|7|8|9]\d{9}$/,
            message: "手机号码格式错误",
          },
        ],
        code: [
          { required: true, message: "请输入短信验证码" },
          { pattern: /^\d{6}$/, message: "验证码格式错误" },
        ],
      },
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    /* 发送登录请求 */
    onLogin() {
      /* 登录加载提示 */
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
        duration: 0,
      });
      getLogin(this.user)
        .then((res) => {
          console.log(res);
          this.$toast.success("登录成功");
          this.$router.push("/home");
        })
        .catch((err) => {
          console.log(err);
          this.$toast.fail("登录失败,手机号或者验证码错误");
        });
    },
    /* 自定义表单验证提示 */
    onFailed(errorInfo) {
      console.log(errorInfo);
      if (errorInfo.errors[0]) {
        this.$toast({
          message: errorInfo.errors[0].message,
          position: "top",
        });
      }
    },
    /* 发送短信验证码 */
    sendSms() {
      this.$refs["loginForm"]
        .validate("mobile")
        .then(() => {
          // console.log(res);
        })
        .catch((err) => {
          console.log(err);
          this.$toast({
            message: err.message,
            position: "top",
          });
        });
    },
  },
};
</script>

<style lang="less" scoped>
.login-btn {
  width: 90%;
  margin: 0.6rem auto;
  border-radius: 0.15rem;
  background-color: #1683f2;
  border: none;
}
</style>   