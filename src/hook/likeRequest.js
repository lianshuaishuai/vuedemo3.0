export default (id)=>{
    return new Promise((success, failed)=>{
        setTimeout(() => {
            if (id === 1) {
                success()
            }else {
                failed('点赞失败')
            }
        }, 3000);
    })
}