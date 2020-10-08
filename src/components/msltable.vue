<template>
  <div >
  <table>
    <thead>
      <td>Level</td>
      <td>Floor time</td>
      <td>Cond degC/%Rh</td>
      
    </thead>
    <tbody>
      
      <tr v-for="mslLevel in mslLevels" :key="mslLevel.id">
        <td>{{ mslLevel.level }}</td>
        <td>{{ mslLevel.floorTime }}</td>
        <td>{{ mslLevel.cond }}</td>
        
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
export default {
    name: 'MSLtable', 
    data() {
    return{
    mslLevels:[{level:"MSD 1",floorTime:"Unlimited",cond:"<=30/85%"},
    {id: 1, level:"MSD 1",floorTime:"Unlimited",cond:"<=30/85%"},
    {id: 2, level:"MSD 2",floorTime:"1 year",cond:"<=30/60%"},
    {id: 3, level:"MSD 2A",floorTime:"4 weeks",cond:"<=30/60%"},
    {id: 4, level:"MSD 3",floorTime:"168 hours",cond:"<=30/60%"},
    {id: 5, level:"MSD 4",floorTime:"72 hours",cond:"<=30/60%"},
    {id: 6, level:"MSD 5",floorTime:"48 hours",cond:"<=30/60%"},
    {id: 7, level:"MSD 5A",floorTime:"24 hours",cond:"<=30/60%"},
    {id: 8, level:"MSD 6",floorTime:"Mandatory bake before use",cond:"<=30/60%"}],
  }

}
}
</script>

<style scoped>
table {
     border-collapse: collapse;
     width: 100%;

}
td,  th {
  border: 1px solid #ddd;
  padding: 8px;
}


</style>