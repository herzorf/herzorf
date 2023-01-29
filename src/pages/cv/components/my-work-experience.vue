<template>
  <section>
    <MainTitle> 工作经历 </MainTitle>
    <WorkExperience>
      <template #companyName> 上海明略人工智能(集团)有限公司 </template>
      <template #job> 前端开发工程师（React） </template>
      <template #time> 2022/08/01 - 2022/12/31 </template>
      <template #info>
        <ul>
          <li>
            独立负责
            <a href="https://socialx.miaozhen.com/register">SocialX</a>
            2.5版本迭代的前端开发工作
          </li>
          <li>
            使用
            <Orange> React , TypeScript , AntD </Orange> 完成并发布2.5版本的
            <Orange> 注册账户，忘记密码，词云优化等功能。</Orange>
          </li>
        </ul>
        <br />
        <ul>
          <li>
            独立负责<a
              href="https://huashan-test.mininglamp.com/mg/hsbamx/login"
              >AIOT运营平台</a
            >v1.5版本的开发任务
          </li>
          <li>
            使用 <Orange> React , TypeScript , AntD</Orange> 完成并发布:
            <ul style="margin-left: 20px; list-style: circle">
              <li>
                <Orange>租户管理: </Orange>租户的新增，停用，查询，编辑功能
              </li>
              <li><Orange>存储引擎: </Orange>引擎的新增，停用功能</li>
              <li><Orange>回调模块: </Orange>日志的回调 查询，分配更能</li>
            </ul>
          </li>
        </ul>
      </template>
    </WorkExperience>
  </section>
</template>
<script setup lang="ts">
  import MainTitle from "./main-title.vue";
  import Orange from "./orange.vue";
  import WorkExperience from "./work-experience.vue";
</script>
<style lang="scss" scoped>
  section {
    margin-bottom: 2em;

    ul {
      list-style-type: initial;
    }
  }
</style>
