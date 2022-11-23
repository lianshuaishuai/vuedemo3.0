<template>
    <div class="topic-tool-bar">
        <!-- 时间 -->
        <span class="time">{{postsItem.time}}</span>
        <!-- 右边的点赞 阅读量 评论数 -->
        <div class="right">
             <!-- 阅读量 -->
            <div class="sys">
                <img :src="sys" >
                <span>{{postsItem.sys}}</span>
            </div>
          
            <!-- 点赞 -->
            <div class="like" @click.stop="disabled && likeClick()">
                <img :src="likeStatus ? selectLike : like" >
                <span>{{postsItem.like}}</span>
            </div>

            <!-- 评论 -->
            <div class="comment">
                <img :src="comment_nomal" >
                <span>{{postsItem.comment}}</span>
            </div>
           
        </div>
    </div>
</template>
<script>
import sys from '../assets/topic/sys@2x.png'
import comment_nomal from '@/assets/tabaricons/comment_nomal.png'
import like from '../assets/topic/like@2x.png'
import selectLike from '../assets/topic/select_like@2x.png'
import { ref, toRef } from '@vue/reactivity'
import likeRequest from '../hook/likeRequest'
import { Toast } from 'vant'
export default {
    name: 'topic-tool-bar',

    props:['postsItem'],

    setup(props) {
        const likeStatus = toRef(props.postsItem, 'likeStatus')
        const disabled = ref(true)
        // 点赞
        const likeClick = ()=>{
            disabled.value = false
            likeStatus.value = !likeStatus.value
            likeRequest(2)
            .then(()=>{
                disabled.value = true
            })
            .catch((msg)=>{
                disabled.value = true
                likeStatus.value = !likeStatus.value
                Toast(msg)
            })
           
        }
        return {
            comment_nomal,
            sys,
            like,
            selectLike,
            likeStatus,
            disabled,
            likeClick
        }
    }
}
</script>
<style lang="less" scoped>
    .topic-tool-bar{
        padding: 16px 0 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .time {
            color: #B2B8C6;
            font-size: 13px;
        }
        .right{
            display: flex;
            align-items: center;
            font-size: 13px;
            color: #B2B8C6;
            div{
                display: flex;
                align-items: center;
                img {
                    width: 16px;
                    height: 16px;
                    margin-right: 3px;
                }
                &:not(:nth-of-type(3)){
                   margin-right: 16px;
                }
            }
            // 阅读量 点赞
            // .sys,.like{
            //     margin-right: 16px;
               
            // }
        }
    }
</style>