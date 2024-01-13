import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CACHE_KEY_TODOS } from "../constants";
import APIclient from "../services/apiClient";

const apiClient = new APIclient<Todo>('/todos');

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const useTodos = () =>
  useQuery<Todo[], Error>({
    queryKey:CACHE_KEY_TODOS,
    queryFn: apiClient.getAll,
    staleTime: 10 * 1000
  });

export default useTodos;
