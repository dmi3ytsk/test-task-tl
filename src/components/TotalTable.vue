<script>
import UsersList from '@/components/UsersList.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'TotalTable',
  components: {
    UsersList,
  },
  computed: {
    ...mapGetters(['columnHeaders'])
  }
}
</script>

<template>
  <table class="total-table">
    <caption class="total-table__table-title"><i>Достижения пользователей</i></caption>
    <thead class="total-table__title-row">
      <tr>
        <th v-for="colHeader in columnHeaders" :key="colHeader[1]" class="total-table__col-title">{{ colHeader[0] }}</th>
      </tr>
    </thead>
    <UsersList />
  </table>
</template>

<style lang="scss">
  .total-table {
    margin: 0 auto;
    border: 1px solid black;
    &__title-row {
      background-color: rgba(137, 247, 206, 0.243);
    }
    &__table-title {
      text-align: end;
      margin: 5px;
    }
    &__col-title {
      padding: 10px;
      &:nth-child(3) {
        max-width: 200px;
      }
    }
  }

</style>