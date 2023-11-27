package ink.task.client.example;

import ink.task.client.TaskNodeBootstrap;
import ink.task.core.model.TaskExecuteResult;
import ink.task.core.model.TaskNodeConfig;
import ink.task.core.util.JsonUtils;

import java.time.OffsetDateTime;
import java.util.Date;

/**
 * @Author: lisang
 * @DateTime: 2023-11-22 16:16:30
 * @Description:
 */
public class Main {
    public static void main(String[] args) throws Exception {
        TaskNodeConfig config = new TaskNodeConfig.Builder()
                // 服务端地址
                .address("localhost:5400")
                // 当前节点名称
                .nodeName("linux-test")
                // 上报信息间隔
                .intervals(8)
                .build();
        TaskNodeBootstrap bootstrap = new TaskNodeBootstrap();
        bootstrap.start(config);
    }
}
