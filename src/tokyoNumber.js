export const tokyoNumber = {
  data(){
    return {
      title: "Welcome",
      subTitle: "my Blog",
      number: 0
      };
  },
  filters:{
    lowerCase(value){
      return value.toLowerCase();
    }
  },
  created(){
    console.log('created at mixins.')
  }
}
