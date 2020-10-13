<template>
    <div class="qual">
	<h1>质量页面</h1>
	<el-table :data="tableData" style="width: 100%">
		<el-table-column prop="date" label="" width="180">
		</el-table-column>
		<el-table-column prop="xx" label="下线" width="180">
		</el-table-column>
		<el-table-column prop="jcx" label="检测线">
		</el-table-column>
		<el-table-column prop="ly" label="淋雨">
		</el-table-column>
		<el-table-column prop="care" label="Care线">
		</el-table-column>
		<el-table-column prop="dr" label="DR">
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
			tableData: [{
				date: 'CN120S',
				xx: '12',
				jcx: '10',
				ly:'9',
				care:'8',
				dr:''
			},
			{
				date: 'CN180C',
				xx: '12',
				jcx: '10',
				ly:'9',
				care:'8',
				dr:''
			},
			{
				date: 'CN180S',
				xx: '12',
				jcx: '10',
				ly:'9',
				care:'8',
				dr:''
			},
			{
				date: 'CN185M',
				xx: '12',
				jcx: '10',
				ly:'9',
				care:'8',
				dr:''
			},
			{
				date: 'CN180S MCE',
				xx: '12',
				jcx: '10',
				ly:'9',
				care:'8',
				dr:''
			},
			]
		}
	},
	methods:{
		
	}
};
</script>
<style>
.btn{
	display:flex;
	margin-top:2.125rem;
	margin-left: 50rem;
	
}	
</style>