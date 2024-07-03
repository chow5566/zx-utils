<script setup lang="ts">
  import { regionData } from 'element-china-area-data'
  import {generateRandomIdNumber} from "~/utils";
  import {CopyDocument} from "@element-plus/icons-vue";
  const areaCascadeProps = {
    emitPath: false,
  }
  const form = ref({
    areaCode: '371403', // 地区码
    birthday: '1993', // 出生日期
    gender: '', // 性别
    num: 10, // 数量
  })
  const rules = {
    areaCode: [
      {required: true, message: '请选择地区', trigger: 'blur'},
    ],
  }
  const idCards = ref([] as { idCard: string }[])
  const generateIdCard = () => {
    idCards.value = []
    // TODO: generate ID card
    for(let i = 0; i < form.value.num; i++) {
      let idCard = generateRandomIdNumber(form.value.areaCode, form.value.birthday, form.value.gender)
      idCards.value.push({idCard})
    }
  }

  const copyIdCard= async (idCard: string) => {
    try {
      await navigator.clipboard.writeText(idCard);
      ElMessage.success('复制成功');
    } catch (err) {
      ElMessage.error('复制失败：' + err);
    }
  }
</script>

<template>
  <div class="w-[500px] mx-auto mt-6">
    <h3 class="text-3xl font-bold mb-4 text-center">在线生成身份证号</h3>
    <el-form :model="form" label-width="auto" :rules="rules">
      <el-form-item label="选择地区" prop="areaCode">
        <client-only>
          <el-cascader
              class="!w-full"
              :props="areaCascadeProps"
              filterable
              :options="regionData as any[]"
              :clearable="false"
              v-model="form.areaCode">
          </el-cascader>
        </client-only>
      </el-form-item>
      <el-form-item label="出生日期" prop="birthday">
        <client-only>
          <el-date-picker
              class="!w-full"
              v-model="form.birthday"
              value-format="YYYY"
              type="year"
              placeholder="出生日期"
          />
        </client-only>
      </el-form-item>
      <el-form-item label="性别" prop="gender">
        <client-only>
          <el-radio-group v-model="form.gender" class="!w-full">
            <el-radio value="male" border>男</el-radio>
            <el-radio value="female" border>女</el-radio>
          </el-radio-group>
        </client-only>
      </el-form-item>
      <el-form-item label="数量" prop="num">
        <el-input-number v-model="form.num" :min="1" :max="100" class="!w-full" />
      </el-form-item>
      <el-form-item>
        <div class="w-full flex justify-center items-center">
          <el-button type="primary" @click="generateIdCard">生成身份证</el-button>
        </div>
      </el-form-item>
    </el-form>

    <el-table :data="idCards" class="mt-2 w-full" border stripe>
      <el-table-column type="index" label="序号" width="100" align="center" />
      <el-table-column prop="idCard" label="身份证号" align="center" />
      <el-table-column label="操作" align="center" width="120">
        <template #default="scope">
          <el-button type="primary" size="small" text @click="copyIdCard(scope.row.idCard)" :icon="CopyDocument">复制</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style scoped>

</style>
