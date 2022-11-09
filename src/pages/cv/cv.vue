<template >
    <article>
        <aside>
            <div class="avatar">
                <img :src="avatar" width="160" height="160" alt="">
                    <h2>何中峰</h2>
                    <p>应聘前端工程师</p>
            </div>
            <ul class="info">
               <li> <Svg class="age" ></Svg> <span>xxxxx</span></li>
               <li> <Svg class="address" ></Svg> <span>xxxxx</span> </li>
               <li> <Svg class="mobile" ></Svg> <span>xxxxx</span> </li>
               <li> <Svg class="email" ></Svg> <span>xxxxx</span> </li>
               <li> <Svg class="weixin" ></Svg> <span>xxxxx</span> </li>
               <li> <Svg class="colleague" ></Svg> <span>xxxxx</span> </li>
               <li> <Svg class="school" ></Svg> <span>xxxxx</span> </li>
            </ul>
        </aside>
        <main>主要内容</main>
    </article>
</template>
<script setup lang="ts">

import avatar from "@/assets/images/avatar.jpg"
import Svg from "@/components/svg/svg.vue";

</script>
<style lang="scss">
article {
    display: flex;
    width: 21cm;
    overflow: hidden;
    min-height: 29.7cm;
    border: 1px solid blue;
    margin: 0 auto;
    font-family: initial;

    aside {
        padding: 1em;
        border: 1px solid red;
        width: 30%;
        background-color: #ececec;

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
            border: 1px solid red;
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

    main {
        margin: 20px 0;
        border: 1px solid black;
        width: 70%;
    }
}
</style>