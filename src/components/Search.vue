<template>
  <div class="search">
    <div class="filter">
      <p>Villa? Cottage? Apartment? <br/>Your perfect holiday awaits</p>
      <div class="filter-input">
        <b-form-input class="width-100 mb-15" v-model="text1" type="text" placeholder="Location" />
        <b-form-input class="width-50-l mb-15" v-model="text1" type="date" placeholder="Start Date" />
        <b-form-input class="width-50-r mb-15" v-model="text1" type="date" placeholder="End Date" />
        <b-form-input class="width-100 mb-15" v-model="text1" type="text" placeholder="Guests" />
      </div>
      <div class="act-search">
        <b-button
          variant="primary"
          style="width: 100%; background: #3F51B5 !important; color: #fff; border-radius: 30px; border: none; float: right; padding: 15px 30px; border-radius: 30px; margin: 12px 0;"
        >Search</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.search{
  width: 100%;
  overflow: hidden;
}
.filter{
  padding: 60px 15px 60px 15px;
  background: #eaeaea;
  overflow: hidden;
}
.filter-input{
  width: 100%;
  overflow: hidden;
}
.width-100{
  width: 100%;
}
.width-50-l{
  width: 49%;
  /* margin-right: 2%; */
  float: left;
}
.width-50-r{
  width: 49%;
  /* margin-left: 2%; */
  float: right;
}
.mb-15{
  margin-bottom: 15px;
}
</style>
