/**
 * wrong code
 */
for (let i = 0 ; i< 5; i++){
  // 上来很快初始化了5个setTimeout
  // setTimeout执行的时候,因为闭包的缘故,还是现场去找i
  setTimeout(function(){
    console.log("i: "+ i);
  }, i*1000);
  console.log("i: "+ i);
}