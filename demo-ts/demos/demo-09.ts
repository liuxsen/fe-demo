try {
  
// } catch (error) { // 如果 useUnknownInCatchVariables 为false，那么error 类型是any
} catch (error) { // 如果 useUnknownInCatchVariables 为true，那么error 类型是unkown
  if(error instanceof Error){
    console.log(error.message);
  }
}