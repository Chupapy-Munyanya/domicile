import { writable } from 'svelte/store';
import type { Task } from "../models/task";

export const selectedTask = writable();
export function writeSelectedTaskInStorage(e: any, task: Task): void {
    selectedTask.set(task);
}