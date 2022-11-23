import { ref, onMounted } from "vue";
export default (tag=1) => {
    const tags = ref([])
    onMounted(() => {
        setTimeout(() => {
            if (tag === 1) {
                const arr = [
                    { id: '001', name: '全部' },
                    { id: '002', name: '会员日' },
                    { id: '003', name: '精彩生活' },
                    { id: '004', name: '车友心得' },
                    { id: '005', name: '品牌资讯' },
                ]
    
                tags.value = arr
            } else if (tag === 2) {
                const arr = [
                    { id: '001', name: '全部活动' },
                    { id: '002', name: '',img:'http://cdn.smartservice.bjev.com.cn/baicapp/20211019/3af4683210894cb5af6515451cd007fd', selectImg:'http://cdn.smartservice.bjev.com.cn/baicapp/20211019/3461635418d34280b4b9771cc8b9ab9e'},
                    { id: '003', name: '经销商活动', img:'http://cdn.smartservice.bjev.com.cn/baicapp/20211019/c10c619d730d4177b6f15a0da27306ee',selectImg:'http://cdn.smartservice.bjev.com.cn/baicapp/20211019/d59047d3d2284a16b1be19740d27a18a' },
                    { id: '004', name: '京友会', img:'http://cdn.smartservice.bjev.com.cn/baicapp/20211019/77a8738dc9fc44e8ac446d62dc2da838',selectImg:'http://cdn.smartservice.bjev.com.cn/baicapp/20211019/58f2921e0fb345d2bffe6dd884d6bb4a' },
                ]
    
                tags.value = arr
            }
           

        }, 3000);

    })
    return tags
}
