<template>
  <div>
		<button>原生的按钮</button>
		<input type="text">
		<sherry-row>
			<sherry-button>默认按钮</sherry-button>
			<sherry-button type="primary">主要按钮</sherry-button>
			<sherry-button type="success">成功按钮</sherry-button>
			<sherry-button type="info">信息按钮</sherry-button>
			<sherry-button type="warning">警告按钮</sherry-button>
			<sherry-button type="danger">危险按钮</sherry-button>
		</sherry-row>
		<sherry-date-picker
		type="date"
		placeholder="选择日期">
		</sherry-date-picker>
		<sherry-row>
			<sherry-button icon="el-icon-search" circle></sherry-button>
			<sherry-button type="primary" icon="el-icon-s-check" circle></sherry-button>
			<sherry-button type="success" icon="el-icon-check" circle></sherry-button>
			<sherry-button type="info" icon="el-icon-message" circle></sherry-button>
			<sherry-button type="warning" icon="el-icon-star-off" circle></sherry-button>
			<sherry-button type="danger" icon="el-icon-delete" circle></sherry-button>
		</sherry-row>
  </div>
</template>

<script>
	export default {
		name:'App',
	}
</script>
