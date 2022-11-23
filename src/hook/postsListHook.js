import {onMounted, onUnmounted,reactive, ref } from 'vue'
import PubSub from 'pubsub-js'
export default () => {
    // 是否正在加载
    const loading = ref(false);
    // 是否正在下拉刷新
    const refreshing = ref(false);
    // 是否加载了全部数据
    const finished = ref(false);
    // 数据
    let postDic = reactive({ list: [] })

    //页面加载完毕
    onMounted(() => {
        // 注册订阅者
        PubSub.subscribe('MY TOPIC', async (_,{id, status}) => {
            const item =  postDic.list.find(item => item.id === id)
            if (!item) return
            item.status = status
        })
    })

    // 页面即将销毁
    onUnmounted(() => {
        // 清除所有订阅者
        PubSub.clearAllSubscriptions()
    })
   
    // 请求接口
    const getNewList = () => {
        setTimeout(() => {
            if (refreshing.value) {
                postDic.list = [];
                refreshing.value = false;
            }
            postDic.list = [
                { id: '001', name: '你好', img: '', status: 1, time:'2022-01-13', likeStatus:true, sys:'12',like:'13',comment:'14', images: ['https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg'] },
                { id: '002', name: '你好', img: '', status: 1, time:'2022-02-13', likeStatus:false, sys:'12',like:'13',comment:'14', images: ['https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg', 'https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg'] },
                { id: '003', name: '你好', img: '', status: 0, time:'2022-03-13', likeStatus:false, sys:'12',like:'13',comment:'14', images: ['https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg', 'https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg', 'https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg'] },
                { id: '004', name: '你好', img: '', status: 1, time:'2022-04-13', likeStatus:false, sys:'12',like:'13',comment:'14', images: ['https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg', 'https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg', 'https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg', 'https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg'] },
                { id: '005', name: '你好', img: '', status: 1, time:'2022-05-13', likeStatus:false, sys:'12',like:'13',comment:'14', images: ['https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg', 'https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg', 'https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg', 'https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg', 'https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg', 'https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg', 'https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg', 'https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg', 'https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg'] },]
            loading.value = false
            finished.value = true;

        }, 3000);
    }
    // 下拉刷新
    const onRefresh = () => {
        finished.value = false;
        // 正在加载 
        loading.value = true
        getNewList()
    }

    // 加载更多
    const onLoad = () => {
        console.log('我是加载更多');
        getNewList()
    }

    // 返回值
    return {
        refreshing,
        finished,
        loading,
        postDic,
        onRefresh,
        onLoad
    }
}