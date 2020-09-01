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
		<div class="form-group">
			<label class="date-label">选择日期：</label>
			<div class="date-container">
				<i class="fa fa-calendar date-icon"></i>
				<input type="text" id="startData" class="form-control date-input">
			</div>

		</div>
		<div class="form-group">
			<label class="date-label">--</label>
			<div class="date-container">
				<i class="fa fa-calendar date-icon"></i>
				<input type="text" id="endData" class="form-control date-input">
			</div>
		</div>
		<div class="form-group">
			<a href="javascript:;" id="searchware" class="btn btn-default btn-sm"><i class="fa fa-search"></i>查 询</a>
		</div>
<!-- 时间选择并查询相关数据end -->
	</div>

</template>
<script>
	export default {
		data() {
			return {
				tableData: [{
					date: '东C',
					mbtl: '10',
					sjtl: '8',
					mbxl: '20%',
					gzsc: '30h',
					lltl: '3'
				}, {
					date: '东D',
					mbtl: '10',
					sjtl: '8',
					mbxl: '20%',
					gzsc: '30h',
					lltl: '3'

				}, {
					date: '西B',
					mbtl: '10',
					sjtl: '8',
					mbxl: '20%',
					gzsc: '30h',
					lltl: '3'

				}, {
					date: '西C',
					mbtl: '10',
					sjtl: '8',
					mbxl: '20%',
					gzsc: '30h',
					lltl: '3'

				}, {
					date: '合计',
					mbtl: '10',
					sjtl: '8',
					mbxl: '20%',
					gzsc: '30h',
					lltl: '3'
				}]
			};
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
