import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () =>
	import('../views/home/Home.vue')
const Login = () =>
	import('../views/login/Login.vue')

const SafeInfoManage = () =>
	import('../../src/views/safeinfo/SafeInfoManage.vue')
const ProduceInfoManage = () =>
	import('../../src/views/produceinfo/ProduceInfoManage.vue')
const OrderInfoManage = () =>
	import('../../src/views/orderinfo/OrderInfoManage.vue')
const QualityInfoManage = () =>
	import('../../src/views/qualityinfo/QualityInfoManage.vue')
const MenInfoManage = () =>
	import('../../src/views/meninfo/MenInfoManage.vue')
const EnergyInfoManage = () =>
	import('../../src/views/energyinfo/EnergyInfoManage.vue')
const EquipmentInfoManage = () =>
	import('../../src/views/equipmentinfo/EquipmentInfoManage.vue')
const RoleInfoManage = () =>
	import('../../src/views/roleinfo/RoleInfoManage.vue')
const Powerlist_InfoManage = () =>
	import('../../src/views/powerlist_info/Powerlist_InfoManage.vue')
const Userlist_InfoManage = () =>
	import('../../src/views/userlist_info/Userlist_InfoManage.vue')
const Datalist_InfoManage = () =>
	import('../../src/views/datalist_info/Datalist_InfoManage.vue')
Vue.use(VueRouter)


const routes = [{
		path: '/',
		name: 'Login',
		component: Login
	},
	{
		path: '/home',
		name: 'Home',
		component: Home,
		children: [{
				path: '/safeinfomanage',
				name: '安全信息',
				component: SafeInfoManage,
			},
			{
				path: '/produceinfomanage',
				name: '生产信息',
				component: ProduceInfoManage,
			},
			{
				path: '/orderinfomange',
				name: '订单信息',
				component: OrderInfoManage,
			},
			{
				path: '/qualityinfomanage',
				name: '质量信息',
				component: QualityInfoManage,
			},
			{
				path: '/meninfomanage',
				name: '人员信息',
				component: MenInfoManage,
			},
			{
				path: '/energyinfomanage',
				name: '能源信息',
				component: EnergyInfoManage,
			},
			{
				path: '/equipmentinfomanage',
				name: '设备信息',
				component: EquipmentInfoManage,
			},
			{
				path: '/roleinfomanage',
				name: '角色列表',
				component: RoleInfoManage,
			},{
				path: '/powerlist_infomanage',
				name: '权限列表',
				component: Powerlist_InfoManage,
			},{
				path: '/userlist_infomanage',
				name: '用户列表',
				component: Userlist_InfoManage,
			},{
				path: '/datalist_infomanage',
				name: '数据列表',
				component: Datalist_InfoManage,
			}
			
		]
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router