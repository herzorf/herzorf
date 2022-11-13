<template>
     <aside>
      <div class="avatar">
        <img :src="avatar" width="160" height="160" alt="" />
        <h2>何中峰</h2>
        <p>应聘前端工程师</p>
      </div>
      <ul class="info">
        <li><Svg class="age"></Svg> <span>1999/10/25</span></li>
        <li><Svg class="address"></Svg> <span>上海市徐汇区</span></li>
        <li><Svg class="mobile"></Svg> <span>17384888339</span></li>
        <li><Svg class="email"></Svg> <span>herzorf@icloud.com</span></li>
        <li><Svg class="weixin"></Svg> <span>hzf1446450047</span></li>
        <li><Svg class="colleague"></Svg> <span>西北大学(211)</span></li>
        <li><Svg class="school"></Svg> <span>2022/7毕业</span></li>
        <li><Svg class="major"></Svg> <span>软件工程专业</span></li>
      </ul>
    </aside>
</template>
<script setup lang="ts">
import avatar from "@/assets/images/avatar.jpg";
import Svg from "@/components/svg/svg.vue";
</script>
<style lang="scss">
aside {
    width: 30%;
    background-color: #ececec;
    padding: 1em;

    .avatar {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h2 {
            border-bottom: 1px solid black;
            padding-bottom: 0.25em;
            margin-bottom: 0.5em;
            font-weight: 400;
        }
    }

    .info {
        margin-top: 4em;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        li {
            width: 100%;
            padding: 6px 0;
            border-bottom: 1px solid black;

            span {
                border-left: 1px solid black;
                margin-bottom: 8px;
                padding-left: 8px;
            }
        }
    }
}
</style>