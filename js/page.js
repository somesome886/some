document.addEventListener('DOMContentLoaded', function() {
	const data = [
		{ id: 45, title: '《 all dio 》', synopsis: '完全脱离原作逻辑，并与该原作角色性格、经历无任何联系，仅满足个人特定的剧情想象', genre: '短篇、私设', location: '地球', name: '暂无', device: '暂无', cast: '艾莉娜·班鲁多、迪奥·布兰度', camera: '暂无', cameo: '乔纳森·乔斯达、迪亚哥·布兰度', subcamera: '暂无', author: '小䔖菜', vitaday: '暂无', groupday: '暂无', leaveday: '暂无', year: '2026/7/23', link: '/some/spinStoryAutomaticReadingOne/fortyfive.html' },
		{ id: 44, title: '《 公园散步 》日常2', synopsis: '完全脱离原作逻辑，并与该原作角色性格、经历无任何联系，仅满足个人特定的剧情想象', genre: '短篇、私设、现代', location: '地球', name: '公园散步', device: '非正式手机模拟器', cast: '暂无', camera: '暂无', cameo: '暂无', subcamera: '暂无', author: '小茐菜', vitaday: '夏承云、风如琢', groupday: '赤云曦、涿光轩', leaveday: '暂无', year: '2026/6/30', link: '/some/spinStoryAutomaticReadingOne/fortyfour.html' },
		{ id: 43, title: '《 攻略纯良男主身边的俏神父 》正择2', synopsis: '完全脱离原作逻辑，并与该原作角色性格、经历无任何联系，仅满足个人特定的剧情想象', genre: '短篇、私设、架空中世纪', location: '郊外田地', name: '暂无', device: '暂无', cast: '涿光轩、夏承云、风如琢', camera: '赤云曦、涿光轩、涿光衡', cameo: '敖州', subcamera: '敖州', author: '小茈菜', vitaday: '暂无', groupday: '暂无', leaveday: '暂无', year: '2026/5/31', link: '/some/spinStoryAutomaticReadingOne/fortythree.html' },
		{ id: 42, title: '《 攻略纯良男主身边的俏神父 》正择1', synopsis: '完全脱离原作逻辑，并与该原作角色性格、经历无任何联系，仅满足个人特定的剧情想象', genre: '短篇、私设、架空中世纪', location: '郊外田地', name: '暂无', device: '暂无', cast: '涿光轩、夏承云、风如琢', camera: '赤云曦、涿光轩、涿光衡', cameo: '敖州', subcamera: '敖州', author: '小茈菜', vitaday: '暂无', groupday: '暂无', leaveday: '暂无', year: '2026/5/31', link: '/some/spinStoryAutomaticReadingOne/fortytwo.html' },
		{ id: 41, title: '《 风卷传说之我们是豌豆探索者 》群聊1', synopsis: '完全脱离原作逻辑，并与该原作角色性格、经历无任何联系，仅满足个人特定的剧情想象', genre: '短篇、私设、现代', location: '地球', name: '风卷传说之我们是豌豆探索者', device: '非正式手机模拟器', cast: '暂无', camera: '暂无', cameo: '暂无', subcamera: '暂无', author: '小孜菜', vitaday: '涿光轩、赤云曦、夏承云、风如琢', groupday: '敖州、雨师妾、云天阙、涿光衡', leaveday: '暂无', year: '2026/5/31', link: '/some/spinStoryAutomaticReadingOne/fortyone.html' },
		{ id: 40, title: '《 街边约会 》日常1', synopsis: '完全脱离原作逻辑，并与该原作角色性格、经历无任何联系，仅满足个人特定的剧情想象', genre: '短篇、私设、现代', location: '地球', name: '街边约会', device: '非正式手机模拟器', cast: '暂无', camera: '暂无', cameo: '暂无', subcamera: '暂无', author: '小菘菜', vitaday: '夏承云、风如琢', groupday: '云天阙、涿光垣', leaveday: '暂无', year: '2026/4/30', link: '/some/spinStoryAutomaticReadingOne/forty.html' },
		{ id: 39, title: '《 岸之情：来自盔面之下的抉择 》番外', synopsis: '完全脱离原作逻辑，并与该原作角色性格、经历无任何联系，仅满足个人特定的剧情想象', genre: '短篇、私设、现代', location: '沙漠别墅', name: '暂无', device: '暂无', cast: '敖州、雨师妾、夏承云、风如琢', camera: '赤云曦、涿光轩、涿光衡', cameo: '涿光轩', subcamera: '风如琢', author: '小茺菜', vitaday: '暂无', groupday: '暂无', leaveday: '暂无', year: '2026/3/31', link: '/some/spinStoryAutomaticReadingOne/thirtynine.html' },
		{ id: 38, title: '《 岸之情：来自盔面之下的抉择 》', synopsis: '完全脱离原作逻辑，并与该原作角色性格、经历无任何联系，仅满足个人特定的剧情想象', genre: '短篇、私设、东方玄幻', location: '沙漠别墅', name: '暂无', device: '暂无', cast: '敖州、雨师妾、夏承云、风如琢', camera: '赤云曦、涿光轩、涿光衡', cameo: '涿光轩', subcamera: '风如琢', author: '小茺菜', vitaday: '暂无', groupday: '暂无', leaveday: '暂无', year: '2026/3/31', link: '/some/spinStoryAutomaticReadingOne/thirtyeight.html' },
		{ id: 37, title: '《 海之情：来自夏季风的袭击 》番外', synopsis: '完全脱离原作逻辑，并与该原作角色性格、经历无任何联系，仅满足个人特定的剧情想象', genre: '短篇、私设、现代', location: '沙漠别墅', name: '暂无', device: '暂无', cast: '涿光轩、风如琢、夏承云', camera: '敖州、赤云曦、涿光衡', cameo: '暂无', subcamera: '暂无', author: '小栨菜', vitaday: '暂无', groupday: '暂无', leaveday: '暂无', year: '2026/3/2', link: '/some/spinStoryAutomaticReadingOne/thirtyseven.html' },
		{ id: 36, title: '《 海之情：来自夏季风的袭击 》', synopsis: '完全脱离原作逻辑，并与该原作角色性格、经历无任何联系，仅满足个人特定的剧情想象', genre: '短篇、私设、东方玄幻', location: '沙漠别墅', name: '暂无', device: '暂无', cast: '参演人员：涿光轩、风如琢、夏承云', camera: '敖州、赤云曦、涿光衡', cameo: '暂无', subcamera: '暂无', author: '小栨菜', vitaday: '暂无', groupday: '暂无', leaveday: '暂无', year: '2026/3/2', link: '/some/spinStoryAutomaticReadingOne/thirtysix.html' },
		{ id: 35, title: '《 霸道总裁爱上我 》番外', synopsis: '完全脱离原作逻辑，并与该原作角色性格、经历无任何联系，仅满足个人特定的剧情想象', genre: '短篇、私设、现代', location: '小家山庄', name: '暂无', device: '暂无', cast: '云天阙、风如琢、夏承云', camera: '赤云曦、涿光衡、涿光轩', cameo: '暂无', subcamera: '暂无', author: '小瘌菜', vitaday: '暂无', groupday: '暂无', leaveday: '敖州', year: '2026/1/31', link: '/some/spinStoryAutomaticReadingOne/thirtyfive.html' },
		{ id: 34, title: '《 霸道总裁爱上我 》', synopsis: '完全脱离原作逻辑，并与该原作角色性格、经历无任何联系，仅满足个人特定的剧情想象', genre: '短篇、私设、现代', location: '小家山庄', name: '暂无', device: '暂无', cast: '云天阙、风如琢、夏承云', camera: '赤云曦、涿光衡、涿光轩', cameo: '暂无', subcamera: '暂无', author: '小瘌菜', vitaday: '暂无', groupday: '暂无', leaveday: '敖州', year: '2026/1/31', link: '/some/spinStoryAutomaticReadingOne/thirtyfour.html' },
		{ id: 33, title: '《 夏承云X风如琢 》3', synopsis: '完全脱离原作逻辑，并与该原作角色性格、经历无任何联系，仅满足个人特定的剧情想象', genre: '短篇、私设、魔法世界', location: '暂无', name: '暂无', device: '暂无', cast: '赤云曦、风如琢、夏承云', camera: '敖州、涿光衡、涿光轩', cameo: '暂无', subcamera: '暂无', author: '小诃黎', vitaday: '暂无', groupday: '暂无', leaveday: '暂无', year: '2025/12/26', link: '/some/spinStoryAutomaticReadingOne/thirtythree.html' },
		{ id: 32, title: '《 拯救被勇者关押的恶龙王子 》番外', synopsis: '完全脱离原作逻辑，并与该原作角色性格、经历无任何联系，仅满足个人特定的剧情想象', genre: '短篇、私设、现代', location: '暂无', name: '暂无', device: '暂无', cast: '赤云曦、风如琢、夏承云', camera: '敖州、涿光衡、涿光轩', cameo: '暂无', subcamera: '暂无', author: '小蔊菜', vitaday: '暂无', groupday: '暂无', leaveday: '暂无', year: '2025/12/26', link: '/some/spinStoryAutomaticReadingOne/thirtytwo.html' },
		{ id: 31, title: '《 夏承云X风如琢 》2', synopsis: '完全脱离原作逻辑，并与该原作角色性格、经历无任何联系，仅满足个人特定的剧情想象', genre: '短篇、私设', location: '地球', name: '麻辣烫式恋爱', device: '暂无', cast: '风如琢、夏承云', camera: '暂无', cameo: '暂无', subcamera: '暂无', author: '小觥菜', vitaday: '暂无', groupday: '暂无', leaveday: '暂无', year: '2025/11/7', link: '/some/spinStoryAutomaticReadingOne/thirtyone.html' },
		{ id: 30, title: '《 夏承云X风如琢 》番外', synopsis: '完全脱离原作逻辑，并与该原作角色性格、经历无任何联系，仅满足个人特定的剧情想象', genre: '短篇、私设、现代', location: '暂无', name: '情侣做饭小日常', device: '暂无', cast: '风如琢、夏承云', camera: '暂无', cameo: '暂无', subcamera: '暂无', author: '小扎菜', vitaday: '暂无', groupday: '暂无', leaveday: '暂无', year: '2025/10/29', link: '/some/spinStoryAutomaticReadingOne/thirty.html' },
		{ id: 29, title: '《 夏承云X风如琢 》1', synopsis: '完全脱离原作逻辑，并与该原作角色性格、经历无任何联系，仅满足个人特定的剧情想象', genre: '短篇、私设、古代', location: '暂无', name: '暂无', device: '暂无', cast: '风如琢、夏承云', camera: '暂无', cameo: '暂无', subcamera: '暂无', author: '小蒿槔', vitaday: '暂无', groupday: '暂无', leaveday: '暂无', year: '2025/10/29', link: '/some/spinStoryAutomaticReadingOne/twentynine.html' },
		{ id: 28, title: '《 小松鼠X小黑熊 》9', synopsis: '完全脱离原作逻辑，并与该原作角色性格、经历无任何联系，仅满足个人特定的剧情想象', genre: '短篇、私设、拟人、现代', location: '地球', name: '暂无', device: '暂无', cast: '小松鼠、小黑熊', camera: '暂无', cameo: '大狐狸、大黑熊', subcamera: '暂无', author: '小秦艽', vitaday: '暂无', groupday: '暂无', leaveday: '暂无', year: '2023/1/31', link: '/some/spinStoryAutomaticReadingOne/twentyeight.html' },
		{ id: 27, title: '《 小松鼠X大狐狸X大黑熊 》8', synopsis: '完全脱离原作逻辑，并与该原作角色性格、经历无任何联系，仅满足个人特定的剧情想象', genre: '短篇、私设、拟人、现代', location: '地球', name: '暂无', device: '暂无', cast: '小松鼠、大狐狸、大黑熊', camera: '暂无', cameo: '小黑熊', subcamera: '暂无', author: '小藕节', vitaday: '暂无', groupday: '暂无', leaveday: '暂无', year: '2023/1/30', link: '/some/spinStoryAutomaticReadingOne/twentyseven.html' },
		{ id: 26, title: '《 无厘头小剧场 》7', synopsis: '完全脱离原作逻辑，并与该原作角色性格、经历无任何联系，仅满足个人特定的剧情想象', genre: '短篇、私设、现代', location: '地球', name: '暂无', device: '暂无', cast: '暂无', camera: '暂无', cameo: '暂无', subcamera: '暂无', author: '小莪术', vitaday: '暂无', groupday: '暂无', leaveday: '暂无', year: '2023/1/29', link: '/some/spinStoryAutomaticReadingOne/twentysix.html' },
		{ id: 25, title: '《 球胜狼X灰太狼 》16', synopsis: '完全脱离原作逻辑，并与该原作角色性格、经历无任何联系，仅满足个人特定的剧情想象', genre: '短篇、私设、拟人、现代', location: '地球', name: '暂无', device: '暂无', cast: '球胜狼、灰太狼', camera: '暂无', cameo: '暂无', subcamera: '暂无', author: '小栝楼', vitaday: '暂无', groupday: '暂无', leaveday: '暂无', year: '2023/1/28', link: '/some/spinStoryAutomaticReadingOne/twentyfive.html' },
		{ id: 24, title: '《 小松鼠X小黑熊 》6', synopsis: '完全脱离原作逻辑，并与该原作角色性格、经历无任何联系，仅满足个人特定的剧情想象', genre: '短篇、私设、拟人、现代', location: '地球', name: '暂无', device: '暂无', cast: '小松鼠、小黑熊', camera: '暂无', cameo: '大狐狸', subcamera: '暂无', author: '小昆布', vitaday: '暂无', groupday: '暂无', leaveday: '暂无', year: '2023/1/28', link: '/some/spinStoryAutomaticReadingOne/twentyfour.html' },
		{ id: 23, title: '《 小松鼠X大狐狸 》5', synopsis: '完全脱离原作逻辑，并与该原作角色性格、经历无任何联系，仅满足个人特定的剧情想象', genre: '短篇、私设、拟人、现代', location: '地球', name: '暂无', device: '暂无', cast: '小松鼠、大狐狸', camera: '暂无', cameo: '小黑熊、大黑熊', subcamera: '暂无', author: '小荜茇', vitaday: '暂无', groupday: '暂无', leaveday: '暂无', year: '2023/1/28', link: '/some/spinStoryAutomaticReadingOne/twentythree.html' },
		{ id: 22, title: '《 小松鼠X大狐狸 》4', synopsis: '完全脱离原作逻辑，并与该原作角色性格、经历无任何联系，仅满足个人特定的剧情想象', genre: '短篇、私设、拟人、现代', location: '地球', name: '暂无', device: '暂无', cast: '小松鼠、大狐狸', camera: '暂无', cameo: '小黑熊、大黑熊', subcamera: '暂无', author: '小灯草', vitaday: '暂无', groupday: '暂无', leaveday: '暂无', year: '2023/1/22', link: '/some/spinStoryAutomaticReadingOne/twentytwo.html' },
		{ id: 21, title: '《 小松鼠X大狐狸 》3', synopsis: '完全脱离原作逻辑，并与该原作角色性格、经历无任何联系，仅满足个人特定的剧情想象', genre: '短篇、私设、拟人、现代', location: '地球', name: '暂无', device: '暂无', cast: '小松鼠、大狐狸', camera: '暂无', cameo: '暂无', subcamera: '暂无', author: '小木通', vitaday: '暂无', groupday: '暂无', leaveday: '暂无', year: '2023/1/21', link: '/some/spinStoryAutomaticReadingOne/twentyone.html' },
		{ id: 20, title: '《 恶魔X信徒X天使 》2', synopsis: '完全脱离原作逻辑，并与该原作角色性格、经历无任何联系，仅满足个人特定的剧情想象', genre: '短篇、私设、异世界', location: '地球', name: '暂无', device: '暂无', cast: '恶魔、信徒、天使', camera: '暂无', cameo: '神父', subcamera: '暂无', author: '小元胡', vitaday: '暂无', groupday: '暂无', leaveday: '暂无', year: '2023/1/20', link: '/some/spinStoryAutomaticReadingOne/twenty.html' },
		{ id: 19, title: '《 小松鼠X大狐狸 》1', synopsis: '完全脱离原作逻辑，并与该原作角色性格、经历无任何联系，仅满足个人特定的剧情想象', genre: '短篇、私设、拟人、现代', location: '地球', name: '暂无', device: '暂无', cast: '小松鼠、大狐狸', camera: '暂无', cameo: '暂无', subcamera: '暂无', author: '小瞿麦', vitaday: '暂无', groupday: '暂无', leaveday: '暂无', year: '2023/1/19', link: '/some/spinStoryAutomaticReadingOne/nineteen.html' },
		{ id: 18, title: '《 球胜狼X灰太狼 》15', synopsis: '完全脱离原作逻辑，并与该原作角色性格、经历无任何联系，仅满足个人特定的剧情想象', genre: '短篇、私设、拟人、现代', location: '地球', name: '暂无', device: '暂无', cast: '球胜狼、灰太狼', camera: '暂无', cameo: '暂无', subcamera: '暂无', author: '小甘遂', vitaday: '暂无', groupday: '暂无', leaveday: '暂无', year: '2022/10/1', link: '/some/spinStoryAutomaticReadingOne/eighteen.html' },
		{ id: 17, title: '《 球胜狼X灰太狼 》14', synopsis: '完全脱离原作逻辑，并与该原作角色性格、经历无任何联系，仅满足个人特定的剧情想象', genre: '短篇、私设、拟人、现代', location: '地球', name: '暂无', device: '暂无', cast: '球胜狼、灰太狼', camera: '暂无', cameo: '暂无', subcamera: '暂无', author: '小半夏', vitaday: '暂无', groupday: '暂无', leaveday: '暂无', year: '2022/9/10', link: '/some/spinStoryAutomaticReadingOne/seventeen.html' },
		{ id: 16, title: '《 球胜狼X灰太狼 》13', synopsis: '完全脱离原作逻辑，并与该原作角色性格、经历无任何联系，仅满足个人特定的剧情想象', genre: '短篇、私设、拟人、现代', location: '地球', name: '暂无', device: '暂无', cast: '球胜狼、灰太狼', camera: '暂无', cameo: '暂无', subcamera: '暂无', author: '小雪莱', vitaday: '暂无', groupday: '暂无', leaveday: '暂无', year: '2022/8/4', link: '/some/spinStoryAutomaticReadingOne/sixteen.html' },
		{ id: 15, title: '《 球胜狼X灰太狼 》12', synopsis: '完全脱离原作逻辑，并与该原作角色性格、经历无任何联系，仅满足个人特定的剧情想象', genre: '短篇、私设、拟人、末世机甲', location: '地球', name: '暂无', device: '暂无', cast: '球胜狼、灰太狼', camera: '暂无', cameo: '暂无', subcamera: '暂无', author: '小芫荽', vitaday: '暂无', groupday: '暂无', leaveday: '暂无', year: '2022/6/19', link: '/some/spinStoryAutomaticReadingOne/fifteen.html' },
		{ id: 14, title: '《 球胜狼X灰太狼 》11', synopsis: '完全脱离原作逻辑，并与该原作角色性格、经历无任何联系，仅满足个人特定的剧情想象', genre: '短篇、私设、拟人、古代', location: '地球', name: '暂无', device: '暂无', cast: '球胜狼、灰太狼', camera: '暂无', cameo: '暂无', subcamera: '暂无', author: '小芜菁', vitaday: '暂无', groupday: '暂无', leaveday: '暂无', year: '2022/5/25', link: '/some/spinStoryAutomaticReadingOne/fourteen.html' },
		{ id: 13, title: '《 球胜狼X灰太狼 》10', synopsis: '完全脱离原作逻辑，并与该原作角色性格、经历无任何联系，仅满足个人特定的剧情想象', genre: '短篇、私设、拟人、现代', location: '地球', name: '暂无', device: '暂无', cast: '球胜狼、灰太狼', camera: '暂无', cameo: '暂无', subcamera: '暂无', author: '小椰菜', vitaday: '暂无', groupday: '暂无', leaveday: '暂无', year: '2022/5/6', link: '/some/spinStoryAutomaticReadingOne/thirteen.html' },
		{ id: 12, title: '《 球胜狼X灰太狼 》9', synopsis: '完全脱离原作逻辑，并与该原作角色性格、经历无任何联系，仅满足个人特定的剧情想象', genre: '短篇、私设、拟人、现代', location: '地球', name: '暂无', device: '暂无', cast: '球胜狼、灰太狼', camera: '暂无', cameo: '暂无', subcamera: '暂无', author: '小蕹菜', vitaday: '暂无', groupday: '暂无', leaveday: '暂无', year: '2022/4/24', link: '/some/spinStoryAutomaticReadingOne/twelve.html' },
		{ id: 11, title: '《 球胜狼X灰太狼 》8', synopsis: '完全脱离原作逻辑，并与该原作角色性格、经历无任何联系，仅满足个人特定的剧情想象', genre: '短篇、私设、拟人、现代', location: '地球', name: '暂无', device: '暂无', cast: '球胜狼、灰太狼', camera: '暂无', cameo: '暂无', subcamera: '暂无', author: '小落葵', vitaday: '暂无', groupday: '暂无', leaveday: '暂无', year: '2022/3/22', link: '/some/spinStoryAutomaticReadingOne/eleven.html' },
		{ id: 10, title: '《 球胜狼X灰太狼 》7', synopsis: '完全脱离原作逻辑，并与该原作角色性格、经历无任何联系，仅满足个人特定的剧情想象', genre: '短篇、私设、拟人、异世界', location: '地球', name: '暂无', device: '暂无', cast: '球胜狼、灰太狼', camera: '暂无', cameo: '暂无', subcamera: '暂无', author: '小苋菜', vitaday: '暂无', groupday: '暂无', leaveday: '暂无', year: '2022/3/12', link: '/some/spinStoryAutomaticReadingOne/ten.html' },
		{ id: 9, title: '《 球胜狼X灰太狼 》6', synopsis: '完全脱离原作逻辑，并与该原作角色性格、经历无任何联系，仅满足个人特定的剧情想象', genre: '短篇、私设、拟人、现代', location: '地球', name: '暂无', device: '暂无', cast: '球胜狼、灰太狼', camera: '暂无', cameo: '暂无', subcamera: '暂无', author: '小碱蓬', vitaday: '暂无', groupday: '暂无', leaveday: '暂无', year: '2022/3/2', link: '/some/spinStoryAutomaticReadingOne/nine.html' },
		{ id: 8, title: '《 球胜狼X灰太狼 》5', synopsis: '完全脱离原作逻辑，并与该原作角色性格、经历无任何联系，仅满足个人特定的剧情想象', genre: '短篇、私设、拟人、古代', location: '地球', name: '暂无', device: '暂无', cast: '球胜狼、灰太狼', camera: '暂无', cameo: '暂无', subcamera: '暂无', author: '小荆菜', vitaday: '暂无', groupday: '暂无', leaveday: '暂无', year: '2022/2/16', link: '/some/spinStoryAutomaticReadingOne/eight.html' },
		{ id: 7, title: '《 球胜狼X灰太狼 》4', synopsis: '完全脱离原作逻辑，并与该原作角色性格、经历无任何联系，仅满足个人特定的剧情想象', genre: '短篇、私设、拟人、现代', location: '地球', name: '暂无', device: '暂无', cast: '球胜狼、灰太狼', camera: '暂无', cameo: '暂无', subcamera: '暂无', author: '小茴香', vitaday: '暂无', groupday: '暂无', leaveday: '暂无', year: '2022/2/5', link: '/some/spinStoryAutomaticReadingOne/seven.html' },
		{ id: 6, title: '《 球胜狼X灰太狼 》3', synopsis: '完全脱离原作逻辑，并与该原作角色性格、经历无任何联系，仅满足个人特定的剧情想象', genre: '短篇、私设、拟人、现代', location: '地球', name: '暂无', device: '暂无', cast: '球胜狼、灰太狼', camera: '暂无', cameo: '暂无', subcamera: '暂无', author: '小油麦', vitaday: '暂无', groupday: '暂无', leaveday: '暂无', year: '2022/1/26', link: '/some/spinStoryAutomaticReadingOne/six.html' },
		{ id: 5, title: '《 球胜狼X灰太狼 》2', synopsis: '完全脱离原作逻辑，并与该原作角色性格、经历无任何联系，仅满足个人特定的剧情想象', genre: '短篇、私设、拟人、现代', location: '地球', name: '暂无', device: '暂无', cast: '球胜狼、灰太狼', camera: '暂无', cameo: '暂无', subcamera: '暂无', author: '小茼蒿', vitaday: '暂无', groupday: '暂无', leaveday: '暂无', year: '2022/1/22', link: '/some/spinStoryAutomaticReadingOne/five.html' },
	    { id: 4, title: '《 喜羊羊与灰太狼之神灵古岛 》3', synopsis: '完全脱离原作逻辑，并与该原作角色性格、经历无任何联系，仅满足个人特定的剧情想象', genre: '短篇、私设、拟人、异世界', location: '地球', name: '暂无', device: '暂无', cast: '灰太狼、红太狼、小灰灰', camera: '暂无', cameo: '球胜狼、豹姐', subcamera: '暂无', author: '开心脆骨', vitaday: '暂无', groupday: '暂无', leaveday: '暂无', year: '2021/9/3', link: '/some/spinStoryAutomaticReadingOne/four.html' },
		{ id: 3, title: '《 海城 》2', synopsis: '完全脱离原作逻辑，并与该原作角色性格、经历无任何联系，仅满足个人特定的剧情想象', genre: '短篇、私设、现代', location: '地球', name: '暂无', device: '暂无', cast: '海马濑人、城之内克也', camera: '暂无', cameo: '海马圭平', subcamera: '暂无', author: '开心脆骨', vitaday: '暂无', groupday: '暂无', leaveday: '暂无', year: '2021/8/31', link: '/some/spinStoryAutomaticReadingOne/three.html' },
		{ id: 2, title: '《 海城 》1', synopsis: '完全脱离原作逻辑，并与该原作角色性格、经历无任何联系，仅满足个人特定的剧情想象', genre: '短篇、私设、现代', location: '地球', name: '暂无', device: '暂无', cast: '海马濑人、城之内克也', camera: '暂无', cameo: '川井静香、海马圭平', subcamera: '暂无', author: '开心脆骨', vitaday: '暂无', groupday: '暂无', leaveday: '暂无', year: '2021/8/26', link: '/some/spinStoryAutomaticReadingOne/two.html' },
		{ id: 1, title: '《 球胜狼X灰太狼 》1', synopsis: '完全脱离原作逻辑，并与该原作角色性格、经历无任何联系，仅满足个人特定的剧情想象', genre: '短篇、私设、拟人、现代', location: '地球', name: '暂无', device: '暂无', cast: '球胜狼、灰太狼', camera: '暂无', cameo: '暂无', subcamera: '暂无', author: '开心脆骨', vitaday: '暂无', groupday: '暂无', leaveday: '暂无', year: '2021/8/23', link: '/some/spinStoryAutomaticReadingOne/one.html' },	
	];
	
	function renderList(filteredData) {
	    const moddle = document.getElementById('moddle');
	
	    let html = '';
	    filteredData.forEach(item => {
	        html += `
	            <button class="staring-moddle-indexName-right-page-btn" onclick="window.location.href='${item.link}'">
	                <a style="margin-top: 0px;margin-left: -6px;margin-bottom: 0px;"> ${item.title} </a><br/>
	                <a>文章作者：${item.author}</a><br/>
					<a>文章简介：${item.synopsis}</a><br/>
					<a>文章类型：${item.genre}</a><br/>
					<a>-----------------------------------------------------------</a><br/>
					<a>演绎地点：${item.location}</a><br/>
					<a>演绎主称：${item.name}</a><br/>
					<a>通讯设备：${item.device}</a><br/>
					<a>参演人员：${item.cast}</a><br/>
					<a>主摄人员：${item.camera}</a><br/>
					<a>客串人员：${item.cameo}</a><br/>
					<a>副摄人员：${item.subcamera}</a><br/>
					<a>日常&群聊常聊人员：${item.vitaday}</a><br/>
					<a>日客&群聊潜水人员：${item.groupday}</a><br/>
					<a>请假人员：${item.leaveday}</a><br/>
	                <a>文章时间：${item.year}</a><br/>
	                <a>文章序号：${item.id}</a>
	            </button>
	        `;
	    });
	    moddle.innerHTML = html;
	}
	
	function searchById(keyword) {
	    
	    if (keyword.trim() === '') {
        renderList(data);
        return;
    }

    const num = Number(keyword.trim());
    const result = data.filter(item => item.id === num);
    renderList(result);
	}
	
	const input = document.getElementById('search-input');
	
	input.addEventListener('input', function() {
	    searchById(this.value);
	});
			    
			
	renderList(data);
});