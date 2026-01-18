import { create } from "zustand"

const useUserStore = create((set) => ({
    userStore:{
        fullname:'',
        email:'',
        password:''
    },
    /// dynamically set all fields
     setUserField: (key, value) =>
    set((state) => ({
      userStore: {
        ...state.userStore,
        [key]: value,
      }
    })),
    //set all fields at once
        setUser: (data) =>
    set((state) => ({
      UserStore: {
        ...state.userStore,
        ...data,
      },
    })),
/// reset project
resetUser: () => set({
        userStore:{
            fullname:"",
            email:"",
            password:""
        }
})
}))


export default useUserStore