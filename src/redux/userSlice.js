import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    },
  ],
}

export const addUserData = (user) => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(response => {
        dispatch(addUser(user))
      })
      .catch(error => {
        console.log("error", error)
      })
  }
}

export const deleteUserData = (id) => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/users/" + id, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(response => {
        dispatch(deleteUser(id))
      })
      .catch(error => {
        console.log("error", error)
      })
  }
}

export const updateUserData = (user) => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/users/" + user.id, {
      method: "PUT",
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(response => {
        dispatch(updateUser(user))
      })
      .catch(error => {
        console.log("error", error)
      })
  }
}

export const getUserData = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
    })
      .then(res => res.json())
      .then(response => {
        dispatch(getUser(response))
      })
      .catch(error => {
        console.log("error", error)
      })
  }
}

const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addUser: (state, action) => {
      let newUserId = state.data.length + 1;
      let newUser = { id: newUserId, ...action.payload }
      state.data.push(newUser);
    },
    deleteUser: (state, action) => {
      let index = state.data.findIndex((user) => user.id === action.payload);
      state.data.splice(index, 1);
    },
    updateUser: (state, action) => {
      let index = state.data.findIndex((user) => user.id === action.payload.id);
      state.data[index] = action.payload;
    },
    getUser: (state, action) => {
      state.data = [...state.data, ...action.payload]
    }
  }
})

export const { addUser, deleteUser, updateUser, getUser } = userSlice.actions;

export default userSlice.reducer;