<teaplate>
	<div class="text"><!-- 按回车执行addTask:添加输入文字到tasks数组 -->
    <slot></slot>
    <h1>{{ toutou }}</h1>
		<input type="text" name="" @keydown.enter="addText">
    <p v-for="(item,index)" in tasks v-if="st<2">
    <!-- 循环tasks数组对象 -->
      <input type="checkbox" @click="item.cheaked = !item.checked">
      <span :class="{isfinish: item.checked">{{ item.content }}</span>
      <button @click="remove(index)">删除</button>
      <h2 v-if="!tasks.length">任务已完成</h2>
    </p>
    <test toutou="任务" name="" @hi="hi">
      <h1>dwd</h1>
      <h1>dwd</h1>
      <h1>dwd</h1>
      <h2 solt="haha">dhiehi</h1>
    </test>
	</div>
</teaplate>
<style scoped>
.isfinish{
  text-decoration: 
  display: none;
}	
</style>
<script>

	export default{
    prop: ['toutou','name'],
    created () {
      if (ocalStorage.getItem('tasks')){
      var data = ocalStorage.getItem('tasks')
     this.tasks = JSON.parse(data)//拿数据
     }
    },
    data () {
      return {
        tasks: []
      }
    },
    methods: {
      addTask (e) {
        var task = {
          content: e.target.value,// 将表单的值复制个content对象
          checked: false// 根据checked的值显示是否完成
        }
        e.target.value = ''//清空表单
        this.tasks.push(task)//将task对象添加到tasks数组中
        var data = JSON.stringify(this.tasks)
        localStorage.setItem('tasks',data)
        // 调用this.$emit方法触发hi事件给父组件（调用的标签）
        // 并且把tasks作为参数传给父组件
        this.$emit('h1',this.tasks)
      },
      remove (index) {
        this.tasks.splice(index, 1)//使用数组splice方法来删除对应的任务
        var data = JSON.stringify(this.tasks)
        ocalStorage.setItem('tasks',data)
      }
    }
	}
</script>