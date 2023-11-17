package com.zeroxn.task.core.model;

import lombok.*;

import java.time.LocalDateTime;

/**
 * @Author: lisang
 * @DateTime: 2023-11-15 20:52:14
 * @Description:
 */

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
public class TaskInfo {
    /**
     * 任务ID
     */
    private Integer id;
    /**
     * 任务类型 0：单机执行 1：广播执行
     */
    private Integer taskType;
    /**
     * 处理器类型嗯 0：SpringBean 1：自定义注解 2：接口方法定义
     */
    private Integer handlerType;
    /**
     * 任务处理器名称
     */
    private String handlerName;
    /**
     * 任务的执行参数
     */
    private String params;
    /**
     * 任务分片参数
     */
    private Integer sharding;
    /**
     * 任务的创建时间
     */
    private LocalDateTime createTime;
}
