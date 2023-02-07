<script>
import { mapGetters } from 'vuex';

export default {
  name: 'UsersList',
  computed: mapGetters(["filteredUsers"]),
}
</script>
<template>
  <tbody class="total-table__table-content">
    <tr v-for="user in filteredUsers" :key="user.place">
      <td class="total-table__cell">{{ user.place }}</td>
      <td class="total-table__cell">{{ user.userLogin }}</td>
      <td class="total-table__cell">{{ user.orders }}</td>
      <td class="total-table__cell">{{ user.status }}</td>
    </tr>
  </tbody>
</template>

<style lang="scss">
.total-table {
  &__table-content {
    background-color: rgba(171, 202, 253, 0.243);
  }
  &__cell {
    padding: 8px 2px;
  }
}
</style>