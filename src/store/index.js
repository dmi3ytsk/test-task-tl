import { createStore } from "vuex";

export default createStore({
  state: {
    columnHeaders: [
      ["Место", "place"],
      ["Логин", "userLogin"],
      ["Подтвержденные заказы", "orders"],
      ["Статус", "status"],
    ],
    usersAchievements: [
      {
        place: 1,
        userLogin: "smith@gmail.com",
        orders: 312,
        status: "Ценитель красоты",
      },
      {
        place: 2,
        userLogin: "lenin@gmail.com",
        orders: 120,
        status: "Поставщик аксессуаров",
      },
      {
        place: 3,
        userLogin: "mask@gmail.com",
        orders: 98,
        status: "Конкурент минздрава",
      },
      { place: 4, userLogin: "dog@mail.ru", orders: 64, status: "рыбак" },
      {
        place: 5,
        userLogin: "nightmare@mail.ru",
        orders: 34,
        status: "охотник",
      },
      {
        place: 6,
        userLogin: "cat@mail.ru",
        orders: 1,
        status: "Ценитель красоты",
      },
    ],
    search: null,
    filteredUsers: null,
  },
  getters: {
    columnHeaders(state) {
      return state.columnHeaders;
    },
    filteredUsers(state) {
      return state.filteredUsers
        ? state.filteredUsers
        : state.usersAchievements;
    },
    search(state) {
      return state.search;
    },
  },
  mutations: {
    applyFilter(state, search) {
      if (search === null) {
        state.search = null;
        state.filteredUsers = null;
      } else {
        state.search = search;
        let filteredList = state.usersAchievements
          .filter((user) => {
            return search.userLogin
              ? user.userLogin.includes(search.userLogin)
              : true;
          })
          .filter((user) => {
            return search.userStatus
              ? user.status.includes(search.userStatus)
              : true;
          })
          .filter((user) => {
            if (search.ordersFrom || search.ordersTo) {
              const min = search.ordersFrom || 0;
              const max = search.ordersTo || 9999;
              if (user.orders >= min && user.orders <= max) return true;
              else return false;
            }
            return true;
          });
        if (search.sortBy) {
          filteredList.sort((a, b) => {
            const prev =
              typeof a[search.sortBy] === "number"
                ? a[search.sortBy]
                : a[search.sortBy].toLowerCase();
            const next =
              typeof b[search.sortBy] === "number"
                ? b[search.sortBy]
                : b[search.sortBy].toLowerCase();
            if (prev < next) return -1;
          });
          search.sortDir === "desc" ? filteredList.reverse() : filteredList;
        }
        state.filteredUsers = filteredList;
      }
    },
    updateUserLogin(state, userLogin) {
      state.search.userLogin = userLogin;
    },
  },
  actions: {},
  modules: {},
});
