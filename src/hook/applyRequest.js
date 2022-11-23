// export default (id)=>{
//     return new Promise((success, faield)=>{
//         setTimeout(() => {
//             if (id === 1) {
//                 success()
//             }else {
//                 faield('关注失败')
//             }
//         }, 3000);
//     })
// }

export default  (id)=> {
   return new Promise((success, faield)=>{
    setTimeout(() => {
        if (id === 1) {
            success('关注成功')
        }else {
            faield('关注失败')
        }
    }, 3000);
})
    // try {
    //       let success =  await 
    //     console.log('你好');
    //     return {code: true, body: success}
    // } catch (error) {
    //     console.log('我不好');
    //     console.log(error);
    //     return {code:false, body:error}
    // }
   
}
// export {ttt}