<template>
  <div class="usermoney">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="createdAt" label="日期" width="180"> </el-table-column>
      <el-table-column prop="userID" label="用户id" width="180"> </el-table-column>
      <el-table-column prop="teamID" label="团队id"> </el-table-column>
      <el-table-column prop="distributionSectionID" label="distributionSectionID"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {allteamList} from '../../../request/api'
export default {
    data() {
        return {
          tableData:[]  
        }
    },
    created() {
        allteamList({
          page:1,
          pagesize:10
        }).then(res=>{
            console.log(555,res);
            this.tableData = res;
        })
    },
    methods: {

    }
};
</script>

<style lang="less" scoped>
</style>