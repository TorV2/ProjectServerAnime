<template>
	<div>
		<div class="nv-navbar">
			<ul class="nav">
				
				<li><router-link :to="{ name: 'blogs' }">Home</router-link></li>	
				<!--<li><router-link :to="{ name: 'login' }">Login</router-link></li>
				-->
				<li><router-link :to="{ name: 'users' }">About</router-link></li>
				<!--<li><router-link :to="{ name: 'blogs' }">Blogs</router-link></li>
				-->
				
			</ul>
			
			<div class="clearfix" />
		</div>
	</div>
</template>
<script>
export default {};
</script>
<style scoped>
.nv-navbar {
	background-color: orange;
	width: 100%;
	padding: 10px 0px 10px 0px;
}
.nv-navbar .nav {
	list-style: none;
	margin: 0;
	padding: 0;
	float: left;
}
.nv-navbar .nav li {
	float: left;
}
.nv-navbar .nav li a {
	padding: 10px;
	text-decoration: none;
	color: red;
	font-weight: bold;
}
.nv-navbar .nav li a:hover {
	padding: 10px;
	text-decoration: none;
	color: yellow;
}
.nv-navbar .nav li a.router-link-active {
	background-color: red;
	color: orange;
}
.clearfix {
	clear: left;
}
</style>
