import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, Pressable, TextInput, ScrollView } from "react-native";
import {
  addTodoAsync,
  removeTodoAsync,
  fetchTodos,
  editTodoAsync,
  searchTodoAsync,
} from "../redux/actions";
const ToDo = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todos);
  const [getjob, setGetJob] = useState("");
  const [editingTodoId, setEditingTodoId] = useState(null);
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  const handleEdit = (id, updatedTodo) => {
    dispatch(editTodoAsync(id, updatedTodo));
    setEditingTodoId(null);
    setGetJob("");
  };
  const handleItemClick = (id, todojob) => {
    setEditingTodoId(id);
    setGetJob(todojob);
  };
  //TODO: xử lý search
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <View style={{ marginTop: 100, flex: 1 }}>
      {/* TODO: Text Input */}
      <TextInput
        value={getjob}
        onChangeText={setGetJob}
        style={{ height: 50, borderWidth: 1 }}
        fontSize={20}
        placeholder="Enter your job"
      />
      {/* TODO: Pressable */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 10,
        }}
      >
        <Pressable
          onPress={() => {
            if (getjob !== "") {
              dispatch(addTodoAsync({ todojob: getjob }));
              setGetJob("");
            }
          }}
          style={{
            width: 100,
            height: 50,
            backgroundColor: "green",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
            }}
          >
            Add
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            // Xử lý tìm kiếm ở đây:
            dispatch(searchTodoAsync({ searchTerm }));
          }}
          style={{
            width: 100,
            height: 50,
            backgroundColor: "purple",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 20 }}>Search</Text>
        </Pressable>
        {/* TODO: clear  */}
        <Pressable
          style={{
            width: 100,
            height: 50,
            backgroundColor: "red",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            setGetJob("");
          }}
        >
          <Text style={{ color: "white", fontSize: 20 }}>Clear</Text>
        </Pressable>
      </View>
      {/* TODO: Render Item */}
      <ScrollView>
        {todo
          .filter((todo) => todo.todojob.includes(searchTerm))
          .map((item) => (
            <Pressable
              key={item.id}
              onPress={() => handleItemClick(item.id, item.todojob)}
              style={{
                marginTop: 10,
                height: 50,
                borderWidth: 1,

                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 20, flex: 5 }}>{item.todojob} </Text>
              {/* TODO:  buttom actions */}
              <View
                style={{ flexDirection: "row", justifyContent: "space-around" }}
              >
                <Pressable
                  onPress={() => {
                    dispatch(removeTodoAsync(item.id));
                  }}
                  style={{ width: 100, height: 50, backgroundColor: "red" }}
                >
                  <Text style={{ color: "white", fontSize: 20 }}>Delete</Text>
                </Pressable>
                {/*TODO: Edit*/}
                <Pressable
                  onPress={() => {
                    if (getjob !== "") {
                      handleEdit(item.id, { todojob: getjob });
                    }
                  }}
                  style={{
                    width: 100,
                    height: 50,
                    backgroundColor: "blue",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 20,
                    }}
                  >
                    Edit
                  </Text>
                </Pressable>
              </View>
            </Pressable>
          ))}
      </ScrollView>
    </View>
  );
};
export default ToDo;
