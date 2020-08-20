<template>
	<div>
		<el-row :gutter="20">
			<el-col :span="16">
				<div class="grid-content bg-purple">	
						<span>生产管理信息</span>		
				</div>
			</el-col>
			<el-col :span="8">
				<div class="grid-content bg-purple">
					 <el-button type="info">{{getdate()}}</el-button></div>
			</el-col>
		</el-row>
		<!--表格布局-->
		<el-table :data="tableData" 
		:cell-style="iCellStyle"
		:row-style="iRowStyle"
		:header-cell-style="iHeaderCellStyle"
		:header-row-style="iHeaderRowStyle" 		
		height="300" border style="width: 100%" >
			<el-table-column fixed prop="table" label="" width="200" >
			</el-table-column>
			<el-table-column prop="eastC" label="东部C线" >
			</el-table-column>
			<el-table-column prop="eastD" label="东部D线" >
			</el-table-column>
			<el-table-column prop="westB" label="西部B线">
			</el-table-column>
			<el-table-column prop="westC" label="西部C线">
			</el-table-column>
			<el-table-column prop="sum" label="合计">
			</el-table-column>
			
		</el-table>
<!--日期选择按钮-->
					<div class="block">
						<!--<span class="demonstration">带快捷选项</span>-->
						<el-date-picker v-model="value2" align="right" type="date" placeholder="日期选择" :picker-options="pickerOptions">
						</el-date-picker>
					</div>
	</div>

</template>
<script>
	export default {
		data() {
			return {
				//日期选择数据
				pickerOptions: {
					disabledData(time) {
						return time.getTime() > Data.now();
					},
					shortcuts: [{
						text: '今天',
						onClick(picker) {
							picker.$emit('pick', new Date());
						}
					}, {
						text: '昨天',
						onClick(picker) {
							const date = new Date();
							date.setTime(date.getTime() - 3600 * 1000 * 24);
							picker.$emit('pick', date);

						}
					}, {
						text: '一周前',
						onClick(picker) {
							const date = new Date();
							date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
							picker.$emit('pick', date);
						}
					}]
				},
				//表格数据
				tableData: [{
						table: '目标台量',
						eastC: '100',
						eastD: '200',
						westB:'200',
						westC:'200',
						sum:''
					},
					{
						table: '实际台量',
						eastC: '1',
						eastD: '2',
						westB:'3',
						westC:'4',
						sum:''
					}, {
						table: '实际效率',
						eastC: '6',
						eastD: '7',
						westB:'8',
						westC:'9',
						sum:''
					}
				],
				//日期显示
				getdate(){
					var date = new Date();
					var seperatorl ="-";
					var year = date.getFullYear();
					var month = date.getMonth()+1;
					var strDate =date.getDate();
					if (month >= 1&&month <=9){
						month = "0" +month;
					}
					if (strDate >=0&&strDate<= 9){
						strDate="0"+strDate;
					}
					var currentdate =year + "年" +month+"月"+strDate+"日";
					return currentdate;
				},
				iRowStyle:function({row,rowIndex}){
					return 'height:100px';
				},
				iCellStyle:function({row,column,rowIndex,columnIndex}){
					return'padding:10px height:120px'
				},
				iHeaderCellStyle:function({row,column,rowIndex,columnIndex}){
					return'padding:0px';
				},
				iHeaderRowStyle:function({row,rowIndex}){
					return 'height:80px';
				},				
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
</style>