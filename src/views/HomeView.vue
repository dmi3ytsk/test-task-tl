<template>
  <div>
    <UserFilter />
    <TotalTable />
  </div>
</template>

<script>
import TotalTable from '@/components/TotalTable.vue';
import UserFilter from '@/components/UserFilter.vue';

export default {
  name: 'HomeView',
  components: {
    UserFilter,
    TotalTable,
  }
}
</script>
