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
		]
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router