import { createContext, useEffect } from "react";
import { useState, useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "./AuthContext.jsx";
export const ChatContext = createContext();
export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [unseenMessages, setUnseenMessages] = useState({});

  const { socket, axios } = useContext(AuthContext);

  //function to get all users for sidebar
  const getUsers = async () => {
    try {
      const { data } = await axios.get("/api/messages/users");
      if (data.success) {
        setUsers(data.users);
        setUnseenMessages(data.unseenMessagesCount || {});
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  //function to get all messages for selected user
  const getMessages = async (userId) => {
    try {
      const { data } = await axios.get(`/api/messages/${userId}`);
      if (data.success) {
        setMessages(data.messages);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  //function to send message to selected user
  const sendMessage = async (messageData) => {
    try {
      const { data } = await axios.post(
        `/api/messages/send/${selectedUser._id}`,
        messageData,
      );
      if (data.success) {
        // Update the messages list with the new message
        setMessages((prevMessages) => [...prevMessages, data.message]);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  //function to subscribe to messages for selected user
  const subscribeToMessages = (userId) => {
    if (!socket) return;
    socket.on("newMessage", (newMessage) => {
      if (
        selectedUser &&
        String(selectedUser._id) === String(newMessage.senderId)
      ) {
        newMessage.isSeen = true;
        setMessages((prevMessages) => [...prevMessages, newMessage]);
        axios.put(`/api/messages/mark/${newMessage._id}`);
      } else {
        setUnseenMessages((prevUnseenMessages) => ({
          ...prevUnseenMessages,
          [newMessage.senderId]: prevUnseenMessages[newMessage.senderId]
            ? prevUnseenMessages[newMessage.senderId] + 1
            : 1,
        }));
      }
    });
  };
  //function to unsubscribe from messages for selected user
  const unsubscribeFromMessages = () => {
    if (!socket) return;
    socket.off("newMessage");
  };
  // useEffect(() => {
  //   if (selectedUser) {
  //     getMessages(selectedUser._id);
  //     subscribeToMessages(selectedUser._id);
  //   }
  // }, [selectedUser]);
  useEffect(() => {
    subscribeToMessages();
    return () => unsubscribeFromMessages();
  }, [socket, selectedUser]);

  const value = {
    messages,
    setMessages,
    users,
    setUsers,
    selectedUser,
    setSelectedUser,
    unseenMessages,
    setUnseenMessages,
    getUsers,
    getMessages,
    sendMessage,
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};
