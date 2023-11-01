import {sendDelete, sendGet, sendPost, sendPut} from '@/server/request';

export interface Page<T> {
    page: number,
    size: number,
    total: number,
    totalPage: number,
    list: T[]
}


export interface User {
    id: number,
    name: string,
    createTime: string,
    lastLoginTime: string,
    lastLoginIp: string,
    remark: string
}

export interface Task {
    id: number,
    name: string,
    remark: string,
    taskType: number,
    handlerType: number,
    handlerName: string,
    params: string,
    createTime: string,
    updateTime: string,
    status: number
}

export interface Record {
    id: number,
    taskId: number,
    executeCount: number,
    executeName: string,
    executeAddress: string,
    createTime: string,
    runnerTime: string,
    stopTime: string,
    status: number,
    resultContent: string
}

export interface TaskLog {
    id: number,
    taskId: number,
    recordId: number,
    content: string,
    createTime: string
}

export class UserApi {
    static saveUser(name: string, password: string, remark?: string) {
        return sendPost<void>("/user", undefined, {name: name, password: password, remark: remark})
    }
    static getUserList(page: number, size: number, name?: string) {
        return sendGet<Page<User>>("/user/list", {page: page, size: size, name: name});
    }
    static login(name: string, password: string) {
        return sendPost<string>("/user/login", undefined, {name: name, password: password});
    }
    static deleteUser(userId: number) {
        return sendDelete<void>(`/user/${userId}`);
    }
}

export class TaskApi {
    static async saveTask(){

    }
    static async queryTaskInfo(taskId: number) {
        return sendGet<Task>(`/task/${taskId}`);
    }
    static async updateTask() {

    }
    static async deleteTask(taskId: number) {
        const result = await sendDelete<void>(`/task/${taskId}`);
        return result.code === 200;
    }
    static updateTaskStatus(taskId: number, status: number) {
        return sendPut<void>("/task/status", {id: taskId, status: status});
    }

    static getTaskList(page: number, size: number) {
        return sendPost<Task[]>("/task/list", {page: page, size: size}, );
    }
}

export class RecordApi {
    static getRecordList(page: number, size: number, ) {
        return sendPost<Record[]>("/record/list", {page: page, size: size}, );
    }
    static queryRecordInfo(recordId: number) {
        return sendGet<Record>(`/record/${recordId}`);
    }
    static async deleteRecord(recordId: number) {
        return sendDelete<void>(`/record/${recordId}`);
    }
}