<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> | <router-link to="/add">Add</router-link> |
      <router-link to="/view">View</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 18px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
input {
  width: 300px;
  font-size: 18px;
}
button {
  display: inline-block;
  width: 100px;
  height: 30px;
  font-size: 18px;
  margin: 5px;
}
label {
  display: inline-block;
  width: 100px;
  text-align: right;
}
table {
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}
table thead {
  background-color: wheat;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}
</style>
