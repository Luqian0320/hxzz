<template>
	<div>
		<el-row :gutter="20">
			<el-col :span="12">
				<div class="grid-content bg-purple">
					<!-- <span class="item">生产管理信息</span> -->
				</div>
			</el-col>
			<el-col :span="8">
				<div class="grid-content bg-purple">
					<el-button type="info">{{getdate()}}</el-button>
				</div>
			</el-col>
		</el-row>
		<!--日期选择按钮-->
		<el-row :gutter="24">
			<el-col :span="10">
				<div class="grid-content bg-purple"></div>
			</el-col>
			<el-col :span="10">
				<div class="grid-content bg-purple" style="text-align: center;">
					<div class="block">
						<!--<span class="demonstration">带快捷选项</span>-->
						<el-date-picker v-model="value1" align="right" type="daterange" 
						range-separator="至" start-placeholder="开始日期"
						end-placeholder="结束日期" >
						</el-date-picker>
					</div>
				</div>				
			</el-col>
			
			<el-col :span="4"><div class="grid-content bg-purple" style="text-align: center;"><el-button plain @click="dialogTableVisible=true">查看明细</el-button></div></el-col>
		</el-row>

	</div>
</template>
<script>
	export default {
		data() {
			return {
						
				//日期显示
				getdate() {
					var date = new Date();
					var seperatorl = "-";
					var year = date.getFullYear();
					var month = date.getMonth() + 1;
					var strDate = date.getDate();
					if (month >= 1 && month <= 9) {
						month = "0" + month;
					}
					if (strDate >= 0 && strDate <= 9) {
						strDate = "0" + strDate;
					}
					var currentdate = year + "年" + month + "月" + strDate + "日";
					return currentdate;
				},
				//表格样式布局
				iRowStyle: function({
					row,
					rowIndex
				}) {
					return 'height:100px';
				},
				iCellStyle: function({
					row,
					column,
					rowIndex,
					columnIndex
				}) {
					return "text-align:center;padding:25px;"
				},
				iHeaderCellStyle: function({
					row,
					column,
					rowIndex,
					columnIndex
				}) {
					return "text-align:center;";
				},
				iHeaderRowStyle: function({
					row,
					rowIndex
				}) {
					return 'height:80px';
				},
					//日期选择数据
				value1: '',
				value2: '',

			};
		}
		//  name: 'ProduceInfo'  
	};
</script>

<style scoped>
	@import url("../../assets/scss/produce.scss");

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
