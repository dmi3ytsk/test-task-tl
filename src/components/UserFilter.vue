<script>
import { mapMutations, mapGetters } from "vuex"
export default {
  name: "UserFilter",
  data() {
    return {
      userLogin: "",
      ordersFrom: null,
      ordersTo: null,
      userStatus: "",
      sortBy: "",
      sortDir: "asc"
    }
  },
  computed: {
    ...mapGetters(["columnHeaders"]),
  },
  methods: {
    ...mapMutations(["applyFilter"]),
    addFilter() {
      const actualSearch = {
        userLogin: this.userLogin.toLowerCase(),
        ordersFrom: this.ordersFrom,
        ordersTo: this.ordersTo,
        userStatus: this.userStatus.toLowerCase(),
        sortBy: this.sortBy,
        sortDir: this.sortDir
      }
      this.applyFilter(actualSearch)
      this.$router.
      replace({
        query: actualSearch
      })
    },
    resetFilter() {
      this.applyFilter(null)
      this.$router.replace({ name: "home" })
      this.userLogin = ""
      this.ordersFrom = null
      this.ordersTo = null
      this.userStatus = ""
      this.sortBy = "",
        this.sortDir = "asc"
    },
    fromOrdersValidation() {
      if (this.ordersTo) {
        this.ordersFrom = this.ordersFrom > this.ordersTo ? this.ordersTo : this.ordersFrom
      }
    },
    toOrdersValidation() {
      if (this.ordersFrom) {
        this.ordersTo = this.ordersTo < this.ordersFrom ? this.ordersFrom : this.ordersTo
      }
    },
  },
  watch: {
    $route() {
      const query = this.$route.query
      if (query.userLogin || query.userStatus || query.ordersFrom || query.ordersTo || query.sortBy) {
        const actualSearch = {
          userLogin: query.userLogin.toLowerCase(),
          ordersFrom: query.ordersFrom,
          ordersTo: query.ordersTo,
          userStatus: query.userStatus.toLowerCase(),
          sortBy: query.sortBy,
          sortDir: query.sortDir
        }
        this.applyFilter(actualSearch)
        this.userLogin = query.userLogin.toLowerCase()
        this.ordersFrom = query.ordersFrom
        this.ordersTo = query.ordersTo
        this.userStatus = query.userStatus.toLowerCase()
        this.sortBy = query.sortBy
        this.sortDir = query.sortDir

      }
    }
  }
}
</script> 

<template>
  <div class="filter">
    <h3>Фильтр</h3>
    <div class="filter__by-login">
      <label> Логин
        <input v-model="userLogin" type="text" placeholder="логин">
      </label>
    </div>
    <div class="filter__by-orders">
      <span>Заказы</span>
      <label> от
        <input v-model="ordersFrom" type="number" min="0" @change="fromOrdersValidation" placeholder="от"
          class="filter__order-input">
      </label>
      <label> до
        <input v-model="ordersTo" type="number" min="0" @change="toOrdersValidation" placeholder="до" class="filter__order-input">
      </label>
    </div>
    <div class="filter__by-status">
      <label> Статус
        <input v-model="userStatus" type="text" placeholder="статус">
      </label>
    </div>
    <div class="filter__sort">
      <span>Сортировать </span>
      <select v-model="sortBy">
        <option></option>
        <option v-for="colHead in columnHeaders" :key="colHead[1]" :value="colHead[1]">{{ colHead[0] }}</option>
      </select>
      <span v-if="sortBy">по </span>
      <select v-if="sortBy" v-model="sortDir">
        <option value="asc" selected>возрастанию</option>
        <option value="desc">убыванию</option>
      </select>
    </div>
    <div v-if="userLogin || ordersFrom || ordersTo || userStatus || sortBy" class="filter__buttons">
      <button @click="addFilter">применить</button>
      <button @click="resetFilter">сбросить</button>
    </div>
  </div>
</template>

<style lang="scss">
.filter {
  &__order-input {
    width: 40px;

    &::-webkit-inner-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }

  &__by-login,
  &__by-orders,
  &__by-status,
  &__sort,
  &__buttons {
    margin-bottom: 15px;
  }
}
</style>