
<template>
  <div >
  <table>
    <thead>
      <td>MFGR</td>
      <td>MFGR Part No</td>
      <td>Internal Part No</td>
      
    <td>MTC</td>
      <td>MSL</td>
    </thead>
    <tbody>
      
      <tr v-for="part in sortedParts" :key="part.mfgr">
        <td>{{ part.mfgr }}</td>
        <td>{{ part.mfgrpn }}</td>
        <td>{{ part.internalpn }}</td>
        <td>{{ part.mtc }}</td>
        <td>{{ part.msl }}</td>
      </tr>
    </tbody>
  </table>
  <p><i class="fas fa-exclamation-triangle"></i> please open the part with the highest MSL last and start the clock when the highest level part is opened </p>
  
</div>
</template>

<script>


export default {
  name: 'ElementTable',
  
  data() {
    return{
    parts:[{mfgr:"1234567890",mfgrpn:"1245678901234567890",internalpn:"123456789012345",mtc:"1234567890",msl:"4"},
    {mfgr:"1234567891",mfgrpn:"1245678901234567891",internalpn:"123456789012346",mtc:"1234567891",msl:"2"},
    {mfgr:"1234567892",mfgrpn:"1245678901234567892",internalpn:"123456789012347",mtc:"1234567892",msl:"1"},
    {mfgr:"1234567893",mfgrpn:"1245678901234567893",internalpn:"123456789012348",mtc:"1234567893",msl:"3"}],
  }
  },
    computed: {
    sortedParts(){
    return this.parts.slice().sort((a, b) => b.msl - a.msl );
    },
    highestMSL(){
      if (this.parts.length == 0) return 
      return this.parts.reduce((a,b) => Number(a.msl) > Number(b.msl) ? a : b);     
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
p{
  color:#c4c4c4;
}


</style>