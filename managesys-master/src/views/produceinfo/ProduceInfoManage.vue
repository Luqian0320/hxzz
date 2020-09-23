<template>
	<!-- 公共盒子 -->
	<div id="panel">
		<h1>生产信息</h1>
		<el-table size="mini" :data="master_user.data" border style="width: 100%" highlight-current-row>
			<el-table-column type="index"></el-table-column>
			<el-table-column v-for="(v,i) in master_user.columns" :prop="v.field" :label="v.title" :width="v.width">
				<template slot-scope="scope">
					<span v-if="scope.row.isSet">
						<el-input size="mini" placeholder="请输入内容" v-model="master_user.sel[v.field]">
						</el-input>
					</span>
					<span v-else>{{scope.row[v.field]}}</span>
				</template>
			</el-table-column>
			<el-table-column label="操作" width="100">
				<template slot-scope="scope">
					<span class="el-tag el-tag--info el-tag--mini" style="cursor: pointer;" @click="pwdChange(scope.row,scope.$index,true)">
						{{scope.row.isSet?'保存':"修改"}}
					</span>
					<span v-if="!scope.row.isSet" class="el-tag el-tag--danger el-tag--mini" style="cursor: pointer;">
						删除
					</span>
					<span v-else class="el-tag  el-tag--mini" style="cursor: pointer;" @click="pwdChange(scope.row,scope.$index,false)">
						取消
					</span>
				</template>
			</el-table-column>
		</el-table>

		<div class="el-table-add-row" style="width: 99.2%;" @click="addMasterUser()"><span>+ 添加</span></div>
	</div>

</template>

<!-- 测试版本开始 -->
<script src="https://unpkg.com/vue@2.5.17/dist/vue.min.js"></script>
<!-- import JavaScript -->
<script src="https://unpkg.com/element-ui/lib/index.js"></script>
<script>
	import axios from 'axios'	
	export default {
		el:"#panel",
		data() {
			return {
				master_user: {
					sel: null, //选中行   
					columns: [{
								field: "name",
								title: "",																											
								width: 100
					}
						,{
							field: "targetCapacity",
							title: "目标台量",
							width: 120
						},
						{
							field: "actualCapacity",
							title: "实际台量",
							width: 120
						},
						{
							field: "targetEfficiency",
							title: "目标效率",
							width: 120
						},
						{
							field: "actualEfficiency",
							title: "实际效率",
							width: 150
						},
						{
							field: "workingHours",
							title: "工作时长",
							width:120
						},
						{
							field: "theoreticalCapacity",
							title: "理论台量",
							width:120
						}
					],
					data: [
						
					],
				},
			}
		},
		created() {
			axios.get('http://192.168.8.106:8081/scgl/show').then((res) => {				
				this.master_user.data = res.data.data.message;
				console.log(res.data);
				
			})
		},
		//id生成工具 示例 模拟后台返回的id
		// var generateId = {
		// 	_count: 1,
		// 	get() {
		// 		return ((+new Date()) + "_" + (this._count++))
		// 	}
		// },
		methods: {
			//读取表格数据
			readMasterUser() {
				axios.get('http://192.168.8.106:8081/scgl/show').then((res) => {
					this.master_user.data = [];
					
				//根据实际情况改下
				panle.master_user.data.map(i => {
					i.id =get(); //模拟后台插入成功后有了id
					i.isSet = false; //给后台返回数据添加`isSet`标识
					return i;
				});
				})
			},		
			//添加账号
			addMasterUser() {
				for (let i of panel.master_user.data) {
					if (i.isSet) return panel.master_user.data.$message.warning("请先保存当前编辑项");
				}
				let j = {
					id: 0,
					"targetCapacity": "",
					"actualCapacity": "",
					"targetEfficiency": "",
					"actualEfficiency": "",
					"workingHours": "",
					"theoreticalCapacity": "",
					"isSet": true,
					"_temporary": true
				};
				panel.master_user.data.push(j);
				panel.master_user.sel = JSON.parse(JSON.stringify(j));
			},
			//修改
			pwdChange(row, index, cg) {
				//点击修改 判断是否已经保存所有操作
				for (let i of panel.master_user.data) {
					if (i.isSet && i.id != row.id) {
						panel.$message.warning("请先保存当前编辑项");
						return false;
					}
				}
				//是否是取消操作
				if (!cg) {
					if (!panel.master_user.sel.id) panel.master_user.data.splice(index, 1);
					return row.isSet = !row.isSet;
				}
				//提交数据
				if (row.isSet) {
					//根据实际情况修改
					(function() {
						let data = JSON.parse(JSON.stringify(panel.master_user.sel));
						for (let k in data) row[k] = data[k];
						app.$message({
							type: 'success',
							message: "保存成功!"
						});
						//然后这边重新读取表格数据
						readMasterUser();
						row.isSet = false;
					})();
				} else {
					panel.master_user.sel = JSON.parse(JSON.stringify(row));
					row.isSet = true;
				}
			}


		}
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

	.el-table-add-row {
		margin-top: 10px;
		width: 100%;
		height: 34px;
		border: 1px dashed #c1c1cd;
		border-radius: 3px;
		cursor: pointer;
		justify-content: center;
		display: flex;
		line-height: 34px;
	}

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
