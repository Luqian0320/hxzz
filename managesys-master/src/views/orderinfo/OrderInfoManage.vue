<template>
    <div class="ord">
		<h1>流转车信息页面</h1>
	<el-table :data="tableData" style="width: 100%">
		<el-table-column prop="date" label="" width="180">
		</el-table-column>
		<el-table-column prop="drk" label="待入库" width="180">
		</el-table-column>
		<el-table-column prop="phl" label="待过线跑坏路">
		</el-table-column>
		<el-table-column prop="bhlz" label="BH流转">
		</el-table-column>
		<el-table-column prop="sjlz" label="实际流转">
		</el-table-column>
		<el-table-column prop="hj" label="合计">
		</el-table-column>
	</el-table>
	<div class="btn">
		 <el-button  round>新建/保存</el-button>
		  <el-button  round>点击编辑</el-button>
	</div>
	</div>
	 
</template>
<script>
export default {
    data(){
		return{
				 value1: '',
				tableData: [{
					date: 'CN120S',
					drk: '12',
					phl: '10',
					bhlz:'9',
					sjlz:'8',
					hj:'10'
				}, {
					date: 'CN180C',
					drk: '12',
					phl: '10',
					bhlz:'9',
					sjlz:'8',
					hj:'10'
				}, {
					date: 'CN180S',
					drk: '12',
					phl: '10',
					bhlz:'9',
					sjlz:'8',
					hj:'10'
				}, {
					date: 'CN185M',
					drk: '12',
					phl: '10',
					bhlz:'9',
					sjlz:'8',
					hj:'10'
				}]
			}
		},
		methods:{
			
		}
	
};
</script>
<style scoped>
	@import url("../../assets/css/order.css");
</style>