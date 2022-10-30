import { User } from "./modols/User";

const user = new User({});
user.set({ name: "Sascha", age: 35 });
user.save();
