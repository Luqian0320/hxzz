<template>
	<!-- 公共盒子 -->
	<div class="panel">
		<el-table :data="tableData" stripe="" style="width: 100%">
			<el-table-column prop="date" label="" width="150">
			</el-table-column>
			<el-table-column prop="mbtl" label="目标台量">
			</el-table-column>
			<el-table-column prop="sjtl" label="实际台量">
			</el-table-column>
			<el-table-column prop="mbxl" label="目标效率">
			</el-table-column>
			<el-table-column prop="gzsc" label="工作时长">
			</el-table-column>
			<el-table-column prop="lltl" label="理论台量">
			</el-table-column>
		</el-table>
		<!-- 时间选择并查询相关数据start -->
		<div>查询<el-input placeholder="keyword" v-model="keyword" suffix="el-icon-search" @change="gettableData"></el-input>
		</div>
		<!-- 时间选择并查询相关数据end -->
	</div>

</template>
<script>
	import axios from 'axios'
	export default {
		date:'show-examples',
			data() {
				return {
					tableData: [],
					keyword: '',
				}
			},
			created() {
				axios.get('http://192.168.8.106:8081/user/test').then((res) => {
					console.log(res.data)
					this.tableData = res.data.data.message;
					
				})
			},
			methods: {
				gettableData() {
					axios.get('http://192.168.8.106:8081/user/test').then((res) => {
						this.tableData = [];
						for (var i = 0; i < res.data.data.total; i++) {
							if (this.keyword == res.data.data.message[i].date || this.keyword == res.data.data.message[i].mbtl || this.keyword ==
								res.data.data.message[i].mbxl) {
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
</script>

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
