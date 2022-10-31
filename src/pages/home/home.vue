<template>
  <Header />
  <section class="personalInfo">
    <h1>Herzorf</h1>
    <h1>一个web开发工程师</h1>
  </section>
  <section class="personalData" ref="personalData">
    <div class="left">
      <PersonalDataItem v-for="item in leftInfo">
        <template #title>{{ item.title }}</template>
        <template #info>{{ item.info }}</template>
      </PersonalDataItem>
    </div>
    <div class="center">
      <img :src="avatar" width="160" alt="自拍" />
    </div>
    <div class="right">
      <PersonalDataItem v-for="item in rightInfo">
        <template #title>{{ item.title }}</template>
        <template #info>{{ item.info }}</template>
      </PersonalDataItem>
    </div>
  </section>
  <section class="advantage" ref="advantage">
    <h1>我的技能</h1>
    <div class="advantageContent">
      <div class="advantageItem"  v-for="item in advantageItem">
        <div class="skill">
          <Svg :class="item.class"></Svg>
          <span>{{ item.percent }}</span>
        </div>
        <span>{{ item.name }}</span>
      </div>
    </div>
  </section>
  <section class="experience" ref="experience">
    <h1>教育经历 & 工作经历</h1>
    <div class="experienceItem">
      <div class="education">
        <span class="title">{{ "2022/7毕业" }}</span>
        <h3>西北大学</h3>
        <span class="info">{{ "软件工程" }}</span>
      </div>
      <div class="workExperience">
        <span class="title">{{ "2022/8 - 至今" }}</span>
        <h3>明略科技（上海）</h3>
        <span class="info">{{ "前端开发工程师" }}</span>
      </div>
    </div>
  </section>
  <section class="project" ref="project">
    <h1>我的最新项目</h1>
    <div class="showProjects">
      <div class="projectItem" @click="gotoTop">
          <img :src="logo" >
          <p>个人空间</p>
          <p>Vue3 + TS </p>
      </div>
      <div class="projectItem">

      </div>
      <div class="projectItem">

      </div>
    </div>
  </section>
  <section class="whereIAm">
    <h1>在哪可以找到我</h1>
    <div class="social">
      <div class="socialItem">
        <a href="https://github.com/herzorf">
          <Svg class="github"></Svg>
        </a>
      </div>
      <div class="socialItem">
        <a href="https://www.zhihu.com/people/hezhongfeng/posts">
        <Svg class="zhihu"></Svg>
        </a>
      </div>
      <div class="socialItem">
        <a href="https://juejin.cn/user/3122268755467566/posts">
        <Svg class="juejin"></Svg>
        </a>
      </div>
      <div class="socialItem">
        <a href="https://twitter.com/herzorf">
          <Svg class="twitter"></Svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts" name="home">
import Header from "@/components/header/header.vue";
import PersonalDataItem from "./components/personal-data-item/personal-data-item.vue";
import avatar from "@/assets/images/avatar.jpg";
import { leftInfo, oberveApper, rightInfo, advantageItem } from "./util";
import { onMounted, ref } from "vue";
import logo from "@/assets/images/logo_transparent.png"
import Svg from "../../components/svg/svg.vue";
const personalData = ref<HTMLElement>();
const advantage = ref<HTMLElement>();
const project = ref<HTMLElement>();
const experience = ref<HTMLElement>();
const gotoTop = () => {
  document.documentElement.scrollTop = 0
}
onMounted(() => {
  oberveApper(personalData.value!);
  oberveApper(advantage.value!);
  oberveApper(project.value!);
  oberveApper(experience.value!);
});
</script>
<style scoped lang="scss">
h1 {
  font-size: 48px;
  font-weight: lighter;
}

.personalInfo {
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-weight: 100;
    font-size: 64px;
    margin-bottom: 10px;
  }
}

.personalData {
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 0;
  transition: 2.5s;
  border-bottom: 1px solid black;

  >div {
    width: 20%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;

    &.center {
      flex-grow: 1;
    }
  }
}

.advantage {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  opacity: 0;
  transition: 2.5s;
  border-bottom: 1px solid black;

  .advantageContent {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;

    .advantageItem {
      padding: 16px 0;
      font-size: 50px;
      width: 100px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;

      .skill {
        font-size: 100px;
        display: flex;
        flex-direction: column;

        span {
          margin: 18px 0;
          font-size: 30px;
          text-align: center;
        }
      }

      span {
        font-size: 16px;
      }

      &:hover {
        svg {
          animation: 1.5s ease-in jump;
          overflow: auto;
        }

        @keyframes jump {
          0% {
            transform: translateY(-16px);
          }

          20% {
            transform: translateY(0);
          }

          40% {
            transform: translateY(-8px);
          }

          60% {
            transform: translateY(0);
          }

          80% {
            transform: translateY(-2px);
          }

          100% {
            transform: translateY(0);
          }
        }
      }
    }
  }
}

.experience {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  opacity: 0;
  transition: 2.5s;
  border-bottom: 1px solid black;

  .experienceItem {
    width: 100%;
    flex-grow: 0.6;
    display: flex;
    justify-content: flex-start;

    .education,
    .workExperience {
      width: 30%;

      .title {
        color: rgb(120, 120, 120);
        display: block;
        margin-bottom: 40px;
      }

      h3 {
        font-size: 30px;
        margin-bottom: 8px;
      }

      .info {
        color: rgb(98, 97, 97);
        font-size: 16px;
      }
    }
  }
}

.project {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  width: 100%;
  opacity: 0;
  transition: 2.5s;

  .showProjects {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .projectItem {
      width: 30%;
      height: 400px;
      cursor: pointer;
      border: 1px solid gray;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;

      img {
        width: 80%;
      }

      p {
        text-align: center;
        font-size: 24px;
        margin-bottom: 8px;
      }
    }
  }
}

.whereIAm {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  .social {

    width: 80%;
    font-size: 56px;
    justify-content: space-around;
    display: flex;

    .socialItem {
      cursor: pointer;
    }
  }
}

.appear {
  opacity: 1;
}
</style>
