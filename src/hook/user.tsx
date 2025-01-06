import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface User {
  id: string;
  name: string;
  email: string;
}

const userMe = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await AsyncStorage.getItem("@vencify:user");
        console.log("Fetched user data:", userData);
        if (userData) {
          setUser(JSON.parse(userData));
        } else {
          console.log("No user data found in AsyncStorage");
        }
      } catch (error) {
        console.error("Failed to fetch user from AsyncStorage", error);
      }
    };

    fetchUser();
  }, []);

  return user;
};

export default userMe;
