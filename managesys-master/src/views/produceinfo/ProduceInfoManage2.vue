<template>
	<!-- 公共盒子 -->
	<div class="panel">
		<h1>生产信息</h1>
		<el-table :data="tableData" stripe="" show-summary style="width: 100%" header-align="center">
			<el-table-column prop="name" label="" width="150" header-align="center">
			</el-table-column>
			<el-table-column prop="targetCapacity" label="目标台量">
			</el-table-column>
			<el-table-column prop="actualCapacity" label="实际台量">
			</el-table-column>
			<el-table-column prop="targetEfficiency" label="目标效率">
			</el-table-column>
			<el-table-column prop="actualEfficiency" label="实际效率">
			</el-table-column>
			<el-table-column prop="workingHours" label="工作时长">
			</el-table-column>
			<el-table-column prop="theoreticalCapacity" label="理论台量">
			</el-table-column>
			 <el-table-column label="操作" width="150">
			  <template scope="scope">
		<el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑
			 </el-button>
			  </template>
			  </el-table-column>
		</el-table>
		<div style="margin-top: 20px">
		    <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
		  </div>
		  
		  <!-- 编辑界面开始 -->
		   <el-dialog title="编辑" :visible.sync="editTableVisible" :close-on-click-modal="false">
		    <el-table :data="editTable" stripe="" style="width: 100%" header-align="center">
		    	<el-table-column prop="name" label="" width="150" header-align="center">
					
		    	</el-table-column>
		    	<el-table-column prop="targetCapacity" label="目标台量">
					<el-input v-model="editTable.targetCapacity" auto-complete="off"></el-input>
		    	</el-table-column>
		    	<el-table-column prop="actualCapacity" label="实际台量">
					<el-input v-model="editTable.actualCapacity"> </el-input>
		    	</el-table-column>
		    	<el-table-column prop="targetEfficiency" label="目标效率">
					<el-input v-model="editTable.targetEfficiency"> </el-input>
		    	</el-table-column>
		    	<el-table-column prop="actualEfficiency" label="实际效率">
					<el-input v-model="editTable.actualEfficiency"> </el-input>
		    	</el-table-column>
		    	<el-table-column prop="workingHours" label="工作时长">
					<el-input v-model="editTable.workingHours"> </el-input>
		    	</el-table-column>
		    	<el-table-column prop="theoreticalCapacity" label="理论台量">
					<el-input v-model="editTable.theoreticalCapacity"> </el-input>
		    	</el-table-column>
				</el-table>
		    <div slot="footer" class="dialog-footer">
		    <el-button @click.native="editTableVisible = false">取消</el-button>
		    <el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交   </el-button>
		    </div>
		   </el-dialog> 
		   <!-- 编辑界面结束-->
	</div>

</template>

<!-- 测试版本开始 -->
<script>
	import axios from 'axios'
	export default {
		name:'show-examples',
		
			data() {
				return {
					tableData: [
						{name:'东C',
						targetCapacity:'1',
						actualCapacity:'1',
						targetEfficiency:'1',
						workingHours:'1',
						theoreticalCapacity:'1'},
						{
							name:'东D',
							targetCapacity:'1',
							actualCapacity:'1',
							targetEfficiency:'1',
							workingHours:'1',
							theoreticalCapacity:'1'
						},
						{
							name:'西B',
							targetCapacity:'1',
							actualCapacity:'1',
							targetEfficiency:'1',
							workingHours:'1',
							theoreticalCapacity:'1'
						},
						{
							name:'西C',
							targetCapacity:'1',
							actualCapacity:'1',
							targetEfficiency:'1',
							workingHours:'1',
							theoreticalCapacity:'2'
						}
					],
					//编辑界面数据
					 editTable: [{
					  targetCapacity:'',
					  actualCapacity:'',
					  targetEfficiency:'',
					  actualEfficiency:'',
					  workingHours:'',
					  theoreticalCapacity:'',		   
					  }],
					 dialogTableVisible: false,
				}
			},
			created() {},
			methods: {
				//显示编辑界面
				  handleEdit: function (index, row) {
				  this.editTableVisible = true;
				  this.editTable = Object.assign({}, row);
				  } 
				
			}
			//  name: 'ProduceInfo'  
		};
</script>
<!-- 测试版本结束 -->

<!-- 正式版本开始 -->
  <!-- <script>
	import axios from 'axios'
	export default {
		name:'show-examples',
		
			data() {
				return {
					tableData: [
						
					],
					keyword: '',
				}
			},
			created() {
				axios.get('http://192.168.8.106:8081/scgl/show').then((res) => {
					
					this.tableData = res.data.data.message;
					console.log(res.data);
					
				})
			},
			methods: {
				gettableData() {
					axios.get('http://192.168.8.106:8081/scgl/show').then((res) => {
						this.tableData = [];
						for (var i = 0; i < res.data.data.total; i++) {
							if (this.keyword == res.data.data.message[i].name || this.keyword == res.data.data.message[i].targetCapacity || this.keyword ==
								res.data.data.message[i].targetEfficiency) {
								this.tableData.push(res.data.data.message[i]);
							}
							if (this.keyword == '') {
								this.tableData = res.data.data.message;
							}
						}
					})
				}
				
			}
			//  name: 'ProduceInfo'  
		};
</script> -->
<!-- 正式版本结束 -->

<style scoped>
	@import url("../../assets/css/produce.css");

	.el-row {
		margin-bottom: 20px;

		&:last-child {
			margin-bottom: 0;
		}
	}

	.el-col {
		border-radius: 4px;
	}

	.bg-purple-dark {
		background: #99a9bf;
	}

	.bg-purple {
		background: #d3dce6;
	}

	.bg-purple-light {
		background: #e5e9f2;
	}

	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}

	.row-bg {
		padding: 10px 0;
		background-color: #f9fafc;
	}

	.el-col {
		border-radius: 4px;
	}

	.bg-purple-dark {
		background: #99a9bf;
	}

	.bg-purple {
		background: #ffffff;
		padding: 10px;
	}

	.bg-purple-light {
		background: #e5e9f2;
	}

	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}

	.row-bg {
		padding: 10px 0;
		background-color: #f9fafc;
	}
</style>
