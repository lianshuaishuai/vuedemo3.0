// 当需要页面恢复滑动功能时调用
export const canScroll = () => {
    // const mo = (e) => {
    //   e.preventDefault()
    // }
    document.documentElement.style.position= 'static';
    document.body.style.overflow='';//出现滚动条
    // document.removeEventListener("touchmove",mo,false);
}

// 当需要禁止弹出框底部内容滑动时调用
export const stopScroll = () => {
    // const mo = (e) => {
    //   e.preventDefault()
    // }
    document.documentElement.style.position= 'fixed';
    document.body.style.overflow='hidden';//出现滚动条
    // document.addEventListener("touchmove",mo,false);
}